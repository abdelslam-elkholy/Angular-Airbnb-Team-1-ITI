import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, map } from 'rxjs';
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

  getAllUsers(): Observable<any> {
    return this.httpClient
      .get<any>(`${environment.BaseApiURL}/user/`)
      .pipe(map((res: any) => res.data.users));
  }

  getUser(id: string): Observable<any> {
    return this.httpClient
      .get<any>(`${environment.BaseApiURL}/user/${id}}`)
      .pipe(map((res: any) => res.data.user));
  }

  deleteUser(id: string): Observable<any> {
    return this.httpClient.delete(`${environment.BaseApiURL}/user/${id}`);
  }

  updateUser(id: string, user: object): Observable<any> {
    return this.httpClient.put(`${environment.BaseApiURL}/user/${id}`, user);
  }
}
