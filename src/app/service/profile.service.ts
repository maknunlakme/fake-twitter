import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(environment.apiBaseUrl + environment.version + '/users');
  }



  getUserTweets(id: any, page:any, size: any) {
    const params: HttpParams = new HttpParams().set('page', page).set('size', size);
    return this.http.get(environment.apiBaseUrl + environment.version + '/users/' + id + '/tweets', {params});
  }

  getUserFollowers(id: any, page:any, size: any) {
    const params: HttpParams = new HttpParams().set('page', page).set('size', size);
    return this.http.get(environment.apiBaseUrl + environment.version + '/users/' + id + '/followers', {params});
  }

  getUserFollowings(id: any, page:any, size: any) {
    const params: HttpParams = new HttpParams().set('page', page).set('size', size);
    return this.http.get(environment.apiBaseUrl + environment.version + '/users/' + id + '/following', {params});
  }
}
