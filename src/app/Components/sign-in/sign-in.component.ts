import { Component } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
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
    private cookieService: CookieService,
    private router: Router
  ) {}

  login(): void {
    this.authService.signin(this.email, this.password).subscribe((data) => {
      this.cookieService.set('token', data.toString());
      this.authService.fetchUserData().subscribe((role) => {
        this.authService.isLoggedIn(), this.authService.isAdmin();

        this.router.navigate(['/']);
      });
    });
  }
}
