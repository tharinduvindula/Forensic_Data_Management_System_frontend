import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoLayoutRoutes } from './demo-layout.routing';
import { DemodashboardComponent } from '../../components/demodashboard/demodashboard.component';
import { UserProfileDemoComponent } from '../../components/user-profile-demo/user-profile-demo.component';
import { ComponentsModule } from 'app/components/components.module';
import { AddComponent } from 'app/components/add/add.component';
import { DemoRetrieveComponent } from 'app/components/demoretrieve/demoretrieve.component';
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
import { UserProfileViewDemoComponent } from 'app/components/user-profile-view-demo/user-profile-view-demo.component';
import { ReportEditComponent } from 'app/components/report-edit/report-edit.component';
import { ReportDeleteComponent } from 'app/components/report-delete/report-delete.component';
import { ReportViewComponent } from 'app/components/report-view/report-view.component';


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
  ],
  declarations: [
    DemodashboardComponent,
    UserProfileDemoComponent,
    AnalysisComponent,
    AddComponent,
    DemoRetrieveComponent,
    UserProfileViewDemoComponent,
    ReportEditComponent,
    ReportDeleteComponent,
    ReportViewComponent,
  ]
})

export class DemoLayoutModule {}
