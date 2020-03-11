import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { TokenService } from 'app/service/token.service';
import { AddDeceasedService } from 'app/service/add-deceased.service';
import { RETREIVE } from 'app/models/RETREIVE';

declare const $: any;
declare interface RouteInfo {
  srj: string;
  fname: string;
  editpath: string;
  deletepath: string;
  viewpath: string;
}
export const ROUTES: RouteInfo[] = [
  
];

@Component({
  selector: 'app-retrieve',
  templateUrl: './retrieve.component.html',
  styleUrls: ['./retrieve.component.scss']
})
export class RetrieveComponent implements OnInit {
  srj: string;
  getall: any;
  reports: any[];
  deceased: RETREIVE[] =[];
 
  constructor(
    private router: Router,
    private Token: TokenService,
    private Deceased: AddDeceasedService,
    ) {
      this.getAlldeceased();
    }

  ngOnInit() {
    this.reports = ROUTES.filter(menuItem => menuItem);
  }

  getAlldeceased() {
    this.Deceased.getalldeceased().subscribe((all) => {
      this.getall = all;
      // this.fullname = all.fullname
    }
    );
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
    console.log(event);
    this.router.navigate([`/${this.Token.payload(this.Token.gettoken()).ud.usertype}` + '/report-view'],
    { queryParams: { srjno: "" }, skipLocationChange: true });
  }
  onedit(event) {
    event.preventDefault();
    this.router.navigate([`/${this.Token.payload(this.Token.gettoken()).ud.usertype}` + '/report-edit'],
     { queryParams: { srjno: "" }, skipLocationChange: true });
  }
  ondelete(event) {
    event.preventDefault();
    this.router.navigate([`/${this.Token.payload(this.Token.gettoken()).ud.usertype}` + '/report-delete'],
     { queryParams: { srjno :"" }, skipLocationChange: true });
  }

}

