import {Component, OnInit} from '@angular/core';
import {ProfileService} from "../service/profile.service";
import {ActivatedRoute} from "@angular/router";
import {MyProfileService} from "../service/my-profile.service";
import {NgbNavChangeEvent} from "@ng-bootstrap/ng-bootstrap";
import {SearchService} from "../service/search.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  id: any;
  userInfo: any;
  active: any;
  toast: any;

  constructor(
    private profileService: ProfileService,
    private myProfileService: MyProfileService,
    private route: ActivatedRoute,
    private searchService: SearchService
  ) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.userInfo = params;
      this.id = this.userInfo.id;
      this.active = 1;
    });
  }

  unfollowUser() {
    this.searchService.postUnfollow({user_id: this.id}).subscribe((data: any) => {
      this.toast = {
        show: true,
        message: data.resp,
        className: 'bg-success text-light position-absolute end-0'
      }
    });
  }

  followUser() {
    this.searchService.postFollow({user_id: this.id}).subscribe((data:any) => {
      this.toast = {
        show: true,
        message: data.resp,
        className: 'bg-success text-light position-absolute end-0'
      }
    });
  }
}
