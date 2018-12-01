import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {NgForm} from "@angular/forms";
import {Observable, throwError} from "rxjs";
import {Router} from "@angular/router";
import 'rxjs/add/operator/catch';

import {ApiResponse} from "./ApiResponse.model";
import {AppError} from "../app.error";
import {LoginService} from "../login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

errors : string ;
auth: boolean;
  constructor(private router: Router, private http: HttpClient, private authService : LoginService) {
   this.errors = "";
  }

  ngOnInit() {

  }
  onFormSubmit(f: NgForm) {

    this.http.post<ApiResponse>('/api/login', {
      email: f.value.email,
      passwordfield: f.value.password
    }).catch((error: Response) => {

      return Observable.throwError(new AppError(error))})
      .subscribe((response : ApiResponse) => {
          this.errors = response.message;
          if(this.errors === 'Login Successful'){
          sessionStorage.setItem('token', response.details);
          this.authService.authenticated = true;
          this.router.navigate(['/home']);
        }
        else
          {
           alert("failed");
          this.errors = response.message;
          }
      }, (err : AppError) => {
      console.log("sub error");

          this.errors = err.message;
          throw err;

      });
}
}
