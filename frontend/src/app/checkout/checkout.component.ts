import {Component, OnInit, OnChanges, ViewChild, ElementRef} from '@angular/core';
import {Observable, of} from "rxjs";
import {Medicine} from "../cardlist/medicine.model";
import {CartService} from "../cart.service";
import {HttpClient} from "@angular/common/http";
import {MatIconModule} from '@angular/material/icon';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {ApiResponse} from "../login/ApiResponse.model";
import {AppError} from "../app.error";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit, OnChanges {

  public shoppingCartItems$: Observable<Medicine[]> = of([]);
  public shoppingCartItems: Medicine[] = [];
  public sum : number = 0;
  public names : string[] = [];
  public qty: number[] = [];
  public errors : string = '';
  @ViewChild('totalsum') total: ElementRef;

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

  order() {
    console.log(this.shoppingCartItems);
    this.shoppingCartItems.map(_ => {
      this.names.push(_.name);
      this.qty.push(_.nmbr);
    });
    this.http.post<ApiResponse>('/api/order', {
      names: this.names,
      qty: this.qty,
      sum: this.total.nativeElement.innerText
    }).catch((error: Response) => {
      return Observable.throwError(new AppError(error))
    })
      .subscribe((response: ApiResponse) => {
        this.errors = response.message;
        console.log(this.errors);
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
