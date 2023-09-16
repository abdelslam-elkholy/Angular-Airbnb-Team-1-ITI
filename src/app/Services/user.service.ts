import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
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

  getUsers() {
    return this.httpClient.get(`${environment.BaseApiURL}/user/`);
  }

  getUser(id: number) {
    return this.httpClient.get(`${environment.BaseApiURL}/user/${id}`);
  }

  deleteUser(id: number) {
    return this.httpClient.delete(`${environment.BaseApiURL}/user/${id}`);
  }

  updateUser(id: number, user: object) {
    return this.httpClient.put(`${environment.BaseApiURL}/user/${id}`, user);
  }
}
