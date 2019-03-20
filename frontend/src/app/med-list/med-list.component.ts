import { Component, OnInit } from '@angular/core';
import {Medicine} from "../cardlist/medicine.model";
import {DataService} from "../data.service";
import {CartService} from "../cart.service";

@Component({
  selector: 'app-med-list',
  templateUrl: './med-list.component.html',
  styleUrls: ['./med-list.component.css']
})
export class MedListComponent implements OnInit {

  constructor(private data : DataService, private cartservice : CartService) { }

  ngOnInit() {
  }
  changeMed(med : Medicine){
    this.data.changeMessage(med);
  }

  addMed(med : Medicine){
    this.cartservice.addToCart(med);
  }


}
