import {Component, ElementRef, OnChanges, OnInit, ViewChild} from '@angular/core';
import {Observable, of} from "rxjs";
import {Medicine} from "../cardlist/medicine.model";
import {ApiResponse} from "../login/ApiResponse.model";
import {AppError} from "../app.error";
import {LoginService} from "../login.service";
import {HttpClient} from "@angular/common/http";
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit, OnChanges {

  public shoppingCartItems$: Observable<Medicine[]> = of([]);
  public  shoppingCartItems: Medicine[] = [];
  public sum : number = 0;
  public names : string[] = [];
  public qty: number[] = [];
  public errors : string = '';

  @ViewChild('totalsum') total: ElementRef;


  constructor(private authService : LoginService, private http : HttpClient) { }

  ngOnInit() {
    this.shoppingCartItems$.subscribe(_ => this.shoppingCartItems = _);
    this.shoppingCartItems.map(_ => {
      this.sum += (_.price * _.nmbr) ;
      console.log(this.sum);

    });
    console.log(this.shoppingCartItems+"PD");
  }

  order() {
    console.log((this.total.nativeElement.innerText).substr(1));
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
      return Observable.throwError(new AppError(error))
    })
      .subscribe((response: ApiResponse) => {
        this.errors = response.message;
        console.log(this.errors);
      });
  }

  ngOnChanges(): void {
      console.log(this.shoppingCartItems+"PDAS");
  }



}
