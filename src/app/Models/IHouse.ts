export interface IHouse {
  id?: string;
  name: string;
  address: string;
  price: number;
  currencySymbol?: string;
  numberOfRooms?: number;
  numberOfBedrooms: number;
  guestNumber: number;
  rate?: number;
  description: string;
  comments?: string;
  images: string[];
  category: string;
  userId: string;
}
