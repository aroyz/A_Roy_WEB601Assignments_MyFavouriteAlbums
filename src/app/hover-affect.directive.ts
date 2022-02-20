import {Directive, ElementRef, HostListener, Input, OnInit} from '@angular/core';
import {style} from "@angular/animations";

@Directive({
  selector: '[appHoverAffect]'
})
export class HoverAffectDirective implements OnInit{

  @Input() el?: string;

  constructor(private element: ElementRef) {
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    if (this.el === 'type') {
      this.element.nativeElement.style.textDecoration = 'underline';
    }
    else if (this.el === 'tag') {
      this.element.nativeElement.style.fontWeight = 'bold';
    }
    else {
      this.element.nativeElement.style.borderWidth = '4px';
    }
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    this.element.nativeElement.removeAttribute('style');
  }

  ngOnInit() {
    this.element.nativeElement.style.backgroundColor = this.el;
  }
}
