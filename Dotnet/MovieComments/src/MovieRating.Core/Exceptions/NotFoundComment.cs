using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MovieRating.Core.Eccezzioni
{
   
        public class NotFoundComment : Exception
        {
            public NotFoundComment(int commentId) : base($"Il Commento '{commentId}' non è stato trovato.") { }
        }
    }

