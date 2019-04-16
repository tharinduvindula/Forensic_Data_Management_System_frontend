import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';

@Component({
  selector: 'app-demodashboard',
  templateUrl: './demodashboard.component.html',
  styleUrls: ['./demodashboard.component.css']
})
export class DemodashboardComponent implements OnInit {


  constructor() { }
  isMobileMenu() {
    if (screen.width > 991) {
      return false;
    }
    return true;
  }

  ngOnInit() {}

}
