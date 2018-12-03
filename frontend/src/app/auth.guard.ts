import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from
    '@angular/router';
import { Observable } from 'rxjs/Observable';
import {Router} from '@angular/router';
import {LoginService} from "./login.service";
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private auth: LoginService,
              private myRoute: Router){
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(this.auth.isLoggedIn()){
      return true;
    }else{
      this.myRoute.navigate(["login"]);
      return false;
    }
  }
}
