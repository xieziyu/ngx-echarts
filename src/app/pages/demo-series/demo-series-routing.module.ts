import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeriesGraphComponent } from './series-graph/series-graph.component';

const routes: Routes = [
  { path: '', redirectTo: 'graph', pathMatch: 'full' },
  { path: 'graph', component: SeriesGraphComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemoSeriesRoutingModule {}
