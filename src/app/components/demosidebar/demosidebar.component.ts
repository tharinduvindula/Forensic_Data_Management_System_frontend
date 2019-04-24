import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
  { path: '/user-profile', title: 'User Profile',  icon: 'person', class: '' },
  { path: '/analysis', title: 'Report Analysis',  icon: 'show_chart', class: '' },
  { path: '/add', title: 'New Report',  icon: 'add', class: '' },
  { path: '/edit', title: 'Update Report',  icon: 'edit', class: '' },
  { path: '/delete', title: 'Delete Report',  icon: 'delete', class: '' },
  { path: '/retrieve', title: 'Retrieve Report',  icon: 'description', class: '' },
  
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
