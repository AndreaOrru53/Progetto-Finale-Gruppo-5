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

  movieCommentId: number | null = null;
  notFound: boolean = false;
  movieComment: MovieComment | null = null;

  constructor( 
    activatedRoute: ActivatedRoute,
    private router: Router,
    private backendAPIService:BackendService ) { 

      activatedRoute.params.subscribe(val => {
        this.movieCommentId = +val['movieCommentId'];
      });

    }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.backendAPIService.getMovieCommentById(this.movieCommentId).subscribe({
      next: (res) => this.movieComment = res,
      error: (err) => this.notFound = true
    });
  }

}
