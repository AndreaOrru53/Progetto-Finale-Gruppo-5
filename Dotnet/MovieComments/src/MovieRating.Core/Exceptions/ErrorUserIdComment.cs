using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MovieRating.Core.Eccezzioni
{
    public class ErrorUserIdComment : Exception
    {
        public ErrorUserIdComment(int commentId) : base(BuildErrorMessage(commentId)) { }

        private static string BuildErrorMessage(int commentId)
        {
            string commentIdPlaceholder = commentId == 0 ? "" : $"{commentId} ";
            return $"Il commento {commentIdPlaceholder}deve riferirsi ad un utente.";
        }
    }
}
