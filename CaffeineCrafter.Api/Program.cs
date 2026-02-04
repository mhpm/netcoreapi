using Microsoft.EntityFrameworkCore;
using CaffeineCrafter.Api.Data;
using Scalar.AspNetCore;
using Npgsql;

var builder = WebApplication.CreateBuilder(args);

// Add CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyMethod()
              .AllowAnyHeader();
    });
});

// Add services to the container.
builder.Services.AddControllers();

// Database configuration
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
var databaseUrl = Environment.GetEnvironmentVariable("DATABASE_URL");

if (!string.IsNullOrEmpty(databaseUrl))
{
    var databaseUri = new Uri(databaseUrl);
    var userInfo = databaseUri.UserInfo.Split(':');
    var npgsqlBuilder = new NpgsqlConnectionStringBuilder
    {
        Host = databaseUri.Host,
        Port = databaseUri.Port,
        Username = userInfo[0],
        Password = userInfo[1],
        Database = databaseUri.LocalPath.TrimStart('/'),
        SslMode = SslMode.Require
    };
    connectionString = npgsqlBuilder.ToString();
}

if (string.IsNullOrEmpty(connectionString))
{
    throw new InvalidOperationException("Connection string is missing. Ensure 'DATABASE_URL' environment variable is set (Production) or User Secrets are initialized (Development).");
}

builder.Services.AddDbContext<AppDbContext>(opt => 
    opt.UseNpgsql(connectionString));

// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

var app = builder.Build();

// Seed data
using (var scope = app.Services.CreateScope())
{
    var context = scope.ServiceProvider.GetRequiredService<AppDbContext>();
    // Apply migrations
    context.Database.Migrate();
    
    if (!context.Products.Any())
    {
        context.Products.AddRange(
            new CaffeineCrafter.Api.Models.Product { Name = "Espresso Intenso", Price = 3.50m },
            new CaffeineCrafter.Api.Models.Product { Name = "Cappuccino Cremoso", Price = 4.20m },
            new CaffeineCrafter.Api.Models.Product { Name = "Latte Macchiato", Price = 4.50m },
            new CaffeineCrafter.Api.Models.Product { Name = "Café Americano", Price = 3.00m },
            new CaffeineCrafter.Api.Models.Product { Name = "Mocha Especial", Price = 4.80m }
        );
        context.SaveChanges();
    }
}

// Configure the HTTP request pipeline.
app.MapOpenApi();
app.MapScalarApiReference();

if (app.Environment.IsDevelopment())
{
    // You can add dev-only middleware here if needed
}

app.UseDefaultFiles(); // Serves index.html from wwwroot
app.UseStaticFiles();  // Serves build artifacts from wwwroot

app.UseCors("AllowAll");
app.UseAuthorization();

app.MapControllers();

// Fallback for SPA routing
app.MapFallbackToFile("index.html");

app.Run();
