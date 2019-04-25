import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LecturerLayoutRoutes } from './lecturer-layout.routing';
import { LecturerdashboardComponent } from '../../pages/lecturerdashboard/lecturerdashboard.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { ComponentsModule } from 'app/components/components.module';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule,
  MatRadioModule,
  MatStepperModule,
  MatListModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatIconModule
} from '@angular/material';
import { UserProfileViewComponent } from 'app/components/user-profile-view/user-profile-view.component';
import { AddComponent } from 'app/components/add/add.component';
import { RetrieveComponent } from 'app/components/retrieve/retrieve.component';


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
    ComponentsModule,
    MatRadioModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
  ],
  declarations: [
    LecturerdashboardComponent,
    UserProfileComponent,
    UserProfileViewComponent,
    AddComponent,    
    RetrieveComponent,
  ]
})

export class LecturerLayoutModule { }

