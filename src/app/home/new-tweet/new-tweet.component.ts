import {Component} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {TweetService} from "../../service/tweet.service";

@Component({
  selector: 'app-new-tweet',
  templateUrl: './new-tweet.component.html',
  styleUrls: ['./new-tweet.component.scss']
})
export class NewTweetComponent {
  tweet = this.formBuilder.group({
    content: ['', [Validators.required]]
  });

  constructor(
    private formBuilder: FormBuilder,
    private tweetService: TweetService
  ) {
  }

  onTweet() {
    this.tweetService.postTweet(this.tweet.value).subscribe((data) => {
      console.log('tweet response: ', data);
      this.tweet.reset();
    })
  }
}
