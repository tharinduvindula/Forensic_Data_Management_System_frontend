import { Component, OnInit } from '@angular/core';

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
  ngOnInit() {}
  public title = null;

  constructor() {
    this.dataSource = {
      'chart': {
        'CaptionFontSize': 18,
        'subCaptionFontSize': 15,
        'subCaptionFontcolor': '#ffffff',
        'palettecolors': '#ffffff,#FFFF00',
        'labelFontColor': '#ffffff',
        'labelFontSize': 12,
        'legendItemFontColor': '#ffffff',
        'outCnvBaseFontColor': '#ffffff',
        'bgAlpha': 0,
        'pieRadius': 80,
        'caption': 'Orders by Coroner and Magistrate',
        'subCaption': '[2017-2018]',
        'numberPrefix': '',
        'decimals': '0',
        'theme': 'fusion'
      },

      'data': [{
          'label': 'Coroner',
          'value': '290'
      }, {
          'label': 'Magistrate',
          'value': '30'
      }]
  };
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
        'subCaptionFontcolor': '#ffffff',
        'caption': 'Cause of Death',
        'subCaption': '[2017-2018]',
        'palettecolors': '#310000,#630000,#950000,#c70000,#f90000',
        'legendItemFontColor': '#ffffff',
        'outCnvBaseFontColor': '#ffffff',
        'labelFontColor': '#ffffff',
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
    this.gareport = {
      'chart': {
        'maxLabelHeight': '50',
        'labelDisplay': 'rotate',
        'CaptionFontSize': 18,
        'subCaptionFontSize': 15,
        'subCaptionFontcolor': '#ffffff',
        'labelFontSize': 10,
        'caption': 'No of GA Report Delays',
        'subCaption': 'Dehiwala-Mount Lavinia',
        'palettecolors': '#ffffff,#8B0000',
        'legendItemFontColor': '#ffffff',
        'outCnvBaseFontColor': '#ffffff',
        'labelFontColor': '#ffffff',
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
    this.pareport = {
      'chart': {
        'labelDisplay': 'rotate',
        'CaptionFontSize': 18,
        'subCaptionFontSize': 15,
        'subCaptionFontcolor': '#ffffff',
        'labelFontSize': 10,
        'palettecolors': '#ffffff,#ADFF2F',
        'legendItemFontColor': '#ffffff',
        'outCnvBaseFontColor': '#ffffff',
        'labelFontColor': '#ffffff',
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
        'subCaptionFontcolor': '#ffffff',
        // 'labelFontSize': 10,
        'legendFontSize': 5,
        'palettecolors': '#ffffff,#fdfacc,#fcf59a,#faf068,#f9eb36,#f8e604,#FFD700',
        'legendItemFontColor': '#ffffff',
        'outCnvBaseFontColor': '#ffffff',
        'labelFontColor': '#ffffff',
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


    }
