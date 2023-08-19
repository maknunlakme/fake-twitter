import {AfterViewInit, Component, Input} from '@angular/core';
import {ProfileService} from "../../service/profile.service";
import {MyProfileService} from "../../service/my-profile.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements AfterViewInit {
  @Input() id: any;
  page: number = 1;
  size: any = 30;
  tweets: any;
  tweetCount: any;

  constructor(
    private profileService: ProfileService,
    private myProfileService: MyProfileService,
  ) {
  }

  ngAfterViewInit() {
    this.getTweets();
  }

  getTweets() {
    if (this.id) {
      this.profileService.getUserTweets(this.id, this.page, this.size).subscribe((data: any) => {
        this.tweetCount = data.count;
        this.tweets = data.tweets;
      });
    } else {
      this.myProfileService.getMyTweets(this.id, this.page, this.size).subscribe((data: any) => {
        this.tweetCount = data.count;
        this.tweets = data.my_tweets;
      });
    }
  }


  getPageValue($event: number) {
    this.page = $event;
    this.getTweets();
  }

}
