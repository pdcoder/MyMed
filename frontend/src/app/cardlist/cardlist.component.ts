import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Medicine } from './medicine.model';
import { MedicineService } from './medicine.service';
import {DataService} from "../data.service";
import {CartService} from "../cart.service";

@Component({
  selector: 'app-cardlist',
  templateUrl: './cardlist.component.html',
  styleUrls: ['./cardlist.component.css'],
})
export class CardlistComponent implements OnInit {
  cardimage : string = '';
  medicines: any = {};
  constructor( private router : Router, private cartservice : CartService,private medicineservice : MedicineService, private data : DataService) {
    this.cardimage = '/assets/images/medical.jpg';

    this.medicineservice.getMedicines()
     .subscribe( (data) => {
       this.medicines = data;
          console.log(data);
        },
        (error)=> console.log(error)
      );

  }

  changeMed(med : Medicine){
    this.data.changeMessage(med);
  }

  addMed(med : Medicine){
    this.cartservice.addToCart(med);
  }

  ngOnInit() {
    this.medicineservice.getMedicines()
      .subscribe( (data) => {
        console.log("fetching");
      },
        (error)=> console.log(error)
      );

  }

}
