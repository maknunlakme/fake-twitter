import {Component, Input} from '@angular/core';
import * as moment from "moment";
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  @Input() user:any;

  showDate(date: any) {
    return moment(date).fromNow();
  }
}
