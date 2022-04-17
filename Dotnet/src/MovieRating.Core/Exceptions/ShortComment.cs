using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MovieRating.Core.Eccezzioni
{
    public class ShortComment : Exception
    {
        public ShortComment(int minLength, int commentId) : base(BuildErrorMessage(commentId, minLength)) { }

        private static string BuildErrorMessage(int commentId, int minLength)
        {
            string commentIdPlaceholder = commentId == 0 ? "" : $"'{commentId}' ";
            return $"Commento {commentIdPlaceholder}commento troppo breve. Deve avere almeno: {minLength} caratteri.";
        }
    }
}
