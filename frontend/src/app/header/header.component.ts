import { Component, OnInit } from '@angular/core';
import {LoginService} from "../login.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAuthenticated : boolean;
  constructor(private auth : LoginService) {
    this.auth.getAuth().subscribe(res => this.isAuthenticated = res);
    console.log(this.isAuthenticated+" header");
  }

  ngOnInit() {
  }

  logout()
  {
    this.auth.logout();
  }
}
