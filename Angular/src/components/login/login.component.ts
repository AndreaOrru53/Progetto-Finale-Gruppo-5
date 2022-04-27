import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username = ''
  password = ''
  invalidLogin = false

  constructor(private router: Router,
              private loginservice: AuthenticationService){ }

  ngOnInit(): void {
  }

  checkLogin(loginForm: NgForm){
    if(this.loginservice.authenticate(loginForm.controls['username'].value, loginForm.controls['password'].value)){
      this.router.navigate(['/home'])
      this.invalidLogin = false
    }else{
      this.invalidLogin = true
    }
  }

}
