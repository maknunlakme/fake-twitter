import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SearchService} from "../service/search.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit{
  users: any;
  constructor(
    private route: ActivatedRoute,
    private searchService: SearchService
  ) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const body = {
        token: params['content']
      };
      this.searchService.postSearchUsername(body).subscribe((data:any)=>{
        this.users = data;
      })
    });
  }

}
