import { Routes } from '@angular/router';

import { DemodashboardComponent } from '../../pages/demodashboard/demodashboard.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { PatientdetailsComponent } from 'app/pages/patientdetails/patientdetails.component';

export const DemoLayoutRoutes: Routes = [
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
    { path: 'dashboard',      component: DemodashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'patientdetails',   component: PatientdetailsComponent },
];
