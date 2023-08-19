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
  @Output() toastEvent: EventEmitter<any> = new EventEmitter();
  signUpSubscription: Subscription;
  toast = {
    show: false,
    message: '',
    className: ''
  }

  signUp = this.formBuilder.group({
    username: ['', [Validators.required]],
    email: ['', [Validators.required,Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
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
      .subscribe((data:any) => {
        this.signUp.reset();
        this.goToLogin();
        this.toast = {
          show: true,
          message: 'Sign up successful, now you can login',
          className: 'bg-success text-light position-absolute end-0'
        }
        this.toastEvent.emit(this.toast);
      }, (error)=>{
        this.toast = {
          show: true,
          message: error.error.error,
          className: 'bg-danger text-light position-absolute end-0'
        }
        this.toastEvent.emit(this.toast);
      })
  }

  showValidationMessage(value:string) {
    return this.signUp.get(value)?.invalid && (this.signUp.get(value)?.touched || this.signUp.get(value)?.dirty);
  }
}
