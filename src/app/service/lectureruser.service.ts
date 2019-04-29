import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { TokenService } from './token.service';

@Injectable()
export class LectureruserService implements CanActivate {

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    const lectureruser: boolean = this.Token.isUserLecture();
    // if not, redirect to /pagenotfound
    if (!lectureruser) {
      this.router.navigate(['/pagenotfound']);
    }
    return lectureruser;
  }

  constructor(private Token: TokenService, private router: Router) { }

}