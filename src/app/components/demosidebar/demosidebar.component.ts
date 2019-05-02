import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/demo/Dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
  { path: '/demo/User-Profile', title: 'User Profile',  icon: 'person', class: '' },
  { path: '/demo/analysis', title: 'Report Analysis',  icon: 'show_chart', class: '' },
  { path: '/demo/add', title: 'New Report',  icon: 'add', class: '' },
  { path: '/demo/demoretrieve', title: 'Retrieve Report',  icon: 'pageview', class: '' },

];

@Component({
  selector: 'app-demosidebar',
  templateUrl: './demosidebar.component.html',
  styleUrls: ['./demosidebar.component.css']
})
export class DemosidebarComponent implements OnInit {
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
