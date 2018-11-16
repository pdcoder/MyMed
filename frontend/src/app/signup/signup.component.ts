import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import { Router} from "@angular/router";
import {ApiResponse} from "../login/ApiResponse.model";
import {AppError} from "../app.error";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  errors : string ;

  constructor(private http: HttpClient,private router: Router) { }

  ngOnInit() {
    this.errors="";
  }
  onFormSubmit(f: NgForm) {

    this.http.post<Observable<Response>>('/api/signup', {
      email: f.value.email,
      passwordfield: f.value.password,
      fname: f.value.fname
    }).catch((error: Response) => {

      return Observable.throwError(new AppError(error))}).subscribe((response) => {
        alert("Signup successfull.");
        this.router.navigate(['/login']);

    }, (err : AppError) => {
      this.errors = err.message;
      throw err;

    });
  }


}
