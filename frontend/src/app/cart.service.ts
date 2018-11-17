import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Medicine} from "./cardlist/medicine.model";

@Injectable({
  providedIn: 'root'
})

export class CartService {
  private itemsInCartSubject: BehaviorSubject<Medicine[]> = new BehaviorSubject([]);
  private itemsInCart: Medicine[] = [];

  constructor() {
    this.itemsInCartSubject.subscribe(_ => this.itemsInCart = _);
  }

  public addToCart(item: Medicine) {
    this.itemsInCartSubject.next([...this.itemsInCart, item]);
  }

  public getItems(): Observable<Medicine[]> {
    return this.itemsInCartSubject;
  }
}
