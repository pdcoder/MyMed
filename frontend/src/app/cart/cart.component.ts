import { Component, OnInit, OnChanges } from '@angular/core';
import {Medicine} from "../cardlist/medicine.model";
import {Observable, of} from "rxjs";
import {CartService} from "../cart.service";
import {faCartPlus} from '@fortawesome/free-solid-svg-icons';
import {HttpClient} from "@angular/common/http";
import * as jwt_decode from "jwt-decode";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public shoppingCartItems$: Observable<Medicine[]> = of([]);
  public shoppingCartItems: Medicine[] = [];
  faCartPlus = faCartPlus;

  constructor(private http : HttpClient,private cartService: CartService) {
    this.shoppingCartItems$ = this
      .cartService
      .getItems();

    this.shoppingCartItems$.subscribe(_ => this.shoppingCartItems = _);
  }

  ngOnInit() {
  }

  getDecodedAccessToken(token: string): any {
    try{
      return jwt_decode(token);
    }
    catch(Error){
      return null;
    }
  }

  ngOnChanges(){


    const token  =  localStorage.getItem('token');
    console.log(token);
    let tokenInfo = this.getDecodedAccessToken(token);
    let username = tokenInfo.sub;
    let id = tokenInfo.userId;
    if((this.shoppingCartItems).length>0){
      this.http.post('/api/cart', {
        cart : this.shoppingCartItems,
        user_id: id
      });
    }
  }
}
