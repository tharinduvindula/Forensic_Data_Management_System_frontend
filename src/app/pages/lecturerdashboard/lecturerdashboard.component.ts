import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';

@Component({
  selector: 'app-lecturerdashboard',
  templateUrl: './lecturerdashboard.component.html',
  styleUrls: ['./lecturerdashboard.component.css']
})
export class LecturerdashboardComponent implements OnInit {


  constructor() {  }
  isMobileMenu() {
    if (screen.width > 991) {
      return false;
    }
    return true;
  }
  ngOnInit() { }

}
