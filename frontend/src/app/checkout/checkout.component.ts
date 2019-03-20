import { Component, OnInit, OnChanges} from '@angular/core';
import {Observable, of} from "rxjs";
import {Medicine} from "../cardlist/medicine.model";
import {CartService} from "../cart.service";
import {HttpClient} from "@angular/common/http";
import {MatIconModule} from '@angular/material/icon';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit, OnChanges {

  public shoppingCartItems$: Observable<Medicine[]> = of([]);
  public shoppingCartItems: Medicine[] = [];
  public qty1: number = 1;
  public sum : number = 0;

  constructor(private cartService : CartService, private http : HttpClient, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'plus',
      sanitizer.bypassSecurityTrustResourceUrl('../assets/images/plus.svg'));
    this.shoppingCartItems$ = this
      .cartService
      .getItems();
  }

  addQty(id : number, qty : number)
  {
    console.log(id+" "+qty);
    this.cartService.incQty(id, qty);
    this.sum=0;
    this.shoppingCartItems$.subscribe(_ => this.shoppingCartItems = _);
    this.shoppingCartItems.map(_ => {
      this.sum += (_.price * _.nmbr) ;
    });
  }

  remove(items : Medicine)
  {
    this.cartService.remove(items);
    this.sum = 0;
    this.shoppingCartItems$.subscribe(_ => this.shoppingCartItems = _);
    this.shoppingCartItems.map(_ => {
      this.sum += (_.price * _.nmbr) ;
    });
  }
  ngOnInit() {
    this.shoppingCartItems$.subscribe(_ => this.shoppingCartItems = _);
    this.shoppingCartItems.map(_ => {
      this.sum += (_.price * _.nmbr) ;
    });
    console.log(this.sum+"prakash");
  }
   ngOnChanges(){}

}
