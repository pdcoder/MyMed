import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {ApiResponse} from "./login/ApiResponse.model";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  authenticated : boolean  = false;

  constructor(private http : HttpClient) { }

  checkAuth()
  {
    this.authenticated = true;
  }

  logout()
  {
    sessionStorage.setItem('token', '');
    this.authenticated = false;
  }

  login(private mail : string, private pwd: string)
  {

  }
}
