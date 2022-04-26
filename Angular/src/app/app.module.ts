import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AddMovieCommentComponent } from '../components/add-movie-comment/add-movie-comment.component';
import { HomeComponent } from '../components/home/home.component';
import { LoginComponent } from '../components/login/login.component';
import { MovieCommentDetailComponent } from '../components/movie-comment-detail/movie-comment-detail.component';
import { MovieCommentComponent } from '../components/movie-comment/movie-comment.component';
import { MovieRatingComponent } from '../components/movie-rating/movie-rating.component';
import { MoviesDetailComponent } from '../components/movies-detail/movies-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { GameComponent } from '../components/game/game.component';
import { FooterComponent } from '../components/footer/footer.component';
import { ListFilmAndHistoryComponent } from '../components/list-film-and-history/list-film-and-history.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
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
