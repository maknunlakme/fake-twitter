import {Component} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  login: boolean = true;

  getLoginValue($event: boolean) {
    this.login = $event;
  }
}
