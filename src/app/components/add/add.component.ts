import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AddDeceasedService } from 'app/service/add-deceased.service';

export interface Area {
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


@Component(
  {
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
}
)
export class AddComponent implements OnInit {

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
  submitted=false;
  errors=[];

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


  constructor(
    private _formBuilder: FormBuilder,
    private adddeceased: AddDeceasedService,
    ) {}

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
    policescenephoto: null,
    policefoldername: null,
    coronerfullname: null,
    coronerarea: null,
    coronerordergivenby: null,
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
  }

  onsubmit(){
    this.submitted=true; 
    this.form.gaspecimens = this.selectedOptions1;    
    this.form.mrispecimens = this.selectedOptions2;    
    this.form.otherspecimens = this.selectedOptions3;
    this.adddeceaseddetails();
  }
  adddeceaseddetails(){
    this.adddeceased.adddeceased(this.form).subscribe(
      data => { 
        if(data["message"]="success"){
          this.errors["srjdup"]=true;
          this.errors["overall"]=false;
        }
      },
      error => 
      {             
        if(error.error.error=="SRJ no already exists") {   
          this.errors["srjdup"]=true;
        }
        if(error.error.error=="Oops something went wrong!"){
          this.errors["overall"]=true;
        }
      }
    );
  }  

}
