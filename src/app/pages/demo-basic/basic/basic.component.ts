import { Component } from '@angular/core';
import { NzPageHeaderComponent, NzPageHeaderBreadcrumbDirective } from 'ng-zorro-antd/page-header';
import { NzBreadCrumbComponent, NzBreadCrumbItemComponent } from 'ng-zorro-antd/breadcrumb';
import { RouterLink } from '@angular/router';
import { NzDividerComponent } from 'ng-zorro-antd/divider';
import { NzTabSetComponent, NzTabComponent, NzTabDirective } from 'ng-zorro-antd/tabs';
import { BasicSimpleComponent } from './basic-simple/basic-simple.component';
import { BasicDatasetComponent } from './basic-dataset/basic-dataset.component';
import { BasicEventsComponent } from './basic-events/basic-events.component';
import { BasicThemesComponent } from './basic-themes/basic-themes.component';
import { BasicLoadingComponent } from './basic-loading/basic-loading.component';
import { BasicUpdateComponent } from './basic-update/basic-update.component';
import { BasicInitOptsComponent } from './basic-init-opts/basic-init-opts.component';
import { BasicInstanceComponent } from './basic-instance/basic-instance.component';

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
    NzTabSetComponent,
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
