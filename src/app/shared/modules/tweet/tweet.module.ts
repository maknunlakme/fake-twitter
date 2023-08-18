import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TweetComponent } from './tweet.component';



@NgModule({
    declarations: [
        TweetComponent
    ],
    exports: [
        TweetComponent
    ],
    imports: [
        CommonModule
    ]
})
export class TweetModule { }
