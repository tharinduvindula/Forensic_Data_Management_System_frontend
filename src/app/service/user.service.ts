import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { USER } from 'app/models/USER';
import { Headers, RequestOptions } from '@angular/http';



@Injectable()
export class UserService {
  private baseUrl = 'http://127.0.0.1:8000/api';
  headers: Headers = new Headers();
  options: any;

  constructor(private http: HttpClient) {

    this.headers.append('enctype', 'multi-part/form-data');
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('X-Requested-With', 'XMLHttpRequest');

    this.options = new RequestOptions({headers: this.headers});

  }

  adduser(data) {
    return this.http.post(`${this.baseUrl}/adduser`, data);
  }
  updateuser(data) {
    return this.http.post(`${this.baseUrl}/updateuser`, data);
  }
  deleteuser(data) {
    return this.http.post(`${this.baseUrl}/deleteuser`, data);
  }

  login(data) {
    return this.http.post(`${this.baseUrl}/login`, data);
  }

  getalluser() {
    return this.http.get<USER[]>(`${this.baseUrl}/getalluser`);
  }
  getuser(data) {
    return this.http.post<USER>(`${this.baseUrl}/getuser`, data);
  }
  temporarydisable(data) {
    return this.http.post(`${this.baseUrl}/temporarydisable`, data);
  }
  defaultpassword(data) {
    return this.http.post(`${this.baseUrl}/defaultpassword`, data);
  }
  sendPasswordResetLink(data) {
    return this.http.post(`${this.baseUrl}/sendPasswordResetLink`, data);
  }

  changePassword(data) {
    return this.http.post(`${this.baseUrl}/changePassword`, data);
  }
  

}
