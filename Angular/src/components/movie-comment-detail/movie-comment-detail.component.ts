import { Component, OnInit } from '@angular/core';
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
    
  }

  updated(){
    this.backendAPIService.UpdateCommentByUserIdMovieId(1, 20982, "okay okay okay").subscribe({
      next: (res) => this.movieComment = res,
      error: (res) => console.log("not updated"),
      complete:() => console.log(this.movieComment)
    });
  }

}
