import { HttpClient } from '@angular/common/http';
import { NonNullAssert } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MovieComment } from 'src/models/MovieComment';
import { MovieFav } from 'src/models/MovieFavor';
import { MovieListTMDB } from 'src/models/MovieListTMDB';
import { MovieRating } from 'src/models/MovieRating';
import { MovieTMDB } from '../models/MovieTMDB';


@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private httpClient: HttpClient) { }

  apiKey: string = '317291492b88ae1febc86ead73dbe43b';

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
  getFilmPreferitoByUserId(user_id: number | null){
    return this.httpClient.get<MovieFav[]>(`http://localhost:5000/favouritemoviebu/${user_id}`)
  }
  getFilmPreferitoByMovieId(movie_id: number | null){
    return this.httpClient.get<MovieFav>(`http://localhost:5000/favouritemoviebm/${movie_id}`)
  }
  getFilmPreferitoByUserIdMovieId(user_id: number | null , movie_id: number | null){
    return this.httpClient.get<MovieFav>(`http://localhost:5000/favouritemoviebmu/${user_id}/${movie_id}`)
  }

  //DOTNET
  getAllMovieComment(){
    return this.httpClient.get<MovieComment[]>(`http://localhost:5299/comments`);
  }

  getMovieCommentById(id: number | null){
    return this.httpClient.get<MovieComment>(`http://localhost:5299/comments/${id}`);
  }

  getAllMovieCommentsByUserId(userId: number | null){
    return this.httpClient.get<MovieComment[]>(`http://localhost:5299/comments/userId/${userId}`);
  }

  addMovieComment(movieComment: MovieComment){
    return this.httpClient.post(`http://localhost:5299/comments/`, movieComment);
  }

  UpdateCommentByUserIdMovieId(userId: number, movieId: number, comment: string){
  const url = `http://localhost:5299/comments/${userId}/${movieId}`;
    const body = {
       comment
    }
    return this.httpClient.put<MovieComment>(url, body);
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

  createMovieRating(movie_rating: MovieRating) {
    const url = `http://localhost:8000/api/ratings/`;
    return this.httpClient.post(url, movie_rating)
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
    return this.httpClient.get<MovieListTMDB>(`https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${date1}&primary_release_date.lte=${date2}&sort_by=popularity.desc&api_key=${this.apiKey}`);
  }

  getMovieById(movieId: number | null){
    return this.httpClient.get<MovieTMDB>(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${this.apiKey}&language=it-it`);
  }
}
