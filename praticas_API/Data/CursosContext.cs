using Microsoft.EntityFrameworkCore;
using praticas_API.Models;
using System.Diagnostics.CodeAnalysis;


namespace praticas_API.Data
{
    public class CursosContext : DbContext
    {
        protected readonly IConfiguration Configuration;
        public CursosContext(IConfiguration configuration)
        {   
            Configuration = configuration;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            // connect to sql server with connection string from app settings
            options.UseSqlServer(Configuration.GetConnectionString("StringConexaoSQLServer"));
        }

        public DbSet<Cursos>? Cursos {get;set;}
    }
}