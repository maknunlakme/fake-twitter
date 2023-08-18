import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LoginRoutingModule} from './login-routing.module';
import {LoginComponent} from './login.component';
import {LogoComponent} from './logo/logo.component';
import {FormLoginComponent} from './form-login/form-login.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {LoginService} from "./service/login.service";
import { FormSignUpComponent } from './form-sign-up/form-sign-up.component';


@NgModule({
  declarations: [
    LoginComponent,
    LogoComponent,
    FormLoginComponent,
    FormSignUpComponent
  ],
  exports: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    LoginService
  ]
})
export class LoginModule {
}
