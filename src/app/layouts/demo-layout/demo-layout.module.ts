import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoLayoutRoutes } from './demo-layout.routing';
import { DemodashboardComponent } from '../../pages/demodashboard/demodashboard.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { ComponentsModule } from 'app/components/components.module';
import { PatientdetailsComponent } from 'app/pages/patientdetails/patientdetails.component'; 

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule
} from '@angular/material';




@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(DemoLayoutRoutes),
    FormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    ComponentsModule,
  ],
  declarations: [
    DemodashboardComponent,
    UserProfileComponent,
    PatientdetailsComponent,
  ]
})

export class DemoLayoutModule {}
