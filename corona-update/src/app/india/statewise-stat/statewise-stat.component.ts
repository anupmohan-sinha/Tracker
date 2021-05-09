import { DistrictData, DrilldownData } from './../india.model';
import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import Drilldown from 'highcharts/modules/drilldown';
Drilldown(Highcharts);
// Load the exporting module.
import Exporting from 'highcharts/modules/exporting';
import { StateWise } from '../india.model';
// Initialize exporting module.
Exporting(Highcharts);

@Component({
    selector: 'app-statewise-stat',
    templateUrl: './statewise-stat.component.html',
    styleUrls: ['./statewise-stat.component.scss']
})
export class StatewiseStatComponent implements OnInit {

    @Input() stateData: StateWise[];
    @Input() districtData: DistrictData;

    stateDrilldownData: DrilldownData[] = [];
    options: any;
    constructor() { }

    ngOnInit(): void {
        this.stateData.forEach(x => {
            const driildownUnit: DrilldownData = {name: null, y: null, drilldown: null};
            driildownUnit.name = x.state;
            driildownUnit.y = parseInt(x.active, 10);
            driildownUnit.drilldown = name;
            this.stateDrilldownData.push(driildownUnit);
        });
       // console.log('this.stateDrilldownData ', this.stateDrilldownData);
        this.options = {
            chart: {
                type: 'column'
            },
            credits: {
                enabled: false
            },
            title: {
                text: 'INDIA COVID-19 TRACKER STATEWISE'
            },
            /* subtitle: {
                text: 'Click the columns to view versions.'
            }, */
            accessibility: {
                announceNewData: {
                    enabled: true
                }
            },
            xAxis: {
                type: 'category'
            },
            yAxis: {
                title: {
                    text: 'Number of confirmed cases'
                }

            },
            legend: {
                enabled: false
            },
            plotOptions: {
                series: {
                    borderWidth: 0,
                    dataLabels: {
                        enabled: true,
                        format: '{point.y}'
                    }
                }
            },

            tooltip: {
                headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b><br/>'
            },

            series: [
                {
                    name: 'State Confirmed cases',
                    colorByPoint: true,
                    data: this.stateDrilldownData
                }
            ]/* ,
      drilldown: {
          series: [
              {
                  name: 'Chrome',
                  id: 'Chrome',
                  data: [
                      [
                          'v65.0',
                          0.1
                      ],
                      [
                          'v64.0',
                          1.3
                      ],
                      [
                          'v63.0',
                          53.02
                      ],
                      [
                          'v62.0',
                          1.4
                      ],
                      [
                          'v61.0',
                          0.88
                      ],
                      [
                          'v60.0',
                          0.56
                      ],
                      [
                          'v59.0',
                          0.45
                      ],
                      [
                          'v58.0',
                          0.49
                      ],
                      [
                          'v57.0',
                          0.32
                      ],
                      [
                          'v56.0',
                          0.29
                      ],
                      [
                          'v55.0',
                          0.79
                      ],
                      [
                          'v54.0',
                          0.18
                      ],
                      [
                          'v51.0',
                          0.13
                      ],
                      [
                          'v49.0',
                          2.16
                      ],
                      [
                          'v48.0',
                          0.13
                      ],
                      [
                          'v47.0',
                          0.11
                      ],
                      [
                          'v43.0',
                          0.17
                      ],
                      [
                          'v29.0',
                          0.26
                      ]
                  ]
              },
              {
                  name: 'Firefox',
                  id: 'Firefox',
                  data: [
                      [
                          'v58.0',
                          1.02
                      ],
                      [
                          'v57.0',
                          7.36
                      ],
                      [
                          'v56.0',
                          0.35
                      ],
                      [
                          'v55.0',
                          0.11
                      ],
                      [
                          'v54.0',
                          0.1
                      ],
                      [
                          'v52.0',
                          0.95
                      ],
                      [
                          'v51.0',
                          0.15
                      ],
                      [
                          'v50.0',
                          0.1
                      ],
                      [
                          'v48.0',
                          0.31
                      ],
                      [
                          'v47.0',
                          0.12
                      ]
                  ]
              },
              {
                  name: 'Internet Explorer',
                  id: 'Internet Explorer',
                  data: [
                      [
                          'v11.0',
                          6.2
                      ],
                      [
                          'v10.0',
                          0.29
                      ],
                      [
                          'v9.0',
                          0.27
                      ],
                      [
                          'v8.0',
                          0.47
                      ]
                  ]
              },
              {
                  name: 'Safari',
                  id: 'Safari',
                  data: [
                      [
                          'v11.0',
                          3.39
                      ],
                      [
                          'v10.1',
                          0.96
                      ],
                      [
                          'v10.0',
                          0.36
                      ],
                      [
                          'v9.1',
                          0.54
                      ],
                      [
                          'v9.0',
                          0.13
                      ],
                      [
                          'v5.1',
                          0.2
                      ]
                  ]
              },
              {
                  name: 'Edge',
                  id: 'Edge',
                  data: [
                      [
                          'v16',
                          2.6
                      ],
                      [
                          'v15',
                          0.92
                      ],
                      [
                          'v14',
                          0.4
                      ],
                      [
                          'v13',
                          0.1
                      ]
                  ]
              },
              {
                  name: 'Opera',
                  id: 'Opera',
                  data: [
                      [
                          'v50.0',
                          0.96
                      ],
                      [
                          'v49.0',
                          0.82
                      ],
                      [
                          'v12.1',
                          0.14
                      ]
                  ]
              }
          ]
      } */
        };
        Highcharts.chart('statewiseContainer', this.options);
    }

}
