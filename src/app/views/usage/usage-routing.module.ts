import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicComponent } from './basic/basic.component';
import { UpdateChartComponent } from './update-chart/update-chart.component';
import { ThemeComponent } from './theme/theme.component';
import { InitOptsComponent } from './init-opts/init-opts.component';
import { LoadingComponent } from './loading/loading.component';
import { EchartsInstanceComponent } from './echarts-instance/echarts-instance.component';
import { EventsComponent } from './events/events.component';
import { AutoResizeComponent } from './auto-resize/auto-resize.component';

const routes: Routes = [
  {
    path: 'basic',
    component: BasicComponent,
    data: {
      title: 'Basic'
    }
  },
  {
    path: 'echarts-instance',
    component: EchartsInstanceComponent,
    data: {
      title: 'echartsInstance'
    }
  },
  {
    path: 'events',
    component: EventsComponent,
    data: {
      title: 'Events'
    }
  },
  {
    path: 'theme',
    component: ThemeComponent,
    data: {
      title: 'theme'
    }
  },
  {
    path: 'loading',
    component: LoadingComponent,
    data: {
      title: 'loading'
    }
  },
  {
    path: 'update-chart',
    component: UpdateChartComponent,
    data: {
      title: 'Update Chart'
    }
  },
  {
    path: 'init-opts',
    component: InitOptsComponent,
    data: {
      title: 'InitOpts'
    }
  },
  {
    path: 'auto-resize',
    component: AutoResizeComponent,
    data: {
      title: 'Auto Resize'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsageRoutingModule { }
