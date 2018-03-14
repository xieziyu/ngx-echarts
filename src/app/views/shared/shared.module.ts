import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { MarkdownModule } from 'ngx-markdown';
import { NgxEchartsModule } from '../../../lib/ngx-echarts.module';

@NgModule({
  imports: [
    CommonModule,
    NgxEchartsModule,
    TabsModule.forRoot(),
    MarkdownModule.forRoot()
  ],
  exports: [
    NgxEchartsModule,
    TabsModule,
    MarkdownModule
  ],
  declarations: []
})
export class SharedModule { }
