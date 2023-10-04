import { IReservation } from 'src/app/Models/IReservation';
import { ReservationsService } from './../../Services/reservations.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css'],
})
export class ReservationsComponent implements OnInit {
  reservations: IReservation[] = [];

  constructor(private reservationsService: ReservationsService) {}

  ngOnInit(): void {
    this.reservationsService.getAllReservations().subscribe((reservations) => {
      this.reservations = reservations;
      console.log(this.reservations);
    });
  }

  calculateDuration(checkIn: Date, checkOut: Date): number {
    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);
    const durationInMilliseconds =
      checkOutDate.getTime() - checkInDate.getTime();
    return durationInMilliseconds / 1000 / 60 / 60 / 24;
  }

  options: object = { year: 'numeric', month: 'long', day: 'numeric' };

  formattedDate(inputDateString: Date): string {
    const inputDate = new Date(inputDateString);

    return inputDate.toLocaleDateString('en-US', this.options);
  }
}
