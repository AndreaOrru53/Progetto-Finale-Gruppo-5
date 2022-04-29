using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MovieRating.Core.Service;
using MovieRating.Core.Model;
using MovieRating.DB.Mapper;
using MovieRating.DB.Model;

namespace MovieRating.DB.Service
{
    public class DBStorageService : IStorageService
    {
       


            private DBService _dbService;
            private DbContextManager _contextManager;

            public DBStorageService()
            {
                _contextManager = new();
                _dbService = new(_contextManager);
            }

            public Comment AddComment(Comment comment)
            {
                MovieRatingEntity commentEntity = _dbService.Add(MovieRatingMapper.ToCommentEntity(comment));
                return MovieRatingMapper.ToComment(commentEntity);
            }


            public void DeleteCommentById(int commentId) => _dbService.DeleteById(commentId);


            public List<Comment> GetAllComments() => _dbService
                .All()
                .Select(entity => MovieRatingMapper.ToComment(entity))
                .ToList();


            public List<Comment> GetByUserId(int userId) => _dbService
                .GetByUserId(userId)
                .Select(entity => MovieRatingMapper.ToComment(entity))
                .ToList();


            public Comment GetCommentById(int commentId) =>
                MovieRatingMapper.ToComment(_dbService.GetById(commentId));

                public Comment GetByUserIdMovieId(int userId, int movieId) =>
                MovieRatingMapper.ToComment(_dbService.GetByUserIdMovieId(userId, movieId));


            public Comment UpdateCommentById(int commentId, Comment updatedComment)
            {
                MovieRatingEntity commentEntity = _dbService.UpdateById(commentId, MovieRatingMapper.ToCommentEntity(updatedComment));
                return MovieRatingMapper.ToComment(commentEntity);
            }

            public Comment UpdateCommentByUserIdAndMovieId(int userId, int movieId, Comment updatedComment)
            {
                MovieRatingEntity commentEntity = _dbService.UpdateByUserIdMovieId(userId, movieId, MovieRatingMapper.ToCommentEntity(updatedComment));
                return MovieRatingMapper.ToComment(commentEntity);
            }
        }
    }


