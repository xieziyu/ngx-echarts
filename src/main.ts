import { enableProdMode, importProvidersFrom, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';

import { HashLocationStrategy, LocationStrategy, registerLocaleData } from '@angular/common';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { provideAnimations } from '@angular/platform-browser/animations';
import { NgxEchartsDirective, provideEchartsCore } from 'ngx-echarts';
import { MarkdownModule } from 'ngx-markdown';
import { AppRoutingModule } from './app/app-routing.module';
import { AppComponent } from './app/app.component';
import { LayoutModule } from './app/layout/layout.module';
import { NgZorroCustomModule } from './app/shared/ng-zorro-custom.module';
import { environment } from './environments/environment';

// Import echarts themes
import { BarChart, GraphChart, HeatmapChart, LineChart, PieChart, TreeChart } from 'echarts/charts';
import {
  CalendarComponent,
  DataZoomComponent,
  DatasetComponent,
  GraphicComponent,
  GridComponent,
  LegendComponent,
  TitleComponent,
  TooltipComponent,
  TransformComponent,
  VisualMapComponent,
} from 'echarts/components';
import * as echarts from 'echarts/core';
import { LabelLayout, UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
import 'echarts/theme/macarons.js';

if (environment.production) {
  enableProdMode();
}

registerLocaleData(en);

// Register the required components
echarts.use([
  // charts ...
  BarChart,
  LineChart,
  HeatmapChart,
  PieChart,
  GraphChart,
  TreeChart,
  // components ...
  LegendComponent,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  DataZoomComponent,
  VisualMapComponent,
  GraphicComponent,
  CalendarComponent,
  // features ...
  LabelLayout,
  UniversalTransition,
  // renderers ...
  CanvasRenderer,
]);

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      BrowserModule,
      LayoutModule,
      AppRoutingModule,
      FormsModule,
      NgZorroCustomModule,
      MarkdownModule.forRoot(),
      NgxEchartsDirective
    ),
    provideZonelessChangeDetection(),
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
    provideEchartsCore({ echarts }),
    provideHttpClient(withInterceptorsFromDi()),
    provideAnimations(),
  ],
}).catch(err => console.error(err));
