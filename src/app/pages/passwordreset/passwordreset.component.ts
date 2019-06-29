import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/service/user.service';
import { TokenService } from 'app/service/token.service';
import { USER } from 'app/models/USER';
import { Router } from '@angular/router';
import { MultiuserhandleService } from 'app/service/multiuserhandle.service';

@Component({
  selector: 'app-passwordreset',
  templateUrl: './passwordreset.component.html',
  styleUrls: ['./passwordreset.component.scss']
})
export class PasswordresetComponent implements OnInit {
  users: USER[] = [];
  public form = {
    email: null
  }



  constructor(private User: UserService, private Token: TokenService, private router: Router, private UserHandle: MultiuserhandleService) {
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
  isMobileMenu() {
    if (screen.width > 991) {
      return false;
    }
    return true;
  }
  reset(event, email) {
    event.preventDefault();
    this.form.email = email;
        this.User.defaultpassword(this.form).subscribe(
          data => this.getAlluser()
        );
    
  }
}
