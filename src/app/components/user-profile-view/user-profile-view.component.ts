import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile-view',
  templateUrl: './user-profile-view.component.html',
  styleUrls: ['./user-profile-view.component.scss']
})
export class UserProfileViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  isMobileMenu() {
    if (screen.width > 991) {
      return false;
    }
    return true;
  }

}
