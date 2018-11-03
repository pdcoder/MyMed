import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NgForm} from "@angular/forms";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {User} from '../user.model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private router: Router, private http: HttpClient) {


  }

  ngOnInit() {

    sessionStorage.setItem('token', '');
  }
  onFormSubmit(f: NgForm) {
    this.http.post<Observable<boolean>>('/api/login', {
      email: f.value.email,
      password: f.value.password
    }).subscribe(isValid => {
      if (isValid) {
        sessionStorage.setItem(
          'token',
          btoa(f.value.email + ':' + f.value.password)
        );
        console.log("ddd");
        alert("Authentication successfull.");
        this.router.navigate(['']);
      } else {
        alert("Authentication failed.")
      }
    });
  }

}
