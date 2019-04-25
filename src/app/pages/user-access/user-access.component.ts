import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSlideToggle } from '@angular/material';

declare const $: any;
declare interface RouteInfo {
  nic: string;
  editpath: string;
  deletepath: string;
  name: string;
  photo: string;
  startDate: string;
  contactNumber: string;
  email: string;
  type: string;
}
export const ROUTES: RouteInfo[] = [
  {
    // tslint:disable-next-line: max-line-length
    nic: '963190042v', editpath: '/user-profile-edit', deletepath: '/user-profile-delete', name: 'tharindu', photo: 'assets/img/faces/marc.jpg',
    startDate: '2019/04/22', contactNumber: '0717615678', email: 'tharinduvindula@gmail.com', type: 'demo'
  },
  {
    nic: '963190042v', editpath: '/user-profile-edit', deletepath: '/user-profile-delete', name: 'tharindu', photo: 'assets/img/cover.jpeg',
    startDate: '2019/04/22', contactNumber: '0717615678', email: 'tharinduvindula@gmail.com', type: 'demo'
  },
  {
    nic: '963190042v', editpath: '/user-profile-edit', deletepath: '/user-profile-delete', name: 'tharindu', photo: 'assets/img/cover.jpeg',
    startDate: '2019/04/22', contactNumber: '0717615678', email: 'tharinduvindula@gmail.com', type: 'demo'
  },
  {
    nic: '963190042v', editpath: '/user-profile-edit', deletepath: '/user-profile-delete', name: 'tharindu', photo: 'assets/img/cover.jpeg',
    startDate: '2019/04/22', contactNumber: '0717615678', email: 'tharinduvindula@gmail.com', type: 'demo'
  },
  {
    nic: '963190042v', editpath: '/user-profile-edit', deletepath: '/user-profile-delete', name: 'tharindu', photo: 'assets/img/cover.jpeg',
    startDate: '2019/04/22', contactNumber: '0717615678', email: 'tharinduvindula@gmail.com', type: 'demo'
  },
  {
    nic: '963190042v', editpath: '/user-profile-edit', deletepath: '/user-profile-delete', name: 'tharindu', photo: 'assets/img/cover.jpeg',
    startDate: '2019/04/22', contactNumber: '0717615678', email: 'tharinduvindula@gmail.com', type: 'lecture'
  },
];

@Component({
  selector: 'app-user-access',
  templateUrl: './user-access.component.html',
  styleUrls: ['./user-access.component.scss']
})
export class UserAccessComponent implements OnInit {
  color = 'accent';
  checked = false;
  disabled = false;
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

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
