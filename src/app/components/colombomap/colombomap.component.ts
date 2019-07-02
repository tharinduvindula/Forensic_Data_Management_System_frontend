import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import 'jquery-mapael';
import '../../../assets/js/sl-district-maps.min';

@Component({
  selector: 'app-colombomap',
  templateUrl: './colombomap.component.html',
  styleUrls: ['./colombomap.component.scss']
})
export class ColombomapComponent implements OnInit {

  constructor() { }
  /*
{ value: 'area-01', viewValue: 'Agulana' },
{ value: 'area-02', viewValue: 'Athurugiriya' },
{ value: 'area-03', viewValue: 'Bambalapitiya' },
{ value: 'area-04', viewValue: 'Boralesgamuwa' },
{ value: 'area-05', viewValue: 'Borella' },
{ value: 'area-06', viewValue: 'Dehiwala' },
{ value: 'area-07', viewValue: 'Homagama' },
{ value: 'area-08', viewValue: 'Hospital Police' },
{ value: 'area-09', viewValue: 'Jayawardanapura' },
{ value: 'area-10', viewValue: 'Kahathuduwa' },
{ value: 'area-11', viewValue: 'Kirulapone' },
{ value: 'area-12', viewValue: 'Kohuwala' },
{ value: 'area-13', viewValue: 'Kollupitiya' },
{ value: 'area-14', viewValue: 'Kottawa' },
{ value: 'area-15', viewValue: 'Maharagama' },
{ value: 'area-16', viewValue: 'Meegoda' },
{ value: 'area-17', viewValue: 'Mirihana' },
{ value: 'area-18', viewValue: 'Moragahahena' },
{ value: 'area-19', viewValue: 'Moratumulla' },
{ value: 'area-20', viewValue: 'Moratuwa' },
{ value: 'area-21', viewValue: 'Mt-Lavinia' },
{ value: 'area-22', viewValue: 'Padukka' },
{ value: 'area-23', viewValue: 'Panadura' },
{ value: 'area-24', viewValue: 'Piliyandala' },
{ value: 'area-25', viewValue: 'Welikada' },
{ value: 'area-26', viewValue: 'Wellawatte' }   */
// tslint:disable: member-ordering
  boralesgamuwa = 55;
  colombo = 125;
  dehiwalamtlavinia = 95;
  homagama = 45;
  kaduwela = 85;
  kolonnawa = 65;
  kotikawatte = 35;
  maharagama = 15;
  moratuwa = 85;
  seethawaka = 65;
  seethawakapura = 145;
  srijayewardenapurakotte = 35;
  kesbewa = 5;
  ngOnInit() {
    $('.mapcontainer').mapael({
      map: {
        name: 'sl_map_colombo',
        defaultArea: {
          attrs: {
            stroke: '#fff',
            'stroke-width': 0.75
          },
          attrsHover: {
            'stroke-width': 1.5
          }
        }
      },
      legend: {
        area: {
          title: 'Deths of colombo district by municipal-council',
          slices: [
            {
              max: 25,
              attrs: {
                fill: '#BBDEFB'
              },
              label: 'Less than the 25 Deths'
            },
            {
              min: 25,
              max: 50,
              attrs: {
                fill: '#42A5F5'
              },
              label: 'Between 25 and 50 Deths'
            },
            {
              min: 50,
              max: 75,
              attrs: {
                fill: '#1E88E5'
              },
              label: 'Between 50 and 75 Deths'
            },
            {
              min: 75,
              max: 100,
              attrs: {
                fill: '#1976D2'
              },
              label: 'Between 75 and 100 Deths'
            },
            {
              min: 100,
              attrs: {
                fill: '#1F65C0'
              },
              label: 'More than 100 Deths'
            }
          ]
        }
      },
      areas: {
        'division-boralesgamuwa-urban-council': {
          value: this.boralesgamuwa,
          tooltip: { content: '<span style="font-weight:bold;">boralesgamuwa </span><br />Deths : ' + this.boralesgamuwa}
        },
        'division-colombo-municipal-council': {
          value: this.colombo,
          tooltip: { content: '<span style="font-weight:bold;">colombo </span><br />Deths : ' + this.colombo }
        },
        'division-dehiwala-mtlavinia-municipal-council': {
          value: this.dehiwalamtlavinia,
          tooltip: { content: '<span style="font-weight:bold;">dehiwala-mtlavinia </span><br />Deths : ' + this.dehiwalamtlavinia }
        },
        'division-homagama-pradeshiya-sabha': {
          value: this.homagama,
          tooltip: { content: '<span style="font-weight:bold;">homagama </span><br />Deths : ' + this.homagama }
        },
        'division-kaduwela-municipal-council': {
          value: this.kaduwela,
          tooltip: { content: '<span style="font-weight:bold;">kaduwela </span><br />Deths : ' + this.kaduwela}
        },
        'division-kolonnawa-urban-council': {
          value: this.kolonnawa,
          tooltip: { content: '<span style="font-weight:bold;">kolonnawa </span><br />Deths : ' + this.kolonnawa }
        },
        'division-kotikawatte-mulleriyawa-pradeshiya-sabha': {
          value: this.kotikawatte,
          tooltip: { content: '<span style="font-weight:bold;">kotikawatte </span><br />Deths : ' + this.kotikawatte }
        },
        'division-maharagama-urban-council': {
          value: this.maharagama,
          tooltip: { content: '<span style="font-weight:bold;">maharagama </span><br />Deths : ' + this.maharagama }
        },
        'division-moratuwa-municipal-council': {
          value: this.moratuwa,
          tooltip: { content: '<span style="font-weight:bold;">moratuwa </span><br />Deths : ' + this.moratuwa}
        },
        'division-seethawaka-pradeshiya-sabha': {
          value: this.seethawaka,
          tooltip: { content: '<span style="font-weight:bold;">seethawaka </span><br />Deths : ' + this.seethawaka}
        },
        'division-seethawakapura-urban-council': {
          value: this.seethawakapura,
          tooltip: { content: '<span style="font-weight:bold;">seethawakapura </span><br />Deths : ' + this.seethawakapura }
        },
        'division-sri-jayewardenapura-kotte-municipal-council': {
          value: this.srijayewardenapurakotte,
          tooltip: { content: '<span style="font-weight:bold;">sri-jayewardenapura-kotte </span><br />Deths : '
          + this.srijayewardenapurakotte}
        },
        'division-kesbewa-urban-council': {
          value: this.kesbewa,
          tooltip: { content: '<span style="font-weight:bold;">kesbewa </span><br />Deths : ' + this.kesbewa }
        }

      }
    });
  }

}
