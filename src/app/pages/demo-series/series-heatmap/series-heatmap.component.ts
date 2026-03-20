import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { HeatmapCalendarComponent } from './heatmap-calendar/heatmap-calendar.component';
import { HeatmapDiscreteComponent } from './heatmap-discrete/heatmap-discrete.component';

@Component({
  selector: 'app-series-heatmap',
  templateUrl: './series-heatmap.component.html',
  styleUrl: './series-heatmap.component.scss',
  imports: [
    MatTabsModule,
    HeatmapCalendarComponent,
    HeatmapDiscreteComponent,
  ],
})
export class SeriesHeatmapComponent {}
