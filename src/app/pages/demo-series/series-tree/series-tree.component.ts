import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NzBreadCrumbComponent, NzBreadCrumbItemComponent } from 'ng-zorro-antd/breadcrumb';
import { NzDividerComponent } from 'ng-zorro-antd/divider';
import { NzPageHeaderBreadcrumbDirective, NzPageHeaderComponent } from 'ng-zorro-antd/page-header';
import { NzTabComponent, NzTabDirective, NzTabsComponent } from 'ng-zorro-antd/tabs';
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
    NzTabsComponent,
    NzTabComponent,
    NzTabDirective,
    TreeFromLeftToRightComponent,
    TreeRadialComponent,
  ],
})
export class SeriesTreeComponent {
  constructor() {}
}
