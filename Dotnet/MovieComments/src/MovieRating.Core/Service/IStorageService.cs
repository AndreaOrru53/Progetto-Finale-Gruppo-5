using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MovieRating.Core.Model
{
    public interface IStorageService
    {
        public List<Comment> GetAllComments();

        public Comment GetCommentById(int commentId);

        public List<Comment> GetByUserId(int userId);

        public Comment GetByUserIdMovieId(int userId, int movieId);

        public Comment AddComment(Comment comment);

        public Comment UpdateCommentById(int commentId, Comment updatedComment);

        public Comment UpdateCommentByUserIdAndMovieId(int userId, int movieId, Comment updatedComment);

        public void DeleteCommentById(int commentId);
    }
}

