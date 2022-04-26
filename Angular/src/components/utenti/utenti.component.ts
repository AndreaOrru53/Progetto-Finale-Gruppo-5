import { Component, OnInit } from '@angular/core';
import { Utenti, HttpClientService } from 'src/service/http-client.service';

@Component({
  selector: 'app-utenti',
  templateUrl: './utenti.component.html',
  styleUrls: ['./utenti.component.scss']
})
export class UtentiComponent implements OnInit {
  utenti:Utenti[] = [];

  constructor(
    private httpClientService:HttpClientService
  ) { }

  ngOnInit() {
    this.httpClientService.getUtenti().subscribe(
     response =>{this.utenti=response;},
    );
  } 
  deleteUtenti(utente: Utenti): void {
    this.httpClientService.deleteUtenti(utente)
      .subscribe( data => {
        this.utenti = this.utenti.filter(u => u !== utente);
      })
  }


}
