import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthService} from "../service/auth.service";

@Injectable()
export class JwtTokenInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let newRequest = request.clone({
      headers: request.headers.set('Content-Type', 'application/json')
    });
    if (this.authService.isLoggedIn()) {
      newRequest = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${this.authService.authToken}`)
      });
    }
    return next.handle(newRequest);
  }
}
