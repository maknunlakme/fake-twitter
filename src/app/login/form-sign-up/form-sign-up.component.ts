import {Component, Output, EventEmitter, OnDestroy} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {LoginService} from "../../service/login.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-form-sign-up',
  templateUrl: './form-sign-up.component.html',
  styleUrls: ['./form-sign-up.component.scss']
})
export class FormSignUpComponent implements OnDestroy {
  @Output() loginEvent: EventEmitter<boolean> = new EventEmitter();
  signUpSubscription: Subscription;

  signUp = this.formBuilder.group({
    username: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.pattern(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )]],
    password: ['', [Validators.required]]
  });

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
  ) {
    this.signUpSubscription = Subscription.EMPTY;
  }

  ngOnDestroy() {
    this.signUpSubscription.unsubscribe();
  }

  goToLogin() {
    this.loginEvent.emit(true);
  }

  signUpUser() {
    this.signUpSubscription = this.loginService
      .postSignUp(this.signUp.value)
      .subscribe((data) => {
        this.signUp.reset();
        this.goToLogin();
      })
  }
}
