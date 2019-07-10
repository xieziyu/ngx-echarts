import { Component, OnInit, OnDestroy } from '@angular/core';
import * as echarts from 'echarts';

declare const require: any;

const SymbolSize = 20;
const Data = [[15, 0], [-50, 10], [-56.5, 20], [-46.5, 30], [-22.1, 40]];

@Component({
  selector: 'app-line-draggable',
  templateUrl: './line-draggable.component.html',
  styleUrls: ['./line-draggable.component.scss']
})
export class LineDraggableComponent implements OnInit, OnDestroy {
  demo_html = require('!!html-loader!./line-draggable.component.html');
  demo_ts = require('!!raw-loader!./line-draggable.component.ts');
  demo_types = require('!!raw-loader!../../../../../types.d.ts');
  updatePosition: () => void;
  options = {
    title: {
      text: 'Try Dragging these Points'
    },
    tooltip: {
      triggerOn: 'none',
      formatter: (params) => {
        return 'X: ' + params.data[0].toFixed(2) + '<br>Y: ' + params.data[1].toFixed(2);
      }
    },
    grid: {
    },
    xAxis: {
      min: -100,
      max: 80,
      type: 'value',
      axisLine: { onZero: false }
    },
    yAxis: {
      min: -30,
      max: 60,
      type: 'value',
      axisLine: { onZero: false }
    },
    dataZoom: [
      {
        type: 'slider',
        xAxisIndex: 0,
        filterMode: 'empty'
      },
      {
        type: 'slider',
        yAxisIndex: 0,
        filterMode: 'empty'
      },
      {
        type: 'inside',
        xAxisIndex: 0,
        filterMode: 'empty'
      },
      {
        type: 'inside',
        yAxisIndex: 0,
        filterMode: 'empty'
      }
    ],
    series: [
      {
        id: 'a',
        type: 'line',
        smooth: true,
        symbolSize: SymbolSize,
        data: Data
      }
    ]
  };

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.updatePosition) {
      window.removeEventListener('resize', this.updatePosition);
    }
  }

  onChartReady(myChart: echarts.ECharts) {
    const onPointDragging = function (dataIndex) {
      Data[dataIndex] = myChart.convertFromPixel({ gridIndex: 0 }, this.position) as number[];

      // Update data
      myChart.setOption({
        series: [{
          id: 'a',
          data: Data
        }]
      });
    };

    const showTooltip = function (dataIndex) {
      myChart.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: dataIndex
      });
    };

    const hideTooltip = function () {
      myChart.dispatchAction({
        type: 'hideTip'
      });
    };

    const updatePosition = function () {
      myChart.setOption({
        graphic: echarts.util.map(Data, function (item) {
          return {
            position: myChart.convertToPixel({ gridIndex: 0 }, item)
          };
        })
      });
    };

    window.addEventListener('resize', updatePosition);
    myChart.on('dataZoom', updatePosition);

    // save handler and remove it on destroy
    this.updatePosition = updatePosition;

    setTimeout(() => {
      myChart.setOption({
        graphic: echarts.util.map(Data, (item, dataIndex) => {
          return {
            type: 'circle',
            position: myChart.convertToPixel({ gridIndex: 0 }, item),
            shape: {
              cx: 0,
              cy: 0,
              r: SymbolSize / 2
            },
            invisible: true,
            draggable: true,
            ondrag: echarts.util.curry(onPointDragging, dataIndex),
            onmousemove: echarts.util.curry(showTooltip, dataIndex),
            onmouseout: echarts.util.curry(hideTooltip, dataIndex),
            z: 100
          };
        })
      });
    }, 0);
  }

}
