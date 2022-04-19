namespace MovieRating.RestAPI.Model
{
    public record MovieRatingDTO
    {
        public int id { get; set; }
        public int user_id { get; set; }
        public int movie_id { get; set; }
        public string comment { get; set; }

    }
}
