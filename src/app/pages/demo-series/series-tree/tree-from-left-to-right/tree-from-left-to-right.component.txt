import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as util from 'zrender/lib/core/util';
import type { EChartsOption } from 'echarts';
// IGNORE START
declare const require: any;
// IGNORE END

@Component({
  selector: 'app-tree-from-left-to-right',
  templateUrl: './tree-from-left-to-right.component.html',
  styleUrls: ['./tree-from-left-to-right.component.scss'],
})
export class TreeFromLeftToRightComponent implements OnInit {
  // IGNORE START
  html =
    require('!!html-loader?{"minimize": {"removeComments":false,"caseSensitive":true}}!./tree-from-left-to-right.component.html')
      .default;
  component = require('!!raw-loader!./tree-from-left-to-right.component.ts').default;
  // IGNORE END
  options: Observable<EChartsOption>;
  constructor(private http: HttpClient) {}

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
