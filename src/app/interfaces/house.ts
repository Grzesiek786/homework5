import { HouseStatus } from "../enums/house-status.enum";

export interface House {
  id: string;
  price: number;
  surface: number;
  status: HouseStatus;
  address: Address;
  photoSource: string;
}

interface Address {
  street: string;
  number: string;
  city: string;
}