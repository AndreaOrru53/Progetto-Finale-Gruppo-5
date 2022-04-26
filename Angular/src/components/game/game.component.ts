import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BackendService } from 'src/service/backend.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  constructor(private backendService:BackendService) { }

  ngOnInit(): void {
  }

  invio(form: NgForm) {
    window.location.href=`http://localhost:4200/listFilm-listHistory/${form.controls['date1'].value}/${form.controls['date2'].value}`;

  }

}
