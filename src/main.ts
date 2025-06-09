import { enableProdMode, importProvidersFrom, provideZonelessChangeDetection } from '@angular/core';
import { environment } from './environments/environment';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { provideEchartsCore } from 'ngx-echarts';
import * as echarts from 'echarts/core';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { ROUTES } from './app/app-routing.module';
import { MarkdownModule } from 'ngx-markdown';
import { provideAnimations } from '@angular/platform-browser/animations';
import { CanvasRenderer } from 'echarts/renderers';
import { BarChart, GraphChart, HeatmapChart, LineChart, PieChart, TreeChart } from 'echarts/charts';
import {
  CalendarComponent,
  DatasetComponent,
  DataZoomComponent,
  GraphicComponent,
  GridComponent,
  LegendComponent,
  TitleComponent,
  TooltipComponent,
  TransformComponent,
  VisualMapComponent,
} from 'echarts/components';
import { LabelLayout, UniversalTransition } from 'echarts/features';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

if (environment.production) {
  enableProdMode();
}

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
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
    BrowserModule,
    importProvidersFrom(MarkdownModule.forRoot()),
    provideAnimations(),
    provideRouter(ROUTES),
    provideEchartsCore({ echarts }),
    provideHttpClient(withInterceptorsFromDi()),
    provideAnimationsAsync(),
    provideZonelessChangeDetection(),
  ],
});
