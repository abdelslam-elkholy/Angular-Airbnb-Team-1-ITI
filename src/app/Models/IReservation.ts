export interface IReservation {
  _id: string;
  userId: string;
  houseId: string;
  checkIn: Date;
  checkOut: Date;
  price: number;
}
