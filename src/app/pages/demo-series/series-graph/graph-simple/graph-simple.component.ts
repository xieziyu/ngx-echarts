import { Component } from '@angular/core';
import type { EChartsCoreOption } from 'echarts/core';
// IGNORE START
import html from './graph-simple.component.html';
import component from './graph-simple.component.txt';
// IGNORE END

@Component({
  selector: 'app-graph-simple',
  templateUrl: './graph-simple.component.html',
  styleUrls: ['./graph-simple.component.scss'],
  standalone: false,
})
export class GraphSimpleComponent {
  // IGNORE START
  html = html;
  component = component;
  // IGNORE END
  options: EChartsCoreOption = {
    title: {
      text: 'Simple Graph',
    },
    tooltip: {},
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    series: [
      {
        type: 'graph',
        layout: 'none',
        symbolSize: 60,
        roam: true,
        label: {
          show: true,
        },
        edgeSymbol: ['circle', 'arrow'],
        edgeSymbolSize: [4, 10],
        edgeLabel: {
          fontSize: 20,
        },
        data: [
          {
            name: 'Node 1',
            x: 300,
            y: 300,
          },
          {
            name: 'Node 2',
            x: 800,
            y: 300,
          },
          {
            name: 'Node 3',
            x: 550,
            y: 100,
          },
          {
            name: 'Node 4',
            x: 550,
            y: 500,
          },
        ],
        // links: [],
        links: [
          {
            source: 0,
            target: 1,
            symbolSize: [5, 20],
            label: {
              show: true,
            },
            lineStyle: {
              width: 5,
              curveness: 0.2,
            },
          },
          {
            source: 'Node 2',
            target: 'Node 1',
            label: {
              show: true,
            },
            lineStyle: {
              curveness: 0.2,
            },
          },
          {
            source: 'Node 1',
            target: 'Node 3',
          },
          {
            source: 'Node 2',
            target: 'Node 3',
          },
          {
            source: 'Node 2',
            target: 'Node 4',
          },
          {
            source: 'Node 1',
            target: 'Node 4',
          },
        ],
        lineStyle: {
          opacity: 0.9,
          width: 2,
          curveness: 0,
        },
      },
    ],
  };
}
