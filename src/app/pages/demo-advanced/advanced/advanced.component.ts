import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NzBreadCrumbComponent, NzBreadCrumbItemComponent } from 'ng-zorro-antd/breadcrumb';
import { NzDividerComponent } from 'ng-zorro-antd/divider';
import { NzPageHeaderBreadcrumbDirective, NzPageHeaderComponent } from 'ng-zorro-antd/page-header';
import { NzTabComponent, NzTabDirective, NzTabSetComponent } from 'ng-zorro-antd/tabs';
import { ConnectChartsComponent } from './connect-charts/connect-charts.component';
import { LineDraggableComponent } from './line-draggable/line-draggable.component';

@Component({
  selector: 'app-advanced',
  templateUrl: './advanced.component.html',
  styleUrls: ['./advanced.component.scss'],
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
    ConnectChartsComponent,
    LineDraggableComponent,
  ],
})
export class AdvancedComponent {
  constructor() {}
}
