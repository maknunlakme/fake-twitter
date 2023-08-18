import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TweetService {

  constructor(private http: HttpClient) {
  }

  getTimeline(page: number, size: number) {
    const params = new HttpParams().set('page', page).set('size', size);
    return this.http.get(environment.apiBaseUrl + environment.version + '/timeline', {params});
  }

  postTweet(body: any) {
    return this.http.post(environment.apiBaseUrl + environment.version + '/tweet', body);
  }
}
