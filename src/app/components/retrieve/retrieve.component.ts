import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { TokenService } from 'app/service/token.service';

declare const $: any;
declare interface RouteInfo {
  srj: string;
  fname: string;
  editpath: string;
  deletepath: string;
  viewpath: string;
}
export const ROUTES: RouteInfo[] = [
  {
    srj: '390129', fname: 'Geesa Daluwatumulle', viewpath: '/demo/report-view', editpath: '/demo/report-edit', deletepath: '/demo/report-delete'
  },
  {
    srj: '390130', fname: 'Geesa Daluwatumulle', viewpath: '/demo/report-view', editpath: '/demo/report-edit', deletepath: '/demo/report-delete'
  },
  {
    srj: '390131', fname: 'Geesa Daluwatumulle', viewpath: '/demo/report-view', editpath: '/demo/report-edit', deletepath: '/demo/report-delete'
  },
  {
    srj: '390132', fname: 'Geesa Daluwatumulle', viewpath: '/demo/report-view', editpath: '/demo/report-edit', deletepath: '/demo/report-delete'
  },
  {
    srj: '390133', fname: 'Geesa Daluwatumulle', viewpath: '/demo/report-view', editpath: '/demo/report-edit', deletepath: '/demo/report-delete'
  },
  {
    srj: '390134', fname: 'Geesa Daluwatumulle', viewpath: '/demo/report-view', editpath: '/demo/report-edit', deletepath: '/demo/report-delete'
  },
];



@Component({
  selector: 'app-retrieve',
  templateUrl: './retrieve.component.html',
  styleUrls: ['./retrieve.component.scss']
})
export class RetrieveComponent implements OnInit {
  srj: string;
  reports: any[];
  constructor(
    private router: Router,
    private Token: TokenService
    ) {
    console.log(this.Token.payload(this.Token.gettoken()).ud.usertype)
     }

  ngOnInit() {
    this.reports = ROUTES.filter(menuItem => menuItem);

  }

  Search() {
    if (this.srj !== '') {
      this.reports = this.reports.filter(res => {
        return res.srj.toLocaleLowerCase().match(this.srj.toLocaleLowerCase());
      });
    } else if (this.srj === '') {
      this.ngOnInit();
    }

  }

  onview(event) {
    event.preventDefault();
   
    this.router.navigate([`/${this.Token.payload(this.Token.gettoken()).ud.usertype}` + '/report-view'],
    { queryParams: { srjno: "" }, skipLocationChange: true });
  }
  onedit(event) {
    event.preventDefault();
    this.router.navigate([`/${this.Token.payload(this.Token.gettoken()).ud.usertype}` + '/report-edit'],
     { queryParams: { srjno: "" }, skipLocationChange: true });
  }
  ondelete(eventl) {
    event.preventDefault();
    this.router.navigate([`/${this.Token.payload(this.Token.gettoken()).ud.usertype}` + '/report-delete'],
     { queryParams: { srjno :"" }, skipLocationChange: true });
  }

}

