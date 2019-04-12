import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
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
    SidebarComponent,
    DemosidebarComponent,
    LecturersidebarComponent,
    LoginComponent,
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    DemosidebarComponent,
    LecturersidebarComponent,

  ]
})
export class ComponentsModule { }
