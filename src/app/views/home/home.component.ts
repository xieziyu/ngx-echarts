import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  demo_html = `\
<!-- options is used for ECharts to setOption() -->
<!-- From 2.0, ngx-echarts can have default height: 400px -->
<div echarts [options]="options"></div>

<!-- From 2.0, [dataset] is deprecated. Now we use [merge] to update data series -->
<div echarts [options]="options" [merge]="mergeOptions"></div>

<!-- From 2.0, we can use <echarts></echarts> -->
<!-- But we need to set height property in [initOpts] -->
<echarts [options]="options" [initOpts]="initOpts"></echarts>
`;

  constructor() { }

  ngOnInit() {
  }

}
