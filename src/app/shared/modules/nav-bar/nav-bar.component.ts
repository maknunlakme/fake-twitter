import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  isMenuCollapsed = true;
  constructor(private router: Router) {
  }

  redirectTo(url: string) {
    this.router.navigate([url]);
  }

  logOut() {
    localStorage.removeItem('token');
    this.redirectTo('/login');
  }
}
