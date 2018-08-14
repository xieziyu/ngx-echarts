import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { DemoRoutingModule } from './demo-routing.module';
import { HongkongPdComponent } from './map/hongkong-pd/hongkong-pd.component';
import { OfficialDemoComponent } from './tree/official-demo/official-demo.component';
import { GraphForceLayoutDemoComponent } from './graph/graph-force-layout-demo/graph-force-layout-demo.component';
import { GraphSimpleDemoComponent } from './graph/graph-simple-demo/graph-simple-demo.component';

@NgModule({
  imports: [
    CommonModule,
    DemoRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  declarations: [
    HongkongPdComponent,
    OfficialDemoComponent,
    GraphForceLayoutDemoComponent,
    GraphSimpleDemoComponent
  ]
})
export class DemoModule { }
