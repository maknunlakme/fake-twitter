import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchUserComponent } from './search-user.component';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    SearchUserComponent
  ],
  exports: [
    SearchUserComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class SearchUserModule { }
