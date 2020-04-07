import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class AnalysisService {
  private baseUrl = 'http://127.0.0.1:8000/api';
  headers: Headers = new Headers();
  options: any;
  constructor(private http: HttpClient) {
    
    this.headers.append('enctype', 'multi-part/form-data');
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('X-Requested-With', 'XMLHttpRequest');

    this.options = new RequestOptions({ headers: this.headers });
   }
   GAReportDelays(data) {
    return this.http.post(`${this.baseUrl}/GAReportDelays`, data);
  }
}
