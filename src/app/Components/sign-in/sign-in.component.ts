import { Component } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent {
  email: string = '';
  password: string = '';
  constructor(private authService: AuthService) {}

  login(): void {
    console.log(this.email, this.password);
    this.authService.login(this.email, this.password).subscribe((data) => {});
  }
}
