import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { IHouse } from '../Models/IHouse';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class HousesService {
  constructor(private httpClient: HttpClient) {}

  getAllHouses(): Observable<IHouse[]> {
    return this.httpClient
      .get<IHouse[]>(`${environment.BaseApiURL}/houses`)
      .pipe(map((res: any) => res.data.houses));
  }

  getHouseById(id: string): Observable<IHouse> {
    return this.httpClient
      .get<any>(`${environment.BaseApiURL}/houses/${id}`)
      .pipe(map((res: any) => res.data.house));
  }

  addHouse(house: FormData): Observable<IHouse> {
    try {
      return this.httpClient.post<IHouse>(
        `${environment.BaseApiURL}/houses`,
        house
      );
    } catch (error: any) {
      console.error('HTTP Error:', error);
      console.error('Error Status:', error.status);
      console.error('Error Message:', error.message);
      throw 'Something went wrong. Please try again later.';
    }
  }

  updateHouse(house: FormData, id: string): Observable<IHouse> {
    return this.httpClient.patch<IHouse>(
      `${environment.BaseApiURL}/houses/${id}`,
      house
    );
  }

  deleteHouse(id: string): Observable<IHouse> {
    return this.httpClient.delete<IHouse>(
      `${environment.BaseApiURL}/houses/${id}`
    );
  }
}
