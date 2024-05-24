import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';
import { FormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData, LocationStrategy, HashLocationStrategy } from '@angular/common';
import en from '@angular/common/locales/en';
import { NgZorroCustomModule } from './shared/ng-zorro-custom.module';
import { NgxEchartsDirective, provideEcharts } from 'ngx-echarts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';

// Import echarts extensions
import 'echarts-gl';
// Import echarts themes
import 'echarts/theme/macarons.js';

registerLocaleData(en);

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
    provideEcharts(),
    provideHttpClient(withInterceptorsFromDi()),
  ],
})
export class AppModule {}
