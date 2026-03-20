import { Component, signal } from '@angular/core';
import { HeatmapCalendarComponent } from './heatmap-calendar/heatmap-calendar.component';
import { HeatmapDiscreteComponent } from './heatmap-discrete/heatmap-discrete.component';

@Component({
  selector: 'app-series-heatmap',
  templateUrl: './series-heatmap.component.html',
  styleUrl: './series-heatmap.component.scss',
  imports: [HeatmapCalendarComponent, HeatmapDiscreteComponent],
})
export class SeriesHeatmapComponent {
  selectedIndex = signal(0);
  tabs = [{ label: 'Calendar Heatmap' }, { label: 'Discrete Mapping of Color' }];
}
