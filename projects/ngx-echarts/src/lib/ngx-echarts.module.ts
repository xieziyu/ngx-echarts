import { NgModule, ModuleWithProviders, Provider } from '@angular/core';
import {
  NgxEchartsDirective,
  NgxEchartsConfig,
  NGX_ECHARTS_CONFIG,
  ThemeOption,
} from './ngx-echarts.directive';

const provideEchartsCore = (config: NgxEchartsConfig): Provider => {
  return {
    provide: NGX_ECHARTS_CONFIG,
    useValue: config,
  };
};

@NgModule({
  imports: [NgxEchartsDirective],
  exports: [NgxEchartsDirective],
})
export class NgxEchartsModule {
  static forRoot(config: NgxEchartsConfig): ModuleWithProviders<NgxEchartsModule> {
    return {
      ngModule: NgxEchartsModule,
      providers: [provideEchartsCore(config)],
    };
  }
  static forChild(): ModuleWithProviders<NgxEchartsModule> {
    return {
      ngModule: NgxEchartsModule,
    };
  }
}

export { NgxEchartsDirective, NGX_ECHARTS_CONFIG, ThemeOption, provideEchartsCore };
