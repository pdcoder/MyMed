import {Component, OnInit, AfterContentInit, HostListener} from '@angular/core';
import { Router } from '@angular/router';
import { Medicine } from './medicine.model';
import { MedicineService } from './medicine.service';
import {DataService} from "../data.service";
import {CartService} from "../cart.service";
import {DoctorService} from "../doctor.service";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-cardlist',
  templateUrl: './cardlist.component.html',
  styleUrls: ['./cardlist.component.css'],
  animations: [
    trigger('hover', [
      state('initial', style({
        opacity : 0
      })),
      state('final', style({
        opacity : 1
      })),
      transition('initial=>final', animate('1000ms ease')),
      transition('final=>initial', animate('1000ms  ease'))
    ]),
  ]
})
export class CardlistComponent implements OnInit {
  cardimage : string = '';
  medicines: any = {};
  doctors : any = {};
  datas ;
  currentstate : string ='';

  constructor( private router : Router, private cartservice : CartService,private medicineservice : MedicineService,private doctorService : DoctorService,private data : DataService) {
    this.cardimage = '/assets/images/medical.jpg';

    this.medicineservice.getMedicines()
     .subscribe( (datas) => {

          this.medicines = datas;
        },
        (error)=> console.log(error)
      );


    this.doctorService.getDoctors()
      .subscribe( (data) => {
          this.doctors = data;
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
    this.currentstate = 'initial';

  }

  @HostListener('mouseover') onMouseOver() {
    this.currentstate = 'final';
  }

  @HostListener('mouseout') onMouseOut() {
    this.currentstate = 'initial';
  }
}
