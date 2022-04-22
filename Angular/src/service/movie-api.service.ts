import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movies } from 'src/models/Movies';


@Injectable({
  providedIn: 'root'
})
export class MovieApiService {

  apiKey: String = '1162250cf687d00d2cf98ee2b58e5093';

  constructor(private httpClient: HttpClient) { }

  getMovie(){
    return this.httpClient.get<Movies>(`https://api.themoviedb.org/3/movie/550?api_key=${this.apiKey}`);
  }
}
