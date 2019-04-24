import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { DemoLayoutComponent } from './layouts/demo-layout/demo-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LecturerLayoutComponent } from './layouts/lecturer-layout/lecturer-layout.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, /* {
    path: '',
    component: DemoLayoutComponent,
    children: [
        {
      path: '',
        loadChildren: './layouts/demo-layout/demo-layout.module#DemoLayoutModule'
      }]
  }, */
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
      }]
  },
 /* {
    path: '',
    component: LecturerLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './layouts/lecturer-layout/lecturer-layout.module#LecturerLayoutModule'
      }]
 }*/
    // { path: 'dashboard',      component: DashboardComponent },
    // { path: 'user-profile',   component: UserProfileComponent },
    // { path: 'table-list',     component: TableListComponent },
    // { path: 'typography',     component: TypographyComponent },
    // { path: 'icons',          component: IconsComponent },
    // { path: 'maps',           component: MapsComponent },
    // { path: 'notifications',  component: NotificationsComponent },
    // { path: '',               redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
