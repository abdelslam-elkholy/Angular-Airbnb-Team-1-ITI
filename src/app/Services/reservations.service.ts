import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IReservation } from '../Models/IReservation';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ReservationsService {
  constructor(private httpClient: HttpClient) {}

  getAllReservations(): Observable<IReservation[]> {
    return this.httpClient
      .get(`${environment.BaseApiURL}/reservations`)
      .pipe(map((res: any) => res.data.reservations));
  }

  getReservationById(id: string): Observable<IReservation> {
    return this.httpClient
      .get(`${environment.BaseApiURL}/reservations${id}`)
      .pipe(map((res: any) => res.data.reservation));
  }

  getReservationsByUserId(id: string): Observable<IReservation> {
    return this.httpClient
      .get(`${environment.BaseApiURL}/reservations/user/${id}`)
      .pipe(map((res: any) => res.data.reservations));
  }

  getReservationsByHouseId(id: string): Observable<IReservation> {
    return this.httpClient
      .get(`${environment.BaseApiURL}/reservations/house/${id}`)
      .pipe(map((res: any) => res.data.reservations));
  }

  deleteReservation(id: string) {
    return this.httpClient.delete(
      `${environment.BaseApiURL}/reservations/${id}`
    );
  }
}
