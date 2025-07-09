import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NzBreadCrumbComponent, NzBreadCrumbItemComponent } from 'ng-zorro-antd/breadcrumb';
import { NzDividerComponent } from 'ng-zorro-antd/divider';
import { NzPageHeaderBreadcrumbDirective, NzPageHeaderComponent } from 'ng-zorro-antd/page-header';
import { NzTabComponent, NzTabDirective, NzTabsComponent } from 'ng-zorro-antd/tabs';
import { HeatmapCalendarComponent } from './heatmap-calendar/heatmap-calendar.component';
import { HeatmapDiscreteComponent } from './heatmap-discrete/heatmap-discrete.component';

@Component({
  selector: 'app-series-heatmap',
  templateUrl: './series-heatmap.component.html',
  styleUrl: './series-heatmap.component.scss',
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
    HeatmapCalendarComponent,
    HeatmapDiscreteComponent,
  ],
})
export class SeriesHeatmapComponent {}
