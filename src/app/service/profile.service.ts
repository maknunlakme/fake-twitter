import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(environment.apiBaseUrl + environment.version + '/users');
  }

  postSearchUsername(body: any) {
    return this.http.post(environment.apiBaseUrl + environment.version + '/search', body);
  }

  getUserTweets(id: number) {
    return this.http.get(environment.apiBaseUrl + environment.version + '/users/' + id + '/tweets');
  }

  getUserFollowers(id: number) {
    return this.http.get(environment.apiBaseUrl + environment.version + '/users/' + id + '/followers');
  }

  getUserFollowings(id: number) {
    return this.http.get(environment.apiBaseUrl + environment.version + '/users/' + id + '/following');
  }
}