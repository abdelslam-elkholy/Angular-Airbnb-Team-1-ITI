import { Component } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent {
  email: string = '';
  password: string = '';
  constructor(
    private authService: AuthService,
    private cookieService: CookieService
  ) {}

  login(): void {
    this.authService.signin(this.email, this.password).subscribe((data) => {
      this.cookieService.set('token', data.toString());
      this.authService.login();
      this.authService.fetchUserData().subscribe((data) => {
        console.log(data);
      });
    });
  }
}
