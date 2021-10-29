import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { House } from '../interfaces/house';

@Directive({
  selector: '[appColorsStatus]'
})
export class ColorsStatusDirective implements OnInit {

  constructor(private render: Renderer2, private elementRef: ElementRef) {}

  ngOnInit(): void {
    console.log(this.elementRef.nativeElement.querySelector('p .status'));
    console.log(this.elementRef);
  }

}
