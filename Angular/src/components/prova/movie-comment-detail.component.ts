import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieComment } from 'src/models/MovieComment';
import { BackendService } from 'src/service/backend.service';

@Component({
  selector: 'app-movie-comment-detail',
  templateUrl: './movie-comment-detail.component.html',
  styleUrls: ['./movie-comment-detail.component.scss']
})
export class MovieCommentDetailComponent implements OnInit {

  movieComment: MovieComment | null = null;

  constructor( 
    private backendAPIService:BackendService ) { 

    }

  ngOnInit(): void {
    this.backendAPIService.deleteCommentByUserIdMovieId(1, 294793).subscribe({
      next: (val) => {
        this.movieComment = val,
        console.log("Dalated")
      },
      error: (val) => console.log("Not dalated", val)
    })
  }

  
  

}
