import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appColorsStatus]'
})
export class ColorsStatusDirective implements OnInit {

  constructor(private render: Renderer2, private elementRef: ElementRef) {}

  ngOnInit(): void {
    console.log(this.elementRef.nativeElement.querySelector('p .status'));
    
  }
}
