import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'code-block',
  templateUrl: './code-block.component.html',
  styleUrls: ['./code-block.component.scss'],
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
      this.componentCode = this.component.replace(/.*DEMO IGNORE\n/g, '');
    }

    if (this.scss) {
      this.scssCode = this.scss.replace(/.*DEMO IGNORE\n/g, '');
    }

    if (this.data) {
      this.dataCode = this.data.replace(/.*DEMO IGNORE\n/g, '');
    }
  }
}
