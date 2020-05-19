import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';
import { SharedModule } from '../../shared/shared.module';
import { DemoBasicRoutingModule } from './demo-basic-routing.module';
import { BasicComponent } from './basic/basic.component';
import { BasicSimpleComponent } from './basic/basic-simple/basic-simple.component';
import { BasicEventsComponent } from './basic/basic-events/basic-events.component';
import { BasicThemesComponent } from './basic/basic-themes/basic-themes.component';
import { BasicLoadingComponent } from './basic/basic-loading/basic-loading.component';
import { BasicUpdateComponent } from './basic/basic-update/basic-update.component';
import { BasicInitOptsComponent } from './basic/basic-init-opts/basic-init-opts.component';
import { BasicInstanceComponent } from './basic/basic-instance/basic-instance.component';

@NgModule({
  declarations: [
    BasicComponent,
    BasicSimpleComponent,
    BasicEventsComponent,
    BasicThemesComponent,
    BasicLoadingComponent,
    BasicUpdateComponent,
    BasicInitOptsComponent,
    BasicInstanceComponent,
  ],
  imports: [CommonModule, SharedModule, NgxEchartsModule, DemoBasicRoutingModule],
})
export class DemoBasicModule {}
