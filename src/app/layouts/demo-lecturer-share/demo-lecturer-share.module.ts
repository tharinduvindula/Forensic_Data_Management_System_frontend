import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { RouterModule } from '@angular/router';
import { DemoLayoutRoutes } from '../demo-layout/demo-layout.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from 'app/components/components.module';
import { FusionChartsModule } from 'angular-fusioncharts';
import { HttpModule } from '@angular/http';
import { AnalysisComponent } from 'app/components/analysis/analysis.component';
import { AddComponent } from 'app/components/add/add.component';
import { ReportEditComponent } from 'app/components/report-edit/report-edit.component';
import { ReportDeleteComponent } from 'app/components/report-delete/report-delete.component';
import { ReportViewComponent } from 'app/components/report-view/report-view.component';
import { RetrieveComponent } from 'app/components/retrieve/retrieve.component';

@NgModule({
  imports: [
    CommonModule,
    //RouterModule.forChild(DemoLayoutRoutes),
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
    AnalysisComponent,
    AddComponent,
    RetrieveComponent,
    ReportEditComponent,
    ReportDeleteComponent,
    ReportViewComponent,
  ]
})
export class DemoLecturerShareModule { }
