import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MovieRating } from 'src/models/MovieRating';
import { Movies } from 'src/models/Movies';
import { MovieApiService } from 'src/service/movie-api.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies: Movies | null = null;

  constructor(private movieApiService: MovieApiService) { }

  ngOnInit(): void {
    this.movieApiService.getMovie().subscribe({
      next: (res) => this.movies = res,
      error: () => console.log('Error!'),
      complete: () => console.log('Complete')
    });
  }

}
