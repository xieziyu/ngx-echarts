import { Component, OnInit } from '@angular/core';

declare const require: any;

@Component({
  selector: 'app-auto-resize',
  templateUrl: './auto-resize.component.html',
  styleUrls: ['./auto-resize.component.scss']
})
export class AutoResizeComponent implements OnInit {
  demo_html = require('!!html-loader!./auto-resize.component.html');
  demo_ts = require('!!raw-loader!./auto-resize.component.ts');
  demo_scss = require('!!raw-loader!./auto-resize.component.scss');
  autoResize = true;

  options = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line'
    }]
  };

  constructor() { }

  ngOnInit() {
  }

}
