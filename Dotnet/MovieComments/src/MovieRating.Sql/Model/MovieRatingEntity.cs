using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MovieRating.DB.Model
{
    [Table("comments")]

    public class MovieRatingEntity
    {
        [Column("id"), Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [Column("user_id"), Required]
        public int UserId { get; set; }

        [Column("movie_id"), Required]
        public int MovieId { get; set; }

        [Column("comment"), Required, DataType(DataType.Text)]
        public string Body { get; set; }
    }
}
