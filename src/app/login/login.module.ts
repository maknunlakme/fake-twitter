import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LogoComponent } from './logo/logo.component';
import { FormLoginComponent } from './form-login/form-login.component';


@NgModule({
    declarations: [
        LoginComponent,
        LogoComponent,
        FormLoginComponent
    ],
    exports: [
        LoginComponent
    ],
    imports: [
        CommonModule,
        LoginRoutingModule
    ]
})
export class LoginModule { }
