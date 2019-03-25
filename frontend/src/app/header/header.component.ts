import {Component, OnInit, OnChanges, Output, EventEmitter} from '@angular/core';
import {LoginService} from "../login.service";
import { LimitPipe} from '../limit.pipe';
import {Observable, of} from "rxjs";
import {Medicine} from "../cardlist/medicine.model";
import {MedicineService} from "../cardlist/medicine.service";
import {DoctorService} from "../doctor.service";
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {map, startWith} from "rxjs/operators";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnChanges {

  isAuthenticated: boolean;
  searchText: string;
  search: string;
  characters: string[] = [];
  states : string[] = [];
  medicines: any = {};
  i: number = 0;
  doctors: any = {};
  public searches$: Observable<string> = of("");
  @Output() clickEvent = new EventEmitter();
  stateCtrl = new FormControl();
  filteredStates: Observable<string[]>;

  constructor(private auth: LoginService, private medicineservice: MedicineService, private doctorService: DoctorService) {
    this.auth.getAuth().subscribe(res => this.isAuthenticated = res);
    this.searches$.subscribe(_ => this.search = _);
    this.medicineservice.getMedicines()
      .subscribe((datas) => {

          this.medicines = datas;
        },
        (error) => console.log(error)
      );
    this.filteredStates = this.stateCtrl.valueChanges
      .pipe(
        startWith(''),
        map(state => state ? this._filterStates(state) : this.states.slice())
      );
  }

  private _filterStates(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.states.filter(state => state.toLowerCase().indexOf(filterValue) === 0);
  }


  getNotification(event){
    this.search  = event;
  }
  ngOnInit() {

      this.characters.push('Calpol');
    this.characters.push('Saridon');
  this.states.push('Calpol');
  this.states.push('Saridon');
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
