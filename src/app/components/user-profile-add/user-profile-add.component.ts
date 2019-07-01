import { Component, OnInit, Injectable, ViewChild } from '@angular/core';
import { FormControl, Validators, NgForm } from '@angular/forms';
import { UserService } from '../../service/user.service';
import 'rxjs/add/operator/toPromise';
import { AuthService } from 'app/service/auth.service';
import { Router } from '@angular/router';
import { TokenService } from 'app/service/token.service';

class ImageSnippet {
  constructor(public src: string, public file: File) { }
}

@Injectable()
@Component({
  selector: 'app-user-profile-add',
  templateUrl: './user-profile-add.component.html',
  styleUrls: ['./user-profile-add.component.scss']
})
export class UserProfileAddComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  @ViewChild('useraddForm') formValues;
  public form = {
    fullname: null,
    firstname: null,
    lastname: null,
    nic: null,
    sex: null,
    email: null,
    address: null,
    telephone: null,
    startdate: null,
    enddate: '',
    usertype: null,
    password: 'uosj@123',
    addingby: this.Token.payload(this.Token.gettoken()).ud.fullname,
    lasteditby: this.Token.payload(this.Token.gettoken()).ud.fullname,
    photo: null
  };
  public form1 = {
    email: null
  };
  error: null;
  imageSrc;
  photoFile: any;
  //base64s
  photoString: string;



  constructor(private Users: UserService, private Auth: AuthService, private router: Router, private Token: TokenService) {

  }

  ngOnInit() {
  }

  onsubmit() {
    this.Users.adduser(this.form).subscribe(
      data => this.formValues.resetForm(),
      error => this.handleError(error),
    );
    this.form1.email = this.form.email;
    this.Users.sendPasswordResetLink(this.form1).subscribe(
      data => {}
    );
  }

  handleError(error) {
    this.error = error.error.error;
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
}
