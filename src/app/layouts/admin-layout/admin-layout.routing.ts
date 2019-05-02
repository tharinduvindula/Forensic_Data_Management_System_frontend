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
import { AdminuserService } from 'app/service/adminuser.service';

export const AdminLayoutRoutes: Routes = [
   /*  {
       path: '',
       children: [ {
         path: 'dashboard',
         component: AdmindashboardComponent
     }]}, */// {
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
    { path: '', pathMatch: 'full', redirectTo: 'dashboard',  component: AdmindashboardComponent },
    { path: 'Dashboard',            component: AdmindashboardComponent },
    { path: 'User-Profile', component: UserProfileComponent},
    { path: 'User-Profile-delete',  component: UserProfileDeleteComponent },
    { path: 'User-Profile-edit',    component: UserProfileEditComponent },
    { path: 'User-Profile-view', component: UserProfileViewComponent},
    { path: 'Add-Users',             component: UserProfileAddComponent },
    { path: 'User-Access',          component: UserAccessComponent },
    { path: 'icons',                component: IconsComponent },
    { path: 'Edit-User-Detail',       component: AdminEditUserDetailComponent}
];
