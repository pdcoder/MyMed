import {Component, EventEmitter, HostListener, OnInit, Output} from '@angular/core';
import { LimitPipe} from '../limit.pipe';
import { FormsModule }   from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


  constructor() { }

  ngOnInit() {

  }

}
