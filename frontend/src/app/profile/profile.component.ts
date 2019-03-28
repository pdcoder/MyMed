import {Component, OnInit} from '@angular/core';
import {LoginService} from "../login.service";
import {ProfileserviceService} from "./profileservice.service";
import jwt_decode from 'jwt-decode' ;
import {Order} from "./order.model";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public id : number;
  public orders : any = {};
  public order : Order[] = [];
  constructor(private auth : LoginService, private profile : ProfileserviceService) {
    const token  =  localStorage.getItem('token');
    let tokenInfo = this.getDecodedAccessToken(token);
    this.id = tokenInfo.userId;
  }


  getDecodedAccessToken(token: string): any {
    try{
      return jwt_decode(token);
    }
    catch(Error){
      return null;
    }
  }

  ngOnInit() {

    this.profile.getOrders(this.id).subscribe((data) => {
      this.orders = data;
      console.log(this.orders[0]);
      console.log(this.orders[1]);
      console.log(this.orders[2]);

      for(let i=0;i<this.orders.length;i=i+1)
      {
        this.order.push(new Order(this.orders[i][0],this.orders[i][1],this.orders[i][2],this.orders[i][3]));
      }
      console.log(this.order);
    });


  }



}
