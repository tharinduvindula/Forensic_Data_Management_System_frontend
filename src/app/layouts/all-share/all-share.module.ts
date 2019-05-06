import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from 'app/components/user-profile/user-profile.component';
import { UserProfileViewComponent } from 'app/components/user-profile-view/user-profile-view.component';
import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule,
  MatSlideToggleModule,
  MatIconModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatRadioModule,

} from '@angular/material';
import { RouterModule } from '@angular/router';
import { AdminLayoutRoutes } from '../admin-layout/admin-layout.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { LecturerLayoutRoutes } from '../lecturer-layout/lecturer-layout.routing';
import { DemoLayoutRoutes } from '../demo-layout/demo-layout.routing';
import { AdmindashboardComponent } from 'app/components/admindashboard/admindashboard.component';
import { UserAccessComponent } from 'app/pages/user-access/user-access.component';
import { IconsComponent } from 'app/pages/icons/icons.component';
import { AdminEditUserDetailComponent } from 'app/pages/admin-edit-user-detail/admin-edit-user-detail.component';
import { UserProfileDeleteComponent } from 'app/components/user-profile-delete/user-profile-delete.component';
import { UserProfileEditComponent } from 'app/components/user-profile-edit/user-profile-edit.component';
import { UserProfileAddComponent } from 'app/components/user-profile-add/user-profile-add.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MatButtonModule,
    MatRadioModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatSlideToggleModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule,
  ],
  declarations: [
    UserProfileComponent,
    UserProfileViewComponent,
  ]
})
export class AllShareModule { }
