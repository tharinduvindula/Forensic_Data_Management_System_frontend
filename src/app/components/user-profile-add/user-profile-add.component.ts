import { Component, OnInit, Injectable } from '@angular/core';
import { FormControl, Validators, NgForm } from '@angular/forms';
import { UserService } from '../../service/user.service';
import 'rxjs/add/operator/toPromise';
import { AuthService } from 'app/service/auth.service';
import { logging } from 'protractor';
import { Router } from '@angular/router';
import { TokenService } from 'app/service/token.service';


@Injectable()
@Component({
  selector: 'app-user-profile-add',
  templateUrl: './user-profile-add.component.html',
  styleUrls: ['./user-profile-add.component.scss']
})
export class UserProfileAddComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);

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
    usertype: null,
    password: 'uosj@123',
  };
  error: null;
  public loggedin: boolean;

  constructor(private Users: UserService, private Auth: AuthService, private router: Router, private token: TokenService) {

  }

  ngOnInit() {
    /*this.Auth.authStatus.subscribe(value => this.loggedin = value);
    if (!this.loggedin) {
        this.router.navigateByUrl('login');
    }
    if (!this.token.isUserdemo()) {
      this.router.navigateByUrl('login');
    }*/
  }

  onsubmit() {
    this.Users.adduser(this.form).subscribe(
      data => console.log(data),
      error => this.handleError(error)
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
