import{De as z,Q,q as D,v,ze as W}from"./chunk-RPZ36CTV.js";import{a as x,c as Z}from"./chunk-IRYUUMMG.js";import{A as y,C as I,D as m,Da as R,E as a,Ea as L,F as r,Fa as B,G as s,Ga as F,Ha as k,Ia as G,J as A,Ka as b,La as U,M as l,_ as S,la as N,na as E,r as g,ra as P,sa as w,wa as O,x as p,xa as M,z as d}from"./chunk-LSKXCNT7.js";var j=`<!-- DEMO START -->
<div nz-row>
  <div nz-col nzSpan="12">
    <h5>id=chart1</h5>
    <div id="chart1" echarts [options]="options" theme="macarons" class="demo-chart"></div>
  </div>
  <div nz-col nzSpan="12">
    <h5>id=chart2</h5>
    <div id="chart2" echarts [options]="options" theme="macarons" class="demo-chart"></div>
  </div>
</div>
<!-- DEMO END -->

<app-code-block [html]="html" [component]="component"> </app-code-block>
`;var V=`import { Component, AfterViewInit } from '@angular/core';
import type { EChartsCoreOption } from 'echarts/core';
import { getInstanceByDom, connect } from 'echarts/core';
// IGNORE START
import html from './connect-charts.component.html';
import component from './connect-charts.component.txt';
// IGNORE END

@Component({
  selector: 'app-connect-charts',
  templateUrl: './connect-charts.component.html',
  styleUrls: ['./connect-charts.component.scss'],
  standalone: false,
})
export class ConnectChartsComponent implements AfterViewInit {
  // IGNORE START
  html = html;
  component = component;
  // IGNORE END
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
  constructor() {}

  ngAfterViewInit() {
    setTimeout(() => {
      const chartElement1 = document.getElementById('chart1');
      const chartElement2 = document.getElementById('chart2');
      const chart1 = getInstanceByDom(chartElement1);
      const chart2 = getInstanceByDom(chartElement2);
      connect([chart1, chart2]);
    });
  }
}
`;var H=(()=>{let t=class t{constructor(){this.html=j,this.component=V,this.options={color:["#3398DB"],tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],axisTick:{alignWithLabel:!0}}],yAxis:[{type:"value"}],series:[{name:"Counters",type:"bar",barWidth:"60%",data:[10,52,200,334,390,330,220]}]}}ngAfterViewInit(){setTimeout(()=>{let o=document.getElementById("chart1"),n=document.getElementById("chart2"),i=z(o),f=z(n);W([i,f])})}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=d({type:t,selectors:[["app-connect-charts"]],standalone:!1,decls:10,vars:4,consts:[["nz-row",""],["nz-col","","nzSpan","12"],["id","chart1","echarts","","theme","macarons",1,"demo-chart",3,"options"],["id","chart2","echarts","","theme","macarons",1,"demo-chart",3,"options"],[3,"html","component"]],template:function(n,i){n&1&&(a(0,"div",0)(1,"div",1)(2,"h5"),l(3,"id=chart1"),r(),s(4,"div",2),r(),a(5,"div",1)(6,"h5"),l(7,"id=chart2"),r(),s(8,"div",3),r()(),s(9,"app-code-block",4)),n&2&&(p(4),m("options",i.options),p(4),m("options",i.options),p(),m("html",i.html)("component",i.component))},dependencies:[w,P,b,x],encapsulation:2});let e=t;return e})();Q();var X=`<!-- DEMO START -->
<div echarts (chartInit)="onChartReady($event)" [options]="options" style="height: 600px"></div>
<!-- DEMO END -->

<app-code-block [html]="html" [component]="component"> </app-code-block>
`;var Y=`import { Component, OnDestroy } from '@angular/core';
import type { ECharts, EChartsCoreOption } from 'echarts/core';
import * as util from 'zrender/lib/core/util';
// IGNORE START
import html from './line-draggable.component.html';
import component from './line-draggable.component.txt';
// IGNORE END

const SymbolSize = 20;
const Data = [
  [15, 0],
  [-50, 10],
  [-56.5, 20],
  [-46.5, 30],
  [-22.1, 40],
];

@Component({
  selector: 'app-line-draggable',
  templateUrl: './line-draggable.component.html',
  styleUrls: ['./line-draggable.component.scss'],
  standalone: false,
})
export class LineDraggableComponent implements OnDestroy {
  // IGNORE START
  html = html;
  component = component;
  // IGNORE END
  updatePosition: () => void;
  options: EChartsCoreOption = {
    title: {
      text: 'Try Dragging these Points',
    },
    tooltip: {
      triggerOn: 'none',
      formatter: params =>
        'X: ' + params.data[0].toFixed(2) + '<br>Y: ' + params.data[1].toFixed(2),
    },
    grid: {},
    xAxis: {
      min: -100,
      max: 80,
      type: 'value',
      axisLine: { onZero: false },
    },
    yAxis: {
      min: -30,
      max: 60,
      type: 'value',
      axisLine: { onZero: false },
    },
    dataZoom: [
      {
        type: 'slider',
        xAxisIndex: 0,
        filterMode: 'empty',
      },
      {
        type: 'slider',
        yAxisIndex: 0,
        filterMode: 'empty',
      },
      {
        type: 'inside',
        xAxisIndex: 0,
        filterMode: 'empty',
      },
      {
        type: 'inside',
        yAxisIndex: 0,
        filterMode: 'empty',
      },
    ],
    series: [
      {
        id: 'a',
        type: 'line',
        smooth: true,
        symbolSize: SymbolSize,
        data: Data,
      },
    ],
  };
  constructor() {}

  ngOnDestroy() {
    if (this.updatePosition) {
      window.removeEventListener('resize', this.updatePosition);
    }
  }

  onChartReady(myChart: ECharts) {
    const onPointDragging = function (dataIndex) {
      Data[dataIndex] = myChart.convertFromPixel(
        { gridIndex: 0 },
        this.position as number[]
      ) as number[];

      // Update data
      myChart.setOption({
        series: [
          {
            id: 'a',
            data: Data,
          },
        ],
      });
    };

    const showTooltip = dataIndex => {
      myChart.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex,
      });
    };

    const hideTooltip = () => {
      myChart.dispatchAction({
        type: 'hideTip',
      });
    };

    const updatePosition = () => {
      myChart.setOption({
        graphic: util.map(Data, item => ({
          position: myChart.convertToPixel({ gridIndex: 0 }, item),
        })),
      });
    };

    window.addEventListener('resize', updatePosition);
    myChart.on('dataZoom', updatePosition);

    // save handler and remove it on destroy
    this.updatePosition = updatePosition;

    setTimeout(() => {
      myChart.setOption({
        graphic: util.map(Data, (item, dataIndex) => {
          return {
            type: 'circle',
            position: myChart.convertToPixel({ gridIndex: 0 }, item),
            shape: {
              cx: 0,
              cy: 0,
              r: SymbolSize / 2,
            },
            invisible: true,
            draggable: true,
            ondrag: util.curry<(dataIndex: any) => void, number>(onPointDragging, dataIndex),
            onmousemove: util.curry<(dataIndex: any) => void, number>(showTooltip, dataIndex),
            onmouseout: util.curry<(dataIndex: any) => void, number>(hideTooltip, dataIndex),
            z: 100,
          };
        }),
      });
    }, 0);
  }
}
`;var $=20,u=[[15,0],[-50,10],[-56.5,20],[-46.5,30],[-22.1,40]],q=(()=>{let t=class t{constructor(){this.html=X,this.component=Y,this.options={title:{text:"Try Dragging these Points"},tooltip:{triggerOn:"none",formatter:o=>"X: "+o.data[0].toFixed(2)+"<br>Y: "+o.data[1].toFixed(2)},grid:{},xAxis:{min:-100,max:80,type:"value",axisLine:{onZero:!1}},yAxis:{min:-30,max:60,type:"value",axisLine:{onZero:!1}},dataZoom:[{type:"slider",xAxisIndex:0,filterMode:"empty"},{type:"slider",yAxisIndex:0,filterMode:"empty"},{type:"inside",xAxisIndex:0,filterMode:"empty"},{type:"inside",yAxisIndex:0,filterMode:"empty"}],series:[{id:"a",type:"line",smooth:!0,symbolSize:$,data:u}]}}ngOnDestroy(){this.updatePosition&&window.removeEventListener("resize",this.updatePosition)}onChartReady(o){let n=function(c){u[c]=o.convertFromPixel({gridIndex:0},this.position),o.setOption({series:[{id:"a",data:u}]})},i=c=>{o.dispatchAction({type:"showTip",seriesIndex:0,dataIndex:c})},f=()=>{o.dispatchAction({type:"hideTip"})},h=()=>{o.setOption({graphic:D(u,c=>({position:o.convertToPixel({gridIndex:0},c)}))})};window.addEventListener("resize",h),o.on("dataZoom",h),this.updatePosition=h,setTimeout(()=>{o.setOption({graphic:D(u,(c,T)=>({type:"circle",position:o.convertToPixel({gridIndex:0},c),shape:{cx:0,cy:0,r:$/2},invisible:!0,draggable:!0,ondrag:v(n,T),onmousemove:v(i,T),onmouseout:v(f,T),z:100}))})},0)}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=d({type:t,selectors:[["app-line-draggable"]],standalone:!1,decls:2,vars:3,consts:[["echarts","",2,"height","600px",3,"chartInit","options"],[3,"html","component"]],template:function(n,i){n&1&&(a(0,"div",0),A("chartInit",function(h){return i.onChartReady(h)}),r(),s(1,"app-code-block",1)),n&2&&(m("options",i.options),p(),m("html",i.html)("component",i.component))},dependencies:[b,x],encapsulation:2});let e=t;return e})();function st(e,t){e&1&&s(0,"app-connect-charts")}function mt(e,t){e&1&&s(0,"app-line-draggable")}var J=(()=>{let t=class t{constructor(){}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=d({type:t,selectors:[["app-advanced"]],standalone:!1,decls:13,vars:1,consts:[["nzTitle","Advanced"],["nz-page-header-breadcrumb",""],["routerLink","/welcome"],[2,"margin-top","8px",3,"nzTabPosition"],["nzTitle","Connect Charts"],["nz-tab",""],["nzTitle","Draggable Chart"]],template:function(n,i){n&1&&(a(0,"nz-page-header",0)(1,"nz-breadcrumb",1)(2,"nz-breadcrumb-item")(3,"a",2),l(4,"Home"),r()(),a(5,"nz-breadcrumb-item"),l(6,"Advanced"),r()()(),s(7,"nz-divider"),a(8,"nz-tabset",3)(9,"nz-tab",4),I(10,st,1,0,"ng-template",5),r(),a(11,"nz-tab",6),I(12,mt,1,0,"ng-template",5),r()()),n&2&&(p(8),m("nzTabPosition","left"))},dependencies:[M,O,B,L,R,F,G,k,N,H,q],encapsulation:2});let e=t;return e})();var pt=[{path:"",redirectTo:"advanced-usage",pathMatch:"full"},{path:"advanced-usage",component:J}],K=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=y({type:t}),t.\u0275inj=g({imports:[E.forChild(pt),E]});let e=t;return e})();var Zt=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=y({type:t}),t.\u0275inj=g({imports:[S,U,Z,K]});let e=t;return e})();export{Zt as DemoAdvancedModule};
