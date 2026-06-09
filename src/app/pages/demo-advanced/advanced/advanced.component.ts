import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { ConnectChartsComponent } from './connect-charts/connect-charts.component';
import { LineDraggableComponent } from './line-draggable/line-draggable.component';

@Component({
  selector: 'app-advanced',
  templateUrl: './advanced.component.html',
  styleUrls: ['./advanced.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [ConnectChartsComponent, LineDraggableComponent],
})
export class AdvancedComponent {
  selectedIndex = signal(0);
  tabs = [{ label: 'Connect Charts' }, { label: 'Draggable Chart' }];
}
