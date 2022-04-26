import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from 'src/service/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private router: Router,
              private authService:AuthenticationService) { }

              canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot){
              if(this.authService.isUserLoggedIn()){
                return true;
              }

              this.router.navigate(['login']);
              return false;
  } 
}
