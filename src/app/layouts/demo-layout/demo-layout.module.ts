import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoLayoutRoutes } from './demo-layout.routing';
import { DemodashboardComponent } from '../../pages/demodashboard/demodashboard.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { ComponentsModule } from 'app/components/components.module';
import { AddComponent } from 'app/components/add/add.component';
import { EditComponent } from 'app/components/edit/edit.component';
import { DeleteComponent } from 'app/components/delete/delete.component';
import { RetrieveComponent } from 'app/components/retrieve/retrieve.component';
import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule,
  MatRadioModule,
  MatStepperModule,
} from '@angular/material';







@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(DemoLayoutRoutes),
    FormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    ComponentsModule,
    MatRadioModule,
    MatStepperModule,
    ReactiveFormsModule,
  ],
  declarations: [
    DemodashboardComponent,
    UserProfileComponent,
    AddComponent,
    EditComponent,
    DeleteComponent,
    RetrieveComponent,
  ]
})

export class DemoLayoutModule {}
