import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MovieComment } from 'src/models/MovieComment';
import { MovieFav } from 'src/models/MovieFavor';
import { MovieRating } from 'src/models/MovieRating';
import {MovieTMDB} from 'src/models/MovieTMDB'

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private httpClient: HttpClient) { }

  //NODE
  getFilmPreferito(movie_id: number | null){
    return this.httpClient.get<MovieFav>(`http://localhost:5000/favouritemovie/${movie_id}`);
  }
  getListaPreferiti(){
    return this.httpClient.get<MovieFav[]>(`http://localhost:5000/favouritemovie`);
  }
  postFilmPreferito(movieFav: MovieFav){
    return this.httpClient.post<MovieFav>(`http://localhost:5000/favouritemovie/`, movieFav);
  }
  deleteFilmPreferito(movie_id: number | null){
    return this.httpClient.delete<MovieFav>(`http://localhost:5000/favouritemovie/${movie_id}`);
  }

  //DOTNET
  getAllMovieComment(){
    return this.httpClient.get<MovieComment[]>(`http://localhost:5299/comments`);
  }

  getMovieCommentById(id: number | null){
    return this.httpClient.get<MovieComment>(`http://localhost:5299/comments/${id}`);
  }

  addMovieComment(movieCommentForm: NgForm){
    return this.httpClient.post(`http://localhost:5299/comments/`, movieCommentForm.value);
  }

  //LARAVEL

  getAllMovieRating() {
    return this.httpClient.get<MovieRating[]>(`http://localhost:8000/api/ratings`);
  }

  getMovieRatingById(id: number | null) {
    return this.httpClient.get<MovieRating>(`http://localhost:8000/api/ratings/${id}`)
  }

  getMovieRatingsByUserId(user_id: number) {
    return this.httpClient.get<MovieRating>(`http://localhost:8000/api/ratings/user/id/${user_id}`)
  }

  getMovieRatingsByUserIdAndMovieId(user_id: number, movie_id: number) {
    return this.httpClient.get<MovieRating>(`http://localhost:8000/api/ratings/user/and/movie/id/${user_id}/${movie_id}`)
  }

  createMovieRating(movie_rating: number, movie_id:number, user_id: number) {
    const url = `http://localhost:8000/api/ratings`;
    const body = {
        movie_rating, movie_id, user_id
    }
    return this.httpClient.post(url, body)
  }

  updateMovieRating(movie_rating: number, movie_id:number, user_id: number) {
    const url = `http://localhost:8000/api/ratings`;
    const body = {
        movie_rating, movie_id, user_id
    }
    return this.httpClient.put(url, body)
  }

  deleteMovieRatingById(id: number | null) {
    return this.httpClient.delete(`http://localhost:8000/api/ratings/${id}`)
  }


  //TMDB
  getPopularFilm(date1: string | null, date2: string | null,){
    return this.httpClient.get<MovieTMDB>(`https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${date1}&primary_release_date.lte=${date2}&sort_by=popularity.desc&api_key=317291492b88ae1febc86ead73dbe43b`);
  }
}
