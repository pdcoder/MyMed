import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Order} from "./order.model";

@Injectable({
  providedIn: 'root'
})
export class ProfileserviceService {

  constructor(private http : HttpClient, private router  :Router) { }
  public getOrders(id : number) {

    return this.http.get<Order>(`/api/orders/${id}`);

  }
}
