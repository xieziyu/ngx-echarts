import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import * as echarts from 'echarts';

(<any>window).echarts = echarts; // dirty: install global variables for side packages

// ideally needs to be changed to ES6 import
import './theme/dark.js';
import './theme/macarons.js';
import 'echarts/dist/extension/bmap.min.js';
import 'marked/lib/marked.js';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
