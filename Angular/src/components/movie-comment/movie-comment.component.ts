import { Component, OnInit } from '@angular/core';
import { MovieComment } from 'src/models/MovieComment';
import { BackendService } from 'src/service/backend.service';

@Component({
  selector: 'app-movie-comment',
  templateUrl: './movie-comment.component.html',
  styleUrls: ['./movie-comment.component.scss']
})
export class MovieCommentComponent implements OnInit {

  comments: MovieComment[] = [];

  id1: number = 1;

  constructor(
    private backendService:BackendService 
  ) { }

  ngOnInit(): void {
    this.backendService.getAllMovieComment().subscribe({
      next: (res) => this.comments = res,
      error: () => console.log('Error!'),
      complete: () => console.log('Complete')
    });
  }



}
