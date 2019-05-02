import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminsidebarComponent } from './adminsidebar/adminsidebar.component';
import { DemosidebarComponent } from './demosidebar/demosidebar.component';
import { LoginComponent } from './login/login.component';
import { LecturersidebarComponent } from './lecturersidebar/lecturersidebar.component';
import { ColombomapComponent } from './colombomap/colombomap.component';
import { AnalysisComponent } from './analysis/analysis.component';
import { FusionChartsModule } from 'angular-fusioncharts';
import { MatFormFieldModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReportEditComponent } from './report-edit/report-edit.component';
import { ReportDeleteComponent } from './report-delete/report-delete.component';
import { ReportViewComponent } from './report-view/report-view.component';
import { ScreenlockComponent } from './screenlock/screenlock.component';
import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.wanderingCubes,
      backdropBackgroundColour: 'rgba(0,0,0,0.1)',
      backdropBorderRadius: '4px',
      primaryColour: '#ffffff',
      secondaryColour: '#ffffff',
      tertiaryColour: '#ffffff'
    }),

  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    AdminsidebarComponent,
    DemosidebarComponent,
    LecturersidebarComponent,
    LoginComponent,
    ColombomapComponent,



  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    AdminsidebarComponent,
    DemosidebarComponent,
    LecturersidebarComponent,
    ColombomapComponent,



  ]
})
export class ComponentsModule { }
