import {Component, OnInit} from '@angular/core';
import {TweetService} from "../service/tweet.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  timeline: any;
  page: any = 1;
  size: any = 30;
  tweetCount:any;

  constructor(private tweetService: TweetService) {
  }

  ngOnInit() {
    this.getMyTimeline();
  }

  getMyTimeline() {
    this.tweetService.getTimeline(this.page, this.size).subscribe((data: any) => {
      console.log('timeline data: ', data);
      this.timeline = data.timeline;
      this.tweetCount = data.count;
    })
  }

  getPageValue($event: any) {
    this.page = $event;
    this.getMyTimeline();
  }
}
