import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';
import { FormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData, LocationStrategy, HashLocationStrategy } from '@angular/common';
import en from '@angular/common/locales/en';
import { NgZorroCustomModule } from './shared/ng-zorro-custom.module';
import { NgxEchartsDirective, provideEchartsCore } from 'ngx-echarts';

import * as echarts from 'echarts/core';
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  LegendComponent,
  DataZoomComponent,
  VisualMapComponent,
  GraphicComponent,
  CalendarComponent,
} from 'echarts/components';
import { BarChart, LineChart, HeatmapChart, PieChart, GraphChart, TreeChart } from 'echarts/charts';
import { LabelLayout, UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';

// Import echarts themes
import 'echarts/theme/macarons.js';

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

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    LayoutModule,
    AppRoutingModule,
    FormsModule,
    NgZorroCustomModule,
    MarkdownModule.forRoot(),
    BrowserAnimationsModule,
    NgxEchartsDirective,
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
    provideEchartsCore({ echarts }),
    provideHttpClient(withInterceptorsFromDi()),
  ],
})
export class AppModule {}
