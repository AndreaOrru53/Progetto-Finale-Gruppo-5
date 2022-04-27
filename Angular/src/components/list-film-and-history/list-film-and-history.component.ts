import { query } from '@angular/animations';
import { Component, getNgModuleById, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { MovieFav } from 'src/models/MovieFavor';
import { MovieTMDB } from 'src/models/MovieTMDB';
import { AuthenticationService } from 'src/service/authentication.service';
import { BackendService } from 'src/service/backend.service';


@Component({
  selector: 'app-C',
  templateUrl: './list-film-and-history.component.html',
  styleUrls: ['./list-film-and-history.component.scss']
})
export class ListFilmAndHistoryComponent implements OnInit {

  

  moviesTMDB: MovieTMDB | null = null;
  movieFavou: MovieFav | null = null;
  data1: string | null =  null;
  data2: string | null = null;
 
  constructor(private backendService:BackendService, private route: ActivatedRoute, public loginService: AuthenticationService) { 

  }
  

  ngOnInit(): void {
    this.route.params.subscribe((params) => this.data1 = params['date1']);
    this.route.params.subscribe((params) => this.data2 = params['date2']);
    this.backendService.getPopularFilm(this.data1, this.data2).subscribe({
      next: (res) => this.moviesTMDB = res,
      error: () => console.log('Error!'),
      complete: () => console.log(this.data1, this.data2)
    });

  }

  getMovieFavou(){
    return this.movieFavou;
  }



  addMoviefavour(userId: number | null, movieId: number | null){
    console.log(movieId, userId);
  }

  

}
