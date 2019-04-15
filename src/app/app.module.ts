import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';


import { AppComponent } from './app.component';

import { AdmindashboardComponent } from './pages/admindashboard/admindashboard.component';
import { DemodashboardComponent } from './pages/demodashboard/demodashboard.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { TableListComponent } from './pages/table-list/table-list.component';
import { TypographyComponent } from './pages/typography/typography.component';
import { IconsComponent } from './pages/icons/icons.component';
import { MapsComponent } from './pages/maps/maps.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
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



// Pass the fusioncharts library and chart modules
FusionChartsModule.fcRoot(FusionCharts, FusionMaps, Srilanka, FusionTheme);


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    FusionChartsModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    }),
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    DemoLayoutComponent,
    LecturerLayoutComponent,
    PagesComponent,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
