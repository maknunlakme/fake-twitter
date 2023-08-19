import {Component, Input} from '@angular/core';
import * as moment from "moment";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  @Input() user: any;

  constructor(private router: Router) {
  }

  showDate(date: any) {
    return moment(date).fromNow();
  }

  goToProfile() {
    this.router.navigate(['/profile'], {
      queryParams: this.user,
      skipLocationChange: true
    });
  }
}
