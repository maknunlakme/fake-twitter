import {Component, Input} from '@angular/core';
import * as moment from "moment";

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.scss']
})
export class TweetComponent {
  @Input() tweet:any;

  showTime(value:any) {
    return moment(value).fromNow();
  }
}
