import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {NgForm} from "@angular/forms";
import {Observable, throwError} from "rxjs";
import {Router} from "@angular/router";
import 'rxjs/add/operator/catch';

import {ApiResponse} from "./ApiResponse.model";
import {AppError} from "../app.error";
import {LoginService} from "../login.service";
import {DomSanitizer} from "@angular/platform-browser";
import {Ng4LoadingSpinnerService} from "ng4-loading-spinner";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

errors : string ;
auth: boolean;
  constructor(private router: Router, private http: HttpClient, private authService : LoginService,private spinnerService: Ng4LoadingSpinnerService) {
   this.errors = "";
  }

  ngOnInit() {

  }
  onFormSubmit(f: NgForm) {
this.spinnerService.show();
    this.http.post<ApiResponse>('/api/login', {
      email: f.value.email,
      passwordfield: f.value.password
    }).catch((error: Response) => {
      this.spinnerService.hide();
      return Observable.throwError(new AppError(error))})
      .subscribe((response : ApiResponse) => {
          this.errors = response.message;
          if(this.errors === 'Login Successful'){
            this.authService.storeEmail(f.value.email);
            this.authService.checkAuth();
            this.authService.sendToken(response.details);
            this.spinnerService.hide();
            this.router.navigate(['/home']);
        }
        else
          {
            this.spinnerService.hide();
            alert("failed");
          this.errors = response.message;
          }
      }, (err : AppError) => {
        this.spinnerService.hide();
          this.errors = err.message;
          throw err;

      });
    this.spinnerService.hide();

  }
}
