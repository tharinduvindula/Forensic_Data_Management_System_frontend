import { NgModule } from '@angular/core';
import { CommonModule, NgIf, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { DemoLayoutComponent } from './layouts/demo-layout/demo-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LecturerLayoutComponent } from './layouts/lecturer-layout/lecturer-layout.component';
import { LoginComponent } from './components/login/login.component';
import { BeforLoginService } from './service/befor-login.service';
import { AfterLoginService } from './service/after-login.service';
import { AdminuserService } from './service/adminuser.service';
import { ScreenlockComponent } from './components/screenlock/screenlock.component';
import { ScreenlockService } from './service/screenlock.service';
import { LectureruserService } from './service/lectureruser.service';
import { DemouserService } from './service/demouser.service';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';




const routes: Routes = [
  {
    path: '',
    redirectTo: 'Pagenotfound',
    pathMatch: 'full',
  },
  {
    canActivate: [BeforLoginService],
    path: 'login',
    component: LoginComponent,
  },
  {
    canActivate: [ScreenlockService],
    path: 'lock',
    component: ScreenlockComponent,
  },
  {
    canActivate: [AfterLoginService, DemouserService],
    path: 'demo',
    component: DemoLayoutComponent,
    children: [
        {
      path: '',
        loadChildren: './layouts/demo-layout/demo-layout.module#DemoLayoutModule'
      }]
  },
  {
    canActivate: [AfterLoginService, AdminuserService],
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
      }],
  },
  {
    canActivate: [AfterLoginService, LectureruserService],
    path: 'lecturer',
    component: LecturerLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './layouts/lecturer-layout/lecturer-layout.module#LecturerLayoutModule'
      }],
 },
  { path: '**', component: PagenotfoundComponent }
    // { path: 'dashboard',      component: DashboardComponent },
    // { path: 'User-Profile',   component: UserProfileComponent },
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
export class AppRoutingModule {
  constructor() {}
}
