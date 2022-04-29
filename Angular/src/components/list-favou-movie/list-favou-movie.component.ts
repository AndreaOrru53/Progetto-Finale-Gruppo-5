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
  moviesTMDB: MovieTMDB []= [];
  movieComments: MovieComment [] = [];
  
  constructor(private backendService:BackendService,  public loginService: AuthenticationService) { }

  ngOnInit(): void {
    this.backendService.getFilmPreferitiByUserId(1).subscribe({
      next: (res) => {
        this.moviesFavou = res;
        for (let i = 0; i < this.moviesFavou.length; i++) {
          let id = this.moviesFavou[i].movie_Id;
          this.backendService.getMovieById(id).subscribe({
            next: (val) => this.moviesTMDB[i] = val
          })
        }
      }
      
    });
  }

  


}
