import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
declare const require: any; // DEMO IGNORE

@Component({
  selector: 'app-basic-instance',
  templateUrl: './basic-instance.component.html',
  styleUrls: ['./basic-instance.component.scss'],
})
export class BasicInstanceComponent {
  html = require('!!html-loader?-minimize!./basic-instance.component.html'); // DEMO IGNORE
  component = require('!!raw-loader!./basic-instance.component.ts').default; // DEMO IGNORE
  chartInstance: any;
  options = {
    backgroundColor: '#2c343c',
    title: {
      text: 'Customized Pie',
      left: 'center',
      top: 20,
      textStyle: {
        color: '#ccc',
      },
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)',
    },
    visualMap: {
      show: false,
      min: 80,
      max: 600,
      inRange: {
        colorLightness: [0, 1],
      },
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
          { value: 400, name: 'C-5' },
        ].sort((a, b) => a.value - b.value),
        roseType: 'radius',
        label: {
          normal: {
            textStyle: {
              color: 'rgba(255, 255, 255, 0.3)',
            },
          },
        },
        labelLine: {
          normal: {
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.3)',
            },
            smooth: 0.2,
            length: 10,
            length2: 20,
          },
        },
        itemStyle: {
          normal: {
            color: '#c23531',
            shadowBlur: 200,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },

        animationType: 'scale',
        animationEasing: 'elasticOut',
        animationDelay: () => Math.random() * 200,
      },
    ],
  };
  constructor(private msg: NzMessageService) {}

  onChartInit(e: any) {
    this.chartInstance = e;
    console.log('on chart init:', e);
  }

  callMethod(type: string) {
    if (this.chartInstance) {
      const result = this.chartInstance[type]();
      this.msg.info(`${type}(): ${result || 'void'}`);
      console.log(result);
    }
  }
}
