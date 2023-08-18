import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: string | null;

  constructor() {
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    if (!token) {
      return false;
    }
    return true;
    // return !this.jwtHelper.isTokenExpired(token);
  }
}
