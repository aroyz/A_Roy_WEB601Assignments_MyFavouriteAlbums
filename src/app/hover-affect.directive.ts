import {Directive, ElementRef, HostListener, Input, OnInit} from '@angular/core';

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
    else {
      this.element.nativeElement.style.fontWeight = 'bold';
    }
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    if (this.el === 'type') {
      this.element.nativeElement.style.textDecoration = 'none';
    }
    else {
      this.element.nativeElement.style.fontWeight = 'normal';
    }
  }

  ngOnInit() {
    this.element.nativeElement.style.backgroundColor = this.el;
  }
}
