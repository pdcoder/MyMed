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
import {ApiResponse} from "../login/ApiResponse.model";
import {Observable} from "rxjs";
import {AppError} from "../app.error";
import {LoginService} from "../login.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-cardlist',
  templateUrl: './cardlist.component.html',
  styleUrls: ['./cardlist.component.css'],
  animations: [
    trigger('hover', [
      state('initial', style({
        boxShadow : 'none'
      })),
      state('final', style({
        boxShadow : '1px 1px 2px black, 0 0 10px blue, 0 0 5px lightblue'
      })),
      transition('initial=>final', animate('0ms ease')),
      transition('final=>initial', animate('0ms 1000ms ease'))
    ]),
  ]
})
export class CardlistComponent implements OnInit {
  cardimage : string = '';
  medicines: any = {};
  doctors : any = {};
  datas ;
  errors : string ;
  currentstate : string ='';

  constructor(private http : HttpClient, private authService : LoginService, private router : Router, private cartservice : CartService,private medicineservice : MedicineService,private doctorService : DoctorService,private data : DataService) {
    this.cardimage = '/assets/images/medical.jpg';

    this.medicineservice.getMedicines()
     .subscribe( (datas) => {
console.log(datas);
          this.medicines = datas;
        },
        (error)=> console.log(error)
      );


    this.doctorService.getDoctors()
      .subscribe( (data) => {
          this.doctors = data;
          console.log(this.doctors);
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

  bookDoc(id : number, date : string){
    console.log(date);
    this.http.post<ApiResponse>('/api/bookdoc', {
      docid : id,
      date : date,
      email: this.authService.getEmail()
    }).catch((error: Response) => {

      return Observable.throwError(new AppError(error))})
      .subscribe((response : ApiResponse) => {
        this.errors = response.message;
        if(this.errors === 'Appointment reserved'){
          alert("Sucessfull");
        }
        else
        {
          alert("failed");
          this.errors = response.message;
        }
      }, (err : AppError) => {
        console.log("sub error");

        this.errors = err.message;
        throw err;

      });
  }

  @HostListener('mouseover') onMouseOver() {
    this.currentstate = 'final';
    console.log("Prakash");
  }

  @HostListener('mouseout') onMouseOut() {
    this.currentstate = 'initial';
    console.log("Prakash");
  }
}
