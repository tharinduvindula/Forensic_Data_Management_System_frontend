import { Injectable } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Demo } from '../Demo';
import { Observable } from 'rxjs';
import { USER } from 'app/models/USER';

@Injectable({
  providedIn: 'root'
})
export class AddDemoService {
 
  server = 'http://127.0.0.1:8000/api/';
  headers: Headers = new Headers();
  options: any;

  constructor(private httpClient: HttpClient) {

    this.headers.append('enctype', 'multi-part/form-data');
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('X-Requested-With', 'XMLHttpRequest');

    this.options = new RequestOptions({headers: this.headers});

  }

  registerDemo(
    fullname,
    firstname,
    lastname,
    nic,
    address,
    telephone,
    email,
    startdate,
    addingby
    ): Observable<Demo> {
      const newDemo = new Demo(
        fullname,
        firstname,
        lastname,
        nic,
        address,
        telephone,
        email,
        startdate,
        addingby
      );

      return this.httpClient.post<Demo>('http://127.0.0.1:8000/api/addDemo', newDemo);
  }

  updateDemo(data){

    return this.httpClient.post('http://127.0.0.1:8000/api/updateDemo', data);
  }

  deletedemo(data) {
    return this.httpClient.post('http://127.0.0.1:8000/api/deletedemo', data);
  }

  getalldemo() {
    return this.httpClient.get<USER[]>('http://127.0.0.1:8000/api/getalldemo');
  }

  getdemo(data) {
    return this.httpClient.post<USER>('http://127.0.0.1:8000/api/getdemo', data);
  }

}
