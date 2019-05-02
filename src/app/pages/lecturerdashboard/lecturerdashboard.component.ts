import { Component, OnInit } from '@angular/core';
import { USER } from 'app/models/USER';
import { UserService } from 'app/service/user.service';


@Component({
  selector: 'app-lecturerdashboard',
  templateUrl: './lecturerdashboard.component.html',
  styleUrls: ['./lecturerdashboard.component.css']
})
export class LecturerdashboardComponent implements OnInit {
  users: USER[] = [];

  constructor(private User: UserService) {
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

  isMobileMenu() {
    if (screen.width > 991) {
      return false;
    }
    return true;
  }
  isDemo() {
    return this.users.filter(x => x.usertype === 'demo');
  }
  isLecture() {
    return this.users.filter(x => x.usertype === 'lecturer');
  }
  isAdmin() {
    return this.users.filter(x => x.usertype === 'admin');
  }

}
