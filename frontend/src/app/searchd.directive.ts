import {Directive, EventEmitter, HostListener, Output} from '@angular/core';

@Directive({
  selector: '[appSearchd]'
})
export class SearchdDirective {

  constructor() { }

  @Output() searchText : EventEmitter<string> = new EventEmitter();


  @HostListener('keyup', ['$event']) change(event : any) {
    console.log(event.target.value);
    this.searchText.emit(event.target.value);
  }

}
