import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSlideToggle } from '@angular/material';

@Component({
  selector: 'app-user-access',
  templateUrl: './user-access.component.html',
  styleUrls: ['./user-access.component.scss']
})
export class UserAccessComponent implements OnInit {
  color = 'accent';
  checked = false;
  disabled = false;

  constructor() { }

  ngOnInit() {
  }

}
