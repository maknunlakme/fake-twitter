import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import {NavBarModule} from "../shared/modules/nav-bar/nav-bar.module";
import {SearchUserModule} from "../shared/modules/search-user/search-user.module";
import {UserModule} from "../shared/modules/user/user.module";


@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    NavBarModule,
    SearchUserModule,
    UserModule
  ]
})
export class SearchModule { }
