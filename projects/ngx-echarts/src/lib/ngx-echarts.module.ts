import { ModuleWithProviders, NgModule } from '@angular/core';
import { NgxEchartsConfig } from './config';
import { NgxEchartsDirective } from './ngx-echarts.directive';
import { provideEchartsCore } from './provide';

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
