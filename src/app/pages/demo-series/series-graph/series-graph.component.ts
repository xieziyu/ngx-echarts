import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { GraphForceLayoutComponent } from './graph-force-layout/graph-force-layout.component';
import { GraphSimpleComponent } from './graph-simple/graph-simple.component';

@Component({
  selector: 'app-series-graph',
  templateUrl: './series-graph.component.html',
  styleUrls: ['./series-graph.component.scss'],
  imports: [
    MatTabsModule,
    GraphSimpleComponent,
    GraphForceLayoutComponent,
  ],
})
export class SeriesGraphComponent {
  constructor() {}
}
