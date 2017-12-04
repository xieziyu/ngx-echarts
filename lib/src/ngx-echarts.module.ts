import { NgModule } from '@angular/core';
import { NgxEchartsDirective } from './directive/ngx-echarts.directive';
import { NgxEchartsService } from './service/ngx-echarts.service';

@NgModule({
  declarations: [
    NgxEchartsDirective
  ],
  exports: [
    NgxEchartsDirective
  ],
  providers: [
    NgxEchartsService
  ]
})
export class NgxEchartsModule { }

export {
  NgxEchartsDirective,
  NgxEchartsService
};
