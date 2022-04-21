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
            UserId = comment.user_id,
            MovieId = comment.movie_id,
            Body = comment.comment
        };


        public static Comment ToComment(MovieRatingEntity movieRatingEntity) => new()
        {
            id = movieRatingEntity.Id,
            user_id = movieRatingEntity.UserId,
            movie_id = movieRatingEntity.MovieId,
            comment = movieRatingEntity.Body
        };
    }
}
