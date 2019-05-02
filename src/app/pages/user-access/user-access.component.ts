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
  color = 'red';
  checked = false;
  disabled = false;
  users: USER[] = [];

  constructor(private User: UserService, private Token: TokenService) {
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
    return this.users.filter(x => x.id !== this.Token.payload(this.Token.gettoken()).sub);
  }


  isMobileMenu() {
    if (screen.width > 991) {
      return false;
    }
    return true;
  }
}
