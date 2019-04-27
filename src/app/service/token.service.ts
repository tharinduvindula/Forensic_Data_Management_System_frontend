import { Injectable } from '@angular/core';
import { decode } from 'base-64';

@Injectable()
export class TokenService {
  private iss = {
    login: 'http://localhost:8000/api/login'
  };

  constructor() { }

  handle(token, usertype) {
    this.set(token, usertype);
  }

  set(token, usertype) {
    localStorage.setItem('token', token);
    localStorage.setItem('usertype', usertype);
  }
  gettoken() {
    return localStorage.getItem('token');
  }
  getusertype() {
    return localStorage.getItem('usertype');
  }

  remove() {
    localStorage.removeItem('token');
    localStorage.removeItem('usertype');
  }

  isValid() {
    const token = this.gettoken();
    if (token) {
      const payload = this.payload(token);
      console.log(payload);
      if (payload) {
        return Object.values(this.iss).indexOf(payload.iss) > -1 ? true : false;
      }
    }
    return false;
  }

  payload(token) {
    const payload = token.split('.')[1];
    return this.decode(payload);
  }

  decode(payload) {
    return JSON.parse(atob(payload));
  }

  loggedIn() {
    return this.isValid();
  }

  isUserAdmin() {
    return 'admin' === this.getusertype() ? true : false;
  }
  isUserdemo() {
    return 'demo' === this.getusertype() ? true : false;
  }
  isUserLecture() {
    return 'lecture' === this.getusertype() ? true : false;
  }


}
