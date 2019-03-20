import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {Medicine} from "./cardlist/medicine.model";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private messageSource = new BehaviorSubject(null);
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(message: Medicine) {
    this.messageSource.next(message)
  }
}
