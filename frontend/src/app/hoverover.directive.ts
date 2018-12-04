import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHoverover]'
})
export class HoveroverDirective {

  constructor(private renderer : Renderer2, private el : ElementRef) { }

  @HostListener('mouseover') onMouseOver() {
    let part = this.el.nativeElement.querySelector('.card');
    this.renderer.setStyle(part, 'display', 'block');
  }

  @HostListener('mouseout') onMouseOut() {
    let part = this.el.nativeElement.querySelector('.card');
    this.renderer.setStyle(part, 'display', 'none');
  }
}
