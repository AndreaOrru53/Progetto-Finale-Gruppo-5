import { Component, OnInit } from '@angular/core';
import { User, HttpClientService } from 'src/service/http-client.service';

@Component({
  selector: 'app-user',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  user:User[] = [];

  constructor(
    private httpClientService:HttpClientService
  ) { }

  ngOnInit() {
    this.httpClientService.getUser().subscribe(
     response =>{this.user=response;},
    );
  } 
  deleteuser(user: User): void {
    this.httpClientService.deleteUser(user)
      .subscribe( data => {
        this.user = this.user.filter(u => u !== user);
      })
  }


}
