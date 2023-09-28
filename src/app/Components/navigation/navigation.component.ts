import { AuthService } from 'src/app/Services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  isloggedIn: boolean = false;
  constructor(private router: Router, private authService: AuthService) {
    this.isloggedIn = this.authService.isLoggedIn();
  }

  ngOnInit(): void {
    this.activateLink('/houses');
  }

  activateLink(link: string) {
    this.router.navigateByUrl(link);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/signin']);
  }
}
