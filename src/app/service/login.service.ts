import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {
  }

  postLogin(body: any) {
    return this.http.post(environment.apiBaseUrl + environment.version + '/login', body);
  }

  postSignUp(body: any) {
    return this.http.post(environment.apiBaseUrl + environment.version + '/signup', body);
  }
}
