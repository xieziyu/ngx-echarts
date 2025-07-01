import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NzBreadCrumbComponent, NzBreadCrumbItemComponent } from 'ng-zorro-antd/breadcrumb';
import { NzDividerComponent } from 'ng-zorro-antd/divider';
import { NzPageHeaderBreadcrumbDirective, NzPageHeaderComponent } from 'ng-zorro-antd/page-header';
import { NzTabComponent, NzTabDirective, NzTabsComponent } from 'ng-zorro-antd/tabs';
import { GraphForceLayoutComponent } from './graph-force-layout/graph-force-layout.component';
import { GraphSimpleComponent } from './graph-simple/graph-simple.component';

@Component({
  selector: 'app-series-graph',
  templateUrl: './series-graph.component.html',
  styleUrls: ['./series-graph.component.scss'],
  imports: [
    NzPageHeaderComponent,
    NzBreadCrumbComponent,
    NzPageHeaderBreadcrumbDirective,
    NzBreadCrumbItemComponent,
    RouterLink,
    NzDividerComponent,
    NzTabsComponent,
    NzTabComponent,
    NzTabDirective,
    GraphSimpleComponent,
    GraphForceLayoutComponent,
  ],
})
export class SeriesGraphComponent {
  constructor() {}
}
