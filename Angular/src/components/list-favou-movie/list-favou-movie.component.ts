import { Component, OnInit } from '@angular/core';
import { MovieComment } from 'src/models/MovieComment';
import { MovieFav } from 'src/models/MovieFavor';
import { MovieRating } from 'src/models/MovieRating';
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
  moviesRating: MovieRating [] = [];
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

          this.backendService.getMovieRatingsByUserIdAndMovieId(1, id).subscribe({
            next: (val) => this.moviesRating[i] = val,
            error: (val) =>  this.moviesRating[i] = val
          })

          this.backendService.getMovieCommentByUserIdMovieId(1, id).subscribe({
            next: (val) => this.movieComments[i] = val,
            error: (val) => this.movieComments[i] = val
          })
        }
      }
          
    });
  }

  isListaVuota(){
    if(this.moviesFavou.length>0){
      return false;
    }else{
      return true;    
    }
  }


  deleteMoviefavour(userId: number, movieId: number){
    this.backendService.deleteFilmPreferitoByUserMovieId(userId, movieId).subscribe({
      next: () => console.log("Favourite Film Dalated"),
      error: (err) => console.log("Favourite Film Not Dalated", err)
    })
    this.backendService.deleteCommentByUserIdMovieId(userId, movieId).subscribe(
    {
      next: () => console.log("Comment Dalated"),
      error: (err) => console.log("Comment Not Dalated", err)
    })
    this.backendService.deleteMovieRatingByUserIdAndMovieId(userId, movieId).subscribe({
      next: () => console.log("Rating Dalated"),
      error: (err) => console.log("Rating Not Dalated", err)
    })
   
  }

  refreshpage(){

  }

 

  


}
