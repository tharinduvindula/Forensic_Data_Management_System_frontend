import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { AdmindashboardComponent } from '../../pages/admindashboard/admindashboard.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { UserAccessComponent } from 'app/pages/user-access/user-access.component';


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

} from '@angular/material';
import { AdminEditUserDetailComponent } from 'app/pages/admin-edit-user-detail/admin-edit-user-detail.component';
import { UserProfileDeleteComponent } from 'app/components/user-profile-delete/user-profile-delete.component';
import { UserProfileEditComponent } from 'app/components/user-profile-edit/user-profile-edit.component';
import { UserProfileAddComponent } from 'app/components/user-profile-add/user-profile-add.component';
import { UserProfileViewComponent } from 'app/components/user-profile-view/user-profile-view.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    MatButtonModule,
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
  ],
  declarations: [
    AdmindashboardComponent,
    IconsComponent,
    UserAccessComponent,
    AdminEditUserDetailComponent,
    UserProfileDeleteComponent,
    UserProfileEditComponent,
    UserProfileAddComponent,
    UserProfileViewComponent,
    UserProfileComponent,
  ]
})

export class AdminLayoutModule {}
