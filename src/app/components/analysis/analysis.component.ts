import { Component, OnInit } from '@angular/core';
import { AnalysisService } from 'app/service/analysis.service';

export interface Area {
      value: string;
      viewValue: string;
}


@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.scss']
})
export class AnalysisComponent implements OnInit {
  dataSource: Object;
  manner: Object;
  gareport: Object;
  pareport: Object;
  pmreport: Object;
  ordercount: Object;
  //ordercountarea: Object;
  coroner:Number;
  magistrate: Number;

  ngOnInit() {}
  public title = null;
    areas: Area[] = [
      {value: 'area-01', viewValue: 'Agulana'}, {value: 'area-02', viewValue: 'Athurugiriya'}, {value: 'area-03', viewValue: 'Bambalapitiya'},
      {value: 'area-04', viewValue: 'Boralesgamuwa'}, {value: 'area-05', viewValue: 'Borella'}, {value: 'area-06', viewValue: 'Dehiwala'},  
      {value: 'area-07', viewValue: 'Homagama'}, {value: 'area-08', viewValue: 'Hospital Police'}, {value: 'area-09', viewValue: 'Jayawardanapura'},
      {value: 'area-10', viewValue: 'Kahathuduwa'}, {value: 'area-11', viewValue: 'Kirulapone'}, {value: 'area-12', viewValue: 'Kohuwala'},
      {value: 'area-13', viewValue: 'Kollupitiya'}, {value: 'area-14', viewValue: 'Kottawa'}, {value: 'area-15', viewValue: 'Maharagama'},
      {value: 'area-16', viewValue: 'Meegoda'}, {value: 'area-17', viewValue: 'Mirihana'}, {value: 'area-18', viewValue: 'Moragahahena'},
      {value: 'area-19', viewValue: 'Moratumulla'}, {value: 'area-20', viewValue: 'Moratuwa'}, {value: 'area-21', viewValue: 'Mt-Lavinia'},
      {value: 'area-22', viewValue: 'Padukka'}, {value: 'area-23', viewValue: 'Panadura'}, {value: 'area-24', viewValue: 'Piliyandala'},
      {value: 'area-25', viewValue: 'Welikada'}, {value: 'area-26', viewValue: 'Wellawatte'}
    ];
    public form={
      gareportarea:"Agulana",      
      ordercountarea:"Agulana"
      }
  constructor(
      private analysis: AnalysisService,) {
            const ordercountarea = {
                  area:this.form.ordercountarea,
            }
            this.analysis.OrderGivenCount(ordercountarea).subscribe(
                  data => { 
                    if(data["message"]="success"){ 
                        this.coroner = data[0];
                        this.magistrate = data[1];
                       /*  console.log(this.coroner);
                        console.log(this.magistrate); */
                        this.ordercount = {
            
                              'chart': {
                                    'CaptionFontSize': 18,
                                    'subCaptionFontSize': 15,
                                    'subCaptionFontcolor': '#25393b',
                                    'palettecolors': '#ffffff,#054f55',
                                    'labelFontColor': '#25393b',
                                    'labelFontSize': 12,
                                    'legendItemFontColor': '#25393b',
                                    'outCnvBaseFontColor': '#25393b',
                                    'bgAlpha': 0,
                                    'pieRadius': 80,
                                    'caption': 'Orders by Coroner and Magistrate',
                                    'subCaption': this.form.ordercountarea,
                                    'numberPrefix': '',
                                    'decimals': '0',
                                    'theme': 'fusion'
                              },
                              
                              'data': [{
                                    'label': 'Coroner',
                                    'value': this.coroner
                              }, {
                                    'label': 'Magistrate',
                                    'value': this.magistrate
                              }]
                        };
                    }               
                  },
                  error => 
                  {  
                        console.log("Error:"+error)           
                  }
                  
            );
            const gareportdelays = {
                  area:this.form.gareportarea,
            }
            this.analysis.GAReportDelays(gareportdelays).subscribe(
                  data => { 
                    if(data["message"]="success"){ 
                       
                        this.gareport = {
                              'chart': {
                                'maxLabelHeight': '50',
                                'labelDisplay': 'rotate',
                                'CaptionFontSize': 18,
                                'subCaptionFontSize': 15,
                                'subCaptionFontcolor': '#25393b',
                                'labelFontSize': 10,
                                'caption': 'No of GA Report Delays',
                                'subCaption': this.form.gareportarea,
                                'palettecolors': '#ffffff,#9fcace,#6eaaaf,#449aa1,#1d7880,#054f55,#1b2728',
                                'legendItemFontColor': '#25393b',
                                'outCnvBaseFontColor': '#25393b',
                                'labelFontColor': '#25393b',
                                'bgAlpha': 0,
                                'theme': 'fusion'
                        
                        
                              },
                        
                              'data': [{
                                'label': '1 day',
                                'value': data[0]
                            }, {
                                'label': '1 day>Delay<=1 week',
                                'value': data[1]
                            }, {
                                'label': '1 week>Delay<=1 month',
                                'value': data[2]
                          }, {
                                'label': '1 month>Delay<=3 months',
                                'value': data[3]
                          }, {
                                'label': '3 months>Delay<=1 year',
                                'value': data[4]
                          }, {
                                'label': '1 year>Delay<=3 years',
                                'value': data[5]
                          }, {
                                'label': 'Delay>3 years',
                                'value': data[6]
                              }]
                          };
                    }               
                  },
                  error => 
                  {  
                        console.log("Error:"+error)           
                  }
                  
            );    

    this.manner = {
      'chart': {
        'showLabels': 0,
        // "showp":0,
        'smartLineColor': '#ffffff',
        'use3DLighting': '1',
       // 'showLegend': 0,
        'pieRadius': 90,
        'CaptionFontSize': 18,
        'subCaptionFontSize': 15,
        'subCaptionFontcolor': '#25393b',
        'caption': 'Manner of Death',
        'subCaption': '[2017-2018]',
        'palettecolors': '#ffffff,#9fcace,#449aa1,#1d7880,#054f55',
        'legendItemFontColor': '#25393b',
        'outCnvBaseFontColor': '#25393b',
        'labelFontColor': '#25393b',
        'labelFontSize': 10,
       // 'legendFontSize': 11,
        'bgAlpha': 0,
        'theme': 'fusion'
      },

      'data': [{
          'label': 'Accident',
          'value': '290'
      }, {
          'label': 'Sucide',
          'value': '30'
      }, {
          'label': 'Homicide',
          'value': '290'
    }, {
          'label': 'Natural',
          'value': '30'
    }, {
          'label': 'Unascertained',
          'value': '10'
    }]
    };
    
    this.pareport = {
      'chart': {
        'labelDisplay': 'rotate',
        'CaptionFontSize': 18,
        'subCaptionFontSize': 15,
        'subCaptionFontcolor': '#25393b',
        'labelFontSize': 10,
        'palettecolors': '#ffffff',
        'legendItemFontColor': '#25393b',
        'outCnvBaseFontColor': '#25393b',
        'labelFontColor': '#25393b',
        'bgAlpha': 0,
        'caption': 'No of Police Report Delays',
        'subCaption': 'Dehiwala-Mount Lavinia',
        'lineThickness': '3',
        'theme': 'fusion'
      },

      'data': [{
          'label': '1 day',
          'value': '10'
      }, {
          'label': '1 day>Delay<=1 week',
          'value': '30'
      }, {
          'label': '1 week>Delay<=1 month',
          'value': '23'
    }, {
          'label': '1 month>Delay<=3 months',
          'value': '300'
    }, {
          'label': '3 months>Delay<=1 year',
          'value': '150'
    }, {
          'label': '1 year>Delay<=3 years',
          'value': '25'
    }, {
          'label': 'Delay>3 years',
          'value': '10'
        }]
    };

    this.pmreport = {
      'chart': {

        'caption': 'No of PM Report and Delays',
        'subCaption': 'Dehiwala-Mount Lavinia',
        'CaptionFontSize': 30,
        'subCaptionFontSize': 20,
        'subCaptionFontcolor': '#25393b',
        // 'labelFontSize': 10,
        'legendFontSize': 5,
        'palettecolors': '#ffffff,#9fcace,#6eaaaf,#449aa1,#1d7880,#054f55,#1b2728',
        'legendItemFontColor': '#25393b',
        'outCnvBaseFontColor': '#25393b',
        'labelFontColor': '#25393b',
        'bgAlpha': 0,
        'theme': 'fusion'
      },
      'data': [{
        'label': '1 day',
        'value': '10'
    }, {
        'label': '1 day>Delay<=1 week',
        'value': '30'
    }, {
        'label': '1 week>Delay<=1 month',
        'value': '23'
  }, {
        'label': '1 month>Delay<=3 months',
        'value': '300'
  }, {
        'label': '3 months>Delay<=1 year',
        'value': '150'
  }, {
        'label': '1 year>Delay<=3 years',
        'value': '25'
  }, {
        'label': 'Delay>3 years',
        'value': '10'
      }]
  };
    }
    onChange(area) {
      this.form.gareportarea=area; 
      const gareportdelays = {
            area:area,
      }  
      this.analysis.GAReportDelays(gareportdelays).subscribe(
            data => { 
              if(data){ 
                 
                  this.gareport = {
                        'chart': {
                          'maxLabelHeight': '50',
                          'labelDisplay': 'rotate',
                          'CaptionFontSize': 18,
                          'subCaptionFontSize': 15,
                          'subCaptionFontcolor': '#25393b',
                          'labelFontSize': 10,
                          'caption': 'No of GA Report Delays',
                          'subCaption': this.form.gareportarea,
                          'palettecolors': '#ffffff,#9fcace,#6eaaaf,#449aa1,#1d7880,#054f55,#1b2728',
                          'legendItemFontColor': '#25393b',
                          'outCnvBaseFontColor': '#25393b',
                          'labelFontColor': '#25393b',
                          'bgAlpha': 0,
                          'theme': 'fusion'
                  
                  
                        },
                  
                        'data': [{
                          'label': '1 day',
                          'value': data[0]
                      }, {
                          'label': '1 day>Delay<=1 week',
                          'value': data[1]
                      }, {
                          'label': '1 week>Delay<=1 month',
                          'value': data[2]
                    }, {
                          'label': '1 month>Delay<=3 months',
                          'value': data[3]
                    }, {
                          'label': '3 months>Delay<=1 year',
                          'value': data[4]
                    }, {
                          'label': '1 year>Delay<=3 years',
                          'value': data[5]
                    }, {
                          'label': 'Delay>3 years',
                          'value': data[6]
                        }]
                    };
              }               
            },
            error => 
            {  
                  console.log("Error:"+error)           
            }
            
      );    
      }

      onSelect(area) {
            
            this.form.ordercountarea=area;  
            const ordercountarea = {
                  area:area,
            }
            this.analysis.OrderGivenCount(ordercountarea).subscribe(
                  data => { 
                    if(data){ 
                        this.coroner = data[0];
                        this.magistrate = data[1];
                        /* console.log(this.coroner);
                        console.log(this.magistrate); */
                        this.ordercount = {
            
                              'chart': {
                                    'CaptionFontSize': 18,
                                    'subCaptionFontSize': 15,
                                    'subCaptionFontcolor': '#25393b',
                                    'palettecolors': '#ffffff,#054f55',
                                    'labelFontColor': '#25393b',
                                    'labelFontSize': 12,
                                    'legendItemFontColor': '#25393b',
                                    'outCnvBaseFontColor': '#25393b',
                                    'bgAlpha': 0,
                                    'pieRadius': 80,
                                    'caption': 'Orders by Coroner and Magistrate',
                                    'subCaption': this.form.ordercountarea,
                                    'numberPrefix': '',
                                    'decimals': '0',
                                    'theme': 'fusion'
                              },
                              
                              'data': [{
                                    'label': 'Coroner',
                                    'value': this.coroner
                              }, {
                                    'label': 'Magistrate',
                                    'value': this.magistrate
                              }]
                        };
                    }               
                  },
                  error => 
                  {  
                        console.log("Error:"+error)           
                  }
                  
            );
            
            
      }

    }
