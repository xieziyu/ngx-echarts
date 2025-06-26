import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';
import { MatTabContent, MatTabsModule } from '@angular/material/tabs';
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
    BasicDatasetComponent,
    BasicEventsComponent,
    BasicInitOptsComponent,
    BasicInstanceComponent,
    BasicLoadingComponent,
    BasicSimpleComponent,
    BasicThemesComponent,
    BasicUpdateComponent,
    MatDividerModule,
    MatTabContent,
    MatTabsModule,
    RouterLink,
  ],
})
export class BasicComponent {
  constructor() {}
}
