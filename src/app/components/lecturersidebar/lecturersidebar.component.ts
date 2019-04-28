import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/lecturer/dashboard', title: 'Dashboard', icon: 'dashboard', class: '' },
  { path: '/lecturer/user-profile', title: 'User Profile', icon: 'person', class: '' },
  { path: '/lecturer/analysis', title: 'Report Analysis', icon: 'show_chart', class: '' },
  { path: '/lecturer/add', title: 'New Report', icon: 'add', class: '' },
  { path: '/lecturer/lecturerretrieve', title: 'Retrieve Report', icon: 'description', class: '' },
];

@Component({
  selector: 'app-lecturersidebar',
  templateUrl: './lecturersidebar.component.html',
  styleUrls: ['./lecturersidebar.component.css']
})
export class LecturersidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
