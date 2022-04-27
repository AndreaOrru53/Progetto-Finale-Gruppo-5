import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AddMovieCommentComponent } from '../components/add-movie-comment/add-movie-comment.component';
import { AddUtentiComponent } from '../components/add-utenti/add-utenti.component';
import { FooterComponent } from '../components/footer/footer.component';
import { GameComponent } from '../components/game/game.component';
import { HomeComponent } from '../components/home/home.component';
import { ListFilmAndHistoryComponent } from '../components/list-film-and-history/list-film-and-history.component';
import { LoginComponent } from '../components/login/login.component';
import { LogoutComponent } from '../components/logout/logout.component';
import { MovieCommentDetailComponent } from '../components/movie-comment-detail/movie-comment-detail.component';
import { MovieCommentComponent } from '../components/movie-comment/movie-comment.component';
import { MovieRatingComponent } from '../components/movie-rating/movie-rating.component';
import { MoviesDetailComponent } from '../components/movies-detail/movies-detail.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { UtentiComponent } from '../components/utenti/utenti.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListFavouMovieComponent } from '../components/list-favou-movie/list-favou-movie.component';
import { AddRatingAndCommentComponent } from '../components/add-rating-and-comment/add-rating-and-comment.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    UtentiComponent,
    AddUtentiComponent,
    HomeComponent,
    MovieCommentComponent,
    MovieRatingComponent,
    MoviesDetailComponent,
    MovieCommentDetailComponent,
    AddMovieCommentComponent,
    NavbarComponent,
    GameComponent,
    FooterComponent,
    ListFilmAndHistoryComponent,
    ListFavouMovieComponent,
    AddRatingAndCommentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
