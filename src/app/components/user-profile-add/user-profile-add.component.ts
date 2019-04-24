import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-profile-add',
  templateUrl: './user-profile-add.component.html',
  styleUrls: ['./user-profile-add.component.scss']
})
export class UserProfileAddComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);

  constructor() { }

  ngOnInit() {
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }
  myFilter = (d: Date): boolean => {
    const day = d.getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }

}