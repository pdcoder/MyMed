import {Component, OnInit, OnChanges, Output, EventEmitter} from '@angular/core';
import {LoginService} from "../login.service";
import { LimitPipe} from '../limit.pipe';
import {Observable, of} from "rxjs";
import {Medicine} from "../cardlist/medicine.model";
import {MedicineService} from "../cardlist/medicine.service";
import {DoctorService} from "../doctor.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnChanges {

  isAuthenticated : boolean;
  searchText : string ;
  search : string;
  characters : string[] = [];
  medicines : any  ={};
  i : number = 0;
  doctors : any = {};
  public searches$: Observable<string> = of("");
  @Output() clickEvent = new EventEmitter();

  constructor(private auth : LoginService, private medicineservice : MedicineService,private doctorService : DoctorService) {
    this.auth.getAuth().subscribe(res => this.isAuthenticated = res);
     this.searches$.subscribe(_ => this.search = _);
    this.medicineservice.getMedicines()
      .subscribe( (datas) => {

          this.medicines = datas;
        },
        (error)=> console.log(error)
      );

  }

  getNotification(event){
    this.search  = event;
  }
  ngOnInit() {

      this.characters.push('Calpol');
    this.characters.push('Saridon');
    }


  ngOnChanges(){
    console.log("hello"+this.search);
  }

  logout()
  {
    this.auth.logout();
  }

  sidenav()
  {
    this.clickEvent.emit();
  }
}
