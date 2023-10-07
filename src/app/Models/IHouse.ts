export interface IHouse {
  _id?: string;
  name: string;
  address: string;
  price: number;
  currencySymbol?: string;
  numberOfRooms: number;
  numberOfBedrooms: number;
  guestNumber: number;
  rate?: number;
  description: string;
  reviews?: string;
  images: any[];
  category: string;
  userId?: string;
  lat: number;
  lng: number;
  region: string;
}
