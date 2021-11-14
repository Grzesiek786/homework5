import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { HouseStatus } from '../enums/house-status.enum';

@Directive({
  selector: '[appColorsStatus]'
})
export class ColorsStatusDirective implements OnInit {

  @Input() public houseStatus

  constructor(private render: Renderer2, private elementRef: ElementRef) {}

  ngOnInit(): void {
    if(this.houseStatus === HouseStatus.FOR_RENT) {
      this.render.setStyle(this.elementRef.nativeElement, 'color', 'red');
    }

    if(this.houseStatus === HouseStatus.SOLD) {
      this.render.setStyle(this.elementRef.nativeElement, 'color', 'green');
    }
  }

}
