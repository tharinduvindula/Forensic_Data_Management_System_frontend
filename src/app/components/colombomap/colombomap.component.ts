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

  ngOnInit() {
    $('.mapcontainer').mapael({
      map: {
        name: 'sl_map_colombo',
        defaultArea: {
          attrs: {
            stroke: '#fff',
            'stroke-width': 1
          },
          attrsHover: {
            'stroke-width': 2
          }
        }
      },
      legend: {
        area: {
          title: 'Population of France by department',
          slices: [
            {
              max: 25,
              attrs: {
                fill: '#BBDEFB'
              },
              label: 'Less than de 300 000 inhabitants'
            },
            {
              min: 25,
              max: 50,
              attrs: {
                fill: '#1F65C0'
              },
              label: 'Less than de 300 000 inhabitants'
            },
            {
              min: 50,
              max: 75,
              attrs: {
                fill: '#1976D2'
              },
              label: 'Between 100 000 and 500 000 inhabitants'
            },
            {
              min: 75,
              max: 100,
              attrs: {
                fill: '#1E88E5'
              },
              label: 'Between 500 000 and 1 000 000 inhabitants'
            },
            {
              min: 100,
              attrs: {
                fill: '#42A5F5'
              },
              label: 'More than 1 million inhabitants'
            }
          ]
        }
      },
      areas: {
        'division-boralesgamuwa-urban-council': {
          value: '100',
          href: '#',
          tooltip: { content: '<span style="font-weight:bold;">boralesgamuwa</span><br />Population : 100' }
        },
        'division-colombo-municipal-council': {
          value: '50',
          href: '#',
          tooltip: { content: '<span style="font-weight:bold;">colombo (75)</span><br />Population : 50' }
        },
        'division-dehiwala-mtlavinia-municipal-council': {
          value: '50',
          href: '#',
          tooltip: { content: '<span style="font-weight:bold;">dehiwala-mtlavinia </span><br />Deths : 90' }
        },
        'division-homagama-pradeshiya-sabha': {
          value: '90',
          href: '#',
          tooltip: { content: '<span style="font-weight:bold;">homagama (69)</span><br />Population : 2' }
        },
        'division-kaduwela-municipal-council': {
          value: '35',
          href: '#',
          tooltip: { content: '<span style="font-weight:bold;">Hauts-de-Seine (92)</span><br />Population : 9' }
        },
        'division-kolonnawa-urban-council': {
          value: '70',
          href: '#',
          tooltip: { content: '<span style="font-weight:bold;">Seine-Saint-Denis (93)</span><br />Population : 7' }
        },
        'division-kotikawatte-mulleriyawa-pradeshiya-sabha': {
          value: '7',
          href: '#',
          tooltip: { content: '<span style="font-weight:bold;">Pas-de-Calais (62)</span><br />Population : 40' }
        },
        'division-maharagama-urban-council': {
          value: '40',
          href: '#',
          tooltip: { content: '<span style="font-weight:bold;">Gironde (33)</span><br />Population : 75' }
        },
        'division-moratuwa-municipal-council': {
          value: '75',
          href: '#',
          tooltip: { content: '<span style="font-weight:bold;">Yvelines (78)</span><br />Population : 55' }
        },
        'division-seethawaka-pradeshiya-sabha': {
          value: '5',
          href: '#',
          tooltip: { content: '<span style="font-weight:bold;">Seine-et-Marne (77)</span><br />Population : 1347008' }
        },
        'division-seethawakapura-urban-council': {
          value: '60',
          href: '#',
          tooltip: { content: '<span style="font-weight:bold;">Val-de-Marne (94)</span><br />Population : 1340868' }
        },
        'division-sri-jayewardenapura-kotte-municipal-council': {
          value: '180',
          href: '#',
          tooltip: { content: '<span style="font-weight:bold;">Loire-Atlantique (44)</span><br />Population : 1317685' }
        },
        'division-kesbewa-urban-council': {
          value: '110',
          href: '#',
          tooltip: { content: '<span style="font-weight:bold;">Seine-Maritime (76)</span><br />Population : 1275952' }
        }

      }
    });
  }

}
