import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NzBreadCrumbComponent, NzBreadCrumbItemComponent } from 'ng-zorro-antd/breadcrumb';
import { NzDividerComponent } from 'ng-zorro-antd/divider';
import { NzPageHeaderBreadcrumbDirective, NzPageHeaderComponent } from 'ng-zorro-antd/page-header';
import { NzTabComponent, NzTabDirective, NzTabsComponent } from 'ng-zorro-antd/tabs';
import { BasicDatasetComponent } from './basic-dataset/basic-dataset.component';
import { BasicEventsComponent } from './basic-events/basic-events.component';
import { BasicInitOptsComponent } from './basic-init-opts/basic-init-opts.component';
import { BasicInstanceComponent } from './basic-instance/basic-instance.component';
import { BasicLoadingComponent } from './basic-loading/basic-loading.component';
import { BasicSimpleComponent } from './basic-simple/basic-simple.component';
import { BasicThemesComponent } from './basic-themes/basic-themes.component';
import { BasicUpdateComponent } from './basic-update/basic-update.component';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss'],
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
    BasicSimpleComponent,
    BasicDatasetComponent,
    BasicEventsComponent,
    BasicThemesComponent,
    BasicLoadingComponent,
    BasicUpdateComponent,
    BasicInitOptsComponent,
    BasicInstanceComponent,
  ],
})
export class BasicComponent {
  constructor() {}
}
