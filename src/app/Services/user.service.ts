import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  login(email: string, password: string): Observable<object> {
    return this.httpClient.post(`${environment.BaseApiURL}/user//signin`, {
      email,
      password,
    });
  }

  getUsers() {
    return this.httpClient.get(`${environment.BaseApiURL}/user/`);
  }

  getUser(id: number) {
    return this.httpClient.get(`${environment.BaseApiURL}/user/${id}`);
  }

  deleteUser(id: number) {
    return this.httpClient.delete(`${environment.BaseApiURL}/user/${id}`);
  }
}
