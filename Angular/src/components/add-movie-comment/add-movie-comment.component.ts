import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MovieComment } from 'src/models/MovieComment';
import { BackendService } from 'src/service/backend.service';

@Component({
  selector: 'app-add-movie-comment',
  templateUrl: './add-movie-comment.component.html',
  styleUrls: ['./add-movie-comment.component.scss']
})
export class AddMovieCommentComponent implements OnInit {

  @Input() movieId!: number;
  @Input() userId!: number;
  
  constructor(private backendService: BackendService) { }

  ngOnInit(): void {
  }

  AddMovieComment(movieCommentForm: NgForm) {
    let movieComment: MovieComment ={movie_id: this.movieId, user_id: this.userId, comment: movieCommentForm.controls['comment'].value};
    this.backendService.addMovieComment(movieComment).subscribe({
      next: () => console.log(movieComment),
      error: () => console.log('error')
    });
  
  
  }

}
