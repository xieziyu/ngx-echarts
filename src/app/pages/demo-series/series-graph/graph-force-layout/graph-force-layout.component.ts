import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { parse } from 'echarts/extension/dataTool/gexf';
declare const require: any; // DEMO IGNORE

@Component({
  selector: 'app-graph-force-layout',
  templateUrl: './graph-force-layout.component.html',
  styleUrls: ['./graph-force-layout.component.scss'],
})
export class GraphForceLayoutComponent implements OnInit {
  html = require('!!html-loader?-minimize!./graph-force-layout.component.html'); // DEMO IGNORE
  component = require('!!raw-loader!./graph-force-layout.component.ts').default; // DEMO IGNORE
  options: Observable<any>;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.options = this.http.get('assets/data/les-miserables.gexf', { responseType: 'text' }).pipe(
      map((xml) => {
        const graph = parse(xml);
        const categories = [];
        for (let i = 0; i < 9; i++) {
          categories[i] = {
            name: 'category' + i,
          };
        }
        return {
          title: {
            text: 'Les Miserables',
            subtext: 'Default layout',
            top: 'bottom',
            left: 'right',
          },
          tooltip: {},
          legend: [
            {
              data: categories.map((a) => a.name),
            },
          ],
          animation: false,
          series: [
            {
              name: 'Les Miserables',
              type: 'graph',
              layout: 'force',
              data: graph.nodes,
              links: graph.links,
              categories,
              roam: true,
              label: {
                normal: {
                  position: 'right',
                },
              },
              force: {
                repulsion: 100,
              },
            },
          ],
        };
      }),
    );
  }
}
