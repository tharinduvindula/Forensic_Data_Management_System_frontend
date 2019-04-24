import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoLayoutRoutes } from './demo-layout.routing';
import { DemodashboardComponent } from '../../pages/demodashboard/demodashboard.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { ComponentsModule } from 'app/components/components.module';
import { AddComponent } from 'app/components/add/add.component';
import { EditComponent } from 'app/components/edit/edit.component';
import { DeleteComponent } from 'app/components/delete/delete.component';
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
} from '@angular/material';
import { FusionChartsModule } from 'angular-fusioncharts';
import { AnalysisComponent } from 'app/components/analysis/analysis.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';

import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

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
    FusionChartsModule,   
    HttpModule,
  ],
  declarations: [
    DemodashboardComponent,
    UserProfileComponent,
    AnalysisComponent,
    AddComponent,
    EditComponent,
    DeleteComponent,
    RetrieveComponent,
  ]
})

export class DemoLayoutModule {}
