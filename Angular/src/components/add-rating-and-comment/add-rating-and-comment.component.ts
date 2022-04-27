import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieTMDB } from 'src/models/MovieTMDB';
import { AuthenticationService } from 'src/service/authentication.service';
import { BackendService } from 'src/service/backend.service';

@Component({
  selector: 'app-add-rating-and-comment',
  templateUrl: './add-rating-and-comment.component.html',
  styleUrls: ['./add-rating-and-comment.component.scss']
})
export class AddRatingAndCommentComponent implements OnInit {

  movieId!: number;
  movieTMDB: MovieTMDB | null = null;

  constructor(private backendService:BackendService, private route: ActivatedRoute, public loginService: AuthenticationService ) { }



  ngOnInit(): void {
    this.route.params.subscribe((params) => this.movieId = params['movieId']);
    this.backendService.getMovieById(this.movieId).subscribe({
      next: (res) => this.movieTMDB = res,
      error: () => console.log('Error!'),
      complete: () => console.log(this.movieTMDB)
    });
  }

}
