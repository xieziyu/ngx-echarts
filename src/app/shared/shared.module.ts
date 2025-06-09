import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';

import { CodeBlockComponent } from './code-block/code-block.component';

@NgModule({
  imports: [CodeBlockComponent, CommonModule, MarkdownModule.forChild()],
  exports: [MarkdownModule, CodeBlockComponent],
})
export class SharedModule {}
