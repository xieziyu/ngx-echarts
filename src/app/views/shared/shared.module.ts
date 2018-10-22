import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { MarkdownModule } from 'ngx-markdown';
import { NgxEchartsModule } from 'ngx-echarts';

@NgModule({
  imports: [
    CommonModule,
    NgxEchartsModule,
    TabsModule.forRoot(),
    MarkdownModule.forRoot({
      loader: HttpClient
    })
  ],
  exports: [
    NgxEchartsModule,
    TabsModule,
    MarkdownModule
  ],
  declarations: []
})
export class SharedModule { }
