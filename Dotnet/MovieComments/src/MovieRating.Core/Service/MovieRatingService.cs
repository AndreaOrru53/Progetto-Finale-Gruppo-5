using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MovieRating.Core.Eccezzioni;
using MovieRating.Core.Model;

namespace MovieRating.Core.Service
{
    public class MovieRatingService
    {
        private const int MIN_COMMENT_LENGTH = 10;
        private IStorageService _storageService;

        public MovieRatingService(IStorageService storageService)
        {
            _storageService = storageService;
        }

        public Comment AddComment(Comment comment)
        {
            ValidateCommentOrFail(comment);
            return _storageService.AddComment(comment);
        }

        public List<Comment> GetAllComments() => _storageService.GetAllComments();

        public List<Comment> GetAllCommentsByUserId(int user_id) => _storageService.GetByUserId(user_id);

        public Comment GetCommentById(int id) => _storageService.GetCommentById(id);

        public Comment UpdateCommentById(int id, Comment updatedComment)
        {
            ValidateCommentOrFail(updatedComment, id);

            return _storageService.UpdateCommentById(id, updatedComment);
        }

        public void DeleteCommentById(int id) => _storageService.DeleteCommentById(id);


        private static void ValidateCommentOrFail(Comment comment) => RunCommentValidationsOrFail(comment);

        private static void ValidateCommentOrFail(Comment comment, int id) => RunCommentValidationsOrFail(comment, id);

        private static void RunCommentValidationsOrFail(Comment comment, int id = 0)
        {
            if (comment.comment.Length < MIN_COMMENT_LENGTH)
            {
                throw new ShortComment(minLength: MIN_COMMENT_LENGTH, commentId: id);
            }

            if (!ValidateCommentUserId(comment.user_id))
            {
                throw new ErrorUserIdComment(id);
            }

            if (!ValidateCommentMovieId(comment.movie_id))
            {
                throw new ErrorMovieIdComment(id);
            }
        }

        private static bool ValidateCommentUserId(int userId) => userId > 0;

        private static bool ValidateCommentMovieId(int movieId) => movieId > 0;

    }
}

