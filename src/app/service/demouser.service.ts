import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { TokenService } from './token.service';

@Injectable()
export class DemouserService implements CanActivate {

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    const demouser: boolean = this.Token.isUserdemo();
    // if not, redirect to /pagenotfound
    if (!demouser) {
      this.router.navigate(['/pagenotfound']);
    }
    return demouser;
  }
  constructor(private Token: TokenService, private router: Router) { }

}