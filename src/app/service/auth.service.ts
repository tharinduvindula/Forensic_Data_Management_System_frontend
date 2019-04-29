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
    console.log('log'+this.getlog());
    this.loggedIn.next(value);
    console.log('log' + this.getlog());
  }
  changescreenlockStatus(value: boolean) {
    console.log('test 2' + this.getstatus());
    this.screenlock.next(value);
    console.log('test3 ' + this.getstatus());
  }
  getstatus(){
    return this.screenlock.value;
  }
  getlog(){
    return this.loggedIn.value;
  }

  constructor(private Token: TokenService) { }

}
