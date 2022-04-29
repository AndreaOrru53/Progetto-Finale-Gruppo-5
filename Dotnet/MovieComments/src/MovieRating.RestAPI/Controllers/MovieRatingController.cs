using MovieRating.Core.Service;
using MovieRating.Core.Service.Impl;
using MovieRating.Core.Eccezzioni;
using MovieRating.Core.Model;
using MovieRating.RestAPI.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using MovieRating.DB.Service;

namespace MovieRating.RestAPI.Controllers
{

    
    [ApiController]
    [Route("comments")]
    public class MovieRatingController : ControllerBase
    {
        private MovieRatingService _movieRatingService;

        public MovieRatingController(MovieRatingService movieRatingService)
        {
            _movieRatingService = movieRatingService;
        }

        [HttpGet]
        public ActionResult<List<Comment>> GetAll()=> Ok(_movieRatingService.GetAllComments());
        

        [HttpGet]
        [Route("userId/{user-id}")]
        public ActionResult<List<Comment>> GetAllByuserId([FromRoute(Name = "user-id")] int userId) {
            try
            {
                return Ok(_movieRatingService.GetAllCommentsByUserId(userId));
            }
            catch (NotFoundUserId e)
            {
                return NotFound(BuildErrorResponse(e));
            }
        }

        [HttpGet]
        [Route("{comment-id}")]
        public ActionResult<Comment> GetById([FromRoute(Name = "comment-id")] int commentId)
        {
            try
            {
                return Ok(_movieRatingService.GetCommentById(commentId));
            }
            catch (NotFoundComment e)
            {
                return NotFound(BuildErrorResponse(e));
            }
        }

        [HttpGet]
        [Route("{user-id}/{movie-id}")]
        public ActionResult<Comment> GetByUserIdMovieId([FromRoute(Name = "user-id")] int userId, [FromRoute(Name = "movie-id")] int movieId )
        {
            try
            {
                return Ok(_movieRatingService.GetCommentByUserIdMovieId(userId, movieId));
            }
            catch (NotFoundCommentByUserIdAndMovieId e)
            {
                return NotFound(BuildErrorResponse(e));
            }
        }

        [HttpPost]
        public ActionResult<Comment> Add([FromBody] MovieRatingDTO comment)
        {
            try
            {
                return Ok(_movieRatingService.AddComment(new()
                {
                    comment = comment.comment,
                    user_id = comment.user_id,
                    movie_id = comment.movie_id
                }));

            }
            catch (ShortComment e)
            {
                return BadRequest(BuildErrorResponse(e));
            }
            catch (ErrorMovieIdComment e)
            {
                return BadRequest(BuildErrorResponse(e));
            }
            catch (ErrorUserIdComment e)
            {
                return BadRequest(BuildErrorResponse(e));
            }
        }

        [HttpPut]
        [Route("{comment-id}")]
        public ActionResult<Comment> Update([FromBody] MovieRatingDTO comment, [FromRoute(Name = "comment-id")] int commentId)
        {
            try
            {
                return Ok(_movieRatingService.UpdateCommentById(commentId, new()
                {
                    comment = comment.comment,
                    user_id = comment.user_id,
                    movie_id = comment.movie_id
                }));
            }
            catch (NotFoundComment e)
            {
                return NotFound(BuildErrorResponse(e));
            }
            catch (ShortComment e)
            {
                return BadRequest(BuildErrorResponse(e));
            }
            catch (ErrorMovieIdComment e)
            {
                return BadRequest(BuildErrorResponse(e));
            }
            catch (ErrorUserIdComment e)
            {
                return BadRequest(BuildErrorResponse(e));
            }
        }

        [HttpPut]
        [Route("{user-id}/{movie-id}")]
        public ActionResult<Comment> Update([FromBody] MovieRatingDTO comment, [FromRoute(Name = "user-id")] int userId, [FromRoute(Name = "movie-id")] int movieId)
        {
            try
            {
                return Ok(_movieRatingService.UpdateCommentByUserIdAndMovieId(userId, movieId, new()
                {
                    comment = comment.comment,
                    user_id = userId,
                    movie_id = movieId
                }));
            }
            catch (NotFoundCommentByUserIdAndMovieId e)
            {
                return NotFound(BuildErrorResponse(e));
            }
            catch (ShortComment e)
            {
                return BadRequest(BuildErrorResponse(e));
            }
        }

        [HttpDelete]
        [Route("{comment-id}")]
        public ActionResult Delete([FromRoute(Name = "comment-id")] int commentId)
        {
            try
            {
                _movieRatingService.DeleteCommentById(commentId);
                return NoContent();
            }
            catch (NotFoundComment e)
            {
                return NotFound(BuildErrorResponse(e));
            }
        }

        private static Error BuildErrorResponse(Exception e) => new()
        {
            Message = e.Message,
            TimeStamp = DateTime.Now
        };

    }
}

