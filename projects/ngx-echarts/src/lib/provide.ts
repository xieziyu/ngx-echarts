import { Provider } from '@angular/core';
import { NGX_ECHARTS_CONFIG, NgxEchartsConfig } from './config';

export function provideEchartsCore(config: NgxEchartsConfig): Provider {
  return {
    provide: NGX_ECHARTS_CONFIG,
    useValue: config,
  };
}
