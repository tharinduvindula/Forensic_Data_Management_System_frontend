import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TokenService {
  private iss = {
    login: 'http://127.0.0.1:8000/api/login'
  };
  constructor(private http: HttpClient) { }

  handle(token) {
    this.set(token);
  }

  set(token) {
    localStorage.setItem('token', token);
    localStorage.setItem('lock', 'unlock');
  }
  gettoken() {
    return localStorage.getItem('token');
  }
  getlock() {
    return localStorage.getItem('lock');
  }
  geturl() {
    return localStorage.getItem('flink');
  }

  remove() {
    localStorage.removeItem('token');
    localStorage.removeItem('lock');
  }

  isValid() {
    const token = this.gettoken();
    if (token) {
      const payload = this.payload(token);
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

  screenunlock(value) {
    return this.payload(value).sub === this.payload(this.gettoken()).sub ? true : false;
  }

  isscreenlock() {
    return ('unlock' !== this.getlock()) ? true : false;
  }

  public isUserAdmin(): boolean {
    return 'admin' === this.payload(this.gettoken()).ud.usertype ? true : false;
  }
  public isUserdemo(): boolean {
    return 'demo' === this.payload(this.gettoken()).ud.usertype ? true : false;
  }
  public isUserLecture(): boolean {
    return 'lecturer' === this.payload(this.gettoken()).ud.usertype ? true : false;
  }

}
