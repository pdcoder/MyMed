import {Component, ElementRef, HostListener, OnInit} from '@angular/core';
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
      transition('initial=>final', animate('0ms ease')),
      transition('final=>initial', animate('0ms 200ms ease'))
    ]),
  ]
})
export class AnimateComponent implements OnInit{

  constructor(public el: ElementRef<HTMLElement>) { }
   currentstate : string ='';
  ngOnInit() {
    this.currentstate = 'initial';
  }

  @HostListener('mouseover') onMouseOver() {
    this.currentstate = 'initial';
  }

  @HostListener('mouseout') onMouseOut() {
    this.currentstate = 'final';
  }
}
