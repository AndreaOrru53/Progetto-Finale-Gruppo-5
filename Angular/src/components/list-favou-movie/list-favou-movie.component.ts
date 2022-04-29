import { Component, OnInit } from '@angular/core';
import { MovieComment } from 'src/models/MovieComment';
import { MovieFav } from 'src/models/MovieFavor';
import { MovieListTMDB } from 'src/models/MovieListTMDB';
import { AuthenticationService } from 'src/service/authentication.service';
import { BackendService } from 'src/service/backend.service';

@Component({
  selector: 'app-list-favou-movie',
  templateUrl: './list-favou-movie.component.html',
  styleUrls: ['./list-favou-movie.component.scss']
})
export class ListFavouMovieComponent implements OnInit {

  moviesFavou: MovieFav [] = [];
  moviesTMDB: MovieListTMDB | null = null;
  movieComments: MovieComment [] = [];
  
  constructor(private backendService:BackendService,  public loginService: AuthenticationService) { }

  ngOnInit(): void {
    this.backendService.getListaPreferiti().subscribe({
      next: (res) => this.moviesFavou = res,
      error: () => console.log('Error!'),
      complete: () => console.log("Lista Presa")
    });


    this.backendService.getAllMovieCommentsByUserId(1).subscribe({
      next: (res) => this.movieComments = res,
      error: () => console.log('Error!'),
      complete: () => console.log(this.movieComments)
    });
  }

}
