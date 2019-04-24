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




@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    AdminsidebarComponent,
    DemosidebarComponent,
    LecturersidebarComponent,
    LoginComponent,
    ColombomapComponent,
<<<<<<< HEAD
    
=======
   
>>>>>>> 9e5d90ebdf717b85fae4b3bbc47e50f33bdc235d
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
