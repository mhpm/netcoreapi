using Microsoft.EntityFrameworkCore;
using ShotCrude.Api.Data;
using Scalar.AspNetCore;

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
builder.Services.AddDbContext<AppDbContext>(opt => opt.UseInMemoryDatabase("ProductsDb"));

// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

var app = builder.Build();

// Seed data
using (var scope = app.Services.CreateScope())
{
    var context = scope.ServiceProvider.GetRequiredService<AppDbContext>();
    if (!context.Products.Any())
    {
        context.Products.AddRange(
            new ShotCrude.Api.Models.Product { Name = "Espresso Intenso", Price = 3.50m },
            new ShotCrude.Api.Models.Product { Name = "Cappuccino Cremoso", Price = 4.20m },
            new ShotCrude.Api.Models.Product { Name = "Latte Macchiato", Price = 4.50m },
            new ShotCrude.Api.Models.Product { Name = "Café Americano", Price = 3.00m },
            new ShotCrude.Api.Models.Product { Name = "Mocha Especial", Price = 4.80m }
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
