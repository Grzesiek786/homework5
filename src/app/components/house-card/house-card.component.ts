import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { House } from '../../interfaces/house';

@Component({
  selector: 'app-house-card',
  templateUrl: './house-card.component.html',
  styleUrls: ['./house-card.component.scss'],
})
export class HouseCardComponent implements OnInit {
  @Input()
  public house: House;
  @Input()
  public isLatestReserved: boolean = false;
  @Output()
  public houseReserved: EventEmitter<string> = new EventEmitter<string>();
  public address: string = '';

  ngOnInit(): void {
    this.address = `${this.house.address.street} ${this.house.address.number}`;
  }

  public reservedHouse() {
    this.houseReserved.emit(this.house.id);
  }
}
