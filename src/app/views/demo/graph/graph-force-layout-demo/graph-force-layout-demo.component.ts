import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EChartOption } from 'echarts';
import { parse } from 'echarts/extension/dataTool/gexf';

declare const require: any;

@Component({
  selector: 'app-graph-force-layout-demo',
  templateUrl: './graph-force-layout-demo.component.html',
  styleUrls: ['./graph-force-layout-demo.component.scss']
})
export class GraphForceLayoutDemoComponent implements OnInit {
  demo_html = require('!!html-loader!./graph-force-layout-demo.component.html');
  demo_ts = require('!!raw-loader!./graph-force-layout-demo.component.ts');

  options: Observable<EChartOption>;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.options = this.http.get('assets/data/les-miserables.gexf', { responseType: 'text' }).pipe(
      map(xml => {
        const graph = parse(xml);
        const categories = [];
        for (let i = 0; i < 9; i++) {
          categories[i] = {
            name: 'category' + i
          };
        }
        graph.nodes.forEach(function (node) {
          node.itemStyle = null;
          node.symbolSize = 10;
          node.value = node.symbolSize;
          node.category = node.attributes.modularity_class;
          // Use random x, y
          node.x = node.y = null;
          node.draggable = true;
        });
        return {
          title: {
            text: 'Les Miserables',
            subtext: 'Default layout',
            top: 'bottom',
            left: 'right'
          },
          tooltip: {},
          legend: [{
            data: categories.map(function (a) {
              return a.name;
            })
          }] as EChartOption.Legend,
          animation: false,
          series: [
            {
              name: 'Les Miserables',
              type: 'graph',
              layout: 'force',
              data: graph.nodes,
              links: graph.links,
              categories: categories,
              roam: true,
              label: {
                normal: {
                  position: 'right'
                }
              },
              force: {
                repulsion: 100
              }
            }
          ]
        };
      })
    );
  }

}
