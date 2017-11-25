import { NgModule } from '@angular/core';
import { NgxEchartsDirective } from './directive/ngx-echarts.directive';

@NgModule({
  declarations: [
    NgxEchartsDirective
  ],
  exports: [
    NgxEchartsDirective
  ]
})
export class NgxEchartsModule { }

export { NgxEchartsDirective };
