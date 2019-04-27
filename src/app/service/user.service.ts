import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {
  private baseUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) { }

  adduser(data) {
    return this.http.post(`${this.baseUrl}/adduser`, data)
  }

  login(data) {
    return this.http.post(`${this.baseUrl}/login`, data)
  }
}