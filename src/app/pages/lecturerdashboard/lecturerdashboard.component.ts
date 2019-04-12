import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';

@Component({
  selector: 'app-lecturerdashboard',
  templateUrl: './lecturerdashboard.component.html',
  styleUrls: ['./lecturerdashboard.component.css']
})
export class LecturerdashboardComponent implements OnInit {

  dataSource: Object;
  constructor() {
    this.dataSource = {
      'chart': {
        'animation': '0',
        'showbevel': '0',
        'usehovercolor': '1',
        'canvasbordercolor': 'FFFFFF',
        'bordercolor': 'FFFFFF',
        'caption': 'Website Visits for the month of March 2018',
        'fillalpha': '80',
        'hovercolor': 'black',
        'showborder': 0,
        'entityfillhovercolor': 'black',
// tslint:disable-next-line: max-line-length
        'entitytooltext': '<div style=\'font-size:14px; text-align:center; padding: 2px 4px 2px 4px; color:white;\'>$lName</div><div style=\'font-size:12px; color:white\'>$value  deths for month</div>',
        'theme': 'fint'
      },
      'colorrange': {
        'gradient': '0',
        'color': [
          {
            'minvalue': '0',
            'maxvalue': '500',
            'displayvalue': '< $500K',
            'code': '#42A5F5'
          },
          {
            'minvalue': '500',
            'maxvalue': '1000',
            'displayvalue': '$500K - $1000K',
            'code': '#1E88E5'
          },
          {
            'minvalue': '1000',
            'maxvalue': '1500',
            'displayvalue': '$1000K - $1500K',
            'code': '#1976D2'
          },
          {
            'minvalue': '1500',
            'maxvalue': '2000',
            'displayvalue': '$1500K - $2000K',
            'code': '#1F65C0'
          },
          {
            'minvalue': '2000',
            'maxvalue': '5000',
            'displayvalue': 'No data availale',
            'code': '#BBDEFB'
          }
        ]
      },
      'data': [
        {'id': 'LK.CO' , 'value': 2000},
        { 'id': 'LK.MH', 'value': 3182 },
        { 'id': 'LK.KE', 'value': 3280 },
        { 'id': 'LK.KY', 'value': 911 }]
    }
  }


  startAnimationForLineChart(chart) {
      let seq: any, delays: any, durations: any;
      seq = 0;
      delays = 80;
      durations = 500;

      chart.on('draw', function(data) {
        if (data.type === 'line' || data.type === 'area') {
          data.element.animate({
            d: {
              begin: 600,
              dur: 700,
              from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
              to: data.path.clone().stringify(),
              easing: Chartist.Svg.Easing.easeOutQuint
            }
          });
        } else if (data.type === 'point') {
              seq++;
              data.element.animate({
                opacity: {
                  begin: seq * delays,
                  dur: durations,
                  from: 0,
                  to: 1,
                  easing: 'ease'
                }
              });
          }
      });

      seq = 0;
  };
  startAnimationForBarChart(chart) {
      let seq2: any, delays2: any, durations2: any;

      seq2 = 0;
      delays2 = 80;
      durations2 = 500;
      chart.on('draw', function(data) {
        if (data.type === 'bar') {
            seq2++;
            data.element.animate({
              opacity: {
                begin: seq2 * delays2,
                dur: durations2,
                from: 0,
                to: 1,
                easing: 'ease'
              }
            });
        }
      });

      seq2 = 0;
  };
  ngOnInit() {
      /* ----------==========     Daily Sales Chart initialization For Documentation    ==========---------- */

      const dataDailySalesChart: any = {
          labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
          series: [
              [12, 17, 7, 17, 23, 18, 38]
          ]
      };

     const optionsDailySalesChart: any = {
          lineSmooth: Chartist.Interpolation.cardinal({
              tension: 0
          }),
          low: 0,
          high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: { top: 0, right: 0, bottom: 0, left: 0},
      }

      const dailySalesChart = new Chartist.Line('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);

      this.startAnimationForLineChart(dailySalesChart);


      /* ----------==========     Completed Tasks Chart initialization    ==========---------- */

      const dataCompletedTasksChart: any = {
          labels: ['12p', '3p', '6p', '9p', '12p', '3a', '6a', '9a'],
          series: [
              [230, 750, 450, 300, 280, 240, 200, 190]
          ]
      };

     const optionsCompletedTasksChart: any = {
          lineSmooth: Chartist.Interpolation.cardinal({
              tension: 0
          }),
          low: 0,
          high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: { top: 0, right: 0, bottom: 0, left: 0}
      }

      const completedTasksChart = new Chartist.Line('#completedTasksChart', dataCompletedTasksChart, optionsCompletedTasksChart);

      // start animation for the Completed Tasks Chart - Line Chart
      this.startAnimationForLineChart(completedTasksChart);



      /* ----------==========     Emails Subscription Chart initialization    ==========---------- */

      const datawebsiteViewsChart = {
        labels: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
        series: [
          [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]

        ]
      };
      const optionswebsiteViewsChart = {
          axisX: {
              showGrid: false
          },
          low: 0,
          high: 1000,
          chartPadding: { top: 0, right: 5, bottom: 0, left: 0}
      };
      const responsiveOptions: any[] = [
        ['screen and (max-width: 640px)', {
          seriesBarDistance: 5,
          axisX: {
            labelInterpolationFnc: function (value) {
              return value[0];
            }
          }
        }]
      ];
      const websiteViewsChart = new Chartist.Bar('#websiteViewsChart', datawebsiteViewsChart, optionswebsiteViewsChart, responsiveOptions);

      // start animation for the Emails Subscription Chart
      this.startAnimationForBarChart(websiteViewsChart);
  }

}
