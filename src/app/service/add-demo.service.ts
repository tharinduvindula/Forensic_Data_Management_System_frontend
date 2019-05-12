import { Injectable } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Demo } from '../Demo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddDemoService {

  server = 'http://192.168.2.1:8000/api/';
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
    nic,
    address,
    contactNumber,
    email,
    password,
    usertype,
    startdate,
    enddate,
    photo
    ): Observable<Demo> {
      const newDemo = new Demo(
        fullname,
        firstname,
        nic,
        address,
        contactNumber,
        email,
        password,
        usertype,
        startdate,
        enddate,
        photo
      );

      return this.httpClient.post<Demo>('http://192.168.2.1:8000/addDemo', newDemo);
  }

}
