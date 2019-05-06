import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/service/user.service';
import { TokenService } from 'app/service/token.service';
import { USER } from 'app/models/USER';
import { Router } from '@angular/router';



@Component({
  selector: 'app-admin-edit-user-detail',
  templateUrl: './admin-edit-user-detail.component.html',
  styleUrls: ['./admin-edit-user-detail.component.scss']
})
export class AdminEditUserDetailComponent implements OnInit {
  users: USER[] = [];


  constructor(private User: UserService, private Token: TokenService, private router: Router) {
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
  onedit(event, email) {
    event.preventDefault();
    this.router.navigate(['/admin/User-Profile-edit'], { queryParams: { Email : email}, skipLocationChange: true   });
  }
  ondelete(event, email) {
    event.preventDefault();
    this.router.navigate(['/admin/User-Profile-delete'], { queryParams: { Email: email }, skipLocationChange: true });
  }

}
