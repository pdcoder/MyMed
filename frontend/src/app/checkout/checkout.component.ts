import {Component, OnInit, OnChanges, ViewChild, ElementRef} from '@angular/core';
import {Observable, of} from "rxjs";
import {Medicine} from "../cardlist/medicine.model";
import {CartService} from "../cart.service";
import {HttpClient} from "@angular/common/http";
import {MatIconModule} from '@angular/material/icon';
import {MatDialog, MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {ApiResponse} from "../login/ApiResponse.model";
import {AppError} from "../app.error";
import {LoginService} from "../login.service";
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {DialogComponent} from "../dialog/dialog.component";
import {Ng4LoadingSpinnerService} from "ng4-loading-spinner";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  public shoppingCartItems$: Observable<Medicine[]> = of([]);
  public shoppingCartItems: Medicine[] = [];
  public sum : number = 0;
  public names : string[] = [];
  public qty: number[] = [];
  public errors : string = '';
  animal: string;
  name: string;
  @ViewChild('totalsum') total: ElementRef;

  constructor(public dialog: MatDialog,private authService : LoginService ,private cartService : CartService, private http : HttpClient, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,private spinnerService: Ng4LoadingSpinnerService) {
    iconRegistry.addSvgIcon(
      'plus',
      sanitizer.bypassSecurityTrustResourceUrl('../assets/images/plus.svg'));

    iconRegistry.addSvgIcon(
      'subtract',
      sanitizer.bypassSecurityTrustResourceUrl('../assets/images/negative.svg'));


    this.shoppingCartItems$ = this
      .cartService
      .getItems();
  }

  order() {
    this.spinnerService.show();
    this.shoppingCartItems.map(_ => {
      this.names.push(_.name);
      this.qty.push(_.nmbr);
    });
    this.http.post<ApiResponse>('/api/order', {
      names: this.names,
      qty: this.qty,
      sum: parseFloat((this.total.nativeElement.innerText).substr(1)),
      email: this.authService.getEmail()
    }).catch((error: Response) => {
      this.spinnerService.hide();
      return Observable.throwError(new AppError(error))
    })
      .subscribe((response: ApiResponse) => {
        this.errors = response.message;
        this.spinnerService.hide();

      });
  }

  addQty(id : number, qty : number)
  {
    this.spinnerService.show();
    this.cartService.incQty(id, qty);
    this.sum=0;
    this.shoppingCartItems$.subscribe(_ => this.shoppingCartItems = _);
    this.shoppingCartItems.map(_ => {
      this.sum += (_.price * _.nmbr) ;
    });
    this.spinnerService.hide();

  }
  add(id : number)
  {
    this.spinnerService.show();

    var qnt =  1;
    this.cartService.incQtyByOne(id);
    this.sum=0;
    this.shoppingCartItems$.subscribe(_ => this.shoppingCartItems = _);
    this.shoppingCartItems.map(_ => {
      this.sum += (_.price * _.nmbr) ;
    });
    this.spinnerService.hide();
  }

  remove(items : Medicine)
  {
    this.spinnerService.show();
    this.cartService.remove(items);
    this.sum = 0;
    this.shoppingCartItems$.subscribe(_ => this.shoppingCartItems = _);
    this.shoppingCartItems.map(_ => {
      this.sum += (_.price * _.nmbr) ;
    });
    this.spinnerService.hide();

  }

  sub(id : number)
  {
    this.spinnerService.show();
    var qnt =  1;
    this.cartService.decQtyByOne(id);
    this.sum=0;
    this.shoppingCartItems$.subscribe(_ => this.shoppingCartItems = _);
    this.shoppingCartItems.map(_ => {
      this.sum += (_.price * _.nmbr) ;
    });
    this.spinnerService.hide();
  }



  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit() {
    this.shoppingCartItems$.subscribe(_ => this.shoppingCartItems = _);
    this.shoppingCartItems.map(_ => {
      this.sum += (_.price * _.nmbr) ;
    });
    this.names= [];
    this.qty = [];
  }

}
