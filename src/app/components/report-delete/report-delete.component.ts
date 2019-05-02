import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material';

@Component({
  selector: 'app-report-delete',
  templateUrl: './report-delete.component.html',
  styleUrls: ['./report-delete.component.scss']
})
export class ReportDeleteComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  time = {hour: 13, minute: 30};
  meridian = true;

  toggleMeridian() {
    this.meridian = !this.meridian;
}

constructor(private _formBuilder: FormBuilder) {}

ngOnInit() {
  this.firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required]
  });
  this.secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required]
  });
}

@ViewChild('stepper') stepper: MatStepper;

  ngAfterViewInit() {
    this.stepper.selectedIndex = 5;
}

}
