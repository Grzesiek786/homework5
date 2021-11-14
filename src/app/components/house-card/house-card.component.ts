import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { DialogService } from 'src/app/dialog/dialog.service';
import { PopupComponent } from 'src/app/dialog/popup/popup.component';
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
  public imagesAvailability: boolean = false;

  constructor(private dialogService: DialogService) {}

  ngOnInit(): void {
    this.address = `${this.house.address.street} ${this.house.address.number}`;
  }

  public reservedHouse(): void {
    this.houseReserved.emit(this.house.id);
  }

  public morePhotos(): void {
    this.imagesAvailability = !this.imagesAvailability;
  }

  public showPhoto(): void {
    this.dialogService.openDialog(PopupComponent);
  }

}
