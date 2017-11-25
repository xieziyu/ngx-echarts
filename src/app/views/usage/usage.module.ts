import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { UsageRoutingModule } from './usage-routing.module';
import { BasicComponent } from './basic/basic.component';
import { UpdateChartComponent } from './update-chart/update-chart.component';
import { ThemeComponent } from './theme/theme.component';
import { InitOptsComponent } from './init-opts/init-opts.component';
import { LoadingComponent } from './loading/loading.component';
import { EchartsInstanceComponent } from './echarts-instance/echarts-instance.component';
import { EventsComponent } from './events/events.component';

@NgModule({
  imports: [
    CommonModule,
    UsageRoutingModule,
    SharedModule
  ],
  declarations: [
    BasicComponent,
    UpdateChartComponent,
    ThemeComponent,
    InitOptsComponent,
    LoadingComponent,
    EchartsInstanceComponent,
    EventsComponent
  ]
})
export class UsageModule { }
