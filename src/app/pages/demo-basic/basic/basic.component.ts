import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
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
    MatTabsModule,
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
