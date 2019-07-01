import { Component, OnInit } from '@angular/core';
import { AddDemoService } from '../../service/add-demo.service';
import { UserService } from 'app/service/user.service';
import { TokenService } from 'app/service/token.service';

@Component({
  selector: 'app-add-demo',
  templateUrl: './add-demo.component.html',
  styleUrls: ['./add-demo.component.scss']
})
export class AddDemoComponent implements OnInit {

  fullname: string;
  firstname: string;
  lastname: string;
  nic: string;
  address: string;
  telephone: string;
  email: string;
  startdate: string;
  addingby: string;

  public form = {
    email: null
  };

  constructor(private addDemoService: AddDemoService,private Token: TokenService,private User:UserService) {
    
    this.addingby = this.Token.payload(this.Token.gettoken()).ud.fullname;
   }

  ngOnInit() {
  }

  AddDemo(event) {
    event.preventDefault();
    this.addDemoService.registerDemo(
      this.fullname,
      this.firstname,
      this.lastname,
      this.nic,
      this.address,
      this.telephone,
      this.email,
      this.startdate,
      this.addingby
    ).subscribe((data) => {
       
    });
    this.form.email=this.email;
    this.User.sendPasswordResetLink(this.form).subscribe(
      data =>{}
    );
    
  }
}
