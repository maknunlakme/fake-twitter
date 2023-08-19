import {AfterViewInit, Component, Input} from '@angular/core';
import {ProfileService} from "../../service/profile.service";
import {MyProfileService} from "../../service/my-profile.service";

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.scss']
})
export class FollowersComponent implements AfterViewInit {
  @Input() id:any;
  page: number = 1;
  size: any = 30;
  followers: any;

  constructor(
    private profileService: ProfileService,
    private myProfileService: MyProfileService,
  ) {
  }

  ngAfterViewInit() {
    this.getFollowers();
  }

  getFollowers() {
    if (this.id) {
      this.profileService.getUserFollowers(this.id, this.page, this.size).subscribe((data: any) => {
        this.followers = data;
      });
    } else {
      this.myProfileService.getMyFollowers(this.id).subscribe((data: any) => {
        this.followers = data;
      });
    }
  }

  getPageValue($event: number) {
    this.page = $event;
    this.getFollowers();
  }
}
