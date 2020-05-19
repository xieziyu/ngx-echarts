import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData, LocationStrategy, HashLocationStrategy } from '@angular/common';
import en from '@angular/common/locales/en';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { NgxEchartsModule } from 'ngx-echarts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';

// Import all modules from echarts:
import * as echarts from 'echarts';

// Custom build:
// import * as echarts from './custom-echarts';

// Import echarts themes
import 'echarts/theme/macarons.js';

registerLocaleData(en);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    LayoutModule,
    AppRoutingModule,
    FormsModule,
    NgZorroAntdModule,
    MarkdownModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule,
    NgxEchartsModule.forRoot({
      echarts,
    }),
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
