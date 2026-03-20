import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { TreeFromLeftToRightComponent } from './tree-from-left-to-right/tree-from-left-to-right.component';
import { TreeRadialComponent } from './tree-radial/tree-radial.component';

@Component({
  selector: 'app-series-tree',
  templateUrl: './series-tree.component.html',
  styleUrls: ['./series-tree.component.scss'],
  imports: [
    MatTabsModule,
    TreeFromLeftToRightComponent,
    TreeRadialComponent,
  ],
})
export class SeriesTreeComponent {
  constructor() {}
}
