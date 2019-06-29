import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { AdmindashboardComponent } from '../../components/admindashboard/admindashboard.component';
import { UserProfileComponent } from '../../components/user-profile/user-profile.component';
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
  MatRadioModule,

} from '@angular/material';
import { AdminEditUserDetailComponent } from 'app/pages/admin-edit-user-detail/admin-edit-user-detail.component';
import { UserProfileDeleteComponent } from 'app/components/user-profile-delete/user-profile-delete.component';
import { UserProfileEditComponent } from 'app/components/user-profile-edit/user-profile-edit.component';
import { UserProfileAddComponent } from 'app/components/user-profile-add/user-profile-add.component';
import { UserProfileViewComponent } from 'app/components/user-profile-view/user-profile-view.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AllShareModule } from '../all-share/all-share.module';
import { PasswordresetComponent } from 'app/pages/passwordreset/passwordreset.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
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
    AllShareModule,
  ],
  declarations: [
    AdmindashboardComponent,
    IconsComponent,
    UserAccessComponent,
    PasswordresetComponent,
    AdminEditUserDetailComponent,
    UserProfileDeleteComponent,
    UserProfileEditComponent,
    UserProfileAddComponent,
  ]
})

export class AdminLayoutModule {}
