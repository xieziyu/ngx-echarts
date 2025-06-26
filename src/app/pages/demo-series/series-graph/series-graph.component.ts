import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';
import { MatTabContent, MatTabsModule } from '@angular/material/tabs';
import { GraphSimpleComponent } from './graph-simple/graph-simple.component';
import { GraphForceLayoutComponent } from './graph-force-layout/graph-force-layout.component';

@Component({
  selector: 'app-series-graph',
  templateUrl: './series-graph.component.html',
  styleUrls: ['./series-graph.component.scss'],
  imports: [
    GraphForceLayoutComponent,
    GraphSimpleComponent,
    MatDividerModule,
    MatTabContent,
    MatTabsModule,
    RouterLink,
  ],
})
export class SeriesGraphComponent {
  constructor() {}
}
