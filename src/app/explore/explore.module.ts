import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExploreRoutingModule } from './explore-routing.module';
import { ExploreComponent } from './explore.component';
import {UserModule} from "../shared/modules/user/user.module";


@NgModule({
  declarations: [
    ExploreComponent
  ],
  imports: [
    CommonModule,
    ExploreRoutingModule,
    UserModule
  ]
})
export class ExploreModule { }
