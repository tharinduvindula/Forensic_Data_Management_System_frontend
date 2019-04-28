import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LecturerLayoutRoutes } from './lecturer-layout.routing';
import { LecturerdashboardComponent } from '../../pages/lecturerdashboard/lecturerdashboard.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { ComponentsModule } from 'app/components/components.module';
import { UserProfileViewComponent } from 'app/components/user-profile-view/user-profile-view.component';
import { AddComponent } from 'app/components/add/add.component';
import { LecturerRetrieveComponent } from 'app/components/lecturerretrieve/lecturerretrieve.component';
import { AnalysisComponent } from 'app/components/analysis/analysis.component';
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

import { FusionChartsModule } from 'angular-fusioncharts';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import { ReportDeleteComponent } from 'app/components/report-delete/report-delete.component';
import { ReportViewComponent } from 'app/components/report-view/report-view.component';
import { ReportEditComponent } from 'app/components/report-edit/report-edit.component';


FusionChartsModule.fcRoot(FusionCharts, Charts, FusionTheme);


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
    FusionChartsModule,
    HttpModule,
  ],
  declarations: [
    LecturerdashboardComponent,
    UserProfileComponent,
    UserProfileViewComponent,
    AddComponent,
    LecturerRetrieveComponent,
    AnalysisComponent,
    ReportEditComponent,
    ReportDeleteComponent,
    ReportViewComponent,
  ]
})

export class LecturerLayoutModule { }

