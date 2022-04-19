using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MovieRating.Core.Model;
using MovieRating.DB.Model;

namespace MovieRating.DB.Mapper
{
    public class MovieRatingMapper
    {
        public static MovieRatingEntity ToCommentEntity(Comment comment) => new()
        {
            Id = comment.id,
            Body = comment.comment,
            UserId = comment.user_id,
            MovieId = comment.movie_id
        };


        public static Comment ToComment(MovieRatingEntity movieRatingEntity) => new()
        {
            id = movieRatingEntity.Id,
            comment = movieRatingEntity.Body,
            user_id = movieRatingEntity.UserId,
            movie_id = movieRatingEntity.MovieId
        };
    }
}
