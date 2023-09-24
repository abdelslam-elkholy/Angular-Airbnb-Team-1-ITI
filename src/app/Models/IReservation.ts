export interface IReservation {
  _id: string;
  userId: object;
  houseId: object;
  checkIn: Date;
  checkOut: Date;
  price: number;
}
