import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";

import {LoginRoutingModule} from './login-routing.module';
import {LoginComponent} from './login.component';
import {FormLoginComponent} from './form-login/form-login.component';
import { FormSignUpComponent } from './form-sign-up/form-sign-up.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
  declarations: [
    LoginComponent,
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
    NgbModule
  ]
})
export class LoginModule {
}
