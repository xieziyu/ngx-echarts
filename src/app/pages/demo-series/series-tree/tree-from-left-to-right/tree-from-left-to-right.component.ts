import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import type { EChartsCoreOption } from 'echarts/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as util from 'zrender/lib/core/util';
// IGNORE START
import html from './tree-from-left-to-right.component.html';
import component from './tree-from-left-to-right.component.txt';
import { NgxEchartsDirective } from 'ngx-echarts';
import { CodeBlockComponent } from '../../../../shared/code-block/code-block.component';
import { AsyncPipe } from '@angular/common';
// IGNORE END

@Component({
  selector: 'app-tree-from-left-to-right',
  templateUrl: './tree-from-left-to-right.component.html',
  styleUrls: ['./tree-from-left-to-right.component.scss'],
  imports: [NgxEchartsDirective, CodeBlockComponent, AsyncPipe],
})
export class TreeFromLeftToRightComponent implements OnInit {
  private http = inject(HttpClient);

  // IGNORE START
  html = html;
  component = component;
  // IGNORE END
  options: Observable<EChartsCoreOption>;

  ngOnInit(): void {
    this.options = this.http.get<any>('assets/data/flare.json', { responseType: 'json' }).pipe(
      map(data => {
        util.each(
          data.children,
          (datum: any, index: number) => index % 2 === 0 && (datum.collapsed = true)
        );
        return {
          tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove',
          },
          series: [
            {
              type: 'tree',
              data: [data],
              top: '1%',
              left: '7%',
              bottom: '1%',
              right: '20%',
              symbolSize: 7,
              label: {
                position: 'left',
                verticalAlign: 'middle',
                align: 'right',
                fontSize: 9,
              },
              leaves: {
                label: {
                  position: 'right',
                  verticalAlign: 'middle',
                  align: 'left',
                },
              },
              expandAndCollapse: true,
              animationDuration: 550,
              animationDurationUpdate: 750,
            },
          ],
        };
      })
    );
  }
}
