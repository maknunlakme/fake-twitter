import {Component, OnInit} from '@angular/core';
import {ProfileService} from "../service/profile.service";
import {ActivatedRoute} from "@angular/router";
import {MyProfileService} from "../service/my-profile.service";
import {NgbNavChangeEvent} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  id: any;
  userInfo: any;
  tweets: any;
  tweetCount: any;
  active: any;
  page:any = 1;
  size: any = 30;

  constructor(
    private profileService: ProfileService,
    private myProfileService: MyProfileService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.userInfo = params;
      this.id = this.userInfo.id;
      this.getTweets();
    });

  }

  getTweets() {
    if (this.id) {
      this.profileService.getUserTweets(this.id, this.page, this.size).subscribe((data: any) => {
        this.tweetCount = data.count;
        this.tweets = data.tweets;
      });
    } else {
      this.myProfileService.getMyTweets(this.id).subscribe((data: any) => {
        this.tweetCount = data.count;
        this.tweets = data.my_tweets;
      });
    }
  }

  getPageValue($event: number) {
    this.page = $event;
    this.getTweets();
  }

  onNavChange($event: NgbNavChangeEvent<any>) {
    this.page = 1;
  }
}
