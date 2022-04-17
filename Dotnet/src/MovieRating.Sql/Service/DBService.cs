using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System;
using System.Collections.Generic;
using System.Linq;
using MovieRating.Core.Eccezzioni;
using MovieRating.DB.Model;

namespace MovieRating.DB.Service
{
    public class DBService
    {
        private DbContextManager _contextManager;

        public DBService(DbContextManager contextManager)
        {
            _contextManager = contextManager;
        }

        public List<MovieRatingEntity> All()
        {
            return _contextManager.Comments.ToList();
        }

        public MovieRatingEntity GetById(int id)
        {
            var comment = FindCommentOrFail(id);
            return comment;
        }

        public List<MovieRatingEntity> GetByUserId(int userId) => _contextManager
            .Comments
            .Where(c => c.UserId == userId)
            .ToList();

        public MovieRatingEntity Add(MovieRatingEntity comment)
        {
            _contextManager.Comments.Add(comment);
            _contextManager.SaveChanges();
            return comment;
        }

        public MovieRatingEntity DeleteById(int id)
        {
            var comment = FindCommentOrFail(id);
            _contextManager.Comments.Remove(comment);
            _contextManager.SaveChanges();
            return comment;
        }

        public MovieRatingEntity UpdateById(int id, MovieRatingEntity comment)
        {
            var previousComment = FindCommentOrFail(id);

            previousComment.MovieId = comment.MovieId;
            previousComment.UserId = comment.UserId;
            previousComment.Body = comment.Body;
            _contextManager.SaveChanges();

            return previousComment;
        }

        private MovieRatingEntity FindCommentOrFail(int id)
        {
            var comment = _contextManager.Comments.FirstOrDefault(x => x.Id == id);
            if (comment == null)
            {
                throw new NotFoundComment(id);
            }

            return comment;
        }

    }
}
