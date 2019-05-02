import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { TokenService } from './token.service';

@Injectable()
export class BeforLoginService implements CanActivate {


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {

    const beforlogin: boolean = !this.Token.loggedIn();
    // if not, redirect to /pagenotfound
    if (!beforlogin) {
      this.router.navigate(['/pagenotfound']);
    }
    return beforlogin;
  }
  constructor(private Token: TokenService, private router: Router) { }

}
