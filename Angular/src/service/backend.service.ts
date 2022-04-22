import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/models/User';
import { MovieComment } from 'src/models/MovieComment';
import { MovieFav } from 'src/models/MovieFavor';
import { MovieRating } from 'src/models/MovieRating';

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
    return this.httpClient.post<MovieFav>(`http://localhost:5000/favouritemovie`, movieFav);
  }
  deleteFilmPreferito(movie_id: number | null){
    return this.httpClient.delete<MovieFav>(`http://localhost:5000/favouritemovie/${movie_id}`);
  }
}
