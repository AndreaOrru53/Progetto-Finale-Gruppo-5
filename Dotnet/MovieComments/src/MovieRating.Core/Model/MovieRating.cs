using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MovieRating.Core.Model
{
    public record Comment
    {
        public int id { get; set; }
        public int user_id { get; set; }
        public int movie_id { get; set; }
        public string comment { get; set; }
    }
}
