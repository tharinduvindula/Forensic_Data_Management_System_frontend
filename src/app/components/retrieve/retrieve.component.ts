import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { TokenService } from 'app/service/token.service';
import { AddDeceasedService } from 'app/service/add-deceased.service';
import { RETREIVE } from 'app/models/RETREIVE';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from 'app/components/shared/confirmation-dialog/confirmation-dialog.component';

declare const $: any;
declare interface RouteInfo {
  srj: string;
}

@Component({
  selector: 'app-retrieve',
  templateUrl: './retrieve.component.html',
  styleUrls: ['./retrieve.component.scss']
})
export class RetrieveComponent implements OnInit {
  srj: string;
  getall: any;
 
  constructor(
    private router: Router,
    private Token: TokenService,
    private Deceased: AddDeceasedService,
    public dialog: MatDialog
    ) {
      
    }
  public form = {
    deleteby:this.Token.payload(this.Token.gettoken()).ud.fullname,
    srjno:null,
  }
  ngOnInit() {
    this.getAlldeceased();
   }

  getAlldeceased() {
    this.Deceased.getalldeceased().subscribe((all) => {
      this.getall = all
    }
    );
    
  }
    
  Search() {
    if (this.srj !== '') {
      this.getall = this.getall.filter(res => {
        return res["srjno"].toLocaleLowerCase().match(this.srj.toLocaleLowerCase());
      });
    } else if (this.srj === '') {
      this.ngOnInit();
    }

  }

  onview(srjno1) {
    event.preventDefault();
    this.router.navigate([`/${this.Token.payload(this.Token.gettoken()).ud.usertype}` + '/report-view'],
    { queryParams: { srjno: srjno1 }});
  }
  onedit(srjno1) {
    event.preventDefault();
    this.router.navigate([`/${this.Token.payload(this.Token.gettoken()).ud.usertype}` + '/report-edit'],
     { queryParams: { srjno: srjno1 }});
  }
  ondelete(srjno1) {
    event.preventDefault();
    this.openDialog(srjno1);
  }
  openDialog(srjno1): void {
    if (this.Token.gettoken() !== null) {
      this.form.srjno = srjno1;      
    }
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '350px',
      data: 'Are you sure you want to delete the SRJ No: '+`${srjno1}`+' report?'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.Deceased.deletedeceased(this.form).subscribe(
          data => {
            if(data["message"]="success"){                 
                this.getAlldeceased();
            }
          },
          error => {
          });
      }
    }); 
  }

}

