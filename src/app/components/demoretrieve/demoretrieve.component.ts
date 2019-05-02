import { Component, OnInit } from '@angular/core';

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
  selector: 'app-demoretrieve',
  templateUrl: './demoretrieve.component.html',
  styleUrls: ['./demoretrieve.component.scss']
})
export class DemoRetrieveComponent implements OnInit {
  srj: string;
  reports: any[];
  constructor() { }

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
}
