import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { TokenService } from './token.service';

@Injectable()
export class AdminuserService implements CanActivate {


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    const adminuser: boolean = this.Token.isUserAdmin();
    // if not, redirect to /pagenotfound
    if (!adminuser) {
      this.router.navigate(['/pagenotfound']);
    }
    return adminuser;
  }
  constructor(private Token: TokenService, private router: Router) { }

}
