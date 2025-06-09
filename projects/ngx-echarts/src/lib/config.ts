import { InjectionToken } from '@angular/core';

export type ThemeOption = Record<string, any>;

export interface NgxEchartsConfig {
  echarts: any | (() => Promise<any>);
  theme?: string | ThemeOption;
}

export const NGX_ECHARTS_CONFIG = new InjectionToken<NgxEchartsConfig>('NGX_ECHARTS_CONFIG');
