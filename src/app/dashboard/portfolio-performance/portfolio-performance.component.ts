import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

import { Options } from "highcharts";
@Component({
  selector: 'app-portfolio-performance',
  templateUrl: './portfolio-performance.component.html',
  styleUrls: ['./portfolio-performance.component.css']
})
export class PortfolioPerformanceComponent implements OnInit {
  options: Highcharts.Options;
  @Input() name: string;
  @Input() data:any;
  constructor() { }
  ngOnInit(): void {
    var chart = Highcharts.chart("container", this.chartOptions );
  }
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: {
      type: 'column'
    },
    title: {
      text: ''
    },
    legend: {
      align: 'left',
      verticalAlign: 'top',
      layout: 'horizontal'
    },
    credits: {
      enabled: false
  },
    xAxis: {
      categories: [
        'DEBIT',
        'EQUITY',
        'HYBRID',
        'OTHERS',
      
        
      ],
      crosshair: true
    },
    yAxis: {
      min: 0,
       max: 4000,
        tickInterval: 1000,
      title: {
        text: ''
      }
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true,
      backgroundColor: '#3f593cb5',
      borderWidth: 0,
    },
    plotOptions: {
      column: {
        pointPadding: 0.3,
        borderWidth: 0
      },
    

    },
    colors: [
      '#cdcece',
      '#969f6e'
  ],
   
    series: [{
      name: 'Invested Amount',
      data: [2000, 3000, 1000, 3456],
      type:"column",
      color:'#cdcece',
  
    }, {
      
      name: 'Current Value',
      data: [2600, 2300, 1900, 2456],
      type:"column",
      color:'#969f6e'
  
    }]
  }
 
}
