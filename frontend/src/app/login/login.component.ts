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

  model : User ;
  constructor(private router: Router, private http: HttpClient) {

  }

  ngOnInit() {
    sessionStorage.setItem('token', '');
  }
  onFormSubmit(f: NgForm) {
    console.log(f);
    this.http.post<Observable<boolean>>('/api/login', {
      emai: this.model.email,
      password: this.model.password
    }).subscribe(isValid => {
      if (isValid) {
        sessionStorage.setItem(
          'token',
          btoa(this.model.email + ':' + this.model.password)
        );
        console.log("ddd");
        this.router.navigate(['']);
      } else {
        alert("Authentication failed.")
      }
    });
  }

}
