import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMovieCommentComponent } from 'src/components/add-movie-comment/add-movie-comment.component';
import { GameComponent } from 'src/components/game/game.component';
import { ListFilmAndHistoryComponent } from 'src/components/list-film-and-history/list-film-and-history.component';
import { MovieCommentDetailComponent } from 'src/components/movie-comment-detail/movie-comment-detail.component';
import { MovieCommentComponent } from 'src/components/movie-comment/movie-comment.component';
import { MovieRatingComponent } from 'src/components/movie-rating/movie-rating.component';
import { MoviesDetailComponent } from 'src/components/movies-detail/movies-detail.component';
import { HomeComponent } from '../components/home/home.component';

import { AddUtentiComponent } from 'src/components/add-utenti/add-utenti.component';
import { UtentiComponent } from 'src/components/utenti/utenti.component';
import { LoginComponent } from 'src/components/login/login.component';
import { LogoutComponent } from 'src/components/logout/logout.component';
import { AuthGuardService } from 'src/service/auth-guard.service';
import { ListFavouMovieComponent } from 'src/components/list-favou-movie/list-favou-movie.component';
import { AddRatingAndCommentComponent } from 'src/components/add-rating-and-comment/add-rating-and-comment.component';


const routes: Routes = [
  { path: 'login', component : LoginComponent },
  { path:'', component: UtentiComponent, canActivate:[AuthGuardService]},
  { path:'addUtenti', component: AddUtentiComponent, canActivate:[AuthGuardService]},
  { path: 'logout', component: LogoutComponent, canActivate:[AuthGuardService] },  
  { path: 'home', component : HomeComponent},
  { path: 'movie-comment', component : MovieCommentComponent},
  { path: 'movie-comment/:movieCommentId', component : MovieCommentDetailComponent},
  { path: 'add-movie-comment', component : AddMovieCommentComponent},
  { path: 'movie-rating', component : MovieRatingComponent},
  { path: 'movies/:movieId', component : MoviesDetailComponent},
  { path: 'movie-game', component : GameComponent},
  { path: 'listFilm-listHistory/:date1/:date2', component : ListFilmAndHistoryComponent},
  { path: 'listFavouMovie', component : ListFavouMovieComponent},
  {path: 'addRatingAndComment/:movieId/:date1/:date2', component : AddRatingAndCommentComponent},

  { path : '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
