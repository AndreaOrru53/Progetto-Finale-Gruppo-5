import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export class User{
  constructor(
    public user_id: number,
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

     getUser()
  {
    console.log("test call");
    return this.httpClient.get<User[]>('http://localhost:8080/all');
  }
  

public deleteUser(user: User) {
  return this.httpClient.delete<User>("http://localhost:8080/user/delete"+ user.user_id);
}

public createUser(user: User) {
  return this.httpClient.post<User>("http://localhost:8080/user/signup", user);
}
}
