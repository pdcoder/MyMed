import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Medicine} from "./medicine.model";
import "rxjs/Rx";
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  constructor(private http: HttpClient) {
  }


  public getMedicines() {

    return this.http.get<Medicine[]>('/api/')
      .map((response) => {
          return response;
        }
      );
  }
}
