import { Component, OnInit } from '@angular/core';
import { MovieComment } from 'src/models/MovieComment';
import { MovieFav } from 'src/models/MovieFavor';
import { MovieListTMDB } from 'src/models/MovieListTMDB';
import { MovieTMDB } from 'src/models/MovieTMDB';
import { AuthenticationService } from 'src/service/authentication.service';
import { BackendService } from 'src/service/backend.service';

@Component({
  selector: 'app-list-favou-movie',
  templateUrl: './list-favou-movie.component.html',
  styleUrls: ['./list-favou-movie.component.scss']
})
export class ListFavouMovieComponent implements OnInit {

  moviesFavou: MovieFav [] = [];
  movieTMDB: MovieTMDB | null = null;
  movieComments: MovieComment [] = [];
  
  constructor(private backendService:BackendService,  public loginService: AuthenticationService) { }

  ngOnInit(): void {
    this.backendService.getFilmPreferitoByUserId(1).subscribe({
      next: (res) => this.moviesFavou = res,
      error: () => console.log('Error!'),
      complete: () => console.log("Lista Presa")
    });
  }

  getMovieTMDBById(movieId: number){
    this.backendService.getMovieById(movieId).subscribe({
      next: (res) => this.movieTMDB = res,
      error: () => console.log('Error!'),
      complete: () => console.log(this.movieTMDB)
    });
  }


}
