import{S as K,Te as W,Xe as A,q as P,w as C}from"./chunk-22FUK7ML.js";import{a as b}from"./chunk-GTFRDNZ3.js";import{a as v,c as V,p as $}from"./chunk-LHKDU3S5.js";import{Aa as B,Ba as z,Ca as m,Da as c,Ea as i,Fa as s,Ja as F,Kb as O,La as y,M as x,Na as _,P as w,S,T as k,Wa as G,Ya as g,_ as N,_a as Z,fa as r,oa as l,pa as f,qb as j,xa as R,ya as L}from"./chunk-G2O2MX4B.js";var U=`<!-- DEMO START -->
<div class="charts-grid">
  <div>
    <h5>id=chart1</h5>
    <div id="chart1" echarts [options]="options" theme="macarons" class="demo-chart"></div>
  </div>
  <div>
    <h5>id=chart2</h5>
    <div id="chart2" echarts [options]="options" theme="macarons" class="demo-chart"></div>
  </div>
</div>
<!-- DEMO END -->

<app-code-block [html]="html" [component]="component"> </app-code-block>
`;var X=`import { Component, AfterViewInit } from '@angular/core';
import type { EChartsCoreOption } from 'echarts/core';
import { getInstanceByDom, connect } from 'echarts/core';
// IGNORE START
import html from './connect-charts.component.html';
import component from './connect-charts.component.txt';
import { NgxEchartsDirective } from 'ngx-echarts';
import { CodeBlockComponent } from '../../../../shared/code-block/code-block.component';
// IGNORE END

@Component({
  selector: 'app-connect-charts',
  templateUrl: './connect-charts.component.html',
  styleUrls: ['./connect-charts.component.scss'],
  imports: [NgxEchartsDirective, CodeBlockComponent],
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
`;var D=(()=>{class e{constructor(){this.html=U,this.component=X,this.options={color:["#3398DB"],tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],axisTick:{alignWithLabel:!0}}],yAxis:[{type:"value"}],series:[{name:"Counters",type:"bar",barWidth:"60%",data:[10,52,200,334,390,330,220]}]}}ngAfterViewInit(){setTimeout(()=>{let t=document.getElementById("chart1"),o=document.getElementById("chart2"),n=A(t),a=A(o);W([n,a])})}static{this.\u0275fac=function(o){return new(o||e)}}static{this.\u0275cmp=l({type:e,selectors:[["app-connect-charts"]],decls:10,vars:4,consts:[[1,"charts-grid"],["id","chart1","echarts","","theme","macarons",1,"demo-chart",3,"options"],["id","chart2","echarts","","theme","macarons",1,"demo-chart",3,"options"],[3,"html","component"]],template:function(o,n){o&1&&(c(0,"div",0)(1,"div")(2,"h5"),g(3,"id=chart1"),i(),s(4,"div",1),i(),c(5,"div")(6,"h5"),g(7,"id=chart2"),i(),s(8,"div",2),i()(),s(9,"app-code-block",3)),o&2&&(r(4),m("options",n.options),r(4),m("options",n.options),r(),m("html",n.html)("component",n.component))},dependencies:[v,b],styles:[".charts-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:16px}@media(max-width:768px){.charts-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}}"]})}}return e})();K();var Y=`<!-- DEMO START -->
<div
  echarts
  (chartInit)="onChartReady($event)"
  [options]="options"
  [theme]="themeService.echartsTheme()"
  style="height: 600px"></div>
<!-- DEMO END -->

<app-code-block [html]="html" [component]="component"> </app-code-block>
`;var q=`import { Component, OnDestroy, inject } from '@angular/core';
import type { ECharts, EChartsCoreOption } from 'echarts/core';
import * as util from 'zrender/lib/core/util';
// IGNORE START
import html from './line-draggable.component.html';
import component from './line-draggable.component.txt';
import { NgxEchartsDirective } from 'ngx-echarts';
import { CodeBlockComponent } from '../../../../shared/code-block/code-block.component';
import { ThemeService } from '../../../../services/theme.service';
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
  readonly themeService = inject(ThemeService);
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
`;var H=20,u=[[15,0],[-50,10],[-56.5,20],[-46.5,30],[-22.1,40]],E=(()=>{class e{constructor(){this.html=Y,this.component=q,this.themeService=w($),this.options={title:{text:"Try Dragging these Points"},tooltip:{triggerOn:"none",formatter:t=>"X: "+t.data[0].toFixed(2)+"<br>Y: "+t.data[1].toFixed(2)},grid:{},xAxis:{min:-100,max:80,type:"value",axisLine:{onZero:!1}},yAxis:{min:-30,max:60,type:"value",axisLine:{onZero:!1}},dataZoom:[{type:"slider",xAxisIndex:0,filterMode:"empty"},{type:"slider",yAxisIndex:0,filterMode:"empty"},{type:"inside",xAxisIndex:0,filterMode:"empty"},{type:"inside",yAxisIndex:0,filterMode:"empty"}],series:[{id:"a",type:"line",smooth:!0,symbolSize:H,data:u}]}}ngOnDestroy(){this.updatePosition&&window.removeEventListener("resize",this.updatePosition)}onChartReady(t){let o=function(d){u[d]=t.convertFromPixel({gridIndex:0},this.position),t.setOption({series:[{id:"a",data:u}]})},n=d=>{t.dispatchAction({type:"showTip",seriesIndex:0,dataIndex:d})},a=()=>{t.dispatchAction({type:"hideTip"})},h=()=>{t.setOption({graphic:P(u,d=>({position:t.convertToPixel({gridIndex:0},d)}))})};window.addEventListener("resize",h),t.on("dataZoom",h),this.updatePosition=h,setTimeout(()=>{t.setOption({graphic:P(u,(d,M)=>({type:"circle",position:t.convertToPixel({gridIndex:0},d),shape:{cx:0,cy:0,r:H/2},invisible:!0,draggable:!0,ondrag:C(o,M),onmousemove:C(n,M),onmouseout:C(a,M),z:100}))})},0)}static{this.\u0275fac=function(o){return new(o||e)}}static{this.\u0275cmp=l({type:e,selectors:[["app-line-draggable"]],decls:2,vars:4,consts:[["echarts","",2,"height","600px",3,"chartInit","options","theme"],[3,"html","component"]],template:function(o,n){o&1&&(c(0,"div",0),y("chartInit",function(h){return n.onChartReady(h)}),i(),s(1,"app-code-block",1)),o&2&&(m("options",n.options)("theme",n.themeService.echartsTheme()),r(),m("html",n.html)("component",n.component))},dependencies:[v,b],encapsulation:2})}}return e})();var ne=(e,p)=>p.label;function ie(e,p){if(e&1){let t=F();c(0,"button",4),y("click",function(){let n=S(t).$index,a=_();return k(a.selectedIndex.set(n))}),g(1),i()}if(e&2){let t=p.$implicit,o=p.$index,n=_();G("active",n.selectedIndex()===o),r(),Z(" ",t.label," ")}}function re(e,p){e&1&&s(0,"app-connect-charts")}function ae(e,p){e&1&&s(0,"app-line-draggable")}var T=(()=>{class e{constructor(){this.selectedIndex=N(0),this.tabs=[{label:"Connect Charts"},{label:"Draggable Chart"}]}static{this.\u0275fac=function(o){return new(o||e)}}static{this.\u0275cmp=l({type:e,selectors:[["app-advanced"]],decls:7,vars:1,consts:[[1,"demo-layout"],[1,"demo-sidebar"],[3,"active"],[1,"demo-content"],[3,"click"]],template:function(o,n){if(o&1&&(c(0,"div",0)(1,"nav",1),B(2,ie,2,3,"button",2,ne),i(),c(4,"div",3),R(5,re,1,0,"app-connect-charts")(6,ae,1,0,"app-line-draggable"),i()()),o&2){let a;r(2),z(n.tabs),r(3),L((a=n.selectedIndex())===0?5:a===1?6:-1)}},dependencies:[D,E],styles:[".demo-layout[_ngcontent-%COMP%]{display:flex;min-height:600px}.demo-sidebar[_ngcontent-%COMP%]{width:200px;flex-shrink:0;border-right:1px solid var(--app-border);background:var(--app-surface);display:flex;flex-direction:column;padding:8px 0}.demo-sidebar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{all:unset;box-sizing:border-box;padding:10px 20px;cursor:pointer;font-size:14px;color:var(--mat-sys-on-surface);border-left:3px solid transparent;transition:background-color .15s,border-color .15s,color .15s}.demo-sidebar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:var(--app-glow);color:var(--app-accent)}.demo-sidebar[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%]{color:var(--app-accent);border-left-color:var(--app-accent);background-color:var(--app-glow);font-weight:500}.demo-content[_ngcontent-%COMP%]{flex:1;min-width:0;padding:0 24px}@media(max-width:768px){.demo-layout[_ngcontent-%COMP%]{flex-direction:column}.demo-sidebar[_ngcontent-%COMP%]{width:100%;flex-direction:row;border-right:none;border-bottom:1px solid var(--app-border);overflow-x:auto;padding:0}.demo-sidebar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{white-space:nowrap;border-left:none;border-bottom:3px solid transparent;padding:10px 16px}.demo-sidebar[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%]{border-left-color:transparent;border-bottom-color:var(--app-accent)}.demo-content[_ngcontent-%COMP%]{padding:0}}"]})}}return e})();var ce=[{path:"",redirectTo:"advanced-usage",pathMatch:"full"},{path:"advanced-usage",component:T}],J=(()=>{class e{static{this.\u0275fac=function(o){return new(o||e)}}static{this.\u0275mod=f({type:e})}static{this.\u0275inj=x({imports:[O.forChild(ce),O]})}}return e})();var Ze=(()=>{class e{static{this.\u0275fac=function(o){return new(o||e)}}static{this.\u0275mod=f({type:e})}static{this.\u0275inj=x({imports:[j,V,J,T,D,E]})}}return e})();export{Ze as DemoAdvancedModule};
