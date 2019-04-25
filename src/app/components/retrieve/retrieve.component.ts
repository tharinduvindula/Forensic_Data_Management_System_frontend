import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
  srj: string;
  fname: string;  
  editpath: string;
  deletepath: string;
  viewpath:string;
}
export const ROUTES: RouteInfo[] = [
  {
// tslint:disable-next-line: max-line-length
    srj:'390129',fname:'Geesa Daluwatumulle',viewpath:'/report-view', editpath: '/report-edit', deletepath: '/report-delete'
  },
  {
    srj:'390130',fname:'Geesa Daluwatumulle',viewpath:'/report-view', editpath: '/report-edit', deletepath: '/report-delete'
  },
  {
    srj:'390131',fname:'Geesa Daluwatumulle',viewpath:'/report-view',editpath: '/report-edit', deletepath: '/report-delete'
  },
  {
    srj:'390132',fname:'Geesa Daluwatumulle',viewpath:'/report-view', editpath: '/report-edit', deletepath: '/report-delete'
  },
  {
    srj:'390133',fname:'Geesa Daluwatumulle', viewpath:'/report-view',editpath: '/report-edit', deletepath: '/report-delete'
  },
  {
    srj:'390134',fname:'Geesa Daluwatumulle',viewpath:'/report-view', editpath: '/report-edit', deletepath: '/report-delete'
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
  constructor() { }

  ngOnInit() {
    this.reports = ROUTES.filter(menuItem => menuItem);
    
  }
  
  Search(){
    if(this.srj != ""){
      this.reports=this.reports.filter(res=>{
        return res.srj.toLocaleLowerCase().match(this.srj.toLocaleLowerCase());
      });
    }else if (this.srj== ""){
      this.ngOnInit();
    }
    
  }
}