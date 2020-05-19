import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';
import { SharedModule } from '../../shared/shared.module';
import { DemoAdvancedRoutingModule } from './demo-advanced-routing.module';
import { AdvancedComponent } from './advanced/advanced.component';
import { ConnectChartsComponent } from './advanced/connect-charts/connect-charts.component';

@NgModule({
  declarations: [AdvancedComponent, ConnectChartsComponent],
  imports: [CommonModule, SharedModule, NgxEchartsModule, DemoAdvancedRoutingModule],
})
export class DemoAdvancedModule {}
