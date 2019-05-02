import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { TokenService } from './token.service';
import { AuthService } from './auth.service';

@Injectable()
export class ScreenlockService implements CanActivate {

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    const screenlock: boolean = (this.Token.loggedIn() && this.Token.isscreenlock());
    // if not, redirect to /pagenotfound
    if (!screenlock) {
      this.router.navigate(['/pagenotfound']);
    }
    return screenlock;
  }
  constructor(private Token: TokenService, private Auth: AuthService, private router: Router) { }

}
