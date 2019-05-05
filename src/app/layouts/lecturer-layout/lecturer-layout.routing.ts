import { Routes } from '@angular/router';

import { LecturerdashboardComponent } from '../../pages/lecturerdashboard/lecturerdashboard.component';
import { UserProfileLectureComponent } from '../../components/user-profile-lecture/user-profile-lecture.component';
import { UserProfileViewLectureComponent } from 'app/components/user-profile-view-lecture/user-profile-view-lecture.component';
import { AddComponent } from 'app/components/add/add.component';
import { LecturerRetrieveComponent } from 'app/components/lecturerretrieve/lecturerretrieve.component';
import { AnalysisComponent } from 'app/components/analysis/analysis.component';
import { ReportEditComponent } from 'app/components/report-edit/report-edit.component';
import { ReportDeleteComponent } from 'app/components/report-delete/report-delete.component';
import { ReportViewComponent } from 'app/components/report-view/report-view.component';
import { AddDemoComponent } from 'app/components/add-demo/add-demo.component';

export const LecturerLayoutRoutes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'dashboard', component: LecturerdashboardComponent },
    { path: 'Dashboard', component: LecturerdashboardComponent },
    { path: 'User-Profile-view', component: UserProfileViewLectureComponent },
    { path: 'User-Profile', component: UserProfileLectureComponent },
    { path: 'add', component: AddComponent },
    { path: 'lecturerretrieve', component: LecturerRetrieveComponent },
    { path: 'analysis', component: AnalysisComponent },
    { path: 'report-edit', component: ReportEditComponent },
    { path: 'report-delete', component: ReportDeleteComponent },
    { path: 'report-view', component: ReportViewComponent },
    { path: 'add-demo', component: AddDemoComponent },
];
