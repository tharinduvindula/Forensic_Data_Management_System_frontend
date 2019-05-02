import { Component, OnInit } from '@angular/core';
import { USER } from 'app/models/USER';
import { UserService } from 'app/service/user.service';
import { ActivatedRoute } from '@angular/router';

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
    usertype: null
  };
  public form1 = {
    email: null
  }
  startdate: any;
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
  onsubmit() {

  }


}
