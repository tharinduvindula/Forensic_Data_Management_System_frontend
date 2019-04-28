import { Component, OnInit } from '@angular/core';
import { AddDemoService } from '../../service/add-demo.service';

@Component({
  selector: 'app-add-demo',
  templateUrl: './add-demo.component.html',
  styleUrls: ['./add-demo.component.scss']
})
export class AddDemoComponent implements OnInit {

  fullname: string;
  firstname: string;
  nic: string;
  address: string;
  contactNumber: string;
  email: string;
  password: string;
  usertype = 'Demonstrator';
  startdate: string;
  enddate: string;
  photo: string;

  constructor(private addDemoService: AddDemoService) { }

  ngOnInit() {
  }

  AddDemo(event) {
    event.preventDefault();
    this.addDemoService.registerDemo(
      this.fullname,
      this.firstname,
      this.nic,
      this.address,
      this.contactNumber,
      this.email,
      this.password,
      this.usertype,
      this.startdate,
      this.enddate,
      this.photo
    ).subscribe((data) => {
        console.log('Demonstrator Added!');
    });
  }
}
