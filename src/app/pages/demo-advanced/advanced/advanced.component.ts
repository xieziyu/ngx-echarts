import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';
import { MatTabContent, MatTabsModule } from '@angular/material/tabs';
import { ConnectChartsComponent } from './connect-charts/connect-charts.component';
import { LineDraggableComponent } from './line-draggable/line-draggable.component';

@Component({
  selector: 'app-advanced',
  templateUrl: './advanced.component.html',
  styleUrls: ['./advanced.component.scss'],
  imports: [
    ConnectChartsComponent,
    LineDraggableComponent,
    MatDividerModule,
    MatTabContent,
    MatTabsModule,
    RouterLink,
  ],
})
export class AdvancedComponent {
  constructor() {}
}
