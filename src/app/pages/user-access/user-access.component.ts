import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSlideToggle } from '@angular/material';
import { UserService } from 'app/service/user.service';
import { USER } from 'app/models/USER';
import { TokenService } from 'app/service/token.service';


@Component({
  selector: 'app-user-access',
  templateUrl: './user-access.component.html',
  styleUrls: ['./user-access.component.scss']
})
export class UserAccessComponent implements OnInit {
  users: USER[] = [];
  public form = {
    email: null,
    temporydisable: null
  }

  constructor(private User: UserService, private Token: TokenService, private Users: UserService) {
    this.getAlluser();
   }

  ngOnInit() {

  }
  getAlluser() {
    this.User.getalluser().subscribe((all) => {
      this.users = all
    }
    );
  }
  isOtheruser() {
    return this.users.filter(x => (x.id !== this.Token.payload(this.Token.gettoken()).sub) && (x.permenetdisable === 0));
  }
  setValue(email, e) {
    if (e.checked) {
      this.form.temporydisable = 0;
      this.form.email = email;
    } else {
      this.form.temporydisable = 1;
      this.form.email = email;
    }
    this.Users.temporarydisable(this.form).subscribe(
      data => {}
    );
  }


  isMobileMenu() {
    if (screen.width > 991) {
      return false;
    }
    return true;
  }
}
