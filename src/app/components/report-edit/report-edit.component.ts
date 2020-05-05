import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { RETREIVE } from 'app/models/RETREIVE';
import { AddDeceasedService } from 'app/service/add-deceased.service';
import { TokenService } from 'app/service/token.service';

export interface Area {
  value: string;
  viewValue: string;
}

export interface Rank {
  value: string;
  viewValue: string;
}

export interface Gcod {
  value: string;
  viewValue: string;
}

export interface GcodGroup {
  disabled?: boolean;
  name: string;
  gcod: Gcod[];
}

@Component({
  selector: 'app-report-edit',
  templateUrl: './report-edit.component.html',
  styleUrls: ['./report-edit.component.scss']
})

export class ReportEditComponent implements OnInit {

  display = false;
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  fifthFormGroup: FormGroup;
  time = {hour: 13, minute: 30};
  meridian = true;
  selectedOptions1: string[] = [];
  selectedOptions2: string[] = [];
  selectedOptions3: string[] = [];
  submitted = false;
  errors = [];
  error: any;

  toggleMeridian() {
      this.meridian = !this.meridian;
  }

  sp1: {
    name:string;
  }[]=[
    {name: "Blood"},
    {name: "Liver"},
    {name: "Suspected Poison"},
    {name: "Urine"},
    {name: "Kidney"},
  
];
 sp2: {
    name:string;
  }[]=[
    {name: "Tablets/Medicines"},
    {name: "Bile"},
    {name: "Lungs"},
    {name: "Other (Specify)"},
  ];
  sp3: {
    name:string;
  }[]=[
    {name:"Stomach Contents"},
    {name: "Vitreous humor"},
    {name: "Intestinal Contents"},
    {name: "Brain"},
  ];
 

// tslint:disable-next-line: member-ordering
  areas: Area[] = [
    {value: 'area-01', viewValue: 'Agulana'}, {value: 'area-02', viewValue: 'Athurugiriya'}, {value: 'area-03', viewValue: 'Bambalapitiya'},
    {value: 'area-04', viewValue: 'Boralesgamuwa'}, {value: 'area-05', viewValue: 'Borella'}, {value: 'area-06', viewValue: 'Dehiwala'},
// tslint:disable-next-line: max-line-length
    {value: 'area-07', viewValue: 'Homagama'}, {value: 'area-08', viewValue: 'Hospital Police'}, {value: 'area-09', viewValue: 'Jayawardanapura'},
    {value: 'area-10', viewValue: 'Kahathuduwa'}, {value: 'area-11', viewValue: 'Kirulapone'}, {value: 'area-12', viewValue: 'Kohuwala'},
    {value: 'area-13', viewValue: 'Kollupitiya'}, {value: 'area-14', viewValue: 'Kottawa'}, {value: 'area-15', viewValue: 'Maharagama'},
    {value: 'area-16', viewValue: 'Meegoda'}, {value: 'area-17', viewValue: 'Mirihana'}, {value: 'area-18', viewValue: 'Moragahahena'},
    {value: 'area-19', viewValue: 'Moratumulla'}, {value: 'area-20', viewValue: 'Moratuwa'}, {value: 'area-21', viewValue: 'Mt-Lavinia'},
    {value: 'area-22', viewValue: 'Padukka'}, {value: 'area-23', viewValue: 'Panadura'}, {value: 'area-24', viewValue: 'Piliyandala'},
    {value: 'area-25', viewValue: 'Welikada'}, {value: 'area-26', viewValue: 'Wellawatte'}
  ];

  // tslint:disable-next-line: member-ordering
  ranks: Rank[] = [ {value: 'igp', viewValue: 'IGP'}, {value: 'sdig', viewValue: 'SDIG'}, {value: 'ssp', viewValue: 'SSP'}, 
                    {value: 'sp', viewValue: 'SP'}, {value: 'asp', viewValue: 'ASP'}, {value: 'ci', viewValue: 'CI'}, 
                    {value: 'ip', viewValue: 'IP'}, {value: 'si', viewValue: 'SI'}, {value:'psm', viewValue: 'PSM'}, 
                    {value: 'ps', viewValue: 'PS'}, {value: 'pc', viewValue: 'PC'}];


  constructor(
    private _formBuilder: FormBuilder,
    private adddeceased: AddDeceasedService,
    private Activatedroute: ActivatedRoute,
    private router: Router,
    private Token: TokenService
    ) {
      this.form.srjno = this.Activatedroute.snapshot.queryParamMap.get('srjno');
    this.getdeceased();
    }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    }); 
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
    this.fourthFormGroup = this._formBuilder.group({
      fourthCtrl: ['', Validators.required]
    });
    this.fifthFormGroup = this._formBuilder.group({
      fifthCtrl: ['', Validators.required]
    });
  }
 
// tslint:disable: member-ordering
  //gcodControl = new FormControl();
  gcodGroups: GcodGroup[] = [
    {
      name: 'Natural Death',
      gcod: [
        {value: 'cancer', viewValue: 'Cancer'},
        {value: 'stroke', viewValue: 'Stroke'},

        {value: 'iheartd', viewValue: 'Ischemic Heart disease'},
        {value: 'Pneumonia', viewValue: 'Pneumonia'},
        {value: 'Infection', viewValue: 'Infection'},
        {value: 'ckd', viewValue: 'Chronic Kidney Disease'},
        {value: 'clcdandc', viewValue: 'Chronic Liver Cell Disease and Cirrhosis'},
        {value: 'cld', viewValue: 'Chronic Lung Disease'},
        {value: 'dd', viewValue: 'Diarrheal Disease'},

      ]
    },
    {
      name: 'Unnatural Death',
      gcod: [
        {value: 'accident', viewValue: 'Road traffic accident/Train accident'},
        {value: 'hanging', viewValue: 'Hanging'},
        {value: 'electrocution', viewValue: 'Electrocution'},
        {value: 'drowning', viewValue: 'Drowning'},
        {value: 'burns', viewValue: 'Burns'},

        {value: 'cands', viewValue: 'Cuts and Stabs'},
        {value: 'poisoning', viewValue: 'Poisoning'},
        {value: 'firearm', viewValue: 'Firearm'},
        {value: 'fandm', viewValue: 'Fallen/Macinery'},
      ]
    },
    {
      name: 'Other',
      gcod: [
        {value: 'underinvest', viewValue: 'Under investigation'},


      ]
    }
  ];

  public form = {
    srjno: null,
    pmdate: null,
    pmtime: null,
    fullname: null,
    age: null,
    sex: null,
    address: null,
    contactnumber: null,
    policefullname : null,
    policetagno : null,
    policearea : null,
    policerank: null,
    policephoneno: null,
    policedate: null,
    policescenephoto: null,
    policefoldername: null,
    coronerfullname: null,
    coronerarea: null,
    coronerordergivenby: null,    
    a: null,
    b: null,
    c: null,
    contributory_cause: null,
    other_comments: null,
    cod: null,
    circumstances: null,
    gactnumber: null,
    gaanalysis: null,
    gadate: null,
    gatime: null,
    gaspecimens:null,
    mrirefnum: null,
    mrianalysis: null,
    mridate: null,
    mritime: null,
    mrispecimens:null,
    otherrefnum: null,
    otheranalysis: null,
    otherdate: null,
    othertime: null,
    otherspecimens:null,
    addingby: this.Token.payload(this.Token.gettoken()).ud.fullname,
    lasteditby: this.Token.payload(this.Token.gettoken()).ud.fullname,
  }

  onsubmit(){
    this.submitted=true; 
    this.form.gaspecimens = this.selectedOptions1;
    this.form.mrispecimens = this.selectedOptions2;
    this.form.otherspecimens = this.selectedOptions3;
    if(this.form.policescenephoto == "no" ) {
      this.form.policefoldername="None"
    }
    this.onupdate();
  }
  reset(){
    this.submitted=false;
    this.errors["overall"]=false; 
  }
  
  getdeceased() {
    this.adddeceased.getdeceased(this.form).subscribe((all) => {
      this.form.srjno = all.srjno,
      this.form.pmdate = all.pmdate,
      this.form.pmtime = all.pmtime,
      this.form.fullname = all.fullname,
      this.form.age = all.age,
      this.form.sex = all.sex,
      this.form.address = all.address,
      this.form.contactnumber = all.contactnumber,
      this.form.policefullname = all.policefullname,
      this.form.policetagno = all.policetag,
      this.form.policearea = all.policearea,
      this.form.policerank = all.policerank.toUpperCase(),
      this.form.policephoneno = all.policephoneno,
      this.form.policedate = all.policedate,
      this.form.policescenephoto = all.policescenephoto,
      this.form.policefoldername = all.policefoldername,
      this.form.coronerfullname = all.coronerfullname,
      this.form.coronerarea = all.coronerarea,
      this.form.coronerordergivenby = all.coronerordergivenby,
      this.form.a = all.a,
      this.form.b = all.b,
      this.form.c = all.c,
      this.form.contributory_cause = all.contributory_cause,
      this.form.other_comments = all.other_comments,
      this.form.cod = all.cod,
      this.form.circumstances = all.circumstances,
      this.form.gactnumber = all.gactnumber,
      this.form.gaanalysis = all.gaanalysis,
      this.form.gadate = all.gadate,
      this.form.gatime = all.gatime,
      this.selectedOptions1 = all.gaspecimens,
      this.form.mrirefnum = all.mrirefnum,
      this.form.mrianalysis = all.mrianalysis,
      this.form.mridate = all.mridate,
      this.form.mritime = all.mritime,
      this.selectedOptions2 = all.mrispecimens,
      this.form.otherrefnum = all.otherrefnum,
      this.form.otheranalysis = all.otheranalysis,
      this.form.otherdate = all.otherdate,
      this.form.othertime = all.othertime,
      this.selectedOptions3 = all.otherspecimens
      // this.startdate = this.form.startdate.split('T')[0],
      // this.addingby = all.addingby,
      // this.editby = all.lasteditby,
      // this.form.photo =all.photo
    }
    );
  }
  onupdate() {
    this.adddeceased.updatedeceased(this.form).subscribe(
      data => {
        if(data["message"]="success"){
          this.errors["overall"]=false;
        }  
      },
      error =>{
        if(error.error.error=="Oops something went wrong!"){
          this.errors["overall"]=true;
        }
        else
          this.errors["overall"]=false;

      },
    );
  }



  getErrorMessage() {
    return this.form.srjno.hasError('required') ? 'You must enter a value' :
      this.form.srjno.hasError('srjno') ? 'Not a valid srjno' :
        '';
  }
  // myFilter = (d: Date): boolean => {
  //   const day = d.getDay();
  //   // Prevent Saturday and Sunday from being selected.
  //   return day !== 0 && day !== 6;
  // }

}
