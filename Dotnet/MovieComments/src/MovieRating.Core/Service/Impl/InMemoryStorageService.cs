using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MovieRating.Core.Eccezzioni;
using MovieRating.Core.Model;


namespace MovieRating.Core.Service.Impl
{
    public class InMemoryStorageService : IStorageService
    {
        private List<Comment> _comments;

        public InMemoryStorageService()
        {
            _comments = new();
        }

        public Comment AddComment(Comment comment)
        {
            Comment commentToAdd = new()
            {
                id = GetNextCommentId(),
                comment = comment.comment,
                user_id = comment.user_id,
                movie_id = comment.movie_id
            };

            _comments.Add(commentToAdd);
            return commentToAdd;
        }

        public List<Comment> GetByUserId(int userId)
        {
            return _comments.Where(c => c.user_id == userId).ToList();
        }

        public void DeleteCommentById(int commentId)
        {
            Comment commentToDelete = FindCommentOrFail(commentId);
            _comments.Remove(commentToDelete);
        }

        public void DeleteCommentByUserIdMovieId(int userId, int movieId)
        {
            Comment commentToDelete = FindCommentOrFailUserIdMovieId(userId, userId);
            _comments.Remove(commentToDelete);
        }

        public List<Comment> GetAllComments()
        {
            return _comments;
        }

        public Comment GetCommentById(int commentId)
        {
            return FindCommentOrFail(commentId);
        }

        public Comment  GetByUserIdMovieId(int userId, int movieId)
        {
            return FindCommentOrFailUserIdMovieId(userId, movieId);
        }

       

        public Comment UpdateCommentById(int commentId, Comment updatedComment)
        {
            Comment commentToUpdate = FindCommentOrFail(commentId);
            commentToUpdate.comment = updatedComment.comment;
            commentToUpdate.user_id = updatedComment.user_id;
            commentToUpdate.movie_id = updatedComment.movie_id;

            return commentToUpdate;
        }

        public Comment UpdateCommentByUserIdAndMovieId(int userId, int movieId, Comment updatedComment)
        {
            Comment commentToUpdate = FindCommentOrFailUserIdMovieId(userId, movieId);
            commentToUpdate.comment = updatedComment.comment;
            commentToUpdate.user_id = updatedComment.user_id;
            commentToUpdate.movie_id = updatedComment.movie_id;

            return commentToUpdate;
        }

        private int GetNextCommentId() => _comments.Count == 0 ? 1 : _comments.Last().id + 1;

        private Comment FindCommentOrFail(int id)
        {
            Comment commentToSearch = _comments.FirstOrDefault(c => c.id == id);

            if (commentToSearch == null) throw new NotFoundComment(id);

            return commentToSearch;
        }

        private Comment FindCommentOrFailUserIdMovieId(int userId, int movieId)
        {
            Comment commentToSearch = _comments.FirstOrDefault(c => c.user_id == userId && c.movie_id== movieId);

            if (commentToSearch == null) throw new NotFoundCommentByUserIdAndMovieId(userId, movieId);

            return commentToSearch;
        }
    }
}

