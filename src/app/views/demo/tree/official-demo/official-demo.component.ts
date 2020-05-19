import { Component, OnInit } from '@angular/core';
import { TREE_OPTION, TREE_DATA_1, TREE_DATA_2 } from './tree-option';

declare const require: any;

@Component({
  selector: 'app-official-demo',
  templateUrl: './official-demo.component.html',
  styleUrls: ['./official-demo.component.scss']
})
export class OfficialDemoComponent implements OnInit {
  demo_html = require('!!html-loader!./official-demo.component.html');
  demo_ts = require('!!raw-loader!./official-demo.component.ts');
  demo_option = require('!!raw-loader!./tree-option.ts');
  options = TREE_OPTION;
  mergeData = null;

  constructor() { }

  ngOnInit() {
    TREE_OPTION.series[0].data = [TREE_DATA_1];
    TREE_OPTION.series[1].data = [TREE_DATA_2];

    this.mergeData = {
      series: TREE_OPTION.series
    };
  }

}
