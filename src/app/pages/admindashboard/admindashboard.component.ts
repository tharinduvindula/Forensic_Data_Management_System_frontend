import { Component, OnInit } from '@angular/core';
import { User } from 'app/components/user-profile-add/user';



declare const $: any;
declare interface RouteInfo {
  path: string;
  name: string;
  photo: string;
  startDate: string;
  contactNumber: string;
  email: string;
  type: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: '/dashboard', name: 'tharindu', photo: 'assets/img/faces/marc.jpg', startDate: '2019/04/22',
    contactNumber: '0717615678', email: 'tharinduvindula@gmail.com', type: 'demo'
  },
  {
    path: '/dashboard', name: 'tharindu', photo: 'assets/img/cover.jpeg', startDate: '2019/04/22',
    contactNumber: '0717615678', email: 'tharinduvindula@gmail.com', type: 'demo'
  },
  {
    path: '/dashboard', name: 'tharindu', photo: 'assets/img/cover.jpeg', startDate: '2019/04/22',
    contactNumber: '0717615678', email: 'tharinduvindula@gmail.com', type: 'demo'
  },
  {
    path: '/dashboard', name: 'tharindu', photo: 'assets/img/cover.jpeg', startDate: '2019/04/22',
    contactNumber: '0717615678', email: 'tharinduvindula@gmail.com', type: 'demo'
  },
  {
    path: '/dashboard', name: 'tharindu', photo: 'assets/img/cover.jpeg', startDate: '2019/04/22',
    contactNumber: '0717615678', email: 'tharinduvindula@gmail.com', type: 'demo'
  },
  {
    path: '/dashboard', name: 'tharindu', photo: 'assets/img/cover.jpeg', startDate: '2019/04/22',
    contactNumber: '0717615678', email: 'tharinduvindula@gmail.com', type: 'lecture'
  },
];


@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {

  menuItems: any[];

  user: User[] = [];

  constructor() { }
  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    //this.getalluser();
  }
  /*getalluser() {
    this.userservice.getuser().subscribe((all)=>{
      this.user = all;
      console.log(this.user);
    })
  }*/

  isMobileMenu() {
    if (screen.width > 991) {
      return false;
    }
    return true;
  }
  isDemo(dtype) {
    if (dtype === 'demo') {
      return true;
    }
    return false;
  }
  isLecture(Ltype) {
    if (Ltype === 'lecture') {
      return true;
    }
    return false;
  }

}
