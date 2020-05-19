import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HongkongPdComponent } from './map/hongkong-pd/hongkong-pd.component';
import { OfficialDemoComponent } from './tree/official-demo/official-demo.component';
import { GraphForceLayoutDemoComponent } from './graph/graph-force-layout-demo/graph-force-layout-demo.component';
import { GraphSimpleDemoComponent } from './graph/graph-simple-demo/graph-simple-demo.component';
import { Bar3dDemoComponent } from './bar3d/bar3d-demo/bar3d-demo.component';
import { ConnectChartsComponent } from './advanced/connect-charts/connect-charts.component';
import { LineDraggableComponent } from './advanced/line-draggable/line-draggable.component';

const routes: Routes = [
  {
    path: 'advanced/connect-charts',
    component: ConnectChartsComponent,
    data: {
      title: 'Connect Charts'
    }
  },
  {
    path: 'advanced/line-draggable',
    component: LineDraggableComponent,
    data: {
      title: 'Draggable Line Chart'
    }
  },
  {
    path: 'map/hongkong-pd',
    component: HongkongPdComponent,
    data: {
      title: 'Population Density of HongKong (2011)'
    }
  },
  {
    path: 'tree/official-demo',
    component: OfficialDemoComponent,
    data: {
      title: 'Official Demo'
    }
  },
  {
    path: 'graph/simple',
    component: GraphSimpleDemoComponent,
    data: {
      title: 'Simple Graph'
    }
  },
  {
    path: 'graph/force-layout',
    component: GraphForceLayoutDemoComponent,
    data: {
      title: 'Force Layout'
    }
  },
  {
    path: 'bar3d/bar3d-demo',
    component: Bar3dDemoComponent,
    data: {
      title: '3D Bar with Dataset'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
