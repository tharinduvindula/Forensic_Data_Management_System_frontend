import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/service/user.service';
import { TokenService } from 'app/service/token.service';
import { ActivatedRoute } from '@angular/router';
import { USER } from 'app/models/USER';

@Component({
  selector: 'app-user-profile-view',
  templateUrl: './user-profile-view.component.html',
  styleUrls: ['./user-profile-view.component.scss']
})
export class UserProfileViewComponent implements OnInit {
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
    lasteditby: null,
    photo: null,
  };
  public form1 = {
    email: null
  }
  startdate: any;
  editby: any;
  addingby: any;
  constructor(private User: UserService, private Activatedroute: ActivatedRoute, private Token: TokenService) {
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
        this.form.photo = all.photo,
        this.startdate = this.form.startdate.split('T')[0],
        this.addingby = all.addingby,
        this.editby = all.lasteditby
    }
    );
  }

  isMobileMenu() {
    if (screen.width > 991) {
      return false;
    }
    return true;
  }

}
