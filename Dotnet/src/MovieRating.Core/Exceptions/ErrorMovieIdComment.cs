using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MovieRating.Core.Eccezzioni
{
    public class ErrorMovieIdComment : Exception
    {
        public ErrorMovieIdComment(int commentId) : base(BuildErrorMessage(commentId)) { }

        private static string BuildErrorMessage(int commentId)
        {
            string commentIdPlaceholder = commentId == 0 ? "" : $"{commentId} ";
            return $"Il commento {commentIdPlaceholder}deve fare riferimento ad un film.";
        }
    }
}
