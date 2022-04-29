import { Component, OnInit } from '@angular/core';
import { MovieComment } from 'src/models/MovieComment';
import { BackendService } from 'src/service/backend.service';

@Component({
  selector: 'app-movie-comment',
  templateUrl: './movie-comment.component.html',
  styleUrls: ['./movie-comment.component.scss']
})
export class MovieCommentComponent implements OnInit {

  comment: MovieComment | null = null;

  id1: number = 1;

  constructor(
    private backendService:BackendService 
  ) { }

  ngOnInit(): void {
    
    this.backendService.getMovieCommentByUserIdMovieId(1, 338953).subscribe({
      next: (res) => this.comment = res,
      error: () => console.log('Error!'),
      complete: () => console.log(this.comment)
  });
}

  }




