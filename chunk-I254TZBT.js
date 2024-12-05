import{a as f,c as X,h as M,i as Ct}from"./chunk-IRYUUMMG.js";import{A as O,C as v,Ca as A,D as l,Da as G,E as r,Ea as L,F as s,Fa as U,G as c,Ga as W,Ha as F,Ia as P,J as h,Ka as b,La as $,M as u,_ as I,la as z,na as S,r as x,ta as C,ua as y,va as E,wa as B,x as p,xa as R,y as w,z as d}from"./chunk-LSKXCNT7.js";var H=`<!-- DEMO START -->
<div echarts [options]="options" class="demo-chart"></div>
<!-- DEMO END -->

<app-code-block [html]="html" [component]="component"> </app-code-block>
`;var V=`import { Component, OnInit } from '@angular/core';
import type { EChartsCoreOption } from 'echarts/core';
// IGNORE START
import html from './basic-simple.component.html';
import component from './basic-simple.component.txt';
// IGNORE END

@Component({
  selector: 'app-basic-simple',
  templateUrl: './basic-simple.component.html',
  styleUrls: ['./basic-simple.component.scss'],
  standalone: false,
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
`;var Z=(()=>{let t=class t{constructor(){this.html=H,this.component=V}ngOnInit(){let n=[],o=[],e=[];for(let i=0;i<100;i++)n.push("category"+i),o.push((Math.sin(i/5)*(i/5-10)+i/6)*5),e.push((Math.cos(i/5)*(i/5-10)+i/6)*5);this.options={legend:{data:["bar","bar2"],align:"left"},tooltip:{},xAxis:{data:n,silent:!1,splitLine:{show:!1}},yAxis:{},series:[{name:"bar",type:"bar",data:o,animationDelay:i=>i*10},{name:"bar2",type:"bar",data:e,animationDelay:i=>i*10+100}],animationEasing:"elasticOut",animationDelayUpdate:i=>i*5}}};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=d({type:t,selectors:[["app-basic-simple"]],standalone:!1,decls:2,vars:3,consts:[["echarts","",1,"demo-chart",3,"options"],[3,"html","component"]],template:function(o,e){o&1&&c(0,"div",0)(1,"app-code-block",1),o&2&&(l("options",e.options),p(),l("html",e.html)("component",e.component))},dependencies:[b,f],encapsulation:2});let a=t;return a})();Ct();var j=`<!-- DEMO START -->
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
`;var Y=`import { Component, OnInit } from '@angular/core';
import type { ECElementEvent, ECharts, EChartsCoreOption } from 'echarts/core';
import type { ECActionEvent } from 'echarts/types/src/util/types';
import LinearGradient from 'zrender/lib/graphic/LinearGradient';
// IGNORE START
import html from './basic-events.component.html';
import component from './basic-events.component.txt';
// IGNORE END

@Component({
  selector: 'app-basic-events',
  templateUrl: './basic-events.component.html',
  styleUrls: ['./basic-events.component.scss'],
  standalone: false,
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
`;var J=(()=>{let t=class t{constructor(){this.html=j,this.component=Y}ngOnInit(){let n=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T"],o=[220,182,191,234,290,330,310,123,442,321,90,149,210,122,133,334,198,123,125,220],e=500,i=[];for(let m=0;m<o.length;m++)i.push(e);this.options={title:{text:"Check Console for Events"},xAxis:{data:n,axisLabel:{inside:!0,color:"#fff"},axisTick:{show:!1},axisLine:{show:!1},z:10},yAxis:{axisLine:{show:!1},axisTick:{show:!1},axisLabel:{color:"#999"}},dataZoom:[{type:"inside"}],series:[{type:"bar",itemStyle:{color:"rgba(0,0,0,0.05)"},barGap:"-100%",barCategoryGap:"40%",data:i,animation:!1},{type:"bar",itemStyle:{color:new M(0,0,0,1,[{offset:0,color:"#83bff6"},{offset:.5,color:"#188df0"},{offset:1,color:"#188df0"}])},emphasis:{itemStyle:{color:new M(0,0,0,1,[{offset:0,color:"#2378f7"},{offset:.7,color:"#2378f7"},{offset:1,color:"#83bff6"}])}},data:o}]}}onChartEvent(n,o){console.log("chart event:",o,n)}};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=d({type:t,selectors:[["app-basic-events"]],standalone:!1,decls:2,vars:3,consts:[["echarts","",1,"demo-chart",3,"chartInit","chartClick","chartDblClick","chartMouseDown","chartMouseUp","chartMouseOver","chartMouseOut","chartGlobalOut","chartContextMenu","chartDataZoom","options"],[3,"html","component"]],template:function(o,e){o&1&&(r(0,"div",0),h("chartInit",function(m){return e.onChartEvent(m,"chartInit")})("chartClick",function(m){return e.onChartEvent(m,"chartClick")})("chartDblClick",function(m){return e.onChartEvent(m,"chartDblClick")})("chartMouseDown",function(m){return e.onChartEvent(m,"chartMouseDown")})("chartMouseUp",function(m){return e.onChartEvent(m,"chartMouseUp")})("chartMouseOver",function(m){return e.onChartEvent(m,"chartMouseOver")})("chartMouseOut",function(m){return e.onChartEvent(m,"chartMouseOut")})("chartGlobalOut",function(m){return e.onChartEvent(m,"chartGlobalOut")})("chartContextMenu",function(m){return e.onChartEvent(m,"chartContextMenu")})("chartDataZoom",function(m){return e.onChartEvent(m,"chartDataZoom")}),s(),c(1,"app-code-block",1)),o&2&&(l("options",e.options),p(),l("html",e.html)("component",e.component))},dependencies:[b,f],encapsulation:2});let a=t;return a})();var K={color:["#b21ab4","#6f0099","#2a2073","#0b5ea8","#17aecc","#b3b3ff","#eb99ff","#fae6ff","#e6f2ff","#eeeeee"],title:{fontWeight:"normal",color:"#00aecd"},visualMap:{color:["#00aecd","#a2d4e6"]},toolbox:{color:["#00aecd","#00aecd","#00aecd","#00aecd"]},tooltip:{backgroundColor:"rgba(0,0,0,0.5)",axisPointer:{type:"line",lineStyle:{color:"#00aecd",type:"dashed"},crossStyle:{color:"#00aecd"},shadowStyle:{color:"rgba(200,200,200,0.3)"}}},dataZoom:{dataBackgroundColor:"#eee",fillerColor:"rgba(144,197,237,0.2)",handleColor:"#00aecd"},timeline:{lineStyle:{color:"#00aecd"},controlStyle:{color:"#00aecd",borderColor:"00aecd"}},candlestick:{itemStyle:{color:"#00aecd",color0:"#a2d4e6"},lineStyle:{width:1,color:"#00aecd",color0:"#a2d4e6"},areaStyle:{color:"#b21ab4",color0:"#0b5ea8"}},chord:{padding:4,itemStyle:{color:"#b21ab4",borderWidth:1,borderColor:"rgba(128, 128, 128, 0.5)"},lineStyle:{color:"rgba(128, 128, 128, 0.5)"},areaStyle:{color:"#0b5ea8"}},graph:{itemStyle:{color:"#b21ab4"},linkStyle:{color:"#2a2073"}},map:{itemStyle:{color:"#c12e34"},areaStyle:{color:"#ddd"},label:{color:"#c12e34"}},gauge:{axisLine:{lineStyle:{color:[[.2,"#dddddd"],[.8,"#00aecd"],[1,"#f5ccff"]],width:8}}}};var Q=`<!-- DEMO START -->
<div class="button-groups">
  <button (click)="theme = undefined" nz-button nzType="default">default</button>
  <button (click)="theme = 'dark'" nz-button nzType="default">dark</button>
  <button (click)="theme = 'macarons'" nz-button nzType="default">macarons(theme file)</button>
  <button (click)="theme = coolTheme" nz-button nzType="default">cool(theme object)</button>
</div>
<div echarts [options]="options" [theme]="theme" class="demo-chart"></div>
<!-- DEMO END -->

<app-code-block [html]="html" [component]="component" [data]="data"> </app-code-block>
`;var q=`import { Component } from '@angular/core';
import type { EChartsCoreOption } from 'echarts/core';
import { ThemeOption } from 'ngx-echarts';
import { CoolTheme } from './cool-theme';
// IGNORE START
import html from './basic-themes.component.html';
import component from './basic-themes.component.txt';
import data from './cool-theme.txt';
// IGNORE END

@Component({
  selector: 'app-basic-themes',
  templateUrl: './basic-themes.component.html',
  styleUrls: ['./basic-themes.component.scss'],
  standalone: false,
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
`;var tt=`export const CoolTheme = {
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
`;var et=(()=>{let t=class t{constructor(){this.html=Q,this.component=q,this.data=tt,this.coolTheme=K,this.options={title:{left:"50%",text:"Nightingale Rose Diagram",subtext:"Mocking Data",textAlign:"center"},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{align:"auto",bottom:10,data:["rose1","rose2","rose3","rose4","rose5","rose6","rose7","rose8"]},calculable:!0,series:[{name:"area",type:"pie",radius:[30,110],roseType:"area",data:[{value:10,name:"rose1"},{value:5,name:"rose2"},{value:15,name:"rose3"},{value:25,name:"rose4"},{value:20,name:"rose5"},{value:35,name:"rose6"},{value:30,name:"rose7"},{value:40,name:"rose8"}]}]}}};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=d({type:t,selectors:[["app-basic-themes"]],standalone:!1,decls:11,vars:5,consts:[[1,"button-groups"],["nz-button","","nzType","default",3,"click"],["echarts","",1,"demo-chart",3,"options","theme"],[3,"html","component","data"]],template:function(o,e){o&1&&(r(0,"div",0)(1,"button",1),h("click",function(){return e.theme=void 0}),u(2,"default"),s(),r(3,"button",1),h("click",function(){return e.theme="dark"}),u(4,"dark"),s(),r(5,"button",1),h("click",function(){return e.theme="macarons"}),u(6,"macarons(theme file)"),s(),r(7,"button",1),h("click",function(){return e.theme=e.coolTheme}),u(8,"cool(theme object)"),s()(),c(9,"div",2)(10,"app-code-block",3)),o&2&&(p(9),l("options",e.options)("theme",e.theme),p(),l("html",e.html)("component",e.component)("data",e.data))},dependencies:[E,C,y,b,f],encapsulation:2});let a=t;return a})();var ot=`<!-- DEMO START -->
<div class="button-groups">
  <button (click)="isLoading = !isLoading" nz-button nzType="default">Toggle Loading</button>
</div>
<div echarts [options]="options" [loading]="isLoading" theme="macarons" class="demo-chart"></div>
<!-- DEMO END -->

<app-code-block [html]="html" [component]="component"> </app-code-block>
`;var at=`import { Component } from '@angular/core';
import type { EChartsCoreOption } from 'echarts/core';
// IGNORE START
import html from './basic-loading.component.html';
import component from './basic-loading.component.txt';
// IGNORE END

@Component({
  selector: 'app-basic-loading',
  templateUrl: './basic-loading.component.html',
  styleUrls: ['./basic-loading.component.scss'],
  standalone: false,
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
`;var nt=(()=>{let t=class t{constructor(){this.html=ot,this.component=at,this.isLoading=!0,this.options={tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},legend:{data:["X-1","X-2","X-3","X-4","X-5"]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",boundaryGap:!1,data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]}],yAxis:[{type:"value"}],series:[{name:"X-1",type:"line",stack:"counts",areaStyle:{},data:[120,132,101,134,90,230,210]},{name:"X-2",type:"line",stack:"counts",areaStyle:{},data:[220,182,191,234,290,330,310]},{name:"X-3",type:"line",stack:"counts",areaStyle:{},data:[150,232,201,154,190,330,410]},{name:"X-4",type:"line",stack:"counts",areaStyle:{},data:[320,332,301,334,390,330,320]},{name:"X-5",type:"line",stack:"counts",label:{show:!0,position:"top"},areaStyle:{},data:[820,932,901,934,1290,1330,1320]}]}}};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=d({type:t,selectors:[["app-basic-loading"]],standalone:!1,decls:5,vars:4,consts:[[1,"button-groups"],["nz-button","","nzType","default",3,"click"],["echarts","","theme","macarons",1,"demo-chart",3,"options","loading"],[3,"html","component"]],template:function(o,e){o&1&&(r(0,"div",0)(1,"button",1),h("click",function(){return e.isLoading=!e.isLoading}),u(2,"Toggle Loading"),s()(),c(3,"div",2)(4,"app-code-block",3)),o&2&&(p(3),l("options",e.options)("loading",e.isLoading),p(),l("html",e.html)("component",e.component))},dependencies:[E,C,y,b,f],encapsulation:2});let a=t;return a})();var it=`<!-- DEMO START -->
<div echarts [options]="options" [merge]="updateOptions" class="demo-chart"></div>
<!-- DEMO END -->

<app-code-block [html]="html" [component]="component"> </app-code-block>
`;var rt=`import { Component, OnInit, OnDestroy } from '@angular/core';
import type { EChartsCoreOption } from 'echarts/core';
// IGNORE START
import html from './basic-update.component.html';
import component from './basic-update.component.txt';
// IGNORE END

@Component({
  selector: 'app-basic-update',
  templateUrl: './basic-update.component.html',
  styleUrls: ['./basic-update.component.scss'],
  standalone: false,
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
`;var st=(()=>{let t=class t{constructor(){this.html=it,this.component=rt,this.oneDay=24*3600*1e3}ngOnInit(){this.data=[],this.now=new Date(1997,9,3),this.value=Math.random()*1e3;for(let n=0;n<1e3;n++)this.data.push(this.randomData());this.options={title:{text:"Dynamic Data + Time Axis"},tooltip:{trigger:"axis",formatter:n=>{n=n[0];let o=new Date(n.name);return o.getDate()+"/"+(o.getMonth()+1)+"/"+o.getFullYear()+" : "+n.value[1]},axisPointer:{animation:!1}},xAxis:{type:"time",splitLine:{show:!1}},yAxis:{type:"value",boundaryGap:[0,"100%"],splitLine:{show:!1}},series:[{name:"Mocking Data",type:"line",showSymbol:!1,data:this.data}]},this.timer=setInterval(()=>{for(let n=0;n<5;n++)this.data.shift(),this.data.push(this.randomData());this.updateOptions={series:[{data:this.data}]}},1e3)}ngOnDestroy(){clearInterval(this.timer)}randomData(){return this.now=new Date(this.now.getTime()+this.oneDay),this.value=this.value+Math.random()*21-10,{name:this.now.toString(),value:[[this.now.getFullYear(),this.now.getMonth()+1,this.now.getDate()].join("/"),Math.round(this.value)]}}};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=d({type:t,selectors:[["app-basic-update"]],standalone:!1,decls:2,vars:4,consts:[["echarts","",1,"demo-chart",3,"options","merge"],[3,"html","component"]],template:function(o,e){o&1&&c(0,"div",0)(1,"app-code-block",1),o&2&&(l("options",e.options)("merge",e.updateOptions),p(),l("html",e.html)("component",e.component))},dependencies:[b,f],encapsulation:2});let a=t;return a})();var lt=`<!-- DEMO START -->
<echarts [initOpts]="initOpts" [options]="options"></echarts>
<!-- DEMO END -->

<app-code-block [html]="html" [component]="component"> </app-code-block>
`;var ct=`import { Component } from '@angular/core';
import type { EChartsCoreOption } from 'echarts/core';
// IGNORE START
import html from './basic-init-opts.component.html';
import component from './basic-init-opts.component.txt';
// IGNORE END

@Component({
  selector: 'app-basic-init-opts',
  templateUrl: './basic-init-opts.component.html',
  styleUrls: ['./basic-init-opts.component.scss'],
  standalone: false,
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
`;var mt=(()=>{let t=class t{constructor(){this.html=lt,this.component=ct,this.initOpts={renderer:"svg",width:300,height:300},this.options={color:["#3398DB"],tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],axisTick:{alignWithLabel:!0}}],yAxis:[{type:"value"}],series:[{name:"Counters",type:"bar",barWidth:"60%",data:[10,52,200,334,390,330,220]}]}}};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=d({type:t,selectors:[["app-basic-init-opts"]],standalone:!1,decls:2,vars:4,consts:[[3,"initOpts","options"],[3,"html","component"]],template:function(o,e){o&1&&c(0,"echarts",0)(1,"app-code-block",1),o&2&&(l("initOpts",e.initOpts)("options",e.options),p(),l("html",e.html)("component",e.component))},dependencies:[b,f],encapsulation:2});let a=t;return a})();var pt=`<!-- DEMO START -->
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
`;var dt=`import { Component } from '@angular/core';
import type { ECharts, EChartsCoreOption } from 'echarts/core';
import { NzMessageService } from 'ng-zorro-antd/message';
// IGNORE START
import html from './basic-instance.component.html';
import component from './basic-instance.component.txt';
// IGNORE END

@Component({
  selector: 'app-basic-instance',
  templateUrl: './basic-instance.component.html',
  styleUrls: ['./basic-instance.component.scss'],
  standalone: false,
})
export class BasicInstanceComponent {
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
  constructor(private msg: NzMessageService) {}

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
`;var ht=(()=>{let t=class t{constructor(n){this.msg=n,this.html=pt,this.component=dt,this.options={backgroundColor:"#2c343c",title:{text:"Customized Pie",left:"center",top:20,textStyle:{color:"#ccc"}},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},visualMap:{show:!1,min:80,max:600,inRange:{colorLightness:[0,1]}},series:[{name:"Counters",type:"pie",radius:"55%",center:["50%","50%"],data:[{value:335,name:"C-1"},{value:310,name:"C-2"},{value:274,name:"C-3"},{value:235,name:"C-4"},{value:400,name:"C-5"}].sort((o,e)=>o.value-e.value),roseType:"radius",label:{color:"rgba(255, 255, 255, 0.3)"},labelLine:{lineStyle:{color:"rgba(255, 255, 255, 0.3)"},smooth:.2,length:10,length2:20},itemStyle:{color:"#c23531",shadowBlur:200,shadowColor:"rgba(0, 0, 0, 0.5)"},animationType:"scale",animationEasing:"elasticOut",animationDelay:()=>Math.random()*200}]}}onChartInit(n){this.chartInstance=n,console.log("on chart init:",n)}callMethod(n){if(this.chartInstance){let o=this.chartInstance[n]();this.msg.info(`${n}(): ${o||"void"}`),console.log(o)}}};t.\u0275fac=function(o){return new(o||t)(w(A))},t.\u0275cmp=d({type:t,selectors:[["app-basic-instance"]],standalone:!1,decls:13,vars:3,consts:[[1,"button-groups"],["nz-button","","nzType","default",3,"click"],["echarts","",1,"demo-chart",3,"chartInit","options"],[3,"html","component"]],template:function(o,e){o&1&&(r(0,"div",0)(1,"button",1),h("click",function(){return e.callMethod("getWidth")}),u(2,"getWidth()"),s(),r(3,"button",1),h("click",function(){return e.callMethod("getHeight")}),u(4,"getHeight()"),s(),r(5,"button",1),h("click",function(){return e.callMethod("getDom")}),u(6,"getDom()"),s(),r(7,"button",1),h("click",function(){return e.callMethod("getOption")}),u(8,"getOption()"),s(),r(9,"button",1),h("click",function(){return e.callMethod("clear")}),u(10,"clear()"),s()(),r(11,"div",2),h("chartInit",function(m){return e.onChartInit(m)}),s(),c(12,"app-code-block",3)),o&2&&(p(11),l("options",e.options),p(),l("html",e.html)("component",e.component))},dependencies:[E,C,y,b,f],encapsulation:2});let a=t;return a})();var ut=`<!-- DEMO START -->
<div class="button-groups">
  <button (click)="RandomDataset()" nz-button nzType="default">Random Dataset</button>
</div>
<div echarts [options]="options" [merge]="mergeOptions" class="demo-chart"></div>
<!-- DEMO END -->

<app-code-block [html]="html" [component]="component"> </app-code-block>
`;var ft=`import { Component } from '@angular/core';
import type { EChartsCoreOption } from 'echarts/core';
// IGNORE START
import html from './basic-dataset.component.html';
import component from './basic-dataset.component.txt';
// IGNORE END

@Component({
  selector: 'app-basic-dataset',
  templateUrl: './basic-dataset.component.html',
  styleUrls: ['./basic-dataset.component.scss'],
  standalone: false,
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
`;var bt=(()=>{let t=class t{constructor(){this.html=ut,this.component=ft,this.options={legend:{},tooltip:{},dataset:{source:[["product","2015","2016","2017"],["Matcha Latte",43.3,85.8,93.7],["Milk Tea",83.1,73.4,55.1],["Cheese Cocoa",86.4,65.2,82.5],["Walnut Brownie",72.4,53.9,39.1]]},xAxis:{type:"category"},yAxis:{},series:[{type:"bar"},{type:"bar"},{type:"bar"}]}}RandomDataset(){this.mergeOptions={dataset:{source:[["product","2015","2016","2017"],["Matcha Latte",...this.getRandomValues()],["Milk Tea",...this.getRandomValues()],["Cheese Cocoa",...this.getRandomValues()],["Walnut Brownie",...this.getRandomValues()]]}}}getRandomValues(){let n=[];for(let o=0;o<3;o++)n.push(Math.random()*100);return n}};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=d({type:t,selectors:[["app-basic-dataset"]],standalone:!1,decls:5,vars:4,consts:[[1,"button-groups"],["nz-button","","nzType","default",3,"click"],["echarts","",1,"demo-chart",3,"options","merge"],[3,"html","component"]],template:function(o,e){o&1&&(r(0,"div",0)(1,"button",1),h("click",function(){return e.RandomDataset()}),u(2,"Random Dataset"),s()(),c(3,"div",2)(4,"app-code-block",3)),o&2&&(p(3),l("options",e.options)("merge",e.mergeOptions),p(),l("html",e.html)("component",e.component))},dependencies:[E,C,y,b,f],encapsulation:2});let a=t;return a})();function Ht(a,t){a&1&&c(0,"app-basic-simple")}function Vt(a,t){a&1&&c(0,"app-basic-dataset")}function Zt(a,t){a&1&&c(0,"app-basic-events")}function jt(a,t){a&1&&c(0,"app-basic-themes")}function Yt(a,t){a&1&&c(0,"app-basic-loading")}function Jt(a,t){a&1&&c(0,"app-basic-update")}function Kt(a,t){a&1&&c(0,"app-basic-init-opts")}function Qt(a,t){a&1&&c(0,"app-basic-instance")}var gt=(()=>{let t=class t{constructor(){}};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=d({type:t,selectors:[["app-basic"]],standalone:!1,decls:25,vars:1,consts:[["nzTitle","Getting Started"],["nz-page-header-breadcrumb",""],["routerLink","/welcome"],[2,"margin-top","8px",3,"nzTabPosition"],["nzTitle","Simple Chart"],["nz-tab",""],["nzTitle","Dataset"],["nzTitle","Events"],["nzTitle","[theme]"],["nzTitle","[loading]"],["nzTitle","[merge]"],["nzTitle","[initOpts]"],["nzTitle","ECharts Instance"]],template:function(o,e){o&1&&(r(0,"nz-page-header",0)(1,"nz-breadcrumb",1)(2,"nz-breadcrumb-item")(3,"a",2),u(4,"Home"),s()(),r(5,"nz-breadcrumb-item"),u(6,"Getting Started"),s()()(),c(7,"nz-divider"),r(8,"nz-tabset",3)(9,"nz-tab",4),v(10,Ht,1,0,"ng-template",5),s(),r(11,"nz-tab",6),v(12,Vt,1,0,"ng-template",5),s(),r(13,"nz-tab",7),v(14,Zt,1,0,"ng-template",5),s(),r(15,"nz-tab",8),v(16,jt,1,0,"ng-template",5),s(),r(17,"nz-tab",9),v(18,Yt,1,0,"ng-template",5),s(),r(19,"nz-tab",10),v(20,Jt,1,0,"ng-template",5),s(),r(21,"nz-tab",11),v(22,Kt,1,0,"ng-template",5),s(),r(23,"nz-tab",12),v(24,Qt,1,0,"ng-template",5),s()()),o&2&&(p(8),l("nzTabPosition","left"))},dependencies:[R,B,U,L,G,W,P,F,z,Z,J,et,nt,st,mt,ht,bt],encapsulation:2});let a=t;return a})();var qt=[{path:"",redirectTo:"basic-usage",pathMatch:"full"},{path:"basic-usage",component:gt}],vt=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=O({type:t}),t.\u0275inj=x({imports:[S.forChild(qt),S]});let a=t;return a})();var bo=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=O({type:t}),t.\u0275inj=x({imports:[I,$,X,vt]});let a=t;return a})();export{bo as DemoBasicModule};
