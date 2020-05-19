import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as echarts from 'echarts';
declare const require: any; // DEMO IGNORE

@Component({
  selector: 'app-tree-radial',
  templateUrl: './tree-radial.component.html',
  styleUrls: ['./tree-radial.component.scss'],
})
export class TreeRadialComponent implements OnInit {
  html = require('!!html-loader?-minimize!./tree-radial.component.html'); // DEMO IGNORE
  component = require('!!raw-loader!./tree-radial.component.ts').default; // DEMO IGNORE
  options: Observable<any>;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.options = this.http
      .get<any>('assets/data/flare.json', { responseType: 'json' })
      .pipe(
        map((data) => ({
          tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove',
          },
          series: [
            {
              type: 'tree',
              data: [data],
              top: '18%',
              bottom: '14%',
              layout: 'radial',
              symbol: 'emptyCircle',
              symbolSize: 7,
              initialTreeDepth: 3,
              animationDurationUpdate: 750,
            },
          ],
        })),
      );
  }
}
