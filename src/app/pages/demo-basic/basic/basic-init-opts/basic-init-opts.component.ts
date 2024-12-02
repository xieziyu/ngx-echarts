import { Component } from '@angular/core';
import type { EChartsCoreOption } from 'echarts/core';
// IGNORE START
import html from './basic-init-opts.component.html';
import component from './basic-init-opts.component.txt';
// IGNORE END

@Component({
  selector: 'app-basic-init-opts',
  templateUrl: './basic-init-opts.component.html',
  styleUrls: ['./basic-init-opts.component.scss'],
  standalone: false,
})
export class BasicInitOptsComponent {
  // IGNORE START
  html = html;
  component = component;
  // IGNORE END
  initOpts = {
    renderer: 'svg',
    width: 300,
    height: 300,
  };

  options: EChartsCoreOption = {
    color: ['#3398DB'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisTick: {
          alignWithLabel: true,
        },
      },
    ],
    yAxis: [
      {
        type: 'value',
      },
    ],
    series: [
      {
        name: 'Counters',
        type: 'bar',
        barWidth: '60%',
        data: [10, 52, 200, 334, 390, 330, 220],
      },
    ],
  };
}
