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
    this.isAuthenticated = this.auth.authenticated;
  }

  ngOnInit() {
  }

  logout()
  {
    this.auth.logout();
  }
}
