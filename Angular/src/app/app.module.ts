import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from '../components/login/login.component';
import { HomeComponent } from '../components/home/home.component';
import { MovieCommentComponent } from '../components/movie-comment/movie-comment.component';
import { MovieRatingComponent } from '../components/movie-rating/movie-rating.component';
import { MoviesComponent } from '../components/movies/movies.component';
import { MoviesDetailComponent } from '../components/movies-detail/movies-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieCommentDetailComponent } from '../components/movie-comment-detail/movie-comment-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MovieCommentComponent,
    MovieRatingComponent,
    MoviesComponent,
    MoviesDetailComponent,
    MovieCommentDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
