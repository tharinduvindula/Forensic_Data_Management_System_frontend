import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { TokenService } from './token.service';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AfterLoginService implements CanActivate {

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    const afterlogin: boolean = (this.Token.loggedIn() && !this.Token.isscreenlock());
    // if not, redirect to /pagenotfound
    if (!afterlogin) {
      this.router.navigate(['/pagenotfound']);
    }
    return afterlogin;
  }
  constructor(private Token: TokenService, private Auth: AuthService, private router: Router) { }

}
