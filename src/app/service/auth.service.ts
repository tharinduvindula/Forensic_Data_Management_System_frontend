import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { TokenService } from './token.service';
@Injectable()
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(this.Token.loggedIn());
  private screenlock = new BehaviorSubject<boolean>(false);
  authStatus = this.loggedIn.asObservable();
  screenlockStatus = this.screenlock.asObservable();

  changeAuthStatus(value: boolean) {
    this.loggedIn.next(value);
  }
  changescreenlockStatus(value: boolean) {
    this.screenlock.next(value);
  }
  getstatus() {
    return this.screenlock.value;
  }
  getlog() {
    return this.loggedIn.value;
  }

  constructor(private Token: TokenService) { }

}
