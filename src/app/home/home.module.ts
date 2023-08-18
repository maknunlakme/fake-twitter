import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NewTweetComponent } from './new-tweet/new-tweet.component';
import {ReactiveFormsModule} from "@angular/forms";
import {NavBarModule} from "../shared/modules/nav-bar/nav-bar.module";


@NgModule({
  declarations: [
    HomeComponent,
    NewTweetComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    NavBarModule
  ]
})
export class HomeModule { }
