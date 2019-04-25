import { Routes } from '@angular/router';

import { AdmindashboardComponent } from '../../pages/admindashboard/admindashboard.component';
import { UserAccessComponent } from '../../pages/user-access/user-access.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { AdminEditUserDetailComponent } from 'app/pages/admin-edit-user-detail/admin-edit-user-detail.component';
import { UserProfileDeleteComponent } from 'app/components/user-profile-delete/user-profile-delete.component';
import { UserProfileEditComponent } from 'app/components/user-profile-edit/user-profile-edit.component';
import { UserProfileAddComponent } from 'app/components/user-profile-add/user-profile-add.component';
import { UserProfileViewComponent } from 'app/components/user-profile-view/user-profile-view.component';

export const AdminLayoutRoutes: Routes = [
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
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }
    { path: 'dashboard',            component: AdmindashboardComponent },
    { path: 'user-profile',         component: UserProfileComponent },
    { path: 'user-profile-delete',  component: UserProfileDeleteComponent },
    { path: 'user-profile-edit',    component: UserProfileEditComponent },
    { path: 'user-profile-add',     component: UserProfileAddComponent },
    { path: 'user-profile-view',    component: UserProfileViewComponent },
    { path: 'addusers',             component: UserProfileAddComponent },
    { path: 'user-access',          component: UserAccessComponent },
    { path: 'icons',                component: IconsComponent },
    { path: 'editUserDetail',       component: AdminEditUserDetailComponent}
];
