import { Component, OnInit } from '@angular/core';
import { MovieFav } from 'src/models/MovieFavor';
import { AuthenticationService } from 'src/service/authentication.service';
import { BackendService } from 'src/service/backend.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  movies: MovieFav[] = [];
  isVisible=true;
  constructor(private backendService: BackendService, public loginService: AuthenticationService) { }

  ngOnInit(): void {
    this.backendService.getListaPreferiti().subscribe({
      next: (res) => this.movies = res,
      error: () => console.log('Error!'),
      complete: () => console.log('Complete')
  });
}

}
