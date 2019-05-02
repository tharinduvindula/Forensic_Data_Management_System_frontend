import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { USER } from 'app/models/USER';
import { UserService } from 'app/service/user.service';

@Component({
  selector: 'app-user-profile-edit',
  templateUrl: './user-profile-edit.component.html',
  styleUrls: ['./user-profile-edit.component.css']
})
export class UserProfileEditComponent implements OnInit {
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
    telephone: null,
    startdate: null,
    usertype: null
  };
  public form1 = {
    email: null
  }
  startdate:any;
  constructor(private User: UserService, private Activatedroute: ActivatedRoute) {
    this.form1.email = this.Activatedroute.snapshot.queryParamMap.get('Email');
    this.getuser();
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
      this.form.startdate = all.startdate,
      this.form.usertype = all.usertype,
      this.startdate = this.form.startdate.split('T')[0]
    }
    );
  }
  onsubmit(){
    
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
