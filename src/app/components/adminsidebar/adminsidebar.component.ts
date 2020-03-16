import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MultiuserhandleService } from 'app/service/multiuserhandle.service';
import { TokenService } from 'app/service/token.service';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/admin/Dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/admin/Add-Users', title: 'Add Users', icon: 'person_add', class: '' },
    { path: '/admin/User-Access', title: 'User Access', icon: 'phonelink_off', class: '' },
    { path: '/admin/Password-Reset', title: 'Password Reset', icon: 'phonelink_off', class: '' },
    { path: '/admin/Edit-User-Detail', title: 'Edit User Detail', icon: 'recent_actors', class: '' },
    { path: '/admin/User-Profile', title: 'User Profile',  icon: 'person', class: '' },

];


@Component({
  selector: 'app-adminsidebar',
  templateUrl: './adminsidebar.component.html',
  styleUrls: ['./adminsidebar.component.css']
})
export class AdminsidebarComponent implements OnInit {
  menuItems: any[];
  public form = {
    email: null
  }

  constructor(private router: Router, private UserHandle: MultiuserhandleService, private token: TokenService) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
  dirtoprofile() {
    this.form.email = this.token.payload(this.token.gettoken()).ud.email;
    this.UserHandle.multiuserhandleforuser(this.form).subscribe(
      data => {
        this.router.navigate(['/admin/User-Profile']);
      },
      error => {
        console.log(error)
      }
    );
  }
}
