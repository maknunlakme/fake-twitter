import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import {HomeModule} from "../home/home.module";
import {TweetModule} from "../shared/modules/tweet/tweet.module";
import {UserModule} from "../shared/modules/user/user.module";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {PaginationModule} from "../shared/modules/pagination/pagination.module";
import { FollowersComponent } from './followers/followers.component';
import { FollowingComponent } from './following/following.component';


@NgModule({
  declarations: [
    ProfileComponent,
    FollowersComponent,
    FollowingComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    HomeModule,
    TweetModule,
    UserModule,
    NgbModule,
    PaginationModule
  ]
})
export class ProfileModule { }
