import {Component, OnInit} from '@angular/core';
import {ProfileService} from "../service/profile.service";
import {ActivatedRoute} from "@angular/router";
import {MyProfileService} from "../service/my-profile.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  id: any;
  userInfo: any;
  tweets: any;
  followers: any;
  followings: any;
  active: any;

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
      this.getFollowers();
      this.getFollowings();
      this.getTweets();
    });

  }

  getTweets() {
    if (this.id) {
      this.profileService.getUserTweets(this.id).subscribe((data: any) => {
        this.tweets = data.tweets;
      });
    } else {
      this.myProfileService.getMyTweets(this.id).subscribe((data: any) => {
        this.tweets = data.my_tweets;
      });
    }
  }

  getFollowers() {
    if (this.id) {
      this.profileService.getUserFollowers(this.id).subscribe((data: any) => {
        this.followers = data;
      });
    } else {
      this.myProfileService.getMyFollowers(this.id).subscribe((data: any) => {
        this.followers = data;
      });
    }
  }

  getFollowings() {
    if (this.id) {
      this.profileService.getUserFollowings(this.id).subscribe((data: any) => {
        this.followings = data;
      });
    } else {
      this.myProfileService.getMyFollowings(this.id).subscribe((data: any) => {
        this.followings = data;
      });
    }
  }

}
