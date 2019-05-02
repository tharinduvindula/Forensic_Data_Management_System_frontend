import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { TokenService } from 'app/service/token.service';
import { UserService } from 'app/service/user.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from 'app/components/shared/confirmation-dialog/confirmation-dialog.component';
import { AuthService } from 'app/service/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  startdate = null;
  public form = {
    fullname: this.Token.payload(this.Token.gettoken()).ud.fullname,
    firstname: this.Token.payload(this.Token.gettoken()).ud.firstname,
    lastname: this.Token.payload(this.Token.gettoken()).ud.lastname,
    address: this.Token.payload(this.Token.gettoken()).ud.address,
    sex: this.Token.payload(this.Token.gettoken()).ud.sex,
    email: this.Token.payload(this.Token.gettoken()).ud.email,
    telephone: this.Token.payload(this.Token.gettoken()).ud.telephone,
    oldemail: this.Token.payload(this.Token.gettoken()).ud.email,
  };
  error: any;

  constructor(private Users: UserService, private Token: TokenService, public dialog: MatDialog, private Auth: AuthService,
     private router: Router) { }

  ngOnInit() {
    this.startdate = this.Token.payload(this.Token.gettoken()).ud.startdate.split('T')[0];

  }

  isMobileMenu() {
    if (screen.width > 991) {
      return false;
    }
    return true;
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }
  myFilter = (d: Date): boolean => {
    const day = d.getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }


  onsubmit() {
    this.Users.updateuser(this.form).subscribe(
      data =>  console.log(data),
      error => this.handleError(error),
    );
    this.openDialog();
  }

  handleError(error) {
    this.error = error.error.error;
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '350px',
      data: 'your data is submited you must logout for refresh that data'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.Token.remove();
          this.Auth.changeAuthStatus(false);
          this.router.navigateByUrl('login');
      }
    });
  }
}
