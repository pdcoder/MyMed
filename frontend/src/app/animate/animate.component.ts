import { Component, OnInit } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-animate',
  templateUrl: './animate.component.html',
  styleUrls: ['./animate.component.css'],
  animations: [
    trigger('hover', [
      state('initial', style({
        display: 'none'
      })),
      state('final', style({
        display: 'block'
      })),
      transition('initial=>final', animate('1500ms')),
      transition('final=>initial', animate('1000ms'))
    ]),
  ]
})
export class AnimateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
