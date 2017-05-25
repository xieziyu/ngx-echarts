import { Component, ViewEncapsulation } from '@angular/core';

import * as demo from './demo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  // demo1:
  chartOption1 = demo.LineChartOptions1;

  // demo2:
  chartOption2 = demo.BarChartOptions1();
  dataset = demo.BarChartDataset1;

  // demo3:
  chartOption3 = demo.PieChartOptions1;
  chartLoading = false;

  // demo4:
  chartOption4 = demo.BarChartOptions2;

  // demo5:
  chartOption5: any = demo.BarChartOptions1();
  revert: boolean = false;

  // demo6:
  chartInstance = null;

  chageDataset() {
    this.dataset = (this.dataset == demo.BarChartDataset2) ? demo.BarChartDataset1 :  demo.BarChartDataset2;
  }

  toggleLoading() {
    this.chartLoading = !this.chartLoading;
  }

  onChartClick(params) {
    console.log('click event: ', params);
  }

  onChartDblClick(params) {
    console.log('dblclick event: ', params);
  }

  changeOptions() {
    this.chartOption5 = Object.assign({}, this.chartOption5);
    this.chartOption5.legend = { show: true };
    this.chartOption5.legend.data = [{ name: '直接访问', icon: 'circle' }];
    this.chartOption5.series = [];
    this.chartOption5.series[0] = {
      name: '直接访问',
      type: 'line',
      markPoint: {
        data: [
          { type: 'min', name: '最小值' },
          { type: 'max', name: '最大值' },
        ]
      }
    };
    this.revert = true;
  }

  revertOptions() {
    this.chartOption5 = demo.BarChartOptions1();
    this.revert = false;
  }

  onChartInit(ec) {
    this.chartInstance = ec;
  }

  showLoadingByInstance() {
    if (this.chartInstance) {
      this.chartInstance.showLoading();
    }
  }

  hideLoadingByInstance() {
    if (this.chartInstance) {
      this.chartInstance.hideLoading();
    }
  }
}
