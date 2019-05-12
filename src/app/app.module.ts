import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NgxLoadingModule } from 'ngx-loading';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';


import { AppComponent } from './app.component';

import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { DemodashboardComponent } from './components/demodashboard/demodashboard.component';
import { IconsComponent } from './pages/icons/icons.component';
import { AgmCoreModule } from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { PagesComponent } from './pages/pages.component';
import { DemoLayoutComponent } from './layouts/demo-layout/demo-layout.component';
import { LecturerLayoutComponent } from './layouts/lecturer-layout/lecturer-layout.component';

// Import angular-fusioncharts
import { FusionChartsModule } from 'angular-fusioncharts';

// Import FusionCharts library and chart modules
import * as FusionCharts from 'fusioncharts';
import * as FusionMaps from 'fusioncharts/fusioncharts.maps';
import * as Srilanka from 'fusionmaps/maps/fusioncharts.srilanka';

import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fint';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './service/user.service';
import { TokenService } from './service/token.service';
import { AuthService } from './service/auth.service';
import { BeforLoginService } from './service/befor-login.service';
import { AfterLoginService } from './service/after-login.service';
import { AdminuserService } from './service/adminuser.service';
import { ScreenlockComponent } from './pages/screenlock/screenlock.component';
import { ScreenlockService } from './service/screenlock.service';
import { DemouserService } from './service/demouser.service';
import { LectureruserService } from './service/lectureruser.service';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { ConfirmationDialogComponent } from './components/shared/confirmation-dialog/confirmation-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MultiuserhandleService } from './service/multiuserhandle.service';




// Pass the fusioncharts library and chart modules
FusionChartsModule.fcRoot(FusionCharts, FusionMaps, Srilanka, FusionTheme);


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    FusionChartsModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    }),
    BrowserModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatDialogModule,
    NgxLoadingModule.forRoot({}),
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    DemoLayoutComponent,
    LecturerLayoutComponent,
    PagesComponent,
    ScreenlockComponent,
    PagenotfoundComponent,
    ConfirmationDialogComponent,
  ],
  entryComponents: [
    ConfirmationDialogComponent,
  ],
  providers: [
    UserService,
    TokenService,
    AuthService,
    BeforLoginService,
    AfterLoginService,
    AdminuserService,
    ScreenlockService,
    LectureruserService,
    DemouserService,
    MultiuserhandleService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
