import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import { Router} from "@angular/router";
import {AppError} from "../app.error";
import {LoginService} from "../login.service";
import {Ng4LoadingSpinnerService} from "ng4-loading-spinner";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  errors : string ;

  constructor(private http: HttpClient,private router: Router, private auth: LoginService,private spinnerService: Ng4LoadingSpinnerService) { }

  ngOnInit() {
    this.errors="";
  }
  onFormSubmit(f: NgForm) {
this.spinnerService.show();
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
    this.spinnerService.hide();
  }


}
