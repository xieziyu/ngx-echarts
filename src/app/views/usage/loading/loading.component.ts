import { Component, OnInit } from '@angular/core';
import { CODE_HTML, CODE_TS, CODE_HTML2, CODE_TS2 } from './code';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {
  demo_html = CODE_HTML;
  demo_ts = CODE_TS;
  demo_html2 = CODE_HTML2;
  demo_ts2 = CODE_TS2;

  isLoading = false;
  isLoading2 = false;
  loadingOpts = {
    text: 'Custom Loading',
    color: '#00bdfc',
    textColor: '#ff0000',
    maskColor: 'rgba(255, 255, 255, 0.6)',
    zlevel: 0
  };

  options = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    legend: {
      data: ['X-1', 'X-2', 'X-3', 'X-4', 'X-5']
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
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: 'X-1',
        type: 'line',
        stack: 'counts',
        areaStyle: { normal: {} },
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: 'X-2',
        type: 'line',
        stack: 'counts',
        areaStyle: { normal: {} },
        data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: 'X-3',
        type: 'line',
        stack: 'counts',
        areaStyle: { normal: {} },
        data: [150, 232, 201, 154, 190, 330, 410]
      },
      {
        name: 'X-4',
        type: 'line',
        stack: 'counts',
        areaStyle: { normal: {} },
        data: [320, 332, 301, 334, 390, 330, 320]
      },
      {
        name: 'X-5',
        type: 'line',
        stack: 'counts',
        label: {
          normal: {
            show: true,
            position: 'top'
          }
        },
        areaStyle: { normal: {} },
        data: [820, 932, 901, 934, 1290, 1330, 1320]
      }
    ]
  };

  constructor() { }

  ngOnInit() {
  }

}
