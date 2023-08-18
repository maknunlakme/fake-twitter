import {Component, OnInit} from '@angular/core';
import {ProfileService} from "../service/profile.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userInfo: any;
  tweets: any;
  followers: any;
  followings: any;

  constructor(
    private profileService: ProfileService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    const body = {
      token: this.route.snapshot.paramMap.get('profile')
    };
    this.profileService.postSearchUsername(body).subscribe((data: any) => {
      if (data.count == 1) {
        this.userInfo = data.search_results[0];
        this.getFollowers();
        this.getFollowings();
        this.getTweets();
      }
    })
  }

  getTweets() {
    this.profileService.getUserTweets(this.userInfo.id).subscribe((data: any) => {
      this.tweets = data.tweets;
    })
  }

  getFollowers() {
    this.profileService.getUserFollowers(this.userInfo.id).subscribe((data: any) => {
      this.followers = data;
    })
  }

  getFollowings() {
    this.profileService.getUserFollowings(this.userInfo.id).subscribe((data: any) => {
      this.followings = data;
    })
  }

}
