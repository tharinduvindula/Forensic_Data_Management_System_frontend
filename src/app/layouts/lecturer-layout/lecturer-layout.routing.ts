import { Routes } from '@angular/router';

import { LecturerdashboardComponent } from '../../pages/lecturerdashboard/lecturerdashboard.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';

export const LecturerLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }
    { path: 'dashboard', component: LecturerdashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent }
];
