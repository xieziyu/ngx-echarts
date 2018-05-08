import { Component, OnInit } from '@angular/core';

declare const require: any;

@Component({
  selector: 'app-echarts-instance',
  templateUrl: './echarts-instance.component.html',
  styleUrls: ['./echarts-instance.component.scss']
})
export class EchartsInstanceComponent implements OnInit {
  demo_html = require('!!html-loader!./echarts-instance.component.html');
  demo_ts = require('!!raw-loader!./echarts-instance.component.ts');

  echartsInstance: any;
  options = {
    backgroundColor: '#2c343c',

    title: {
      text: 'Customized Pie',
      left: 'center',
      top: 20,
      textStyle: {
        color: '#ccc'
      }
    },

    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },

    visualMap: {
      show: false,
      min: 80,
      max: 600,
      inRange: {
        colorLightness: [0, 1]
      }
    },
    series: [
      {
        name: 'Counters',
        type: 'pie',
        radius: '55%',
        center: ['50%', '50%'],
        data: [
          { value: 335, name: 'C-1' },
          { value: 310, name: 'C-2' },
          { value: 274, name: 'C-3' },
          { value: 235, name: 'C-4' },
          { value: 400, name: 'C-5' }
        ].sort(function (a, b) { return a.value - b.value; }),
        roseType: 'radius',
        label: {
          normal: {
            textStyle: {
              color: 'rgba(255, 255, 255, 0.3)'
            }
          }
        },
        labelLine: {
          normal: {
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.3)'
            },
            smooth: 0.2,
            length: 10,
            length2: 20
          }
        },
        itemStyle: {
          normal: {
            color: '#c23531',
            shadowBlur: 200,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        },

        animationType: 'scale',
        animationEasing: 'elasticOut',
        animationDelay: function (idx) {
          return Math.random() * 200;
        }
      }
    ]
  };

  constructor() { }

  ngOnInit() {
  }

  onChartInit(e: any) {
    this.echartsInstance = e;
    console.log('on chart init:', e);
  }

  getWidth() {
    if (this.echartsInstance) {
      console.log('getWidth():', this.echartsInstance.getWidth());
    }
  }

  getHeight() {
    if (this.echartsInstance) {
      console.log('getHeight():', this.echartsInstance.getHeight());
    }
  }

  getDom() {
    if (this.echartsInstance) {
      console.log('getDom():', this.echartsInstance.getDom());
    }
  }

  getOption() {
    if (this.echartsInstance) {
      console.log('getOption():', this.echartsInstance.getOption());
    }
  }

  clear() {
    if (this.echartsInstance) {
      this.echartsInstance.clear();
      console.log('clear() called');
    }
  }
}
