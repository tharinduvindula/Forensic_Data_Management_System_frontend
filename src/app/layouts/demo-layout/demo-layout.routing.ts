import { Routes } from '@angular/router';

import { DemodashboardComponent } from '../../components/demodashboard/demodashboard.component';
import { UserProfileComponent } from '../../components/user-profile/user-profile.component';
import { AddComponent } from 'app/components/add/add.component';
import { RetrieveComponent } from 'app/components/retrieve/retrieve.component';
import { UserProfileViewComponent } from 'app/components/user-profile-view/user-profile-view.component';
import { AnalysisComponent } from 'app/components/analysis/analysis.component';
import { ReportEditComponent } from 'app/components/report-edit/report-edit.component';
import { ReportDeleteComponent } from 'app/components/report-delete/report-delete.component';
import { ReportViewComponent } from 'app/components/report-view/report-view.component';


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
    { path: '', pathMatch: 'full', redirectTo: 'dashboard', component: DemodashboardComponent },
    { path: 'Dashboard',      component: DemodashboardComponent },
    { path: 'User-Profile', component: UserProfileComponent},
    { path: 'User-Profile-view', component: UserProfileViewComponent},
    { path: 'add',   component: AddComponent },
    { path: 'retrieve',   component: RetrieveComponent },
    { path: 'analysis',   component: AnalysisComponent },
    { path: 'report-edit',   component: ReportEditComponent },
    { path: 'report-delete',   component: ReportDeleteComponent },
    { path: 'report-view',   component: ReportViewComponent },
];
