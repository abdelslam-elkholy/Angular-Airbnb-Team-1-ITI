import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';

export const AdminGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const token = authService.getAuthToken();
  console.log('guard is working ');

  if (token) {
    console.log('token is working');

    if (authService.fetchUserData()) {
      console.log('admin is working');
      return true;
    } else {
      console.log('admin is not working');
      router.navigate(['/signin']);
      return false;
    }
  } else {
    console.log('token is not working');
    router.navigate(['/signin']);
    return false;
  }
};
