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
  MatSelectModule,
  MatRadioModule,
  MatStepperModule,
  MatListModule,
} from '@angular/material';
import { PolicereportComponent } from 'app/pages/policereport/policereport.component';
import { AddComponent } from 'app/pages/add/add.component';
import { EditComponent } from 'app/pages/edit/edit.component';
import { DeleteComponent } from 'app/pages/delete/delete.component';
import { RetrieveComponent } from 'app/pages/retrieve/retrieve.component';




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
    MatRadioModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatListModule,
  ],
  declarations: [
    DemodashboardComponent,
    UserProfileComponent,
    AddComponent,
    EditComponent,
    DeleteComponent,
    RetrieveComponent,
  ]
})

export class DemoLayoutModule {}
