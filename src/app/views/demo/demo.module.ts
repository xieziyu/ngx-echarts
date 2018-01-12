import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { DemoRoutingModule } from './demo-routing.module';
import { HongkongPdComponent } from './map/hongkong-pd/hongkong-pd.component';
import { BusLineComponent } from './map/bus-line/bus-line.component';
import { OfficialDemoComponent } from './tree/official-demo/official-demo.component';

@NgModule({
  imports: [
    CommonModule,
    DemoRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  declarations: [
    HongkongPdComponent,
    BusLineComponent,
    OfficialDemoComponent
  ]
})
export class DemoModule { }
