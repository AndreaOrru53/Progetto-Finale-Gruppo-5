using System;
using MovieRating.DB.Model;
using Microsoft.EntityFrameworkCore;

namespace MovieRating.DB
{
    public class DbContextManager : DbContext
    {
        public DbSet<MovieRatingEntity> Comments { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var connectionString = "Server=localhost;Port=3306;Database=moviedb;Uid=root;";
            var version = new MySqlServerVersion(new Version(10, 4, 22));

            optionsBuilder.UseMySql(connectionString, version);

            base.OnConfiguring(optionsBuilder);
        }
    }
}



