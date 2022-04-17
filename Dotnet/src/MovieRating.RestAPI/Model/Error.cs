using System;
using System.Text.Json.Serialization;

namespace MovieRating.RestAPI.Model
{
    public record Error
    {
        [JsonPropertyName(name: "message")]
        public string Message { get; set; }

        [JsonPropertyName(name: "timestamp")]
        public DateTime TimeStamp { get; set; }
    }
}

