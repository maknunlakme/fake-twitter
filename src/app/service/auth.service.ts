import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: any;

  constructor() {
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    if (!token) {
      return false;
    } else {
      return true;
      // return !this.jwtHelper.isTokenExpired(token);
    }
  }
}
