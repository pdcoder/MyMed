 import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Medicine} from "./cardlist/medicine.model";
 import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class CartService {
  private itemsInCartSubject: BehaviorSubject<Medicine[]> = new BehaviorSubject([]);
  private itemsInCart: Medicine[] = [];
  public flg : number = 0;
  constructor(private http: HttpClient) {
    this.itemsInCartSubject.subscribe(_ => this.itemsInCart = _);
    this.flg = 0 ;
  }

  public addToCart(item: Medicine) {
    item = new Medicine(item.id, item.name, item.price, item.desc, item.image, item.qty);
   //  item.nmbr = 1;

    const currentItems = [...this.itemsInCart];

      const itemsModified = currentItems.map(_ => {
        if(_.id === item.id) {
          _.nmbr++;
          this.flg = 1;
          return _;
        }
      });
      if(this.flg===1) {

        this.flg = 0;
        this.itemsInCartSubject.next(itemsModified);
      }
      else
        this.itemsInCartSubject.next([...this.itemsInCart, item]);
  }

  public incQty(id : number, qty: number){

    const currentItems = [...this.itemsInCart];
    const itemsModified = currentItems.map(_ => {
      if(_.id == id ) {
        _.nmbr = qty;
        if( _.nmbr<0)
          _.nmbr=0;
      }
        return _ ;
    });
    console.log(itemsModified);
    this.itemsInCartSubject.next(itemsModified);

  }

  public incQtyByOne(id : number){
    const currentItems = [...this.itemsInCart];
    const itemsModified = currentItems.map(_ => {
      if(_.id == id ) {
        _.nmbr++;
      }
      return _ ;
    });
    this.itemsInCartSubject.next(itemsModified);
  }
  public decQtyByOne(id : number){
    const currentItems = [...this.itemsInCart];
    const itemsModified = currentItems.map(_ => {
      if(_.id == id ) {
        _.nmbr--;
        if( _.nmbr<0)
          _.nmbr=0;
      }
      return _ ;
    });
    this.itemsInCartSubject.next(itemsModified);
  }


  public remove(item : Medicine)
  {
    const currentItems = [...this.itemsInCart];
    const itemsWithoutRemoved = currentItems.filter(_ => _.id !== item.id);
    this.itemsInCartSubject.next(itemsWithoutRemoved);
  }

  public getItems(): Observable<Medicine[]> {
    return this.itemsInCartSubject;
  }

 /* public totalSum() : Observable<number>{
    return this.itemsInCart.map(())
  }*/
}
