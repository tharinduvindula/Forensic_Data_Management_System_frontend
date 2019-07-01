import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LecturerLayoutRoutes } from './lecturer-layout.routing';
import { LecturerdashboardComponent } from '../../pages/lecturerdashboard/lecturerdashboard.component';
import { UserProfileComponent } from '../../components/user-profile/user-profile.component';
import { ComponentsModule } from 'app/components/components.module';
import { RetrieveComponent } from 'app/components/retrieve/retrieve.component';
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
import { AddDemoComponent } from 'app/components/add-demo/add-demo.component';
import { DemoLecturerShareModule } from '../demo-lecturer-share/demo-lecturer-share.module';
import { AllShareModule } from '../all-share/all-share.module';
import { UserProfileViewComponent } from 'app/components/user-profile-view/user-profile-view.component';


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
    DemoLecturerShareModule,
    AllShareModule,
  ],
  declarations: [
    LecturerdashboardComponent,
    AddDemoComponent,
  ]
})

export class LecturerLayoutModule { }

