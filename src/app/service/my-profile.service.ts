import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MyProfileService {

  constructor(private http:HttpClient) { }

  getMyTweets(id: any, page:any, size: any) {
    const params: HttpParams = new HttpParams().set('page', page).set('size', size);
    return this.http.get(environment.apiBaseUrl + environment.version + '/my-tweets', {params});
  }

  getMyFollowers(id: any, page:any, size: any) {
    const params: HttpParams = new HttpParams().set('page', page).set('size', size);
    return this.http.get(environment.apiBaseUrl + environment.version + '/followers', {params});
  }

  getMyFollowings(id: any, page:any, size: any) {
    const params: HttpParams = new HttpParams().set('page', page).set('size', size);
    return this.http.get(environment.apiBaseUrl + environment.version + '/following', {params});
  }
}
