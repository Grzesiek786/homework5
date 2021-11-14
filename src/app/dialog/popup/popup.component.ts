import { Component, OnInit } from '@angular/core';
import { House } from 'src/app/interfaces/house';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {

  public house: House;

  constructor() { }

  ngOnInit(): void {
  }

}
