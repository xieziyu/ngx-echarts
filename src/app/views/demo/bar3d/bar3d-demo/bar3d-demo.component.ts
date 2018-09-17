import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// Document codes
import { MAIN_CODE } from './main';
import { TSCONFIG_CODE } from './tsconfig';

declare const require: any;

@Component({
  selector: 'app-bar3d-demo',
  templateUrl: './bar3d-demo.component.html',
  styleUrls: ['./bar3d-demo.component.scss']
})
export class Bar3dDemoComponent implements OnInit {
  demo_html = require('!!html-loader!./bar3d-demo.component.html');
  demo_ts = require('!!raw-loader!./bar3d-demo.component.ts');
  demo_main = MAIN_CODE;
  demo_config = TSCONFIG_CODE;

  options: Observable<any>;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.options = this.http.get('assets/data/life-expectancy-table.json', { responseType: 'json' }).pipe(
      map(data => ({
        grid3D: {},
        tooltip: {},
        xAxis3D: {
          type: 'category'
        },
        yAxis3D: {
          type: 'category'
        },
        zAxis3D: {},
        visualMap: {
          max: 1e8,
          dimension: 'Population'
        },
        dataset: {
          dimensions: [
            'Income',
            'Life Expectancy',
            'Population',
            'Country',
            { name: 'Year', type: 'ordinal' }
          ],
          source: data
        },
        series: [
          {
            type: 'bar3D',
            // symbolSize: symbolSize,
            shading: 'lambert',
            encode: {
              x: 'Year',
              y: 'Country',
              z: 'Life Expectancy',
              tooltip: [0, 1, 2, 3, 4]
            }
          }
        ]
      }))
    );
  }

}
