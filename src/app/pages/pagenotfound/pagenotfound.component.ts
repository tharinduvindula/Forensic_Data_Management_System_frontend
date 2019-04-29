import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/service/auth.service';
import { TokenService } from 'app/service/token.service';
import { UserService } from 'app/service/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.scss']
})
export class PagenotfoundComponent implements OnInit {

  constructor(
    private Token: TokenService,
    private router: Router,
  ) {}

  ngOnInit() {
    if (this.Token.loggedIn()) {
      if (this.Token.isscreenlock()) {
        this.router.navigateByUrl('lock');
      } else {
        if (this.Token.isUserAdmin()) {
          this.router.navigateByUrl('admin/dashboard');
        } else if (this.Token.isUserdemo()) {
          this.router.navigateByUrl('demo/dashboard');
        } else if (this.Token.isUserLecture()) {
          this.router.navigateByUrl('lecturer/dashboard');
        }
      }
    } else {
      this.router.navigateByUrl('login');
    }
  }
}
