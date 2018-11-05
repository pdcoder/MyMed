import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import { Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private http: HttpClient,private router: Router) { }

  ngOnInit() {
  }
  onFormSubmit(f: NgForm) {

    this.http.post<Observable<boolean>>('/api/signup', {
      email: f.value.email,
      passwordfield: f.value.password,
      fname: f.value.fname
    }).subscribe(isValid => {
      if (isValid) {
        sessionStorage.setItem(
          'token',
          btoa(f.value.email + ':' + f.value.password)
        );
        console.log("ddd");
        alert("Authentication successfull.");
        //this.router.navigate(['']);
      } else {
        alert("Authentication failed.")
      }
    });
  }
}
