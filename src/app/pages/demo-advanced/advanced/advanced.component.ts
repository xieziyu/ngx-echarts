import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { ConnectChartsComponent } from './connect-charts/connect-charts.component';
import { LineDraggableComponent } from './line-draggable/line-draggable.component';

@Component({
  selector: 'app-advanced',
  templateUrl: './advanced.component.html',
  styleUrls: ['./advanced.component.scss'],
  imports: [
    MatTabsModule,
    ConnectChartsComponent,
    LineDraggableComponent,
  ],
})
export class AdvancedComponent {
  constructor() {}
}
