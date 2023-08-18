import {Component} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {LoginService} from "../service/login.service";

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent {
  login = this.formBuilder.group({
    email: ['', [Validators.required, Validators.pattern(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )]],
    password: ['', [Validators.required]]
  });


  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService
  ) {
  }


  loginUser() {
    this.loginService.postLogin(this.login.value).subscribe((data)=>{
      console.log('post login data: ', data);
    })
  }
}
