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
