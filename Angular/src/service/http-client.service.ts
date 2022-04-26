import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export class Utenti{
  constructor(
    public username:string,
    public email: any,
    public password:string,
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private httpClient:HttpClient
  ) { 
     }

     getUtenti()
  {
    console.log("test call");
    return this.httpClient.get<Utenti[]>('http://localhost:8080/all');
  }
  

public deleteUtenti(utente: Utenti) {
  return this.httpClient.delete<Utenti>("http://localhost:8080/user/delete"+ utente);
}

public createUtenti(utente: Utenti) {
  return this.httpClient.post<Utenti>("http://localhost:8080/user/signup", utente);
}
}
