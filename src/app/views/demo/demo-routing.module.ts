import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HongkongPdComponent } from './map/hongkong-pd/hongkong-pd.component';
import { BusLineComponent } from './map/bus-line/bus-line.component';

const routes: Routes = [
  {
    path: 'map/hongkong-pd',
    component: HongkongPdComponent,
    data: {
      title: 'Population Density of HongKong (2011)'
    }
  },
  {
    path: 'map/bus-lines-of-beijing',
    component: BusLineComponent,
    data: {
      title: 'Bus Lines of Beijing (Baidu Map)'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
