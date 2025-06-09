import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';
import { SharedModule } from '../../shared/shared.module';
import { BasicComponent } from './basic/basic.component';
import { BasicSimpleComponent } from './basic/basic-simple/basic-simple.component';
import { BasicEventsComponent } from './basic/basic-events/basic-events.component';
import { BasicThemesComponent } from './basic/basic-themes/basic-themes.component';
import { BasicLoadingComponent } from './basic/basic-loading/basic-loading.component';
import { BasicUpdateComponent } from './basic/basic-update/basic-update.component';
import { BasicInitOptsComponent } from './basic/basic-init-opts/basic-init-opts.component';
import { BasicInstanceComponent } from './basic/basic-instance/basic-instance.component';
import { BasicDatasetComponent } from './basic/basic-dataset/basic-dataset.component';

@NgModule({
  imports: [
    BasicComponent,
    BasicDatasetComponent,
    BasicEventsComponent,
    BasicInitOptsComponent,
    BasicInstanceComponent,
    BasicLoadingComponent,
    BasicSimpleComponent,
    BasicThemesComponent,
    BasicUpdateComponent,
    CommonModule,
    NgxEchartsModule,
    SharedModule,
  ],
})
export class DemoBasicModule {}
