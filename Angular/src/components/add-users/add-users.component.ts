import { Component, OnInit } from '@angular/core';
import { User, HttpClientService } from 'src/service/http-client.service';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.scss']
})
export class AddUsersComponent implements OnInit {
  user: User = new User(0,"","","");

  constructor(
    private httpClientService: HttpClientService
  ) { }

  ngOnInit(): void {
  }

   createUsers(): void {
    this.httpClientService.createUser(this.user)
        .subscribe( data => {
          alert("Utente aggiunto alla lista.");
        });
}

}
