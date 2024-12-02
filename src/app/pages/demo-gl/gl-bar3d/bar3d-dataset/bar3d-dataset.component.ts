import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// IGNORE START
import html from './bar3d-dataset.component.html';
import component from './bar3d-dataset.component.txt';
// IGNORE END

@Component({
  selector: 'app-bar3d-dataset',
  templateUrl: './bar3d-dataset.component.html',
  styleUrls: ['./bar3d-dataset.component.scss'],
  standalone: false,
})
export class Bar3dDatasetComponent implements OnInit {
  // IGNORE START
  html = html;
  component = component;
  // IGNORE END
  options: Observable<any>;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.options = this.http
      .get('assets/data/life-expectancy-table.json', { responseType: 'json' })
      .pipe(
        map(data => ({
          grid3D: {},
          tooltip: {},
          xAxis3D: {
            type: 'category',
          },
          yAxis3D: {
            type: 'category',
          },
          zAxis3D: {},
          visualMap: {
            max: 1e8,
            dimension: 'Population',
          },
          dataset: {
            dimensions: [
              'Income',
              'Life Expectancy',
              'Population',
              'Country',
              { name: 'Year', type: 'ordinal' },
            ],
            source: data,
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
                tooltip: [0, 1, 2, 3, 4],
              },
            },
          ],
        }))
      );
  }
}
