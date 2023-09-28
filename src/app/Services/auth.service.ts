import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = false;
  private userRole = '';

  constructor(
    private httpClient: HttpClient,
    private cookieService: CookieService
  ) {}

  signin(email: string, password: string): Observable<object> {
    return this.httpClient
      .post(`${environment.BaseApiURL}/users/signin`, {
        email,
        password,
      })
      .pipe(map((response: any) => response.token));
  }

  login() {
    this.isAuthenticated = true;
    this.userRole = 'admin';
  }

  logout() {
    this.isAuthenticated = false;
    this.userRole = '';
    this.cookieService.delete('token');
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  isAdmin(): boolean {
    return this.userRole === 'admin';
  }

  getAuthToken(): string {
    return this.cookieService.get('token');
  }

  fetchUserData(): Observable<any> {
    return this.httpClient.get(`${environment.BaseApiURL}/users/getme`).pipe(
      map((response: any) => {
        return response.data.user.role === 'admin';
      })
    );
  }
}
