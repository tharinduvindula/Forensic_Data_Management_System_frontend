import { Routes } from '@angular/router';

import { LecturerdashboardComponent } from '../../pages/lecturerdashboard/lecturerdashboard.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { UserProfileViewComponent } from 'app/components/user-profile-view/user-profile-view.component';
import { EditComponent } from 'app/components/edit/edit.component';
import { AddComponent } from 'app/components/add/add.component';
import { DeleteComponent } from 'app/components/delete/delete.component';
import { RetrieveComponent } from 'app/components/retrieve/retrieve.component';

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
    { path: 'user-profile-view', component: UserProfileViewComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'add', component: AddComponent },
    { path: 'edit', component: EditComponent },
    { path: 'delete', component: DeleteComponent },
    { path: 'retrieve', component: RetrieveComponent },
];
