import { Component, OnInit } from '@angular/core';
import {Observable, of} from "rxjs";
import {Medicine} from "../cardlist/medicine.model";
import {CartService} from "../cart.service";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  public shoppingCartItems$: Observable<Medicine[]> = of([]);
  public shoppingCartItems: Medicine[] = [];

  constructor(private cartService : CartService) {
    this.shoppingCartItems$ = this
      .cartService
      .getItems();

    this.shoppingCartItems$.subscribe(_ => this.shoppingCartItems = _);
  }

  ngOnInit() {
  }

}
