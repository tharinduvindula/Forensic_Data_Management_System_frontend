import { Component, OnInit } from '@angular/core';
import { USER } from 'app/models/USER';
import { UserService } from 'app/service/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenService } from 'app/service/token.service';
import { MatDialog } from '@angular/material';
import { ConfirmationDialogComponent } from '../shared/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-user-profile-delete',
  templateUrl: './user-profile-delete.component.html',
  styleUrls: ['./user-profile-delete.component.css']
})
export class UserProfileDeleteComponent implements OnInit {
  users: USER;
  error: any;

  public form = {
    fullname: null,
    firstname: null,
    lastname: null,
    address: null,
    nic: null,
    sex: null,
    email: null,
    telephone: null,
    startdate: null,
    usertype: null,
    lasteditby: this.Token.payload(this.Token.gettoken()).ud.fullname,
    photo: null,
  };
  public form1 = {
    email: null
  }
  public form2 = {
    email: null,
    lasteditby: this.Token.payload(this.Token.gettoken()).ud.fullname
  }

  startdate: any;
  editby: any;
  addingby: any;
  constructor(
    private User: UserService,
    private Activatedroute: ActivatedRoute,
    public dialog: MatDialog,
    private Token: TokenService,
    private router: Router
    ) {
    this.form1.email = this.Activatedroute.snapshot.queryParamMap.get('Email');
    this.getuser();
    this.form2.email = this.Activatedroute.snapshot.queryParamMap.get('Email');
  }
  ngOnInit() {
  }

  getuser() {
    this.User.getuser(this.form1).subscribe((all) => {
      this.form.fullname = all.fullname,
        this.form.firstname = all.firstname,
        this.form.lastname = all.lastname,
        this.form.address = all.address,
        this.form.nic = all.nic,
        this.form.sex = all.sex,
        this.form.email = all.email,
        this.form.telephone = all.telephone,
        this.form.startdate = all.startdate.split('T')[0],
        this.form.usertype = all.usertype,
        this.startdate = this.form.startdate.split('T')[0],
        this.addingby = all.addingby,
        this.editby = all.lasteditby,
        this.form.photo = all.photo
    }
    );
  }
  onsubmit(){
    this.openDialog();
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '350px',
      data: 'do you want delete ' + `${this.form.fullname}` + ' account'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.User.deleteuser(this.form2).subscribe(
          data =>
            this.router.navigateByUrl('admin/Edit-User-Detail')
        );
      }
    });
  }


}
