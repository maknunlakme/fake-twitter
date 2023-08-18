import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {JwtTokenInterceptor} from "./interceptor/jwt-token.interceptor";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {SearchUserModule} from "./shared/modules/search-user/search-user.module";
import {NavBarModule} from "./shared/modules/nav-bar/nav-bar.module";

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
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
