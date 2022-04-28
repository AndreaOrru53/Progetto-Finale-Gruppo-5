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
  date1: string | null = null;
  date2: string | null = null;

  constructor(private backendService:BackendService, private route: ActivatedRoute, public loginService: AuthenticationService ) { }

  

  ngOnInit(): void {
    this.route.params.subscribe((params) => this.movieId = params['movieId']);
    this.backendService.getMovieById(this.movieId).subscribe({
      next: (res) => this.movieTMDB = res,
      error: () => console.log('Error!'),
      complete: () => console.log(this.movieTMDB)
    });
  }

  goBack(){
    this.route.params.subscribe((params) => this.date1 = params['date1']);
    this.route.params.subscribe((params) => this.date2 = params['date2']);
    console.log(this.date1, this.date2);
    window.location.href=`http://localhost:4200/listFilm-listHistory/${this.date1}/${this.date2}`;
  }

}
