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
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
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

  showValidationMessage(value:string) {
    return this.login.get(value)?.invalid && (this.login.get(value)?.touched || this.login.get(value)?.dirty);
  }

}
