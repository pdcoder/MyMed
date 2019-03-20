import { Component, OnInit, OnChanges } from '@angular/core';
import {LoginService} from "../login.service";
import { LimitPipe} from '../limit.pipe';
import {Observable, of} from "rxjs";
import {Medicine} from "../cardlist/medicine.model";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnChanges {

  isAuthenticated : boolean;
  searchText : string ;
  search : string;
  public searches$: Observable<string> = of("");


  characters  =[
    'Finn the human',
    'Jake the dog',
    'Princess bubblegum',
    'Lumpy Space Princess',
    'Beemo1',
    'Beemo2'
  ];
  constructor(private auth : LoginService) {
    this.auth.getAuth().subscribe(res => this.isAuthenticated = res);
     this.searches$.subscribe(_ => this.search = _);
  }

  getNotification(event){
    this.search  = event;
    console.log(this.search);
  }
  ngOnInit() {
    console.log("hello"+this.search);
  }

  ngOnChanges(){
    console.log("hello"+this.search);
  }
  logout()
  {
    this.auth.logout();
  }
}
