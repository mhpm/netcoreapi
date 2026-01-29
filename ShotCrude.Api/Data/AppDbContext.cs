using Microsoft.EntityFrameworkCore;
using ShotCrude.Api.Models;

namespace ShotCrude.Api.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

    public DbSet<Product> Products { get; set; }
}
