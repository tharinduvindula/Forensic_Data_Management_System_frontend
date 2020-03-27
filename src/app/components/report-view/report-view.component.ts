import { Component, OnInit } from '@angular/core';
import { AddDeceasedService } from 'app/service/add-deceased.service';
import { TokenService } from 'app/service/token.service';
import { Router, ActivatedRoute } from '@angular/router';
import { RETREIVE } from 'app/models/RETREIVE';

@Component({
  selector: 'app-report-view',
  templateUrl: './report-view.component.html',
  styleUrls: ['./report-view.component.scss']
})
export class ReportViewComponent implements OnInit {

  public form = {
    srjno: null,
    fullname: null,
    pmdate: null,
    pmtime: null,
    pfullname: null,
    ptagno: null,
    parea: null,
    pdate: null,
    scenephotographs: null,
    foldername: null,
    ordergivenby: null,
    ofullname: null,
    oarea: null,
    a: null,
    b: null,
    c: null,
    contributorycauses: null,
    othercomments: null,
    generalizedcod: null,
    circumstance: null,
    gactnumber: null,
    gadate: null,
    gatime: null,
    galist: null,
    mrirefnum: null,
    mridate: null,
    mritime: null,
    mrilist: null,
    otherrefnum: null,
    otherdate: null,
    othertime: null,
    otherlist: null,
  };
  public form1 = {
    srjno: null
  }

  constructor(private Deceased: AddDeceasedService, private Activatedroute: ActivatedRoute, private Token: TokenService) { 
    console.log(this.Activatedroute.snapshot.queryParamMap.get("srjno"));
    this.form1.srjno = this.Activatedroute.snapshot.queryParamMap.get("srjno");
    this.getdeceased();
  }

  ngOnInit() {
  }

  getdeceased() {
    this.Deceased.getdeceased(this.form1).subscribe((all) => {
      this.form.srjno = all.srjno,
      this.form.fullname = all.fullname,
      this.form.pmdate = all.pmdate,
      this.form.pmtime = all.pmtime,
      this.form.pfullname = all.policefullname,
      this.form.ptagno = all.policetag,
      this.form.parea = all.policearea,
      this.form.pdate = all.policedate,
      this.form.scenephotographs = all.policescenephoto,
      this.form.foldername = all.policefoldername,
      this.form.ordergivenby = all.coronerordergivenby,
      this.form.ofullname = all.coronerfullname,
      this.form.oarea = all.coronerarea,
      this.form.a = all.a,
      this.form.b = all.b,
      this.form.c = all.c,
      this.form.contributorycauses = all.contributory_cause
      this.form.othercomments = all.other_comments,
      this.form.generalizedcod = all.cod,
      this.form.circumstance = all.circumstances
      this.form.gactnumber = all.gactnumber
      this.form.gadate = all.gadate
      this.form.gatime = all.gatime
      this.form.galist = all.gaspecimens
      this.form.mrirefnum = all.mrirefnum
      this.form.mridate =  all.mridate
      this.form.mritime = all.mritime
      this.form.mrilist = all.mrispecimens
      this.form.otherrefnum = all.otherrefnum
      this.form.otherdate = all.otherdate
      this.form.othertime = all.othertime
      this.form.otherlist = all.otherspecimens
    }
    );
  }

}
