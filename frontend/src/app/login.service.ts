import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {ApiResponse} from "./login/ApiResponse.model";

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  private authenticated:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  constructor(private http : HttpClient) { }

  getAuth(){
    return this.authenticated.asObservable();

  }
  checkAuth()
  {
    this.authenticated.next(true);
  }

  logout()
  {
    sessionStorage.removeItem('token');
    this.authenticated.next(false);
  }


}
