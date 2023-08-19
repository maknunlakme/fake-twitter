import {Component} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  login: boolean = true;
  toast: any;

  getLoginValue($event: boolean) {
    this.login = $event;
  }

  getToastMessage($event: any) {
    this.toast = $event;
  }
}
