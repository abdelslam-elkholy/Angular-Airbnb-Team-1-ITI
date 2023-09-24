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
    });
  }
}
