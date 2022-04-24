import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BackendService } from 'src/service/backend.service';

@Component({
  selector: 'app-add-movie-comment',
  templateUrl: './add-movie-comment.component.html',
  styleUrls: ['./add-movie-comment.component.scss']
})
export class AddMovieCommentComponent implements OnInit {

  constructor(private backendService: BackendService) { }

  ngOnInit(): void {
  }

  AddMovieComment(movieCommentForm: NgForm) {
    this.backendService.addMovieComment(movieCommentForm).subscribe({
      next: () => window.location.href = 'http://localhost:4200/movie-comment',
      error: () => console.log('error')
    });
  
  
  }

}
