using Microsoft.EntityFrameworkCore;
using CaffeineCrafter.Api.Models;

namespace CaffeineCrafter.Api.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

    public DbSet<Product> Products { get; set; }
}
