import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private  router: Router, private http: HttpClient) {
  }


  public getDoctors() {

    return this.http.get('/api/doclist');

  }
}
