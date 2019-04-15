import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminsidebarComponent } from './adminsidebar/adminsidebar.component';
import { DemosidebarComponent } from './demosidebar/demosidebar.component';
import { LoginComponent } from './login/login.component';
import { LecturersidebarComponent } from './lecturersidebar/lecturersidebar.component';



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
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    AdminsidebarComponent,
    DemosidebarComponent,
    LecturersidebarComponent,

  ]
})
export class ComponentsModule { }
