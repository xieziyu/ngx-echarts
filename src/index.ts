import { NgModule } from '@angular/core';

import { AngularEchartsDirective } from './directive/angular-echarts.directive';

export * from './directive/angular-echarts.directive';

@NgModule({
  declarations: [
    AngularEchartsDirective
  ],
  exports: [
    AngularEchartsDirective
  ]
})
export class AngularEchartsModule {
}
