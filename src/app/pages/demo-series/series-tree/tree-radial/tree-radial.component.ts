import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import type { EChartsCoreOption } from 'echarts/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// IGNORE START
import html from './tree-radial.component.html';
import component from './tree-radial.component.txt';
import { NgxEchartsDirective } from 'ngx-echarts';
import { CodeBlockComponent } from '../../../../shared/code-block/code-block.component';
import { AsyncPipe } from '@angular/common';
// IGNORE END

@Component({
  selector: 'app-tree-radial',
  templateUrl: './tree-radial.component.html',
  styleUrls: ['./tree-radial.component.scss'],
  imports: [NgxEchartsDirective, CodeBlockComponent, AsyncPipe],
})
export class TreeRadialComponent implements OnInit {
  private http = inject(HttpClient);

  // IGNORE START
  html = html;
  component = component;
  // IGNORE END
  options: Observable<EChartsCoreOption>;

  ngOnInit(): void {
    this.options = this.http.get<any>('assets/data/flare.json', { responseType: 'json' }).pipe(
      map(data => ({
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
      }))
    );
  }
}
