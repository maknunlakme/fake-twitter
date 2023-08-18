import {Component, OnInit} from '@angular/core';
import {TweetService} from "../service/tweet.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  timeline:any;

  constructor(private tweetService: TweetService) {
  }

  ngOnInit() {
    this.tweetService.getTimeline(1, 30).subscribe((data: any) => {
      console.log('timeline data: ', data);
      this.timeline = data.timeline;
    })
  }

}
