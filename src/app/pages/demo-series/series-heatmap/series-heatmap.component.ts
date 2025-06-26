import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';
import { MatTabsModule } from '@angular/material/tabs';
import { HeatmapCalendarComponent } from './heatmap-calendar/heatmap-calendar.component';
import { HeatmapDiscreteComponent } from './heatmap-discrete/heatmap-discrete.component';

@Component({
  selector: 'app-series-heatmap',
  templateUrl: './series-heatmap.component.html',
  styleUrl: './series-heatmap.component.scss',
  imports: [
    HeatmapCalendarComponent,
    HeatmapDiscreteComponent,
    MatDividerModule,
    MatTabsModule,
    RouterLink,
  ],
})
export class SeriesHeatmapComponent {}
