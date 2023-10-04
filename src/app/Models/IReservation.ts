export interface IReservation {
  _id: string;
  userId: object;
  houseId: {
    _id: string;
    name: string;
  };
  checkIn: Date;
  checkOut: Date;
  price: number;
}
