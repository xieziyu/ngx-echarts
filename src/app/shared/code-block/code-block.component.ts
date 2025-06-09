import { Component, OnInit, input } from '@angular/core';
import { NzTabComponent, NzTabSetComponent } from 'ng-zorro-antd/tabs';
import { LanguagePipe, MarkdownComponent } from 'ngx-markdown';

@Component({
  selector: 'app-code-block',
  templateUrl: './code-block.component.html',
  styleUrls: ['./code-block.component.scss'],
  imports: [NzTabSetComponent, NzTabComponent, MarkdownComponent, LanguagePipe],
})
export class CodeBlockComponent implements OnInit {
  readonly html = input<string>(undefined);
  readonly component = input<string>(undefined);
  readonly scss = input<string>(undefined);
  readonly data = input<string>(undefined);
  htmlCode: string;
  componentCode: string;
  scssCode: string;
  dataCode: string;

  constructor() {}

  ngOnInit() {
    const html = this.html();
    if (html) {
      this.htmlCode = html.match(/DEMO START -->\n((.*\n)*)<!-- DEMO END/)[1];
    }

    const component = this.component();
    if (component) {
      this.componentCode = component.replace(/ *\/\/ IGNORE START[\s\S]*?\/\/ IGNORE END\n/g, '');
    }

    const scss = this.scss();
    if (scss) {
      this.scssCode = scss.replace(/ *\/\/ IGNORE START[\s\S]*?\/\/ IGNORE END\n/g, '');
    }

    const data = this.data();
    if (data) {
      this.dataCode = data.replace(/ *\/\/ IGNORE START[\s\S]*?\/\/ IGNORE END\n/g, '');
    }
  }
}
