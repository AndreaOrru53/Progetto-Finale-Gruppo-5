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
  allMovieComments: MovieComment [] | null = [];
  comment: MovieComment | undefined = undefined;

  x: number = 0;

  constructor(private backendService:BackendService,  public loginService: AuthenticationService) { 

  }

  ngOnInit(): void {

    this.backendService.getAllMovieComment().subscribe(
      {
        next: (val) => {
          this.allMovieComments= val,
          console.log(this.allMovieComments)
        }, 
        error: () => console.log("error", this.allMovieComments)
      })   

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

    setTimeout(
      function(){ 
      location.reload(); 
      }, 1000);
   
  }

  findComment(movieId: number){

    this.comment  = this.allMovieComments?.find(x => x.user_id == 1 &&  x.movie_id == movieId);

    if(this.comment != undefined){
      return true;
    }else{
      console.log("commento non torvato")
      return false;
    }
  }



  increment(){
    if(this.x < this.moviesTMDB.length-1 && this.x >= 0){
      this.x++;
    }
    else{
      this.x = 0;
    }
  }

  decrement(){
    if(this.x > 0){
      this.x--;
    }
    else{
      this.x = this.moviesTMDB.length-1;
    }

  }

  makeStarArray(starNumber: number){
    return Array<number>(starNumber+1)
  }

}
