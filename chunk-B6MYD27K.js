import{De as S,Q,q as A,v as C,ze as H}from"./chunk-HMFG3BQH.js";import{a as x,c as O}from"./chunk-63UHJ6OY.js";import{$a as L,E as p,F as d,Fa as M,G as y,Ha as N,J as z,R as s,S as a,T as r,U as m,Va as R,Wa as k,Y as w,Za as B,ab as F,ba as l,fb as G,gb as Z,hb as W,ib as U,jb as j,lb as v,mb as V,qa as P,s as f}from"./chunk-GKCWJT7B.js";var X=`<!-- DEMO START -->
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
`;var Y=`import { Component, AfterViewInit } from '@angular/core';
import type { EChartsCoreOption } from 'echarts/core';
import { getInstanceByDom, connect } from 'echarts/core';
// IGNORE START
import html from './connect-charts.component.html';
import component from './connect-charts.component.txt';
import { NzRowDirective, NzColDirective } from 'ng-zorro-antd/grid';
import { NgxEchartsDirective } from 'ngx-echarts';
import { CodeBlockComponent } from '../../../../shared/code-block/code-block.component';
// IGNORE END

@Component({
  selector: 'app-connect-charts',
  templateUrl: './connect-charts.component.html',
  styleUrls: ['./connect-charts.component.scss'],
  imports: [NzRowDirective, NzColDirective, NgxEchartsDirective, CodeBlockComponent],
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
`;var D=(()=>{let t=class t{constructor(){this.html=X,this.component=Y,this.options={color:["#3398DB"],tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],axisTick:{alignWithLabel:!0}}],yAxis:[{type:"value"}],series:[{name:"Counters",type:"bar",barWidth:"60%",data:[10,52,200,334,390,330,220]}]}}ngAfterViewInit(){setTimeout(()=>{let o=document.getElementById("chart1"),n=document.getElementById("chart2"),i=S(o),g=S(n);H([i,g])})}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=d({type:t,selectors:[["app-connect-charts"]],decls:10,vars:4,consts:[["nz-row",""],["nz-col","","nzSpan","12"],["id","chart1","echarts","","theme","macarons",1,"demo-chart",3,"options"],["id","chart2","echarts","","theme","macarons",1,"demo-chart",3,"options"],[3,"html","component"]],template:function(n,i){n&1&&(a(0,"div",0)(1,"div",1)(2,"h5"),l(3,"id=chart1"),r(),m(4,"div",2),r(),a(5,"div",1)(6,"h5"),l(7,"id=chart2"),r(),m(8,"div",3),r()(),m(9,"app-code-block",4)),n&2&&(p(4),s("options",i.options),p(4),s("options",i.options),p(),s("html",i.html)("component",i.component))},dependencies:[L,F,x,v],encapsulation:2});let e=t;return e})();Q();var $=`<!-- DEMO START -->
<div echarts (chartInit)="onChartReady($event)" [options]="options" style="height: 600px"></div>
<!-- DEMO END -->

<app-code-block [html]="html" [component]="component"> </app-code-block>
`;var q=`import { Component, OnDestroy } from '@angular/core';
import type { ECharts, EChartsCoreOption } from 'echarts/core';
import * as util from 'zrender/lib/core/util';
// IGNORE START
import html from './line-draggable.component.html';
import component from './line-draggable.component.txt';
import { NgxEchartsDirective } from 'ngx-echarts';
import { CodeBlockComponent } from '../../../../shared/code-block/code-block.component';
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
  imports: [NgxEchartsDirective, CodeBlockComponent],
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
`;var J=20,u=[[15,0],[-50,10],[-56.5,20],[-46.5,30],[-22.1,40]],E=(()=>{let t=class t{constructor(){this.html=$,this.component=q,this.options={title:{text:"Try Dragging these Points"},tooltip:{triggerOn:"none",formatter:o=>"X: "+o.data[0].toFixed(2)+"<br>Y: "+o.data[1].toFixed(2)},grid:{},xAxis:{min:-100,max:80,type:"value",axisLine:{onZero:!1}},yAxis:{min:-30,max:60,type:"value",axisLine:{onZero:!1}},dataZoom:[{type:"slider",xAxisIndex:0,filterMode:"empty"},{type:"slider",yAxisIndex:0,filterMode:"empty"},{type:"inside",xAxisIndex:0,filterMode:"empty"},{type:"inside",yAxisIndex:0,filterMode:"empty"}],series:[{id:"a",type:"line",smooth:!0,symbolSize:J,data:u}]}}ngOnDestroy(){this.updatePosition&&window.removeEventListener("resize",this.updatePosition)}onChartReady(o){let n=function(c){u[c]=o.convertFromPixel({gridIndex:0},this.position),o.setOption({series:[{id:"a",data:u}]})},i=c=>{o.dispatchAction({type:"showTip",seriesIndex:0,dataIndex:c})},g=()=>{o.dispatchAction({type:"hideTip"})},h=()=>{o.setOption({graphic:A(u,c=>({position:o.convertToPixel({gridIndex:0},c)}))})};window.addEventListener("resize",h),o.on("dataZoom",h),this.updatePosition=h,setTimeout(()=>{o.setOption({graphic:A(u,(c,I)=>({type:"circle",position:o.convertToPixel({gridIndex:0},c),shape:{cx:0,cy:0,r:J/2},invisible:!0,draggable:!0,ondrag:C(n,I),onmousemove:C(i,I),onmouseout:C(g,I),z:100}))})},0)}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=d({type:t,selectors:[["app-line-draggable"]],decls:2,vars:3,consts:[["echarts","",2,"height","600px",3,"chartInit","options"],[3,"html","component"]],template:function(n,i){n&1&&(a(0,"div",0),w("chartInit",function(h){return i.onChartReady(h)}),r(),m(1,"app-code-block",1)),n&2&&(s("options",i.options),p(),s("html",i.html)("component",i.component))},dependencies:[x,v],encapsulation:2});let e=t;return e})();function nt(e,t){e&1&&m(0,"app-connect-charts")}function it(e,t){e&1&&m(0,"app-line-draggable")}var T=(()=>{let t=class t{constructor(){}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=d({type:t,selectors:[["app-advanced"]],decls:13,vars:1,consts:[["nzTitle","Advanced"],["nz-page-header-breadcrumb",""],["routerLink","/welcome"],[2,"margin-top","8px",3,"nzTabPosition"],["nzTitle","Connect Charts"],["nz-tab",""],["nzTitle","Draggable Chart"]],template:function(n,i){n&1&&(a(0,"nz-page-header",0)(1,"nz-breadcrumb",1)(2,"nz-breadcrumb-item")(3,"a",2),l(4,"Home"),r()(),a(5,"nz-breadcrumb-item"),l(6,"Advanced"),r()()(),m(7,"nz-divider"),a(8,"nz-tabs",3)(9,"nz-tab",4),z(10,nt,1,0,"ng-template",5),r(),a(11,"nz-tab",6),z(12,it,1,0,"ng-template",5),r()()),n&2&&(p(8),s("nzTabPosition","left"))},dependencies:[Z,k,G,R,M,B,j,U,W,D,E],encapsulation:2});let e=t;return e})();var rt=[{path:"",redirectTo:"advanced-usage",pathMatch:"full"},{path:"advanced-usage",component:T}],K=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=y({type:t}),t.\u0275inj=f({imports:[N.forChild(rt),N]});let e=t;return e})();var Wt=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=y({type:t}),t.\u0275inj=f({imports:[P,V,O,K,T,D,E]});let e=t;return e})();export{Wt as DemoAdvancedModule};
