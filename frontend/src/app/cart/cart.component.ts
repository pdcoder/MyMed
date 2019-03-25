import { Component, OnInit, AfterViewChecked } from '@angular/core';
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

  ngAfterViewChecked(){

    const token  =  localStorage.getItem('token');
    let tokenInfo = this.getDecodedAccessToken(token);
    let id = tokenInfo.userId;
    // console.log(id);
  }
}
