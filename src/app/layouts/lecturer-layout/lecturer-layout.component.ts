import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy, PopStateEvent } from '@angular/common';
import 'rxjs/add/operator/filter';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import PerfectScrollbar from 'perfect-scrollbar';

@Component({
    selector: 'app-lecturer-layout',
    templateUrl: './lecturer-layout.component.html',
    styleUrls: ['./lecturer-layout.component.scss']
})
export class LecturerLayoutComponent implements OnInit {
  private _router: Subscription;
  private lastPoppedUrl: string;
  private yScrollStack: number[] = [];

  dataSource: Object;
  constructor( public location: Location, private router: Router) {
      this.dataSource = {
          'chart': {
              'animation': '0',
              'showbevel': '0',
              'usehovercolor': '1',
              'canvasbordercolor': 'FFFFFF',
              'bordercolor': 'FFFFFF',
              'caption': 'Website Visits for the month of March 2018',
              'fillalpha': '80',
              'hovercolor': 'black',
              'showborder': 0,
              'entityfillhovercolor': 'black',
              // tslint:disable-next-line: max-line-length
              'entitytooltext': '<div style=\'font-size:14px; text-align:center; padding: 2px 4px 2px 4px; color:white;\'>$lName</div><div style=\'font-size:12px; color:white\'>$value  deths for month</div>',
              'theme': 'fint'
          },
          'colorrange': {
              'gradient': '0',
              'color': [
                  {
                      'minvalue': '0',
                      'maxvalue': '500',
                      'displayvalue': '< $500K',
                      'code': '#42A5F5'
                  },
                  {
                      'minvalue': '500',
                      'maxvalue': '1000',
                      'displayvalue': '$500K - $1000K',
                      'code': '#1E88E5'
                  },
                  {
                      'minvalue': '1000',
                      'maxvalue': '1500',
                      'displayvalue': '$1000K - $1500K',
                      'code': '#1976D2'
                  },
                  {
                      'minvalue': '1500',
                      'maxvalue': '2000',
                      'displayvalue': '$1500K - $2000K',
                      'code': '#1F65C0'
                  },
                  {
                      'minvalue': '2000',
                      'maxvalue': '5000',
                      'displayvalue': 'No data availale',
                      'code': '#BBDEFB'
                  }
              ]
          },
          'data': [
              { 'id': 'LK.CO', 'value': 2000 },
              { 'id': 'LK.MH', 'value': 3182 },
              { 'id': 'LK.KE', 'value': 3280 },
              { 'id': 'LK.KY', 'value': 911 },
          ]
      }
  }

  ngOnInit() {
      const isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;

      if (isWindows && !document.getElementsByTagName('body')[0].classList.contains('sidebar-mini')) {
          // if we are on windows OS we activate the perfectScrollbar function

          document.getElementsByTagName('body')[0].classList.add('perfect-scrollbar-on');
      } else {
          document.getElementsByTagName('body')[0].classList.remove('perfect-scrollbar-off');
      }
      const elemMainPanel = <HTMLElement>document.querySelector('.main-panel');
      const elemSidebar = <HTMLElement>document.querySelector('.sidebar .sidebar-wrapper');

      this.location.subscribe((ev: PopStateEvent) => {
          this.lastPoppedUrl = ev.url;
      });
       this.router.events.subscribe((event: any) => {
          if (event instanceof NavigationStart) {
             if (event.url != this.lastPoppedUrl) {
                 this.yScrollStack.push(window.scrollY);
             }
         } else if (event instanceof NavigationEnd) {
             if (event.url == this.lastPoppedUrl) {
                 this.lastPoppedUrl = undefined;
                 window.scrollTo(0, this.yScrollStack.pop());
             } else {
                 window.scrollTo(0, 0);
             }
         }
      });
      this._router = this.router.events.filter(event => event instanceof NavigationEnd).subscribe((event: NavigationEnd) => {
           elemMainPanel.scrollTop = 0;
           elemSidebar.scrollTop = 0;
      });
      if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
          let ps = new PerfectScrollbar(elemMainPanel);
          ps = new PerfectScrollbar(elemSidebar);
      }
  }
  ngAfterViewInit() {
      this.runOnRouteChange();
  }
  isMaps(path) {
      let titlee = this.location.prepareExternalUrl(this.location.path());
      titlee = titlee.slice( 1 );
      if (path == titlee) {
          return false;
      } else {
          return true;
      }
  }
  isDashboard(path) {
        let titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice(1);
        if ('dashboard' == titlee) {
            return true;
        } else {
            return false;
        }
    }
  runOnRouteChange(): void {
    if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
      const elemMainPanel = <HTMLElement>document.querySelector('.main-panel');
      const ps = new PerfectScrollbar(elemMainPanel);
      ps.update();
    }
  }
  isMac(): boolean {
      let bool = false;
      if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
          bool = true;
      }
      return bool;
  }
    isMobileMenu() {
        if (screen.width > 991) {
            return false;
        }
        return true;
    }

}
