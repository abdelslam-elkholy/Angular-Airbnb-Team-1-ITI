import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  login(email: string, password: string): Observable<object> {
    return this.httpClient.post(`${environment.BaseApiURL}/users/signin`, {
      email,
      password,
    });
  }

  getToken(name: string): string | undefined {
    const value = '; ' + document.cookie;
    const parts = value.split('; ' + name + '=');

    if (parts.length === 2) return parts.pop()!.split(';').shift();
    return undefined;
  }
}
