import {Component, OnInit} from '@angular/core';
import {ProfileService} from "../service/profile.service";

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit {
  users: any;

  constructor(private profileService: ProfileService) {

  }


  ngOnInit() {
    this.profileService.getUsers().subscribe((data: any) => {
      this.users = data.users;
      console.log('users: ', data);
    })
  }

}
