
import { Component, Input, OnInit } from '@angular/core';
import { NzTabComponent, NzTabSetComponent } from 'ng-zorro-antd/tabs';
import { LanguagePipe, MarkdownComponent } from 'ngx-markdown';

@Component({
  selector: 'app-code-block',
  templateUrl: './code-block.component.html',
  styleUrls: ['./code-block.component.scss'],
  imports: [NzTabSetComponent, NzTabComponent, MarkdownComponent, LanguagePipe],
})
export class CodeBlockComponent implements OnInit {
  @Input() html: string;
  @Input() component: string;
  @Input() scss: string;
  @Input() data: string;
  htmlCode: string;
  componentCode: string;
  scssCode: string;
  dataCode: string;

  constructor() {}

  ngOnInit() {
    if (this.html) {
      this.htmlCode = this.html.match(/DEMO START -->\n((.*\n)*)<!-- DEMO END/)[1];
    }

    if (this.component) {
      this.componentCode = this.component.replace(
        / *\/\/ IGNORE START[\s\S]*?\/\/ IGNORE END\n/g,
        ''
      );
    }

    if (this.scss) {
      this.scssCode = this.scss.replace(/ *\/\/ IGNORE START[\s\S]*?\/\/ IGNORE END\n/g, '');
    }

    if (this.data) {
      this.dataCode = this.data.replace(/ *\/\/ IGNORE START[\s\S]*?\/\/ IGNORE END\n/g, '');
    }
  }
}
