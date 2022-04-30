import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MovieRating } from 'src/models/MovieRating';
import { BackendService } from 'src/service/backend.service';

@Component({
  selector: 'app-movie-rating',
  templateUrl: './movie-rating.component.html',
  styleUrls: ['./movie-rating.component.scss']
})
export class MovieRatingComponent implements OnInit {

  @Input() movieId!: number;
  @Input() userId!: number;
  
  movieRating: MovieRating | null = null;

  constructor(private backendService:BackendService) { }

  ngOnInit(): void {
  
  }

  invio(ratingform: NgForm){
    let movieRating: MovieRating ={movie_id: this.movieId, user_id: this.userId, movie_rating: ratingform.controls['rate'].value};
    this.backendService.createMovieRating(movieRating).subscribe({
      error: () => console.log(ratingform.controls['rate'].value, this.movieId, this.userId),
      complete: () => console.log('funziona')
    });
  }


  



}
