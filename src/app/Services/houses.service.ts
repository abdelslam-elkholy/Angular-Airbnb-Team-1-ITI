import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IHouse } from '../Models/IHouse';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class HousesService {
  constructor(private httpClient: HttpClient) {}
  getAllHouses(): Observable<IHouse[]> {
    return this.httpClient.get<IHouse[]>(`${environment.BaseApiURL}/house`);
  }

  getHouseById(id: string): Observable<IHouse> {
    return this.httpClient.get<IHouse>(`${environment.BaseApiURL}/house/${id}`);
  }

  addHouse(house: IHouse): Observable<IHouse> {
    return this.httpClient.post<IHouse>(
      `${environment.BaseApiURL}/house`,
      house
    );
  }

  updateHouse(house: IHouse): Observable<IHouse> {
    return this.httpClient.put<IHouse>(
      `${environment.BaseApiURL}/house/${house.id}`,
      house
    );
  }

  deleteHouse(id: string): Observable<IHouse> {
    return this.httpClient.delete<IHouse>(
      `${environment.BaseApiURL}/house/${id}`
    );
  }
}
