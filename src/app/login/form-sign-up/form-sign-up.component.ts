import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {LoginService} from "../../service/login.service";

@Component({
  selector: 'app-form-sign-up',
  templateUrl: './form-sign-up.component.html',
  styleUrls: ['./form-sign-up.component.scss']
})
export class FormSignUpComponent {
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
  }

  signUpUser() {
    this.loginService.postSignUp(this.signUp.value).subscribe((data)=>{
      console.log('post sign-up data: ', data);
      this.signUp.reset();
    })
  }
}
