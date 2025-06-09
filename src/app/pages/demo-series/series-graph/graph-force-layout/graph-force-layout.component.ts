import { Component, OnInit } from '@angular/core';
import type { EChartsCoreOption } from 'echarts/core';
// IGNORE START
import html from './graph-force-layout.component.html';
import component from './graph-force-layout.component.txt';
import { NgxEchartsDirective } from 'ngx-echarts';
import { CodeBlockComponent } from '../../../../shared/code-block/code-block.component';
// IGNORE END

@Component({
  selector: 'app-graph-force-layout',
  templateUrl: './graph-force-layout.component.html',
  styleUrls: ['./graph-force-layout.component.scss'],
  imports: [NgxEchartsDirective, CodeBlockComponent],
})
export class GraphForceLayoutComponent implements OnInit {
  // IGNORE START
  html = html;
  component = component;
  // IGNORE END
  options: EChartsCoreOption;

  createNodes(count: number) {
    const nodes = [];
    for (let i = 0; i < count; i++) {
      nodes.push({
        id: i + '',
      });
    }
    return nodes;
  }

  createEdges(count: number) {
    const edges = [];
    if (count === 2) {
      return [[0, 1]];
    }
    for (let i = 0; i < count; i++) {
      edges.push([i, (i + 1) % count]);
    }
    return edges;
  }

  ngOnInit(): void {
    const datas = [];
    for (let i = 0; i < 16; i++) {
      datas.push({
        nodes: this.createNodes(i + 2),
        edges: this.createEdges(i + 2),
      });
    }

    this.options = {
      series: datas.map((item, idx) => {
        return {
          type: 'graph',
          layout: 'force',
          animation: false,
          data: item.nodes,
          left: (idx % 4) * 25 + '%',
          top: Math.floor(idx / 4) * 25 + '%',
          width: '25%',
          height: '25%',
          force: {
            repulsion: 60,
            edgeLength: 2,
          },
          edges: item.edges.map(e => {
            return {
              source: e[0] + '',
              target: e[1] + '',
            };
          }),
        };
      }),
    };
  }
}
