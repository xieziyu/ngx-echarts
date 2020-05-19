import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';
import { SharedModule } from '../../shared/shared.module';
import { DemoSeriesRoutingModule } from './demo-series-routing.module';
import { SeriesGraphComponent } from './series-graph/series-graph.component';
import { GraphForceLayoutComponent } from './series-graph/graph-force-layout/graph-force-layout.component';
import { GraphSimpleComponent } from './series-graph/graph-simple/graph-simple.component';
import { SeriesTreeComponent } from './series-tree/series-tree.component';
import { TreeFromLeftToRightComponent } from './series-tree/tree-from-left-to-right/tree-from-left-to-right.component';
import { TreeRadialComponent } from './series-tree/tree-radial/tree-radial.component';

@NgModule({
  declarations: [
    SeriesGraphComponent,
    GraphForceLayoutComponent,
    GraphSimpleComponent,
    SeriesTreeComponent,
    TreeFromLeftToRightComponent,
    TreeRadialComponent,
  ],
  imports: [CommonModule, SharedModule, NgxEchartsModule, DemoSeriesRoutingModule],
})
export class DemoSeriesModule {}
