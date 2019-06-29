import { Component, OnInit, ErrorHandler } from '@angular/core';
import { UserService } from 'app/service/user.service';
import { TokenService } from 'app/service/token.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'app/service/auth.service';
import { SnotifyService } from 'ng-snotify';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit, ErrorHandler {
  public error = [];
  public form = {
    email: null,
    password: null,
    password_confirmation: null,
    resetToken: null
  }
  constructor(
    private route: ActivatedRoute,
    private Jarwis: UserService,
    private router: Router,
    private Notify: SnotifyService
  ) {
    route.queryParams.subscribe(params => {
      this.form.resetToken = params['token']
    });
  }

  onSubmit() {
    this.Jarwis.changePassword(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    )
  }
  handleResponse(data) {

    let _router = this.router;
    this.Notify.confirm('Done!, Now login with new Password', {
      buttons: [
        {
          text: 'Okay',
          action: toster => {
            _router.navigateByUrl('/login'),
              this.Notify.remove(toster.id)
          }
        },
      ]
    })

  }

  handleError(error) {
    this.error = error.error.errors;
  }
  ngOnInit() {
  }

}