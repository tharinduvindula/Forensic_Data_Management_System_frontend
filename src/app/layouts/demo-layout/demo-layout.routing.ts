import { Routes } from '@angular/router';

import { DemodashboardComponent } from '../../pages/demodashboard/demodashboard.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { AddComponent } from 'app/components/add/add.component';
import { DemoRetrieveComponent } from 'app/components/demoretrieve/demoretrieve.component';
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
    { path: 'dashboard',      component: DemodashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'user-profile-view', component: UserProfileViewComponent },
    { path: 'add',   component: AddComponent },
    { path: 'demoretrieve',   component: DemoRetrieveComponent },
    { path: 'analysis',   component: AnalysisComponent },
    { path: 'report-edit',   component: ReportEditComponent },
    { path: 'report-delete',   component: ReportDeleteComponent },
    { path: 'report-view',   component: ReportViewComponent },
];
