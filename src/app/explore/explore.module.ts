import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExploreRoutingModule } from './explore-routing.module';
import { ExploreComponent } from './explore.component';
import {NavBarModule} from "../shared/modules/nav-bar/nav-bar.module";
import {SearchUserModule} from "../shared/modules/search-user/search-user.module";
import {UserModule} from "../shared/modules/user/user.module";


@NgModule({
  declarations: [
    ExploreComponent
  ],
  imports: [
    CommonModule,
    ExploreRoutingModule,
    NavBarModule,
    SearchUserModule,
    UserModule
  ]
})
export class ExploreModule { }
