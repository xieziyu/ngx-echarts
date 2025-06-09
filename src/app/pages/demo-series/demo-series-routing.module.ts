import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeriesGraphComponent } from './series-graph/series-graph.component';
import { SeriesTreeComponent } from './series-tree/series-tree.component';
import { SeriesHeatmapComponent } from './series-heatmap/series-heatmap.component';

export const DEMO_SERIES_ROUTES: Routes = [
  { path: '', redirectTo: 'graph', pathMatch: 'full' },
  { path: 'graph', component: SeriesGraphComponent },
  { path: 'tree', component: SeriesTreeComponent },
  { path: 'heatmap', component: SeriesHeatmapComponent },
];
