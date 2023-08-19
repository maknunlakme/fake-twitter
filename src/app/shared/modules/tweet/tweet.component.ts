import {Component, Input} from '@angular/core';
import * as moment from "moment";
import {Router} from "@angular/router";

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.scss']
})
export class TweetComponent {
  @Input() tweet:any;

  constructor(private router: Router) {
  }

  showTime(value:any) {
    return moment(value).fromNow();
  }

  goToProfile() {
      this.router.navigate(['/profile'], {
        queryParams: this.tweet.user
      });
  }
}
