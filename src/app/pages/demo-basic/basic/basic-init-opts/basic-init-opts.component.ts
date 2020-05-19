import { Component } from '@angular/core';
declare const require: any; // DEMO IGNORE

@Component({
  selector: 'app-basic-init-opts',
  templateUrl: './basic-init-opts.component.html',
  styleUrls: ['./basic-init-opts.component.scss']
})
export class BasicInitOptsComponent {
  html = require('!!html-loader?-minimize!./basic-init-opts.component.html'); // DEMO IGNORE
  component = require('!!raw-loader!./basic-init-opts.component.ts').default; // DEMO IGNORE
  initOpts = {
    renderer: 'svg',
    width: 300,
    height: 300
  };

  options = {
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
}
