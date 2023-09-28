import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  login(email: string, password: string): Observable<object> {
    return this.httpClient
      .post(`${environment.BaseApiURL}/users/signin`, {
        email,
        password,
      })
      .pipe(map((response: any) => response.token));
  }
}
