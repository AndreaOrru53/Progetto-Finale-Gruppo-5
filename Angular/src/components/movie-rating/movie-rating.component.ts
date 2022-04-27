import { Component, OnInit } from '@angular/core';
import { MovieRating } from 'src/models/MovieRating';
import { BackendService } from 'src/service/backend.service';

@Component({
  selector: 'app-movie-rating',
  templateUrl: './movie-rating.component.html',
  styleUrls: ['./movie-rating.component.scss']
})
export class MovieRatingComponent implements OnInit {

  ratings: MovieRating[] = [];

  constructor(private backendService:BackendService) { }

  ngOnInit(): void {
    this.backendService.getAllMovieRating().subscribe({
      next: (res) => this.ratings = res,
      error: () => console.log('Error!'),
      complete: () => console.log('Complete')
    });
  }



}
