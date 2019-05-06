import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoLayoutRoutes } from './demo-layout.routing';
import { DemodashboardComponent } from '../../components/demodashboard/demodashboard.component';
import { UserProfileComponent } from '../../components/user-profile/user-profile.component';
import { ComponentsModule } from 'app/components/components.module';
import { RetrieveComponent } from 'app/components/retrieve/retrieve.component';
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
  MatIconModule,
} from '@angular/material';
import { FusionChartsModule } from 'angular-fusioncharts';
import { AnalysisComponent } from 'app/components/analysis/analysis.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import { UserProfileViewComponent } from 'app/components/user-profile-view/user-profile-view.component';
import { DemoLecturerShareModule } from '../demo-lecturer-share/demo-lecturer-share.module';
import { AllShareModule } from '../all-share/all-share.module';


FusionChartsModule.fcRoot(FusionCharts, Charts, FusionTheme);




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
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    FusionChartsModule,
    HttpModule,
    DemoLecturerShareModule,
    AllShareModule,
  ],
  declarations: [
    DemodashboardComponent,
  ]
})

export class DemoLayoutModule {}
