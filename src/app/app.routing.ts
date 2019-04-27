import { NgModule } from '@angular/core';
import { CommonModule, NgIf, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { DemoLayoutComponent } from './layouts/demo-layout/demo-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LecturerLayoutComponent } from './layouts/lecturer-layout/lecturer-layout.component';
import { LoginComponent } from './components/login/login.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  }, {
    path: 'login',
    component: LoginComponent,
  },  {
    path: 'demo',
    component: DemoLayoutComponent,
    children: [
        {
      path: '',
        loadChildren: './layouts/demo-layout/demo-layout.module#DemoLayoutModule'
      }]
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
      }]
  },
  {
    path: 'lecturer',
    component: LecturerLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './layouts/lecturer-layout/lecturer-layout.module#LecturerLayoutModule'
      }]
 }
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
