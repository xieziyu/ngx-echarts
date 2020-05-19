import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeriesGraphComponent } from './series-graph/series-graph.component';
import { SeriesTreeComponent } from './series-tree/series-tree.component';

const routes: Routes = [
  { path: '', redirectTo: 'graph', pathMatch: 'full' },
  { path: 'graph', component: SeriesGraphComponent },
  { path: 'tree', component: SeriesTreeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemoSeriesRoutingModule {}
