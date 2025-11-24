import{S as K,Te as j,Xe as N,q as A,w as v}from"./chunk-LGQE2JRU.js";import{a as y,c as w}from"./chunk-2TMZMD3P.js";import{$a as L,Fa as P,G as c,H as p,Ha as z,I as f,L as I,R as m,S as r,T as i,U as a,Va as O,Wa as R,Y as M,Za as k,ab as B,ba as d,fb as F,gb as _,hb as G,ib as Z,jb as W,lb as x,mb as U,qa as S,s as g}from"./chunk-Z3IVGXVU.js";var V=`<!-- DEMO START -->
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
`;var H=`import { Component, AfterViewInit } from '@angular/core';
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
`;var b=(()=>{class t{constructor(){this.html=V,this.component=H,this.options={color:["#3398DB"],tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],axisTick:{alignWithLabel:!0}}],yAxis:[{type:"value"}],series:[{name:"Counters",type:"bar",barWidth:"60%",data:[10,52,200,334,390,330,220]}]}}ngAfterViewInit(){setTimeout(()=>{let e=document.getElementById("chart1"),o=document.getElementById("chart2"),n=N(e),u=N(o);j([n,u])})}static{this.\u0275fac=function(o){return new(o||t)}}static{this.\u0275cmp=p({type:t,selectors:[["app-connect-charts"]],decls:10,vars:4,consts:[["nz-row",""],["nz-col","","nzSpan","12"],["id","chart1","echarts","","theme","macarons",1,"demo-chart",3,"options"],["id","chart2","echarts","","theme","macarons",1,"demo-chart",3,"options"],[3,"html","component"]],template:function(o,n){o&1&&(r(0,"div",0)(1,"div",1)(2,"h5"),d(3,"id=chart1"),i(),a(4,"div",2),i(),r(5,"div",1)(6,"h5"),d(7,"id=chart2"),i(),a(8,"div",3),i()(),a(9,"app-code-block",4)),o&2&&(c(4),m("options",n.options),c(4),m("options",n.options),c(),m("html",n.html)("component",n.component))},dependencies:[L,B,y,x],encapsulation:2})}}return t})();K();var X=`<!-- DEMO START -->
<div echarts (chartInit)="onChartReady($event)" [options]="options" style="height: 600px"></div>
<!-- DEMO END -->

<app-code-block [html]="html" [component]="component"> </app-code-block>
`;var Y=`import { Component, OnDestroy } from '@angular/core';
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
`;var $=20,h=[[15,0],[-50,10],[-56.5,20],[-46.5,30],[-22.1,40]],D=(()=>{class t{constructor(){this.html=X,this.component=Y,this.options={title:{text:"Try Dragging these Points"},tooltip:{triggerOn:"none",formatter:e=>"X: "+e.data[0].toFixed(2)+"<br>Y: "+e.data[1].toFixed(2)},grid:{},xAxis:{min:-100,max:80,type:"value",axisLine:{onZero:!1}},yAxis:{min:-30,max:60,type:"value",axisLine:{onZero:!1}},dataZoom:[{type:"slider",xAxisIndex:0,filterMode:"empty"},{type:"slider",yAxisIndex:0,filterMode:"empty"},{type:"inside",xAxisIndex:0,filterMode:"empty"},{type:"inside",yAxisIndex:0,filterMode:"empty"}],series:[{id:"a",type:"line",smooth:!0,symbolSize:$,data:h}]}}ngOnDestroy(){this.updatePosition&&window.removeEventListener("resize",this.updatePosition)}onChartReady(e){let o=function(s){h[s]=e.convertFromPixel({gridIndex:0},this.position),e.setOption({series:[{id:"a",data:h}]})},n=s=>{e.dispatchAction({type:"showTip",seriesIndex:0,dataIndex:s})},u=()=>{e.dispatchAction({type:"hideTip"})},l=()=>{e.setOption({graphic:A(h,s=>({position:e.convertToPixel({gridIndex:0},s)}))})};window.addEventListener("resize",l),e.on("dataZoom",l),this.updatePosition=l,setTimeout(()=>{e.setOption({graphic:A(h,(s,T)=>({type:"circle",position:e.convertToPixel({gridIndex:0},s),shape:{cx:0,cy:0,r:$/2},invisible:!0,draggable:!0,ondrag:v(o,T),onmousemove:v(n,T),onmouseout:v(u,T),z:100}))})},0)}static{this.\u0275fac=function(o){return new(o||t)}}static{this.\u0275cmp=p({type:t,selectors:[["app-line-draggable"]],decls:2,vars:3,consts:[["echarts","",2,"height","600px",3,"chartInit","options"],[3,"html","component"]],template:function(o,n){o&1&&(r(0,"div",0),M("chartInit",function(l){return n.onChartReady(l)}),i(),a(1,"app-code-block",1)),o&2&&(m("options",n.options),c(),m("html",n.html)("component",n.component))},dependencies:[y,x],encapsulation:2})}}return t})();function nt(t,J){t&1&&a(0,"app-connect-charts")}function it(t,J){t&1&&a(0,"app-line-draggable")}var E=(()=>{class t{constructor(){}static{this.\u0275fac=function(o){return new(o||t)}}static{this.\u0275cmp=p({type:t,selectors:[["app-advanced"]],decls:13,vars:1,consts:[["nzTitle","Advanced"],["nz-page-header-breadcrumb",""],["routerLink","/welcome"],[2,"margin-top","8px",3,"nzTabPosition"],["nzTitle","Connect Charts"],["nz-tab",""],["nzTitle","Draggable Chart"]],template:function(o,n){o&1&&(r(0,"nz-page-header",0)(1,"nz-breadcrumb",1)(2,"nz-breadcrumb-item")(3,"a",2),d(4,"Home"),i()(),r(5,"nz-breadcrumb-item"),d(6,"Advanced"),i()()(),a(7,"nz-divider"),r(8,"nz-tabs",3)(9,"nz-tab",4),I(10,nt,1,0,"ng-template",5),i(),r(11,"nz-tab",6),I(12,it,1,0,"ng-template",5),i()()),o&2&&(c(8),m("nzTabPosition","left"))},dependencies:[_,R,F,O,P,k,W,Z,G,b,D],encapsulation:2})}}return t})();var rt=[{path:"",redirectTo:"advanced-usage",pathMatch:"full"},{path:"advanced-usage",component:E}],q=(()=>{class t{static{this.\u0275fac=function(o){return new(o||t)}}static{this.\u0275mod=f({type:t})}static{this.\u0275inj=g({imports:[z.forChild(rt),z]})}}return t})();var Zt=(()=>{class t{static{this.\u0275fac=function(o){return new(o||t)}}static{this.\u0275mod=f({type:t})}static{this.\u0275inj=g({imports:[S,U,w,q,E,b,D]})}}return t})();export{Zt as DemoAdvancedModule};
