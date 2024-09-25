import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private isAuthenticated = false;

  constructor(private router: Router) {}

  login(username: string, password: string) {
    // Simulate API call
    if (username === 'user' && password === 'password') {
      this.isAuthenticated = true;
      localStorage.setItem('authToken', 'fake-jwt-token'); // Store JWT token
      this.router.navigate(['/dashboard-data']); // Navigate to dashboard
    }
  }

  logout() {
    this.isAuthenticated = false;
    localStorage.removeItem('authToken');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('authToken');
  }
}
