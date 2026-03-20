import { Component, signal } from '@angular/core';
import { GraphForceLayoutComponent } from './graph-force-layout/graph-force-layout.component';
import { GraphSimpleComponent } from './graph-simple/graph-simple.component';

@Component({
  selector: 'app-series-graph',
  templateUrl: './series-graph.component.html',
  styleUrls: ['./series-graph.component.scss'],
  imports: [GraphSimpleComponent, GraphForceLayoutComponent],
})
export class SeriesGraphComponent {
  selectedIndex = signal(0);
  tabs = [{ label: 'Simple Graph' }, { label: 'Force Layout' }];
}
