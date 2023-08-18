import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {TweetService} from "../../../service/tweet.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.scss']
})
export class SearchUserComponent {
  search = this.formBuilder.group({
    content: ['', [Validators.required]]
  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {
  }

  onSearch() {
    this.router.navigate(['/search'], {queryParams: this.search.value});
  }
}
