import { NgModule, ModuleWithProviders } from '@angular/core';
import { NgxEchartsDirective, NgxEchartsConfig, NGX_ECHARTS_CONFIG } from './ngx-echarts.directive';

@NgModule({
  imports: [],
  declarations: [NgxEchartsDirective],
  exports: [NgxEchartsDirective],
})
export class NgxEchartsModule {
  static forRoot(config: NgxEchartsConfig): ModuleWithProviders {
    return {
      ngModule: NgxEchartsModule,
      providers: [{ provide: NGX_ECHARTS_CONFIG, useValue: config }],
    };
  }
  static forChild() {
    return {
      ngModule: NgxEchartsModule,
    };
  }
}

export { NgxEchartsDirective };
