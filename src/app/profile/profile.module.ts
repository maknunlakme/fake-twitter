import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import {NavBarModule} from "../shared/modules/nav-bar/nav-bar.module";
import {SearchUserModule} from "../shared/modules/search-user/search-user.module";


@NgModule({
  declarations: [
    ProfileComponent
  ],
    imports: [
        CommonModule,
        ProfileRoutingModule,
        NavBarModule,
        SearchUserModule
    ]
})
export class ProfileModule { }
