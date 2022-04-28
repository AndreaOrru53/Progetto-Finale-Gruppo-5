using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MovieRating.Core.Eccezzioni
{
   
        public class NotFoundCommentByUserIdAndMovieId : Exception
        {
            public NotFoundCommentByUserIdAndMovieId(int userId, int movieId) : base($"Nessun commento trovato.") { }
        }
    }

