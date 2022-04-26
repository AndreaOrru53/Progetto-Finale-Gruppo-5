import { Component, OnInit } from '@angular/core';
import { Utenti, HttpClientService } from 'src/service/http-client.service';

@Component({
  selector: 'app-add-utenti',
  templateUrl: './add-utenti.component.html',
  styleUrls: ['./add-utenti.component.scss']
})
export class AddUtentiComponent implements OnInit {
  uten: Utenti = new Utenti("","");

  constructor(
    private httpClientService: HttpClientService
  ) { }

  ngOnInit(): void {
  }

   createUtenti(): void {
    this.httpClientService.createUtenti(this.uten)
        .subscribe( data => {
          alert("Utente aggiunto alla lista.");
        });
}

}
