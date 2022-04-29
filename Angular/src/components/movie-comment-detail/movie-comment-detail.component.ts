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

  moviesComment: MovieComment |null = null;
  comment: string | null = null;

  @Input() movieId!: number;

  constructor( 
    private backendAPIService:BackendService ) { 

    }

  ngOnInit(): void {
    
  }

  updated(){
    this.backendAPIService.getMovieCommentByUserIdMovieId(1, this.movieId).subscribe({
    next: (res) => this.comment=res.comment
    
    }) 
  }
  

}
