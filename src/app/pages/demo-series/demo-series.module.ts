import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';
import { SharedModule } from '../../shared/shared.module';
import { SeriesGraphComponent } from './series-graph/series-graph.component';
import { GraphForceLayoutComponent } from './series-graph/graph-force-layout/graph-force-layout.component';
import { GraphSimpleComponent } from './series-graph/graph-simple/graph-simple.component';
import { SeriesTreeComponent } from './series-tree/series-tree.component';
import { TreeFromLeftToRightComponent } from './series-tree/tree-from-left-to-right/tree-from-left-to-right.component';
import { TreeRadialComponent } from './series-tree/tree-radial/tree-radial.component';
import { SeriesHeatmapComponent } from './series-heatmap/series-heatmap.component';
import { HeatmapCalendarComponent } from './series-heatmap/heatmap-calendar/heatmap-calendar.component';
import { HeatmapDiscreteComponent } from './series-heatmap/heatmap-discrete/heatmap-discrete.component';

@NgModule({
  imports: [
    CommonModule,
    GraphForceLayoutComponent,
    GraphSimpleComponent,
    HeatmapCalendarComponent,
    HeatmapDiscreteComponent,
    NgxEchartsModule,
    SeriesGraphComponent,
    SeriesHeatmapComponent,
    SeriesTreeComponent,
    SharedModule,
    TreeFromLeftToRightComponent,
    TreeRadialComponent,
  ],
})
export class DemoSeriesModule {}
