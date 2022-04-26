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

import { AddCustomerComponent } from './add-customer/add-customer.component';
import { CustomersComponent } from './customers/customers.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuardService } from './service/auth-guard.service';

const routes: Routes = [
  { path: 'login', component : LoginComponent },
  { path:'', component: CustomersComponent, canActivate:[AuthGuardService]},
  { path:'addCustomers', component: AddCustomerComponent, canActivate:[AuthGuardService]},
  { path: 'logout', component: LogoutComponent, canActivate:[AuthGuardService] },
  { path: 'home', component : HomeComponent},
  { path: 'movie-comment', component : MovieCommentComponent},
  { path: 'movie-comment/:movieCommentId', component : MovieCommentDetailComponent},
  { path: 'add-movie-comment', component : AddMovieCommentComponent},
  { path: 'movie-rating', component : MovieRatingComponent},
  { path: 'movies/:movieId', component : MoviesDetailComponent},
  { path: 'movie-game', component : GameComponent},
  { path: 'listFilm-listHistory/:date1/:date2', component : ListFilmAndHistoryComponent},

  { path : '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
