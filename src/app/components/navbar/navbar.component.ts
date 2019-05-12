import { Component, OnInit, ElementRef } from '@angular/core';
import { ROUTES } from '../adminsidebar/adminsidebar.component';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from 'app/service/auth.service';
import { TokenService } from 'app/service/token.service';
import { MultiuserhandleService } from 'app/service/multiuserhandle.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    private listTitles: any[];
    location: Location;
      mobile_menu_visible: any = 0;
    private toggleButton: any;
    private sidebarVisible: boolean;
    public form1 = {
        email: null
    };

    constructor(
        location: Location,
        private element: ElementRef,
        private router: Router,
        private Auth: AuthService,
        private Token: TokenService,
        private UserHandle: MultiuserhandleService
        ) {
      this.location = location;
          this.sidebarVisible = false;
    }

    ngOnInit() {
      this.listTitles = ROUTES.filter(listTitle => listTitle);
      const navbar: HTMLElement = this.element.nativeElement;
      this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
      this.router.events.subscribe((event) => {
        this.sidebarClose();
         var $layer: any = document.getElementsByClassName('close-layer')[0];
         if ($layer) {
           $layer.remove();
           this.mobile_menu_visible = 0;
         }
     });
    }

    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const body = document.getElementsByTagName('body')[0];
        setTimeout(function() {
            toggleButton.classList.add('toggled');
        }, 500);

        body.classList.add('nav-open');

        this.sidebarVisible = true;
    };
    sidebarClose() {
        const body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    };
    sidebarToggle() {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        var $toggle = document.getElementsByClassName('navbar-toggler')[0];

        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        } else {
            this.sidebarClose();
        }
        const body = document.getElementsByTagName('body')[0];

        if (this.mobile_menu_visible === 1) {
            // $('html').removeClass('nav-open');
            body.classList.remove('nav-open');
            if ($layer) {
                $layer.remove();
            }
            setTimeout(function() {
                $toggle.classList.remove('toggled');
            }, 400);

            this.mobile_menu_visible = 0;
        } else {
            setTimeout(function() {
                $toggle.classList.add('toggled');
            }, 430);

            var $layer = document.createElement('div');
            $layer.setAttribute('class', 'close-layer');


           if (body.querySelectorAll('.main-panel')) {
                document.getElementsByClassName('main-panel')[0].appendChild($layer);
            } else if (body.classList.contains('off-canvas-sidebar')) {
                document.getElementsByClassName('wrapper-full-page')[0].appendChild($layer);
            }

            setTimeout(function() {
                $layer.classList.add('visible');
            }, 100);

            $layer.onclick = function() { // asign a function
              body.classList.remove('nav-open');
              this.mobile_menu_visible = 0;
              $layer.classList.remove('visible');
              setTimeout(function() {
                  $layer.remove();
                  $toggle.classList.remove('toggled');
              }, 400);
            }.bind(this);

            body.classList.add('nav-open');
            this.mobile_menu_visible = 1;

        }
    };

    getTitle() {
      var titlee = this.location.prepareExternalUrl(this.location.path());
      if (titlee.charAt(0) === '#') {
          titlee = titlee.slice( 2 );
      }
      titlee = titlee.split('/').pop();

      for (var item = 0; item < this.listTitles.length; item++) {
          if (this.listTitles[item].path === titlee) {
               console.log(this.listTitles[item].title);
          }
      }
      return titlee;
    }
    logout(event: MouseEvent) {
        event.preventDefault();
        this.form1.email = this.Token.payload(this.Token.gettoken()).ud.email;
        this.UserHandle.removmultiuserhandle(this.form1).subscribe(
            data => {
                console.log(data)
            },
            error => {
                console.log(error)
            });
        this.Token.remove();
        this.Auth.changeAuthStatus(false);
        this.router.navigateByUrl('login');
    }
    screenlock(event: MouseEvent) {
        event.preventDefault();
        localStorage.removeItem('lock');
        localStorage.setItem('flink', this.router.url);
        this.Auth.changescreenlockStatus(true);
        this.router.navigateByUrl('lock');
    }
    editprofile(event: MouseEvent) {
        event.preventDefault();
        this.router.navigateByUrl(`${this.Token.payload(this.Token.gettoken()).ud.usertype}/` + 'User-Profile');
    }
    godashboard(event: MouseEvent) {
        event.preventDefault();
        this.router.navigateByUrl(`${this.Token.payload(this.Token.gettoken()).ud.usertype}/` + 'Dashboard');
    }
}
