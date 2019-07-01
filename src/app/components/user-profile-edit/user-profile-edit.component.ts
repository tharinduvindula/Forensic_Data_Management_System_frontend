import { Component, OnInit, OnDestroy} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { USER } from 'app/models/USER';
import { UserService } from 'app/service/user.service';
import { TokenService } from 'app/service/token.service';
import { MultiuserhandleService } from 'app/service/multiuserhandle.service';

@Component({
  selector: 'app-user-profile-edit',
  templateUrl: './user-profile-edit.component.html',
  styleUrls: ['./user-profile-edit.component.css']
})
export class UserProfileEditComponent implements OnInit, OnDestroy {
  email = new FormControl('', [Validators.required, Validators.email]);
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
    oldemail: null,
    telephone: null,
    startdate: null,
    usertype: null,
    lasteditby: this.Token.payload(this.Token.gettoken()).ud.fullname,
    photo: null
  };
  public form1 = {
    email: null
  }
  startdate: any;
  editby: any;
  addingby: any;
  public imagePath;
  imgURL: any;
  public message: string;

  preview(files) {
    if (files.length === 0) {
      return;
    }

    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = 'Only images are supported.';
      return;
    }

    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.form.photo = reader.result;
    }
  }
  constructor(
    private User: UserService,
    private Activatedroute: ActivatedRoute,
    private Token: TokenService,
    private UserHandle: MultiuserhandleService,
    private router: Router,) {
    this.form1.email = this.Activatedroute.snapshot.queryParamMap.get('Email');
    this.getuser();
  }
  ngOnInit() {
  }
  ngOnDestroy() {
    this.UserHandle.removmultiuserhandle(this.form1).subscribe(
      data => {
       
      },
      error => {
        console.log(error)
      });
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
      this.form.oldemail = all.email,
      this.form.telephone = all.telephone,
      this.form.startdate = all.startdate,
      this.form.usertype = all.usertype,
      this.startdate = this.form.startdate.split('T')[0],
      this.addingby = all.addingby,
      this.editby = all.lasteditby,
      this.form.photo =all.photo
    }
    );
  }
  onsubmit() {
    this.User.updateuser(this.form).subscribe(
      data => this.router.navigateByUrl('admin/Edit-User-Detail'),
      error => this.handleError(error),
    );
  }

  handleError(error) {
    this.error = error.error.error;
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
