import { Component, OnInit, AfterViewInit } from '@angular/core';
import { getInstanceByDom, connect } from 'echarts';

declare const require: any;

const CHART_OPTIONS = {
  color: ['#3398DB'],
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      axisTick: {
        alignWithLabel: true
      }
    }
  ],
  yAxis: [{
    type: 'value'
  }],
  series: [{
    name: 'Counters',
    type: 'bar',
    barWidth: '60%',
    data: [10, 52, 200, 334, 390, 330, 220]
  }]
};

@Component({
  selector: 'app-connect-charts',
  templateUrl: './connect-charts.component.html',
  styleUrls: ['./connect-charts.component.scss']
})
export class ConnectChartsComponent implements OnInit, AfterViewInit {
  demo_html = require('!!html-loader!./connect-charts.component.html');
  demo_ts = require('!!raw-loader!./connect-charts.component.ts');
  options = CHART_OPTIONS;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      const chartElement1 = <HTMLDivElement>document.getElementById('chart1');
      const chartElement2 = <HTMLDivElement>document.getElementById('chart2');
      const chart1 = getInstanceByDom(chartElement1);
      const chart2 = getInstanceByDom(chartElement2);
      connect([chart1, chart2]);
    });
  }

}
