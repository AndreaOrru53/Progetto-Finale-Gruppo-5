import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieComment } from 'src/models/MovieComment';
import { MovieListTMDB } from 'src/models/MovieListTMDB';


@Injectable({
  providedIn: 'root'
})
export class MovieApiService {

  apiKey: string = '1162250cf687d00d2cf98ee2b58e5093';
  apiUrl: string = 'https://api.themoviedb.org/3/movie/popular?api_key='

  constructor(private httpClient: HttpClient) { }

  getMovie(){
    return this.httpClient.get<MovieListTMDB>(`${this.apiUrl}${this.apiKey}`);
  }

}
