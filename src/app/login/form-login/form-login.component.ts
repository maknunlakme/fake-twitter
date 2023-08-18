import {Component, Output, EventEmitter, OnDestroy} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {LoginService} from "../../service/login.service";
import {Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnDestroy {
  @Output() loginEvent: EventEmitter<boolean> = new EventEmitter();
  loginSubscription: Subscription;

  login = this.formBuilder.group({
    email: ['', [Validators.required, Validators.pattern(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )]],
    password: ['', [Validators.required]]
  });


  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {
    this.loginSubscription = Subscription.EMPTY;
  }

  ngOnDestroy() {
    this.loginSubscription.unsubscribe();
  }

  loginUser() {
    this.loginSubscription = this.loginService.postLogin(this.login.value).subscribe((data: any) => {
      localStorage.setItem('token', data.token);
      this.router.navigate(['/home']);
      this.login.reset();
    })
  }

  goToSignUp() {
    this.loginEvent.emit(false);
  }
}
