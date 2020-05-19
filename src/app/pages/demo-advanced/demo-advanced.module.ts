import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';
import { SharedModule } from '../../shared/shared.module';
import { DemoAdvancedRoutingModule } from './demo-advanced-routing.module';
import { AdvancedComponent } from './advanced/advanced.component';
import { ConnectChartsComponent } from './advanced/connect-charts/connect-charts.component';
import { LineDraggableComponent } from './advanced/line-draggable/line-draggable.component';

@NgModule({
  declarations: [AdvancedComponent, ConnectChartsComponent, LineDraggableComponent],
  imports: [CommonModule, SharedModule, NgxEchartsModule, DemoAdvancedRoutingModule],
})
export class DemoAdvancedModule {}
