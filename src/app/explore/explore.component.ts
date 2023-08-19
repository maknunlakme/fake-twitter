import {Component, OnInit} from '@angular/core';
import {ProfileService} from "../service/profile.service";

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit {
  users: any;
  page: any = 1;
  size: any = 30;
  userCount:any;

  constructor(private profileService: ProfileService) {

  }


  ngOnInit() {
    this.exploreUsers();
  }

  exploreUsers() {
    this.profileService.getUsers(this.page, this.size).subscribe((data: any) => {
      this.users = data.users;
      this.userCount = data.count;
      console.log('users: ', data);
    });
  }

  getPageValue($event: number) {
    this.page = $event;
    this.exploreUsers();
  }

}
