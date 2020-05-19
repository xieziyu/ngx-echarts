import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

/** echarts extensions: */
import 'echarts-gl';
import 'echarts/theme/dark.js';
import 'echarts/theme/macarons.js';
import 'echarts/dist/extension/bmap.min.js';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
