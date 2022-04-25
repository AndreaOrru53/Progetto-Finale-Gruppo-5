import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
 

  constructor() { }

  ngOnInit(): void {
  }

  invio(form: NgForm) {
    window.location.href=`http://localhost:4200/listFilm-listHistory/${form.controls['date1'].value}/${form.controls['date2'].value}`;  
  }

}
