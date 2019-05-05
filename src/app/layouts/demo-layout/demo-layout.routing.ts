import { Routes } from '@angular/router';

import { DemodashboardComponent } from '../../components/demodashboard/demodashboard.component';
import { UserProfileDemoComponent } from '../../components/user-profile-demo/user-profile-demo.component';
import { AddComponent } from 'app/components/add/add.component';
import { DemoRetrieveComponent } from 'app/components/demoretrieve/demoretrieve.component';
import { UserProfileViewDemoComponent } from 'app/components/user-profile-view-demo/user-profile-view-demo.component';
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
    { path: 'User-Profile', component: UserProfileDemoComponent},
    { path: 'User-Profile-view', component: UserProfileViewDemoComponent},
    { path: 'add',   component: AddComponent },
    { path: 'demoretrieve',   component: DemoRetrieveComponent },
    { path: 'analysis',   component: AnalysisComponent },
    { path: 'report-edit',   component: ReportEditComponent },
    { path: 'report-delete',   component: ReportDeleteComponent },
    { path: 'report-view',   component: ReportViewComponent },
];
