import { Component } from '@angular/core';
import { NzPageHeaderComponent, NzPageHeaderBreadcrumbDirective } from 'ng-zorro-antd/page-header';
import { NzBreadCrumbComponent, NzBreadCrumbItemComponent } from 'ng-zorro-antd/breadcrumb';
import { RouterLink } from '@angular/router';
import { NzDividerComponent } from 'ng-zorro-antd/divider';
import { NzTabSetComponent, NzTabComponent, NzTabDirective } from 'ng-zorro-antd/tabs';
import { TreeFromLeftToRightComponent } from './tree-from-left-to-right/tree-from-left-to-right.component';
import { TreeRadialComponent } from './tree-radial/tree-radial.component';

@Component({
  selector: 'app-series-tree',
  templateUrl: './series-tree.component.html',
  styleUrls: ['./series-tree.component.scss'],
  imports: [
    NzPageHeaderComponent,
    NzBreadCrumbComponent,
    NzPageHeaderBreadcrumbDirective,
    NzBreadCrumbItemComponent,
    RouterLink,
    NzDividerComponent,
    NzTabSetComponent,
    NzTabComponent,
    NzTabDirective,
    TreeFromLeftToRightComponent,
    TreeRadialComponent,
  ],
})
export class SeriesTreeComponent {
  constructor() {}
}
