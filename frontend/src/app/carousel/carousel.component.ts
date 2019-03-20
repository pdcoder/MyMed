import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  imagepath : string = '';
  constructor() {
    this.imagepath = '/assets/images/medical.jpg'
  }

  ngOnInit() {
  }

}
