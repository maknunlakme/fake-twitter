import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {
  }

  postLogin(body: any) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post(environment.apiBaseUrl + environment.version + '/login', body, {headers});
  }
}
