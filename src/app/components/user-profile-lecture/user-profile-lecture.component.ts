import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { TokenService } from 'app/service/token.service';
import { UserService } from 'app/service/user.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from 'app/components/shared/confirmation-dialog/confirmation-dialog.component';
import { AuthService } from 'app/service/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-profile-lecture',
  templateUrl: './user-profile-lecture.component.html',
  styleUrls: ['./user-profile-lecture.component.css']
})
export class UserProfileLectureComponent implements OnInit {
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
    addingby: this.Token.payload(this.Token.gettoken()).ud.addingby,
    lasteditby: this.Token.payload(this.Token.gettoken()).ud.fullname,
    oldemail: this.Token.payload(this.Token.gettoken()).ud.email,
    photo: this.Token.payload(this.Token.gettoken()).photo,

  };
  editby = this.Token.payload(this.Token.gettoken()).ud.lasteditby;
  error: any;
  imageSrc;
  photoFile: any;
  //base64s
  photoString: string;

 

  constructor(private Users: UserService, private Token: TokenService, public dialog: MatDialog, private Auth: AuthService,
     private router: Router) {
    this.form.photo = (this.Token.payload(this.Token.gettoken()).ud.photo);
      }

  ngOnInit() {
    this.startdate = this.Token.payload(this.Token.gettoken()).ud.startdate.split('T')[0];

  }
  public picked(event) {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      const file: File = fileList[0];
      this.photoFile = file;
      this.handleInputChange(file); // turn into base64
    } else {
      alert('No file selected');
    }
  }


  handleInputChange(files) {
    const file = files;
    const pattern = /image-*/;
    const reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
    reader.onloadend = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }

  _handleReaderLoaded(e) {
    const reader = e.target;
    const base64result = reader.result.substr(reader.result.indexOf(',') + 1);
    // this.imageSrc = base64result;
    this.photoString = base64result;
    this.form.photo = this.photoString;
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
      data => data,
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
