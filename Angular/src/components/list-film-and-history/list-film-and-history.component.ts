import { query } from '@angular/animations';
import { Component, getNgModuleById, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { MovieTMDB } from 'src/models/MovieTMDB';
import { BackendService } from 'src/service/backend.service';

@Component({
  selector: 'app-C',
  templateUrl: './list-film-and-history.component.html',
  styleUrls: ['./list-film-and-history.component.scss']
})
export class ListFilmAndHistoryComponent implements OnInit {

  moviesTMDB: MovieTMDB | null = null;

  data1: string | null = null;
  data2: string | null = null;
 
  constructor(private backendService:BackendService, private route: ActivatedRoute, private router: Router ) { }

  

  ngOnInit(): void {
    this.backendService.getPopularFilm(this.data1, this.data2).subscribe({
      next: (res) => this.moviesTMDB = res,
      error: () => console.log('Error!'),
      complete: () => console.log(this.data1, this.data2)
    });
  }

  

}
