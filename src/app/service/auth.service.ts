import {Injectable} from '@angular/core';
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: any;

  constructor(private jwtHelper: JwtHelperService) {
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    if (!token) {
      return false;
    } else {
      if (this.jwtHelper.isTokenExpired(token)) {
        localStorage.removeItem('token');
        return false;
      } else {
        return true;
      }
    }
  }
}
