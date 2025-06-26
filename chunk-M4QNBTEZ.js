import{a as f,c as A,h as w,i as ht}from"./chunk-FOI7OYIU.js";import{$ as R,Aa as W,B as C,Fa as U,Ga as F,Ha as X,I as c,Ia as P,J as r,Ja as $,K as s,Ka as j,L as m,La as H,M as h,Na as b,O as u,Oa as V,oa as G,qa as B,r as E,t as I,x as p,xa as v,y as d,ya as y,z as D,za as L}from"./chunk-YHMR6KXT.js";var Z=`<!-- DEMO START -->
<div echarts [options]="options" class="demo-chart"></div>
<!-- DEMO END -->

<app-code-block [html]="html" [component]="component"> </app-code-block>
`;var Y=`import { Component, OnInit } from '@angular/core';
import type { EChartsCoreOption } from 'echarts/core';
// IGNORE START
import html from './basic-simple.component.html';
import component from './basic-simple.component.txt';
import { NgxEchartsDirective } from 'ngx-echarts';
import { CodeBlockComponent } from '../../../../shared/code-block/code-block.component';
// IGNORE END

@Component({
  selector: 'app-basic-simple',
  templateUrl: './basic-simple.component.html',
  styleUrls: ['./basic-simple.component.scss'],
  imports: [NgxEchartsDirective, CodeBlockComponent],
})
export class BasicSimpleComponent implements OnInit {
  // IGNORE START
  html = html;
  component = component;
  // IGNORE END
  options: EChartsCoreOption;
  constructor() {}

  ngOnInit(): void {
    const xAxisData = [];
    const data1 = [];
    const data2 = [];

    for (let i = 0; i < 100; i++) {
      xAxisData.push('category' + i);
      data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
      data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
    }

    this.options = {
      legend: {
        data: ['bar', 'bar2'],
        align: 'left',
      },
      tooltip: {},
      xAxis: {
        data: xAxisData,
        silent: false,
        splitLine: {
          show: false,
        },
      },
      yAxis: {},
      series: [
        {
          name: 'bar',
          type: 'bar',
          data: data1,
          animationDelay: idx => idx * 10,
        },
        {
          name: 'bar2',
          type: 'bar',
          data: data2,
          animationDelay: idx => idx * 10 + 100,
        },
      ],
      animationEasing: 'elasticOut',
      animationDelayUpdate: idx => idx * 5,
    };
  }
}
`;var T=(()=>{let t=class t{constructor(){this.html=Z,this.component=Y}ngOnInit(){let a=[],e=[],o=[];for(let i=0;i<100;i++)a.push("category"+i),e.push((Math.sin(i/5)*(i/5-10)+i/6)*5),o.push((Math.cos(i/5)*(i/5-10)+i/6)*5);this.options={legend:{data:["bar","bar2"],align:"left"},tooltip:{},xAxis:{data:a,silent:!1,splitLine:{show:!1}},yAxis:{},series:[{name:"bar",type:"bar",data:e,animationDelay:i=>i*10},{name:"bar2",type:"bar",data:o,animationDelay:i=>i*10+100}],animationEasing:"elasticOut",animationDelayUpdate:i=>i*5}}};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=d({type:t,selectors:[["app-basic-simple"]],decls:2,vars:3,consts:[["echarts","",1,"demo-chart",3,"options"],[3,"html","component"]],template:function(e,o){e&1&&m(0,"div",0)(1,"app-code-block",1),e&2&&(c("options",o.options),p(),c("html",o.html)("component",o.component))},dependencies:[f,b],encapsulation:2});let n=t;return n})();var J=`<!-- DEMO START -->
<div class="button-groups">
  <button (click)="RandomDataset()" nz-button nzType="default">Random Dataset</button>
</div>
<div echarts [options]="options" [merge]="mergeOptions" class="demo-chart"></div>
<!-- DEMO END -->

<app-code-block [html]="html" [component]="component"> </app-code-block>
`;var K=`import { Component } from '@angular/core';
import type { EChartsCoreOption } from 'echarts/core';
// IGNORE START
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { NzWaveDirective } from 'ng-zorro-antd/core/wave';
import { NgxEchartsDirective } from 'ngx-echarts';
import { CodeBlockComponent } from '../../../../shared/code-block/code-block.component';
import html from './basic-dataset.component.html';
import component from './basic-dataset.component.txt';
// IGNORE END

@Component({
  selector: 'app-basic-dataset',
  templateUrl: './basic-dataset.component.html',
  styleUrls: ['./basic-dataset.component.scss'],
  imports: [NzButtonComponent, NzWaveDirective, NgxEchartsDirective, CodeBlockComponent],
})
export class BasicDatasetComponent {
  // IGNORE START
  html = html;
  component = component;
  // IGNORE END
  options: EChartsCoreOption = {
    legend: {},
    tooltip: {},
    dataset: {
      // Provide a set of data.
      source: [
        ['product', '2015', '2016', '2017'],
        ['Matcha Latte', 43.3, 85.8, 93.7],
        ['Milk Tea', 83.1, 73.4, 55.1],
        ['Cheese Cocoa', 86.4, 65.2, 82.5],
        ['Walnut Brownie', 72.4, 53.9, 39.1],
      ],
    },
    // Declare an x-axis (category axis).
    // The category map the first column in the dataset by default.
    xAxis: { type: 'category' },
    // Declare a y-axis (value axis).
    yAxis: {},
    // Declare several 'bar' series,
    // every series will auto-map to each column by default.
    series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }],
  };

  mergeOptions: EChartsCoreOption;

  RandomDataset() {
    this.mergeOptions = {
      dataset: {
        source: [
          ['product', '2015', '2016', '2017'],
          ['Matcha Latte', ...this.getRandomValues()],
          ['Milk Tea', ...this.getRandomValues()],
          ['Cheese Cocoa', ...this.getRandomValues()],
          ['Walnut Brownie', ...this.getRandomValues()],
        ],
      },
    };
  }

  private getRandomValues() {
    const res: number[] = [];
    for (let i = 0; i < 3; i++) {
      res.push(Math.random() * 100);
    }
    return res;
  }
}
`;var k=(()=>{let t=class t{constructor(){this.html=J,this.component=K,this.options={legend:{},tooltip:{},dataset:{source:[["product","2015","2016","2017"],["Matcha Latte",43.3,85.8,93.7],["Milk Tea",83.1,73.4,55.1],["Cheese Cocoa",86.4,65.2,82.5],["Walnut Brownie",72.4,53.9,39.1]]},xAxis:{type:"category"},yAxis:{},series:[{type:"bar"},{type:"bar"},{type:"bar"}]}}RandomDataset(){this.mergeOptions={dataset:{source:[["product","2015","2016","2017"],["Matcha Latte",...this.getRandomValues()],["Milk Tea",...this.getRandomValues()],["Cheese Cocoa",...this.getRandomValues()],["Walnut Brownie",...this.getRandomValues()]]}}}getRandomValues(){let a=[];for(let e=0;e<3;e++)a.push(Math.random()*100);return a}};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=d({type:t,selectors:[["app-basic-dataset"]],decls:5,vars:4,consts:[[1,"button-groups"],["nz-button","","nzType","default",3,"click"],["echarts","",1,"demo-chart",3,"options","merge"],[3,"html","component"]],template:function(e,o){e&1&&(r(0,"div",0)(1,"button",1),h("click",function(){return o.RandomDataset()}),u(2,"Random Dataset"),s()(),m(3,"div",2)(4,"app-code-block",3)),e&2&&(p(3),c("options",o.options)("merge",o.mergeOptions),p(),c("html",o.html)("component",o.component))},dependencies:[y,v,f,b],encapsulation:2});let n=t;return n})();ht();var Q=`<!-- DEMO START -->
<div
  echarts
  [options]="options"
  class="demo-chart"
  (chartInit)="onChartEvent($event, 'chartInit')"
  (chartClick)="onChartEvent($event, 'chartClick')"
  (chartDblClick)="onChartEvent($event, 'chartDblClick')"
  (chartMouseDown)="onChartEvent($event, 'chartMouseDown')"
  (chartMouseUp)="onChartEvent($event, 'chartMouseUp')"
  (chartMouseOver)="onChartEvent($event, 'chartMouseOver')"
  (chartMouseOut)="onChartEvent($event, 'chartMouseOut')"
  (chartGlobalOut)="onChartEvent($event, 'chartGlobalOut')"
  (chartContextMenu)="onChartEvent($event, 'chartContextMenu')"
  (chartDataZoom)="onChartEvent($event, 'chartDataZoom')"></div>
<!-- DEMO END -->

<app-code-block [html]="html" [component]="component"> </app-code-block>
`;var q=`import { Component, OnInit } from '@angular/core';
import type { ECElementEvent, ECharts, EChartsCoreOption } from 'echarts/core';
import type { ECActionEvent } from '../../../../shared/interface';
import LinearGradient from 'zrender/lib/graphic/LinearGradient';
// IGNORE START
import html from './basic-events.component.html';
import component from './basic-events.component.txt';
import { NgxEchartsDirective } from 'ngx-echarts';
import { CodeBlockComponent } from '../../../../shared/code-block/code-block.component';
// IGNORE END

@Component({
  selector: 'app-basic-events',
  templateUrl: './basic-events.component.html',
  styleUrls: ['./basic-events.component.scss'],
  imports: [NgxEchartsDirective, CodeBlockComponent],
})
export class BasicEventsComponent implements OnInit {
  // IGNORE START
  html = html;
  component = component;
  // IGNORE END
  options: EChartsCoreOption;

  constructor() {}

  ngOnInit(): void {
    const dataAxis = [
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
      'J',
      'K',
      'L',
      'M',
      'N',
      'O',
      'P',
      'Q',
      'R',
      'S',
      'T',
    ];
    const data = [
      220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125,
      220,
    ];
    const yMax = 500;
    const dataShadow = [];

    for (let i = 0; i < data.length; i++) {
      dataShadow.push(yMax);
    }

    this.options = {
      title: {
        text: 'Check Console for Events',
      },
      xAxis: {
        data: dataAxis,
        axisLabel: {
          inside: true,
          color: '#fff',
        },
        axisTick: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        z: 10,
      },
      yAxis: {
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          color: '#999',
        },
      },
      dataZoom: [
        {
          type: 'inside',
        },
      ],
      series: [
        {
          // For shadow
          type: 'bar',
          itemStyle: {
            color: 'rgba(0,0,0,0.05)',
          },
          barGap: '-100%',
          barCategoryGap: '40%',
          data: dataShadow,
          animation: false,
        },
        {
          type: 'bar',
          itemStyle: {
            color: new LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#83bff6' },
              { offset: 0.5, color: '#188df0' },
              { offset: 1, color: '#188df0' },
            ]),
          },
          emphasis: {
            itemStyle: {
              color: new LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: '#2378f7' },
                { offset: 0.7, color: '#2378f7' },
                { offset: 1, color: '#83bff6' },
              ]),
            },
          },
          data,
        },
      ],
    };
  }

  onChartEvent(event: ECElementEvent | ECActionEvent | ECharts, type: string) {
    console.log('chart event:', type, event);
  }
}
`;var x=(()=>{let t=class t{constructor(){this.html=Q,this.component=q}ngOnInit(){let a=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T"],e=[220,182,191,234,290,330,310,123,442,321,90,149,210,122,133,334,198,123,125,220],o=500,i=[];for(let l=0;l<e.length;l++)i.push(o);this.options={title:{text:"Check Console for Events"},xAxis:{data:a,axisLabel:{inside:!0,color:"#fff"},axisTick:{show:!1},axisLine:{show:!1},z:10},yAxis:{axisLine:{show:!1},axisTick:{show:!1},axisLabel:{color:"#999"}},dataZoom:[{type:"inside"}],series:[{type:"bar",itemStyle:{color:"rgba(0,0,0,0.05)"},barGap:"-100%",barCategoryGap:"40%",data:i,animation:!1},{type:"bar",itemStyle:{color:new w(0,0,0,1,[{offset:0,color:"#83bff6"},{offset:.5,color:"#188df0"},{offset:1,color:"#188df0"}])},emphasis:{itemStyle:{color:new w(0,0,0,1,[{offset:0,color:"#2378f7"},{offset:.7,color:"#2378f7"},{offset:1,color:"#83bff6"}])}},data:e}]}}onChartEvent(a,e){console.log("chart event:",e,a)}};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=d({type:t,selectors:[["app-basic-events"]],decls:2,vars:3,consts:[["echarts","",1,"demo-chart",3,"chartInit","chartClick","chartDblClick","chartMouseDown","chartMouseUp","chartMouseOver","chartMouseOut","chartGlobalOut","chartContextMenu","chartDataZoom","options"],[3,"html","component"]],template:function(e,o){e&1&&(r(0,"div",0),h("chartInit",function(l){return o.onChartEvent(l,"chartInit")})("chartClick",function(l){return o.onChartEvent(l,"chartClick")})("chartDblClick",function(l){return o.onChartEvent(l,"chartDblClick")})("chartMouseDown",function(l){return o.onChartEvent(l,"chartMouseDown")})("chartMouseUp",function(l){return o.onChartEvent(l,"chartMouseUp")})("chartMouseOver",function(l){return o.onChartEvent(l,"chartMouseOver")})("chartMouseOut",function(l){return o.onChartEvent(l,"chartMouseOut")})("chartGlobalOut",function(l){return o.onChartEvent(l,"chartGlobalOut")})("chartContextMenu",function(l){return o.onChartEvent(l,"chartContextMenu")})("chartDataZoom",function(l){return o.onChartEvent(l,"chartDataZoom")}),s(),m(1,"app-code-block",1)),e&2&&(c("options",o.options),p(),c("html",o.html)("component",o.component))},dependencies:[f,b],encapsulation:2});let n=t;return n})();var tt={color:["#b21ab4","#6f0099","#2a2073","#0b5ea8","#17aecc","#b3b3ff","#eb99ff","#fae6ff","#e6f2ff","#eeeeee"],title:{fontWeight:"normal",color:"#00aecd"},visualMap:{color:["#00aecd","#a2d4e6"]},toolbox:{color:["#00aecd","#00aecd","#00aecd","#00aecd"]},tooltip:{backgroundColor:"rgba(0,0,0,0.5)",axisPointer:{type:"line",lineStyle:{color:"#00aecd",type:"dashed"},crossStyle:{color:"#00aecd"},shadowStyle:{color:"rgba(200,200,200,0.3)"}}},dataZoom:{dataBackgroundColor:"#eee",fillerColor:"rgba(144,197,237,0.2)",handleColor:"#00aecd"},timeline:{lineStyle:{color:"#00aecd"},controlStyle:{color:"#00aecd",borderColor:"00aecd"}},candlestick:{itemStyle:{color:"#00aecd",color0:"#a2d4e6"},lineStyle:{width:1,color:"#00aecd",color0:"#a2d4e6"},areaStyle:{color:"#b21ab4",color0:"#0b5ea8"}},chord:{padding:4,itemStyle:{color:"#b21ab4",borderWidth:1,borderColor:"rgba(128, 128, 128, 0.5)"},lineStyle:{color:"rgba(128, 128, 128, 0.5)"},areaStyle:{color:"#0b5ea8"}},graph:{itemStyle:{color:"#b21ab4"},linkStyle:{color:"#2a2073"}},map:{itemStyle:{color:"#c12e34"},areaStyle:{color:"#ddd"},label:{color:"#c12e34"}},gauge:{axisLine:{lineStyle:{color:[[.2,"#dddddd"],[.8,"#00aecd"],[1,"#f5ccff"]],width:8}}}};var et=`<!-- DEMO START -->
<div class="button-groups">
  <button (click)="theme = undefined" nz-button nzType="default">default</button>
  <button (click)="theme = 'dark'" nz-button nzType="default">dark</button>
  <button (click)="theme = 'macarons'" nz-button nzType="default">macarons(theme file)</button>
  <button (click)="theme = coolTheme" nz-button nzType="default">cool(theme object)</button>
</div>
<div echarts [options]="options" [theme]="theme" class="demo-chart"></div>
<!-- DEMO END -->

<app-code-block [html]="html" [component]="component" [data]="data"> </app-code-block>
`;var ot=`import { Component } from '@angular/core';
import type { EChartsCoreOption } from 'echarts/core';
import { NgxEchartsDirective, ThemeOption } from 'ngx-echarts';
import { CoolTheme } from './cool-theme';
// IGNORE START
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { NzWaveDirective } from 'ng-zorro-antd/core/wave';
import { CodeBlockComponent } from '../../../../shared/code-block/code-block.component';
import html from './basic-themes.component.html';
import component from './basic-themes.component.txt';
import data from './cool-theme.txt';
// IGNORE END

@Component({
  selector: 'app-basic-themes',
  templateUrl: './basic-themes.component.html',
  styleUrls: ['./basic-themes.component.scss'],
  imports: [NzButtonComponent, NzWaveDirective, NgxEchartsDirective, CodeBlockComponent],
})
export class BasicThemesComponent {
  // IGNORE START
  html = html;
  component = component;
  data = data;
  // IGNORE END
  theme: string | ThemeOption;
  coolTheme = CoolTheme;
  options: EChartsCoreOption = {
    title: {
      left: '50%',
      text: 'Nightingale Rose Diagram',
      subtext: 'Mocking Data',
      textAlign: 'center',
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)',
    },
    legend: {
      align: 'auto',
      bottom: 10,
      data: ['rose1', 'rose2', 'rose3', 'rose4', 'rose5', 'rose6', 'rose7', 'rose8'],
    },
    calculable: true,
    series: [
      {
        name: 'area',
        type: 'pie',
        radius: [30, 110],
        roseType: 'area',
        data: [
          { value: 10, name: 'rose1' },
          { value: 5, name: 'rose2' },
          { value: 15, name: 'rose3' },
          { value: 25, name: 'rose4' },
          { value: 20, name: 'rose5' },
          { value: 35, name: 'rose6' },
          { value: 30, name: 'rose7' },
          { value: 40, name: 'rose8' },
        ],
      },
    ],
  };
}
`;var nt=`export const CoolTheme = {
  color: [
    '#b21ab4',
    '#6f0099',
    '#2a2073',
    '#0b5ea8',
    '#17aecc',
    '#b3b3ff',
    '#eb99ff',
    '#fae6ff',
    '#e6f2ff',
    '#eeeeee',
  ],

  title: {
    fontWeight: 'normal',
    color: '#00aecd',
  },

  visualMap: {
    color: ['#00aecd', '#a2d4e6'],
  },

  toolbox: {
    color: ['#00aecd', '#00aecd', '#00aecd', '#00aecd'],
  },

  tooltip: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    axisPointer: {
      // Axis indicator, coordinate trigger effective
      type: 'line', // The default is a straight line\uFF1A 'line' | 'shadow'
      lineStyle: {
        // Straight line indicator style settings
        color: '#00aecd',
        type: 'dashed',
      },
      crossStyle: {
        color: '#00aecd',
      },
      shadowStyle: {
        // Shadow indicator style settings
        color: 'rgba(200,200,200,0.3)',
      },
    },
  },

  // Area scaling controller
  dataZoom: {
    dataBackgroundColor: '#eee', // Data background color
    fillerColor: 'rgba(144,197,237,0.2)', // Fill the color
    handleColor: '#00aecd', // Handle color
  },

  timeline: {
    lineStyle: {
      color: '#00aecd',
    },
    controlStyle: {
      color: '#00aecd',
      borderColor: '00aecd',
    },
  },

  candlestick: {
    itemStyle: {
      color: '#00aecd',
      color0: '#a2d4e6',
    },
    lineStyle: {
      width: 1,
      color: '#00aecd',
      color0: '#a2d4e6',
    },
    areaStyle: {
      color: '#b21ab4',
      color0: '#0b5ea8',
    },
  },

  chord: {
    padding: 4,
    itemStyle: {
      color: '#b21ab4',
      borderWidth: 1,
      borderColor: 'rgba(128, 128, 128, 0.5)',
    },
    lineStyle: {
      color: 'rgba(128, 128, 128, 0.5)',
    },
    areaStyle: {
      color: '#0b5ea8',
    },
  },

  graph: {
    itemStyle: {
      color: '#b21ab4',
    },
    linkStyle: {
      color: '#2a2073',
    },
  },

  map: {
    itemStyle: {
      color: '#c12e34',
    },
    areaStyle: {
      color: '#ddd',
    },
    label: {
      color: '#c12e34',
    },
  },

  gauge: {
    axisLine: {
      lineStyle: {
        color: [
          [0.2, '#dddddd'],
          [0.8, '#00aecd'],
          [1, '#f5ccff'],
        ],
        width: 8,
      },
    },
  },
};
`;var O=(()=>{let t=class t{constructor(){this.html=et,this.component=ot,this.data=nt,this.coolTheme=tt,this.options={title:{left:"50%",text:"Nightingale Rose Diagram",subtext:"Mocking Data",textAlign:"center"},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{align:"auto",bottom:10,data:["rose1","rose2","rose3","rose4","rose5","rose6","rose7","rose8"]},calculable:!0,series:[{name:"area",type:"pie",radius:[30,110],roseType:"area",data:[{value:10,name:"rose1"},{value:5,name:"rose2"},{value:15,name:"rose3"},{value:25,name:"rose4"},{value:20,name:"rose5"},{value:35,name:"rose6"},{value:30,name:"rose7"},{value:40,name:"rose8"}]}]}}};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=d({type:t,selectors:[["app-basic-themes"]],decls:11,vars:5,consts:[[1,"button-groups"],["nz-button","","nzType","default",3,"click"],["echarts","",1,"demo-chart",3,"options","theme"],[3,"html","component","data"]],template:function(e,o){e&1&&(r(0,"div",0)(1,"button",1),h("click",function(){return o.theme=void 0}),u(2,"default"),s(),r(3,"button",1),h("click",function(){return o.theme="dark"}),u(4,"dark"),s(),r(5,"button",1),h("click",function(){return o.theme="macarons"}),u(6,"macarons(theme file)"),s(),r(7,"button",1),h("click",function(){return o.theme=o.coolTheme}),u(8,"cool(theme object)"),s()(),m(9,"div",2)(10,"app-code-block",3)),e&2&&(p(9),c("options",o.options)("theme",o.theme),p(),c("html",o.html)("component",o.component)("data",o.data))},dependencies:[y,v,f,b],encapsulation:2});let n=t;return n})();var at=`<!-- DEMO START -->
<div class="button-groups">
  <button (click)="isLoading = !isLoading" nz-button nzType="default">Toggle Loading</button>
</div>
<div echarts [options]="options" [loading]="isLoading" theme="macarons" class="demo-chart"></div>
<!-- DEMO END -->

<app-code-block [html]="html" [component]="component"> </app-code-block>
`;var it=`import { Component } from '@angular/core';
import type { EChartsCoreOption } from 'echarts/core';
// IGNORE START
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { NzWaveDirective } from 'ng-zorro-antd/core/wave';
import { NgxEchartsDirective } from 'ngx-echarts';
import { CodeBlockComponent } from '../../../../shared/code-block/code-block.component';
import html from './basic-loading.component.html';
import component from './basic-loading.component.txt';
// IGNORE END

@Component({
  selector: 'app-basic-loading',
  templateUrl: './basic-loading.component.html',
  styleUrls: ['./basic-loading.component.scss'],
  imports: [NzButtonComponent, NzWaveDirective, NgxEchartsDirective, CodeBlockComponent],
})
export class BasicLoadingComponent {
  // IGNORE START
  html = html;
  component = component;
  // IGNORE END
  isLoading = true;
  options: EChartsCoreOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985',
        },
      },
    },
    legend: {
      data: ['X-1', 'X-2', 'X-3', 'X-4', 'X-5'],
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
    ],
    yAxis: [
      {
        type: 'value',
      },
    ],
    series: [
      {
        name: 'X-1',
        type: 'line',
        stack: 'counts',
        areaStyle: {},
        data: [120, 132, 101, 134, 90, 230, 210],
      },
      {
        name: 'X-2',
        type: 'line',
        stack: 'counts',
        areaStyle: {},
        data: [220, 182, 191, 234, 290, 330, 310],
      },
      {
        name: 'X-3',
        type: 'line',
        stack: 'counts',
        areaStyle: {},
        data: [150, 232, 201, 154, 190, 330, 410],
      },
      {
        name: 'X-4',
        type: 'line',
        stack: 'counts',
        areaStyle: {},
        data: [320, 332, 301, 334, 390, 330, 320],
      },
      {
        name: 'X-5',
        type: 'line',
        stack: 'counts',
        label: {
          show: true,
          position: 'top',
        },
        areaStyle: {},
        data: [820, 932, 901, 934, 1290, 1330, 1320],
      },
    ],
  };
}
`;var S=(()=>{let t=class t{constructor(){this.html=at,this.component=it,this.isLoading=!0,this.options={tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},legend:{data:["X-1","X-2","X-3","X-4","X-5"]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",boundaryGap:!1,data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]}],yAxis:[{type:"value"}],series:[{name:"X-1",type:"line",stack:"counts",areaStyle:{},data:[120,132,101,134,90,230,210]},{name:"X-2",type:"line",stack:"counts",areaStyle:{},data:[220,182,191,234,290,330,310]},{name:"X-3",type:"line",stack:"counts",areaStyle:{},data:[150,232,201,154,190,330,410]},{name:"X-4",type:"line",stack:"counts",areaStyle:{},data:[320,332,301,334,390,330,320]},{name:"X-5",type:"line",stack:"counts",label:{show:!0,position:"top"},areaStyle:{},data:[820,932,901,934,1290,1330,1320]}]}}};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=d({type:t,selectors:[["app-basic-loading"]],decls:5,vars:4,consts:[[1,"button-groups"],["nz-button","","nzType","default",3,"click"],["echarts","","theme","macarons",1,"demo-chart",3,"options","loading"],[3,"html","component"]],template:function(e,o){e&1&&(r(0,"div",0)(1,"button",1),h("click",function(){return o.isLoading=!o.isLoading}),u(2,"Toggle Loading"),s()(),m(3,"div",2)(4,"app-code-block",3)),e&2&&(p(3),c("options",o.options)("loading",o.isLoading),p(),c("html",o.html)("component",o.component))},dependencies:[y,v,f,b],encapsulation:2});let n=t;return n})();var rt=`<!-- DEMO START -->
<div echarts [options]="options" [merge]="updateOptions" class="demo-chart"></div>
<!-- DEMO END -->

<app-code-block [html]="html" [component]="component"> </app-code-block>
`;var st=`import { Component, OnInit, OnDestroy } from '@angular/core';
import type { EChartsCoreOption } from 'echarts/core';
// IGNORE START
import html from './basic-update.component.html';
import component from './basic-update.component.txt';
import { NgxEchartsDirective } from 'ngx-echarts';
import { CodeBlockComponent } from '../../../../shared/code-block/code-block.component';
// IGNORE END

@Component({
  selector: 'app-basic-update',
  templateUrl: './basic-update.component.html',
  styleUrls: ['./basic-update.component.scss'],
  imports: [NgxEchartsDirective, CodeBlockComponent],
})
export class BasicUpdateComponent implements OnInit, OnDestroy {
  // IGNORE START
  html = html;
  component = component;
  // IGNORE END
  options: EChartsCoreOption;
  updateOptions: EChartsCoreOption;

  private oneDay = 24 * 3600 * 1000;
  private now: Date;
  private value: number;
  private data: DataT[];
  private timer: any;

  constructor() {}

  ngOnInit(): void {
    // generate some random testing data:
    this.data = [];
    this.now = new Date(1997, 9, 3);
    this.value = Math.random() * 1000;

    for (let i = 0; i < 1000; i++) {
      this.data.push(this.randomData());
    }

    // initialize chart options:
    this.options = {
      title: {
        text: 'Dynamic Data + Time Axis',
      },
      tooltip: {
        trigger: 'axis',
        formatter: params => {
          params = params[0];
          const date = new Date(params.name);
          return (
            date.getDate() +
            '/' +
            (date.getMonth() + 1) +
            '/' +
            date.getFullYear() +
            ' : ' +
            params.value[1]
          );
        },
        axisPointer: {
          animation: false,
        },
      },
      xAxis: {
        type: 'time',
        splitLine: {
          show: false,
        },
      },
      yAxis: {
        type: 'value',
        boundaryGap: [0, '100%'],
        splitLine: {
          show: false,
        },
      },
      series: [
        {
          name: 'Mocking Data',
          type: 'line',
          showSymbol: false,
          data: this.data,
        },
      ],
    };

    // Mock dynamic data:
    this.timer = setInterval(() => {
      for (let i = 0; i < 5; i++) {
        this.data.shift();
        this.data.push(this.randomData());
      }

      // update series data:
      this.updateOptions = {
        series: [
          {
            data: this.data,
          },
        ],
      };
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }

  randomData(): DataT {
    this.now = new Date(this.now.getTime() + this.oneDay);
    this.value = this.value + Math.random() * 21 - 10;
    return {
      name: this.now.toString(),
      value: [
        [this.now.getFullYear(), this.now.getMonth() + 1, this.now.getDate()].join('/'),
        Math.round(this.value),
      ],
    };
  }
}

type DataT = {
  name: string;
  value: [string, number];
};
`;var M=(()=>{let t=class t{constructor(){this.html=rt,this.component=st,this.oneDay=24*3600*1e3}ngOnInit(){this.data=[],this.now=new Date(1997,9,3),this.value=Math.random()*1e3;for(let a=0;a<1e3;a++)this.data.push(this.randomData());this.options={title:{text:"Dynamic Data + Time Axis"},tooltip:{trigger:"axis",formatter:a=>{a=a[0];let e=new Date(a.name);return e.getDate()+"/"+(e.getMonth()+1)+"/"+e.getFullYear()+" : "+a.value[1]},axisPointer:{animation:!1}},xAxis:{type:"time",splitLine:{show:!1}},yAxis:{type:"value",boundaryGap:[0,"100%"],splitLine:{show:!1}},series:[{name:"Mocking Data",type:"line",showSymbol:!1,data:this.data}]},this.timer=setInterval(()=>{for(let a=0;a<5;a++)this.data.shift(),this.data.push(this.randomData());this.updateOptions={series:[{data:this.data}]}},1e3)}ngOnDestroy(){clearInterval(this.timer)}randomData(){return this.now=new Date(this.now.getTime()+this.oneDay),this.value=this.value+Math.random()*21-10,{name:this.now.toString(),value:[[this.now.getFullYear(),this.now.getMonth()+1,this.now.getDate()].join("/"),Math.round(this.value)]}}};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=d({type:t,selectors:[["app-basic-update"]],decls:2,vars:4,consts:[["echarts","",1,"demo-chart",3,"options","merge"],[3,"html","component"]],template:function(e,o){e&1&&m(0,"div",0)(1,"app-code-block",1),e&2&&(c("options",o.options)("merge",o.updateOptions),p(),c("html",o.html)("component",o.component))},dependencies:[f,b],encapsulation:2});let n=t;return n})();var ct=`<!-- DEMO START -->
<echarts [initOpts]="initOpts" [options]="options"></echarts>
<!-- DEMO END -->

<app-code-block [html]="html" [component]="component"> </app-code-block>
`;var mt=`import { Component } from '@angular/core';
import type { EChartsCoreOption } from 'echarts/core';
// IGNORE START
import html from './basic-init-opts.component.html';
import component from './basic-init-opts.component.txt';
import { NgxEchartsDirective } from 'ngx-echarts';
import { CodeBlockComponent } from '../../../../shared/code-block/code-block.component';
// IGNORE END

@Component({
  selector: 'app-basic-init-opts',
  templateUrl: './basic-init-opts.component.html',
  styleUrls: ['./basic-init-opts.component.scss'],
  imports: [NgxEchartsDirective, CodeBlockComponent],
})
export class BasicInitOptsComponent {
  // IGNORE START
  html = html;
  component = component;
  // IGNORE END
  initOpts = {
    renderer: 'svg',
    width: 300,
    height: 300,
  };

  options: EChartsCoreOption = {
    color: ['#3398DB'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisTick: {
          alignWithLabel: true,
        },
      },
    ],
    yAxis: [
      {
        type: 'value',
      },
    ],
    series: [
      {
        name: 'Counters',
        type: 'bar',
        barWidth: '60%',
        data: [10, 52, 200, 334, 390, 330, 220],
      },
    ],
  };
}
`;var N=(()=>{let t=class t{constructor(){this.html=ct,this.component=mt,this.initOpts={renderer:"svg",width:300,height:300},this.options={color:["#3398DB"],tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],axisTick:{alignWithLabel:!0}}],yAxis:[{type:"value"}],series:[{name:"Counters",type:"bar",barWidth:"60%",data:[10,52,200,334,390,330,220]}]}}};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=d({type:t,selectors:[["app-basic-init-opts"]],decls:2,vars:4,consts:[[3,"initOpts","options"],[3,"html","component"]],template:function(e,o){e&1&&m(0,"echarts",0)(1,"app-code-block",1),e&2&&(c("initOpts",o.initOpts)("options",o.options),p(),c("html",o.html)("component",o.component))},dependencies:[f,b],encapsulation:2});let n=t;return n})();var lt=`<!-- DEMO START -->
<div class="button-groups">
  <button (click)="callMethod('getWidth')" nz-button nzType="default">getWidth()</button>
  <button (click)="callMethod('getHeight')" nz-button nzType="default">getHeight()</button>
  <button (click)="callMethod('getDom')" nz-button nzType="default">getDom()</button>
  <button (click)="callMethod('getOption')" nz-button nzType="default">getOption()</button>
  <button (click)="callMethod('clear')" nz-button nzType="default">clear()</button>
</div>
<div echarts (chartInit)="onChartInit($event)" [options]="options" class="demo-chart"></div>
<!-- DEMO END -->

<app-code-block [html]="html" [component]="component"> </app-code-block>
`;var pt=`import { Component, inject } from '@angular/core';
import type { ECharts, EChartsCoreOption } from 'echarts/core';
import { NzMessageService } from 'ng-zorro-antd/message';
// IGNORE START
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { NzWaveDirective } from 'ng-zorro-antd/core/wave';
import { NgxEchartsDirective } from 'ngx-echarts';
import { CodeBlockComponent } from '../../../../shared/code-block/code-block.component';
import html from './basic-instance.component.html';
import component from './basic-instance.component.txt';
// IGNORE END

@Component({
  selector: 'app-basic-instance',
  templateUrl: './basic-instance.component.html',
  styleUrls: ['./basic-instance.component.scss'],
  imports: [NzButtonComponent, NzWaveDirective, NgxEchartsDirective, CodeBlockComponent],
})
export class BasicInstanceComponent {
  private msg = inject(NzMessageService);

  // IGNORE START
  html = html;
  component = component;
  // IGNORE END
  chartInstance: ECharts;
  options: EChartsCoreOption = {
    backgroundColor: '#2c343c',
    title: {
      text: 'Customized Pie',
      left: 'center',
      top: 20,
      textStyle: {
        color: '#ccc',
      },
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)',
    },
    visualMap: {
      show: false,
      min: 80,
      max: 600,
      inRange: {
        colorLightness: [0, 1],
      },
    },
    series: [
      {
        name: 'Counters',
        type: 'pie',
        radius: '55%',
        center: ['50%', '50%'],
        data: [
          { value: 335, name: 'C-1' },
          { value: 310, name: 'C-2' },
          { value: 274, name: 'C-3' },
          { value: 235, name: 'C-4' },
          { value: 400, name: 'C-5' },
        ].sort((a, b) => a.value - b.value),
        roseType: 'radius',
        label: {
          color: 'rgba(255, 255, 255, 0.3)',
        },
        labelLine: {
          lineStyle: {
            color: 'rgba(255, 255, 255, 0.3)',
          },
          smooth: 0.2,
          length: 10,
          length2: 20,
        },
        itemStyle: {
          color: '#c23531',
          shadowBlur: 200,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
        },

        animationType: 'scale',
        animationEasing: 'elasticOut',
        animationDelay: () => Math.random() * 200,
      },
    ],
  };

  onChartInit(e: ECharts) {
    this.chartInstance = e;
    console.log('on chart init:', e);
  }

  callMethod(type: string) {
    if (this.chartInstance) {
      const result = this.chartInstance[type]();
      this.msg.info(\`\${type}(): \${result || 'void'}\`);
      console.log(result);
    }
  }
}
`;var _=(()=>{let t=class t{constructor(){this.msg=I(U),this.html=lt,this.component=pt,this.options={backgroundColor:"#2c343c",title:{text:"Customized Pie",left:"center",top:20,textStyle:{color:"#ccc"}},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},visualMap:{show:!1,min:80,max:600,inRange:{colorLightness:[0,1]}},series:[{name:"Counters",type:"pie",radius:"55%",center:["50%","50%"],data:[{value:335,name:"C-1"},{value:310,name:"C-2"},{value:274,name:"C-3"},{value:235,name:"C-4"},{value:400,name:"C-5"}].sort((a,e)=>a.value-e.value),roseType:"radius",label:{color:"rgba(255, 255, 255, 0.3)"},labelLine:{lineStyle:{color:"rgba(255, 255, 255, 0.3)"},smooth:.2,length:10,length2:20},itemStyle:{color:"#c23531",shadowBlur:200,shadowColor:"rgba(0, 0, 0, 0.5)"},animationType:"scale",animationEasing:"elasticOut",animationDelay:()=>Math.random()*200}]}}onChartInit(a){this.chartInstance=a,console.log("on chart init:",a)}callMethod(a){if(this.chartInstance){let e=this.chartInstance[a]();this.msg.info(`${a}(): ${e||"void"}`),console.log(e)}}};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=d({type:t,selectors:[["app-basic-instance"]],decls:13,vars:3,consts:[[1,"button-groups"],["nz-button","","nzType","default",3,"click"],["echarts","",1,"demo-chart",3,"chartInit","options"],[3,"html","component"]],template:function(e,o){e&1&&(r(0,"div",0)(1,"button",1),h("click",function(){return o.callMethod("getWidth")}),u(2,"getWidth()"),s(),r(3,"button",1),h("click",function(){return o.callMethod("getHeight")}),u(4,"getHeight()"),s(),r(5,"button",1),h("click",function(){return o.callMethod("getDom")}),u(6,"getDom()"),s(),r(7,"button",1),h("click",function(){return o.callMethod("getOption")}),u(8,"getOption()"),s(),r(9,"button",1),h("click",function(){return o.callMethod("clear")}),u(10,"clear()"),s()(),r(11,"div",2),h("chartInit",function(l){return o.onChartInit(l)}),s(),m(12,"app-code-block",3)),e&2&&(p(11),c("options",o.options),p(),c("html",o.html)("component",o.component))},dependencies:[y,v,f,b],encapsulation:2});let n=t;return n})();function zt(n,t){n&1&&m(0,"app-basic-simple")}function Bt(n,t){n&1&&m(0,"app-basic-dataset")}function wt(n,t){n&1&&m(0,"app-basic-events")}function It(n,t){n&1&&m(0,"app-basic-themes")}function Rt(n,t){n&1&&m(0,"app-basic-loading")}function At(n,t){n&1&&m(0,"app-basic-update")}function Gt(n,t){n&1&&m(0,"app-basic-init-opts")}function Lt(n,t){n&1&&m(0,"app-basic-instance")}var z=(()=>{let t=class t{constructor(){}};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=d({type:t,selectors:[["app-basic"]],decls:25,vars:1,consts:[["nzTitle","Getting Started"],["nz-page-header-breadcrumb",""],["routerLink","/welcome"],[2,"margin-top","8px",3,"nzTabPosition"],["nzTitle","Simple Chart"],["nz-tab",""],["nzTitle","Dataset"],["nzTitle","Events"],["nzTitle","[theme]"],["nzTitle","[loading]"],["nzTitle","[merge]"],["nzTitle","[initOpts]"],["nzTitle","ECharts Instance"]],template:function(e,o){e&1&&(r(0,"nz-page-header",0)(1,"nz-breadcrumb",1)(2,"nz-breadcrumb-item")(3,"a",2),u(4,"Home"),s()(),r(5,"nz-breadcrumb-item"),u(6,"Getting Started"),s()()(),m(7,"nz-divider"),r(8,"nz-tabset",3)(9,"nz-tab",4),C(10,zt,1,0,"ng-template",5),s(),r(11,"nz-tab",6),C(12,Bt,1,0,"ng-template",5),s(),r(13,"nz-tab",7),C(14,wt,1,0,"ng-template",5),s(),r(15,"nz-tab",8),C(16,It,1,0,"ng-template",5),s(),r(17,"nz-tab",9),C(18,Rt,1,0,"ng-template",5),s(),r(19,"nz-tab",10),C(20,At,1,0,"ng-template",5),s(),r(21,"nz-tab",11),C(22,Gt,1,0,"ng-template",5),s(),r(23,"nz-tab",12),C(24,Lt,1,0,"ng-template",5),s()()),e&2&&(p(8),c("nzTabPosition","left"))},dependencies:[H,W,j,L,G,$,P,X,F,T,k,x,O,S,M,N,_],encapsulation:2});let n=t;return n})();var Wt=[{path:"",redirectTo:"basic-usage",pathMatch:"full"},{path:"basic-usage",component:z}],dt=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=D({type:t}),t.\u0275inj=E({imports:[B.forChild(Wt),B]});let n=t;return n})();var Ro=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=D({type:t}),t.\u0275inj=E({imports:[R,V,A,dt,z,T,x,O,S,M,N,_,k]});let n=t;return n})();export{Ro as DemoBasicModule};
