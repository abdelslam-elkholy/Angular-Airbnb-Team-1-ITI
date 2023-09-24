import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, map } from 'rxjs';
import { IUser } from '../Models/IUser';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  http = {};
  constructor(private httpClient: HttpClient) {
    this.http = {
      Headers: {
        'Content-Type': 'application/json',
        // Authorization: 'Bearer ' + this.getCookie('token'),
      },
    };
  }

  getAllUsers(): Observable<IUser[]> {
    return this.httpClient
      .get<IUser[]>(`${environment.BaseApiURL}/users/`)
      .pipe(map((res: any) => res.data.users));
  }

  getDeactivatedUsers(): Observable<IUser[]> {
    return this.httpClient
      .get<IUser[]>(`${environment.BaseApiURL}/users/deactivated`)
      .pipe(map((res: any) => res.data.users));
  }

  getHosts(): Observable<IUser[]> {
    return this.httpClient
      .get<IUser[]>(`${environment.BaseApiURL}/users/hosts`)
      .pipe(map((res: any) => res.data.hosts));
  }

  getUser(id: string): Observable<IUser> {
    return this.httpClient
      .get<any>(`${environment.BaseApiURL}/users/${id}}`)
      .pipe(map((res: any) => res.data.user));
  }

  deleteUser(id: string): Observable<any> {
    return this.httpClient.delete(`${environment.BaseApiURL}/users/${id}`);
  }

  activatUser(id: string): Observable<any> {
    return this.httpClient.get(
      `${environment.BaseApiURL}/users/activate/${id}`
    );
  }

  deactivatUser(id: string): Observable<any> {
    return this.httpClient.delete(
      `${environment.BaseApiURL}/users/deactivate/${id}`
    );
  }

  makeHost(id: string): Observable<any> {
    return this.httpClient.get(
      `${environment.BaseApiURL}/users/makehost/${id}`
    );
  }

  deleteHost(id: string): Observable<any> {
    return this.httpClient.delete(
      `${environment.BaseApiURL}/users/deletehost/${id}`
    );
  }
}
