import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MyProfileService {

  constructor(private http:HttpClient) { }

  getMyTweets(id: any) {
    return this.http.get(environment.apiBaseUrl + environment.version + '/my-tweets');
  }

  getMyFollowers(id: any) {
    return this.http.get(environment.apiBaseUrl + environment.version + '/followers');
  }

  getMyFollowings(id: any) {
    return this.http.get(environment.apiBaseUrl + environment.version + '/following');
  }
}
