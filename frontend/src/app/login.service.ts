import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {ApiResponse} from "./login/ApiResponse.model";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  private authenticated:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  constructor(private http : HttpClient, private router : Router) { }

  getAuth(){
    return this.authenticated.asObservable();

  }
  checkAuth()
  {
    this.authenticated.next(true);
  }

  logout()
  {
    localStorage.removeItem('token');
    this.authenticated.next(false);
    this.router.navigate(["/login"]);

  }
  sendToken(token: string) {
    localStorage.setItem("token", token)
  }
  getToken() {
    return localStorage.getItem("token")
  }
  isLoggedIn() {
    return this.getToken() !== null;
  }

}
