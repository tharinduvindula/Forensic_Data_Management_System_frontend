import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LecturerLayoutRoutes } from './lecturer-layout.routing';
import { LecturerdashboardComponent } from '../../pages/lecturerdashboard/lecturerdashboard.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';

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
    RouterModule.forChild(LecturerLayoutRoutes),
    FormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
  ],
  declarations: [
    LecturerdashboardComponent,
    UserProfileComponent,
  ]
})

export class LecturerLayoutModule { }

