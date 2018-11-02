import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders , HttpResponse} from '@angular/common/http';
import {Medicine} from "./medicine.model";
import "rxjs/Rx";
import {Router} from "@angular/router";
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  constructor(private  router: Router, private http: HttpClient) {
  }


  public getMedicines() {

    return this.http.get('/api/');

  }
}
