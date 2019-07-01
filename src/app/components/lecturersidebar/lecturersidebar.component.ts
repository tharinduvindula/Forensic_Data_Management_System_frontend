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
  { path: '/lecturer/Dashboard', title: 'Dashboard', icon: 'dashboard', class: '' },
  { path: '/lecturer/add-demo', title: 'Add Users', icon: 'person_add', class: '' },
  { path: '/lecturer/analysis', title: 'Report Analysis', icon: 'show_chart', class: '' },
  { path: '/lecturer/add', title: 'New Report', icon: 'add', class: '' },
  { path: '/lecturer/retrieve', title: 'Retrieve Report', icon: 'description', class: '' },
];

@Component({
  selector: 'app-lecturersidebar',
  templateUrl: './lecturersidebar.component.html',
  styleUrls: ['./lecturersidebar.component.css']
})
export class LecturersidebarComponent implements OnInit {
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
        this.router.navigate(['/lecturer/User-Profile']);
      },
      error => {
        console.log(error)
      }
    );
  }
}
