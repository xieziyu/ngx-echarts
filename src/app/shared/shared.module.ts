import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { MarkdownModule } from 'ngx-markdown';

import { IconsProviderModule } from './icons-provider.module';
import { CodeBlockComponent } from './code-block/code-block.component';

@NgModule({
  declarations: [CodeBlockComponent],
  imports: [
    CommonModule,
    IconsProviderModule,
    NgZorroAntdModule,
    MarkdownModule.forChild(),
  ],
  exports: [
    IconsProviderModule,
    NgZorroAntdModule,
    MarkdownModule,
    CodeBlockComponent,
  ],
})
export class SharedModule {}
