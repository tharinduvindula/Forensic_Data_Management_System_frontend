import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from 'app/service/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenService } from 'app/service/token.service';
import { MultiuserhandleService } from 'app/service/multiuserhandle.service';
import { AddDemoService } from 'app/service/add-demo.service';

@Component({
  selector: 'app-updatedemo',
  templateUrl: './updatedemo.component.html',
  styleUrls: ['./updatedemo.component.scss']
})
export class UpdatedemoComponent implements OnInit {

  fullname: string;
  firstname: string;
  lastname: string;
  nic: string;
  address: string;
  telephone: string;
  email: string;
  lastemail: string;
  startdate: string;
  editby: string;

  public form = {
    fullname: null,
    firstname: null,
    lastname: null,
    nic: null,
    email: null,
    lastemail: null,
    address: null,
    telephone: null,
    startdate: null,
    lasteditby: this.Token.payload(this.Token.gettoken()).ud.fullname,
  };

  public form1 = {
    email: null
  }
  
  constructor(
    private User: UserService,
    private Activatedroute: ActivatedRoute,
    private Token: TokenService,
    private addDemoService: AddDemoService,
    private router: Router,
    ) {
    this.form1.email = this.Activatedroute.snapshot.queryParamMap.get('Email');
    this.getdemo();
  }
  ngOnInit() {
  }
  updateDemo(event) {
    event.preventDefault();
    this.form.fullname = this.fullname;
    this.form.firstname =this.firstname;
    this.form.lastname = this.lastname;
    this.form.nic = this.nic;
    this.form.email = this.email;
    this.form.lastemail = this.lastemail;
    this.form.address = this.address
    this.form.telephone = this.telephone;
    this.form.startdate = this.startdate;
    this.addDemoService.updateDemo(this.form).subscribe((data) => {
      this.router.navigateByUrl('admin/Edit-User-Detail')
    });
  }

  getdemo() {
    this.addDemoService.getdemo(this.form1).subscribe((all) => {
        this.fullname = all.fullname,
        this.firstname = all.firstname,
        this.lastname = all.lastname,
        this.address = all.address,
        this.nic = all.nic,
        this.email = all.email,
        this.lastemail = all.email,
        this.telephone = all.telephone,
        this.startdate = all.startdate,
        this.editby = all.lasteditby
    }
    );
  }
}