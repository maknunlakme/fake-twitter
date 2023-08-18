import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NewTweetComponent } from './new-tweet/new-tweet.component';
import {TweetModule} from "../shared/modules/tweet/tweet.module";


@NgModule({
  declarations: [
    HomeComponent,
    NewTweetComponent
  ],
  exports: [
    NewTweetComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    TweetModule
  ]
})
export class HomeModule { }
