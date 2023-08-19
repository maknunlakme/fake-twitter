import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  postSearchUsername(body: any) {
    return this.http.post(environment.apiBaseUrl + environment.version + '/search', body);
  }

  postFollow(body:any) {
    return this.http.post(environment.apiBaseUrl + environment.version + '/follow', body);
  }

  postUnfollow(body: any) {
    return this.http.post(environment.apiBaseUrl + environment.version + '/unfollow', body);
  }
}
