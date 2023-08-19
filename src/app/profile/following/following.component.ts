import {Component, Input} from '@angular/core';
import {ProfileService} from "../../service/profile.service";
import {MyProfileService} from "../../service/my-profile.service";

@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.scss']
})
export class FollowingComponent {
  @Input() id:any;
  page: number = 1;
  size: any = 30;
  followings: any;

  constructor(
    private profileService: ProfileService,
    private myProfileService: MyProfileService,
  ) {
  }

  ngAfterViewInit() {
    this.getFollowings();
  }

  getFollowings() {
    if (this.id) {
      this.profileService.getUserFollowings(this.id, this.page, this.size).subscribe((data: any) => {
        this.followings = data;
      });
    } else {
      this.myProfileService.getMyFollowings(this.id).subscribe((data: any) => {
        this.followings = data;
      });
    }
  }


  getPageValue($event: number) {
    this.page = $event;
    this.getFollowings();
  }
}
