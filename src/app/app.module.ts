import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {JwtTokenInterceptor} from "./interceptor/jwt-token.interceptor";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SearchUserModule} from "./shared/modules/search-user/search-user.module";
import {NavBarModule} from "./shared/modules/nav-bar/nav-bar.module";
import {environment} from "../environments/environment";
import {initializeApp} from "firebase/app";
import {JWT_OPTIONS, JwtHelperService} from "@auth0/angular-jwt";

initializeApp(environment.firebaseConfig);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    SearchUserModule,
    NavBarModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtTokenInterceptor,
      multi: true
    },
    {provide: JWT_OPTIONS, useValue: JWT_OPTIONS},
    JwtHelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
