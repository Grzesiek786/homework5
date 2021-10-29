import { Component, OnInit } from '@angular/core';
import { House } from '../../interfaces/house';
import { HouseService } from '../../services/house.service';

@Component({
  selector: 'app-houses-dashboard',
  templateUrl: './houses-dashboard.component.html',
  styleUrls: ['./houses-dashboard.component.scss'],
})
export class HousesDashboardComponent implements OnInit {
  public filteredHouses: House[] = [];
  public latestReservedHouse: House;
  

  private houses: House[];

  constructor(private houseService: HouseService) {}

  ngOnInit(): void {
    this.houses = this.houseService.fetchHouses();
    this.filteredHouses = this.houses;
  }

  public displayAbove(amount: number) {
    this.filteredHouses = this.houses.filter(
      (house: House) => house.price > amount
    );
  }

  public displayBelow(amount: number) {
    this.filteredHouses = this.houses.filter(
      (house: House) => house.price < amount
    );
  }

  public displayAll(): void {
    this.filteredHouses = this.houses;
  }

  public houseReserved(reservedHouseId: string): void {
    this.latestReservedHouse = this.houses.find(
      (house: House) => house.id === reservedHouseId
    );
  }
}
