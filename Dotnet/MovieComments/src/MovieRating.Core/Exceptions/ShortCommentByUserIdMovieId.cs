using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MovieRating.Core.Eccezzioni
{
    public class ShortCommentByUserIdMovieId : Exception
    {
        public ShortCommentByUserIdMovieId(int minLength, int userId, int movieId) : base(BuildErrorMessage(userId, movieId,  minLength)) { }

        private static string BuildErrorMessage(int userId, int movieId, int minLength)
        {
            string userIdPlaceholder = userId == 0 ? "" : $"'{userId}' ";
            string movieIdPlaceholder = movieId == 0 ? "" : $"'{movieId}' ";
            return $"Commento userID:{userIdPlaceholder} movieID: {movieIdPlaceholder} commento troppo breve. Deve avere almeno: {minLength} caratteri.";
        }
    }
}
