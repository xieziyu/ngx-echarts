import { Component, signal } from '@angular/core';
import { TreeFromLeftToRightComponent } from './tree-from-left-to-right/tree-from-left-to-right.component';
import { TreeRadialComponent } from './tree-radial/tree-radial.component';

@Component({
  selector: 'app-series-tree',
  templateUrl: './series-tree.component.html',
  styleUrls: ['./series-tree.component.scss'],
  imports: [TreeFromLeftToRightComponent, TreeRadialComponent],
})
export class SeriesTreeComponent {
  selectedIndex = signal(0);
  tabs = [{ label: 'From Left To Right' }, { label: 'Radial Tree' }];
}
