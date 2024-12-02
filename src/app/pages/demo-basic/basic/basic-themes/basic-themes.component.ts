import { Component } from '@angular/core';
import type { EChartsCoreOption } from 'echarts/core';
import { ThemeOption } from 'ngx-echarts';
import { CoolTheme } from './cool-theme';
// IGNORE START
import html from './basic-themes.component.html';
import component from './basic-themes.component.txt';
import data from './cool-theme.txt';
// IGNORE END

@Component({
  selector: 'app-basic-themes',
  templateUrl: './basic-themes.component.html',
  styleUrls: ['./basic-themes.component.scss'],
  standalone: false,
})
export class BasicThemesComponent {
  // IGNORE START
  html = html;
  component = component;
  data = data;
  // IGNORE END
  theme: string | ThemeOption;
  coolTheme = CoolTheme;
  options: EChartsCoreOption = {
    title: {
      left: '50%',
      text: 'Nightingale Rose Diagram',
      subtext: 'Mocking Data',
      textAlign: 'center',
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)',
    },
    legend: {
      align: 'auto',
      bottom: 10,
      data: ['rose1', 'rose2', 'rose3', 'rose4', 'rose5', 'rose6', 'rose7', 'rose8'],
    },
    calculable: true,
    series: [
      {
        name: 'area',
        type: 'pie',
        radius: [30, 110],
        roseType: 'area',
        data: [
          { value: 10, name: 'rose1' },
          { value: 5, name: 'rose2' },
          { value: 15, name: 'rose3' },
          { value: 25, name: 'rose4' },
          { value: 20, name: 'rose5' },
          { value: 35, name: 'rose6' },
          { value: 30, name: 'rose7' },
          { value: 40, name: 'rose8' },
        ],
      },
    ],
  };
}
