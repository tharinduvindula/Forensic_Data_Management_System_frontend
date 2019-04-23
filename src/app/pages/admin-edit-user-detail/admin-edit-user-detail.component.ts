import { Component, OnInit } from '@angular/core';

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
    startDate: '2019/04/22', contactNumber: '0717615678', email: 'tharinduvindula@gmail.com', type: 'demo'
  },
  {
    nic: '963190042v', editpath: '/user-profile-edit', deletepath: '/user-profile-delete', name: 'tharindu', photo: 'assets/img/cover.jpeg',
    startDate: '2019/04/22', contactNumber: '0717615678', email: 'tharinduvindula@gmail.com', type: 'lecture'
  },
];


@Component({
  selector: 'app-admin-edit-user-detail',
  templateUrl: './admin-edit-user-detail.component.html',
  styleUrls: ['./admin-edit-user-detail.component.scss']
})
export class AdminEditUserDetailComponent implements OnInit {
  demosets: any[];
  lecturesets: any[];


  constructor() { }

  ngOnInit() {
    this.demosets = ROUTES.filter(menuItem => menuItem);
    this.lecturesets = ROUTES.filter(menuItem => menuItem);
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
