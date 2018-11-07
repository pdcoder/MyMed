import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {NgForm} from "@angular/forms";
import {Observable, throwError} from "rxjs";
import {Router} from "@angular/router";
import 'rxjs/add/operator/catch';

import {ApiResponse} from "./ApiResponse.model";
import {AppError} from "../app.error";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

errors : string ;
  constructor(private router: Router, private http: HttpClient) {
this.errors = "";

  }

  ngOnInit() {

    sessionStorage.setItem('token', '');
  }


  onFormSubmit(f: NgForm) {

    this.http.post<Observable<ApiResponse>>('/api/login', {
      email: f.value.email,
      passwordfield: f.value.password
    }).catch((error: Response) => {

      return Observable.throwError(new AppError(error))}).subscribe((response : Response) => {
        if (response.status === 200) {
          this.errors = response.message;
          sessionStorage.setItem(
            'token',
            btoa(f.value.email + ':' + f.value.password)
          );

          //this.router.navigate(['']);
        } else {
          // alert("failed");
          this.errors = response.message;
        }
      }, (err : AppError) => {
      console.log("sub error");

          this.errors = err.message;
          throw err;

      });
    }


}
