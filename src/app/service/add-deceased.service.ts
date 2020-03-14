import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { USER } from 'app/models/USER';
import { Headers, RequestOptions } from '@angular/http';
import { RETREIVE } from 'app/models/RETREIVE';



@Injectable()
export class AddDeceasedService{
  private baseUrl = 'http://127.0.0.1:8000/api';
  headers: Headers = new Headers();
  options: any;

  constructor(private http: HttpClient) {

    this.headers.append('enctype', 'multi-part/form-data');
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('X-Requested-With', 'XMLHttpRequest');

    this.options = new RequestOptions({ headers: this.headers });

  }

  adddeceased(data) {
    return this.http.post(`${this.baseUrl}/adddeceaseddetails`, data);
  }
  getalldeceased() {
    return this.http.get(`${this.baseUrl}/getalldeceased`);
  }
  
  getdeceased(data){
    return this.http.post<RETREIVE>(`${this.baseUrl}/getdeceased`, data);
  }

}