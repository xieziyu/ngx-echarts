import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HongkongPdComponent } from './map/hongkong-pd/hongkong-pd.component';
import { OfficialDemoComponent } from './tree/official-demo/official-demo.component';
import { GraphForceLayoutDemoComponent } from './graph/graph-force-layout-demo/graph-force-layout-demo.component';
import { GraphSimpleDemoComponent } from './graph/graph-simple-demo/graph-simple-demo.component';

const routes: Routes = [
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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
