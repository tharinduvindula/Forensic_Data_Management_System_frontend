import { Routes } from '@angular/router';

import { LecturerdashboardComponent } from '../../pages/lecturerdashboard/lecturerdashboard.component';
import { UserProfileComponent } from '../../components/user-profile/user-profile.component';
import { AddComponent } from 'app/components/add/add.component';
import { RetrieveComponent } from 'app/components/retrieve/retrieve.component';
import { AnalysisComponent } from 'app/components/analysis/analysis.component';
import { ReportEditComponent } from 'app/components/report-edit/report-edit.component';
import { ReportDeleteComponent } from 'app/components/report-delete/report-delete.component';
import { ReportViewComponent } from 'app/components/report-view/report-view.component';
import { AddDemoComponent } from 'app/components/add-demo/add-demo.component';
import { UserProfileViewComponent } from 'app/components/user-profile-view/user-profile-view.component';
import { EditdemoComponent } from 'app/components/editdemo/editdemo.component';
import { UpdatedemoComponent } from 'app/components/updatedemo/updatedemo.component';

export const LecturerLayoutRoutes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'dashboard', component: LecturerdashboardComponent },
    { path: 'Dashboard', component: LecturerdashboardComponent },
    { path: 'User-Profile-view', component: UserProfileViewComponent },
    { path: 'User-Profile', component: UserProfileComponent },
    { path: 'add', component: AddComponent },
    { path: 'retrieve', component: RetrieveComponent },
    { path: 'analysis', component: AnalysisComponent },
    { path: 'report-edit', component: ReportEditComponent },
    { path: 'report-delete', component: ReportDeleteComponent },
    { path: 'report-view', component: ReportViewComponent },
    { path: 'add-demo', component: AddDemoComponent },
    { path: 'edit-demo', component: EditdemoComponent },
    { path: 'update-demo', component: UpdatedemoComponent },
];
