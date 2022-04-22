import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Movies } from 'src/models/Movies';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies: Movies [] = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get<Movies[]>('https://api.themoviedb.org/3/movie/550?api_key=1162250cf687d00d2cf98ee2b58e5093').subscribe({
      next: (res) => this.movies = res
    })
  }

}
