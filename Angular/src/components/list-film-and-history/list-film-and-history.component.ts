import { query } from '@angular/animations';
import { Component, getNgModuleById, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { MovieFav } from 'src/models/MovieFavor';
import { MovieListTMDB } from 'src/models/MovieListTMDB';
import { AuthenticationService } from 'src/service/authentication.service';
import { BackendService } from 'src/service/backend.service';


@Component({
  selector: 'app-C',
  templateUrl: './list-film-and-history.component.html',
  styleUrls: ['./list-film-and-history.component.scss']
})
export class ListFilmAndHistoryComponent implements OnInit {

  movieFavourList: MovieFav[] | null = null;
  moviesTMDB: MovieListTMDB | null = null;
  data1: string | null =  null;
  data2: string | null = null;
 
  constructor(private backendService:BackendService, private route: ActivatedRoute, public loginService: AuthenticationService) { 

  }
  

  ngOnInit(): void {
    this.backendService.getListaPreferiti().subscribe(res => this.movieFavourList = res);
    this.route.params.subscribe((params) => this.data1 = params['date1']);
    this.route.params.subscribe((params) => this.data2 = params['date2']);
    this.backendService.getPopularFilm(this.data1, this.data2).subscribe({
      next: (res) => this.moviesTMDB = res,
      error: () => console.log('Error!'),
      complete: () => console.log(this.data1, this.data2)
    });

  }



  addMoviefavour(userId: number, movieId: number){
    let newMovie: MovieFav ={movie_Id: movieId, user_Id: userId};
    this.backendService.postFilmPreferito(newMovie).subscribe({
      next: (res) => newMovie = res,
      error: () => console.log('Error!'),
      complete: () => console.log(newMovie)
    });
    window.location.href=`http://localhost:4200/addRatingAndComment/${newMovie.movie_Id}`;
  }

}
