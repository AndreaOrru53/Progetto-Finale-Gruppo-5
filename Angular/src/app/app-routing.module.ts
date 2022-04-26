import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMovieCommentComponent } from 'src/components/add-movie-comment/add-movie-comment.component';
import { GameComponent } from 'src/components/game/game.component';
import { MovieCommentDetailComponent } from 'src/components/movie-comment-detail/movie-comment-detail.component';
import { MovieCommentComponent } from 'src/components/movie-comment/movie-comment.component';
import { MovieRatingComponent } from 'src/components/movie-rating/movie-rating.component';
import { MoviesDetailComponent } from 'src/components/movies-detail/movies-detail.component';
import { MoviesComponent } from 'src/components/movies/movies.component';
import { HomeComponent } from '../components/home/home.component';
import { LoginComponent } from '../components/login/login.component';

const routes: Routes = [
  { path: 'login', component : LoginComponent },
  { path: 'home', component : HomeComponent},
  { path: 'movie-comment', component : MovieCommentComponent},
  { path: 'movie-comment/:movieCommentId', component : MovieCommentDetailComponent},
  { path: 'add-movie-comment', component : AddMovieCommentComponent},
  { path: 'movie-rating', component : MovieRatingComponent},
  { path: 'movies', component : MoviesComponent},
  { path: 'movies/:movieId', component : MoviesDetailComponent},
  { path: 'movie-game', component : GameComponent},

  { path : '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
