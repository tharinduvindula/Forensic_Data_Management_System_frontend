import { Routes } from '@angular/router';

import { DemodashboardComponent } from '../../pages/demodashboard/demodashboard.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { PatientdetailsComponent } from 'app/pages/patientdetails/patientdetails.component';
import { PolicereportComponent } from 'app/pages/policereport/policereport.component';
import { AddComponent } from 'app/pages/add/add.component';
import { EditComponent } from 'app/pages/edit/edit.component';
import { DeleteComponent } from 'app/pages/delete/delete.component';
import { RetrieveComponent } from 'app/pages/retrieve/retrieve.component';

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
    { path: 'add',   component: AddComponent },
    { path: 'edit',   component: EditComponent },
    { path: 'delete',   component: DeleteComponent },
    { path: 'retrieve',   component: RetrieveComponent },

];
