import { Component, OnInit } from '@angular/core';
import { TokenService } from 'app/service/token.service';
import { USER } from 'app/models/USER';
import { MultiuserhandleService } from 'app/service/multiuserhandle.service';
import { Router } from '@angular/router';
import { AddDemoService } from 'app/service/add-demo.service';

@Component({
  selector: 'app-editdemo',
  templateUrl: './editdemo.component.html',
  styleUrls: ['./editdemo.component.scss']
})
export class EditdemoComponent implements OnInit {
  users: USER[] = [];
  public form = {
    email: null,
    lasteditby: this.Token.payload(this.Token.gettoken()).ud.fullname
  }



  constructor(private Adddemo: AddDemoService, private Token: TokenService, private router: Router, private UserHandle: MultiuserhandleService) {
    this.getAlldemo();
  }


  ngOnInit() {
  }
  getAlldemo() {
    this.Adddemo.getalldemo().subscribe((all) => {
      this.users = all
    }
    );
  }
  isOtheruser() {
    return this.users.filter(x => (x.id !== this.Token.payload(this.Token.gettoken()).sub) && (x.permenetdisable === 0));
  }
  isMobileMenu() {
    if (screen.width > 991) {
      return false;
    }
    return true;
  }
  onedit(event, email) {
    event.preventDefault();
    this.form.email = email;
    
    this.router.navigate(['/lecturer/update-demo'], { queryParams: { Email: email }, skipLocationChange: true });
  }
  ondelete(event, email) {
    event.preventDefault();
    this.form.email = email;
    this.Adddemo.deletedemo(this.form).subscribe(
      data => this.getAlldemo()
    );
  }

}
