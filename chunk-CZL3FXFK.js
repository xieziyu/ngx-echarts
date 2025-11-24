import{a as f,c as he,h as P,i as tt}from"./chunk-2TMZMD3P.js";import{$ as me,A as Q,D as L,F as q,Fa as ue,G as l,H as d,Ha as U,I as x,Ia as fe,J as G,Ja as ge,K as F,Ka as Ce,L as v,La as ve,M as ee,Ma as be,N as te,Na as ye,O as oe,Oa as Te,P as ne,Pa as De,Q as ie,Qa as Ee,R as c,Ra as _e,S as a,T as r,U as s,V as ae,Va as ze,W as re,Wa as xe,X as se,Xa as y,Y as h,Ya as T,Z as W,Za as Se,_ as ce,_a as Me,a as D,aa as le,b as j,ba as u,fb as ke,ga as pe,gb as Ne,hb as Oe,ib as Ie,j as _,jb as Be,lb as g,ma as E,mb as we,n as $,o as H,qa as de,r as V,s as z,u as C,w as Z,x as K,y as Y,z as J}from"./chunk-Z3IVGXVU.js";var Re=`<!-- DEMO START -->
<div class="button-groups">
  <button (click)="RandomDataset()" nz-button nzType="default">Random Dataset</button>
</div>
<div echarts [options]="options" [merge]="mergeOptions" class="demo-chart"></div>
<!-- DEMO END -->

<app-code-block [html]="html" [component]="component"> </app-code-block>
`;var Ae=`import { Component } from '@angular/core';
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
`;var S=(()=>{class e{constructor(){this.html=Re,this.component=Ae,this.options={legend:{},tooltip:{},dataset:{source:[["product","2015","2016","2017"],["Matcha Latte",43.3,85.8,93.7],["Milk Tea",83.1,73.4,55.1],["Cheese Cocoa",86.4,65.2,82.5],["Walnut Brownie",72.4,53.9,39.1]]},xAxis:{type:"category"},yAxis:{},series:[{type:"bar"},{type:"bar"},{type:"bar"}]}}RandomDataset(){this.mergeOptions={dataset:{source:[["product","2015","2016","2017"],["Matcha Latte",...this.getRandomValues()],["Milk Tea",...this.getRandomValues()],["Cheese Cocoa",...this.getRandomValues()],["Walnut Brownie",...this.getRandomValues()]]}}}getRandomValues(){let o=[];for(let t=0;t<3;t++)o.push(Math.random()*100);return o}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=d({type:e,selectors:[["app-basic-dataset"]],decls:5,vars:4,consts:[[1,"button-groups"],["nz-button","","nzType","default",3,"click"],["echarts","",1,"demo-chart",3,"options","merge"],[3,"html","component"]],template:function(t,n){t&1&&(a(0,"div",0)(1,"button",1),h("click",function(){return n.RandomDataset()}),u(2,"Random Dataset"),r()(),s(3,"div",2)(4,"app-code-block",3)),t&2&&(l(3),c("options",n.options)("merge",n.mergeOptions),l(),c("html",n.html)("component",n.component))},dependencies:[T,y,f,g],encapsulation:2})}}return e})();tt();var Le=`<!-- DEMO START -->
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
`;var Ge=`import { Component, OnInit } from '@angular/core';
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
`;var M=(()=>{class e{constructor(){this.html=Le,this.component=Ge}ngOnInit(){let o=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T"],t=[220,182,191,234,290,330,310,123,442,321,90,149,210,122,133,334,198,123,125,220],n=500,i=[];for(let m=0;m<t.length;m++)i.push(n);this.options={title:{text:"Check Console for Events"},xAxis:{data:o,axisLabel:{inside:!0,color:"#fff"},axisTick:{show:!1},axisLine:{show:!1},z:10},yAxis:{axisLine:{show:!1},axisTick:{show:!1},axisLabel:{color:"#999"}},dataZoom:[{type:"inside"}],series:[{type:"bar",itemStyle:{color:"rgba(0,0,0,0.05)"},barGap:"-100%",barCategoryGap:"40%",data:i,animation:!1},{type:"bar",itemStyle:{color:new P(0,0,0,1,[{offset:0,color:"#83bff6"},{offset:.5,color:"#188df0"},{offset:1,color:"#188df0"}])},emphasis:{itemStyle:{color:new P(0,0,0,1,[{offset:0,color:"#2378f7"},{offset:.7,color:"#2378f7"},{offset:1,color:"#83bff6"}])}},data:t}]}}onChartEvent(o,t){console.log("chart event:",t,o)}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=d({type:e,selectors:[["app-basic-events"]],decls:2,vars:3,consts:[["echarts","",1,"demo-chart",3,"chartInit","chartClick","chartDblClick","chartMouseDown","chartMouseUp","chartMouseOver","chartMouseOut","chartGlobalOut","chartContextMenu","chartDataZoom","options"],[3,"html","component"]],template:function(t,n){t&1&&(a(0,"div",0),h("chartInit",function(m){return n.onChartEvent(m,"chartInit")})("chartClick",function(m){return n.onChartEvent(m,"chartClick")})("chartDblClick",function(m){return n.onChartEvent(m,"chartDblClick")})("chartMouseDown",function(m){return n.onChartEvent(m,"chartMouseDown")})("chartMouseUp",function(m){return n.onChartEvent(m,"chartMouseUp")})("chartMouseOver",function(m){return n.onChartEvent(m,"chartMouseOver")})("chartMouseOut",function(m){return n.onChartEvent(m,"chartMouseOut")})("chartGlobalOut",function(m){return n.onChartEvent(m,"chartGlobalOut")})("chartContextMenu",function(m){return n.onChartEvent(m,"chartContextMenu")})("chartDataZoom",function(m){return n.onChartEvent(m,"chartDataZoom")}),r(),s(1,"app-code-block",1)),t&2&&(c("options",n.options),l(),c("html",n.html)("component",n.component))},dependencies:[f,g],encapsulation:2})}}return e})();var Fe=`<!-- DEMO START -->
<echarts [initOpts]="initOpts" [options]="options"></echarts>
<!-- DEMO END -->

<app-code-block [html]="html" [component]="component"> </app-code-block>
`;var We=`import { Component } from '@angular/core';
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
`;var k=(()=>{class e{constructor(){this.html=Fe,this.component=We,this.initOpts={renderer:"svg",width:300,height:300},this.options={color:["#3398DB"],tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],axisTick:{alignWithLabel:!0}}],yAxis:[{type:"value"}],series:[{name:"Counters",type:"bar",barWidth:"60%",data:[10,52,200,334,390,330,220]}]}}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=d({type:e,selectors:[["app-basic-init-opts"]],decls:2,vars:4,consts:[[3,"initOpts","options"],[3,"html","component"]],template:function(t,n){t&1&&s(0,"echarts",0)(1,"app-code-block",1),t&2&&(c("initOpts",n.initOpts)("options",n.options),l(),c("html",n.html)("component",n.component))},dependencies:[f,g],encapsulation:2})}}return e})();var ct=(e,p)=>({$implicit:e,data:p});function mt(e,p){e&1&&s(0,"nz-icon",3)}function lt(e,p){e&1&&s(0,"nz-icon",4)}function pt(e,p){e&1&&s(0,"nz-icon",5)}function dt(e,p){e&1&&s(0,"nz-icon",6)}function ht(e,p){e&1&&s(0,"nz-icon",7)}function ut(e,p){if(e&1&&(ae(0),s(1,"span",9),re()),e&2){let o=W();l(),c("innerHTML",o.instance.content,q)}}function ft(e,p){if(e&1){let o=se();a(0,"nz-message",2),h("destroyed",function(n){Z(o);let i=W();return K(i.remove(n.id,n.userAction))}),r()}if(e&2){let o=p.$implicit;c("instance",o)}}var gt=0,X=class{container;nzSingletonService=C(Me);overlay=C(be);injector=C(Y);remove(p){this.container&&(p?this.container.remove(p):this.container.removeAll())}getInstanceId(){return`${this.componentPrefix}-${gt++}`}withContainer(p){let o=this.nzSingletonService.getSingletonWithKey(this.componentPrefix);if(o)return o;let t=this.overlay.create({hasBackdrop:!1,scrollStrategy:this.overlay.scrollStrategies.noop(),positionStrategy:this.overlay.position().global()}),n=new ve(p,null,this.injector),i=t.attach(n),m=t.hostElement;return m.style.zIndex="1010",o||(this.container=o=i.instance,this.nzSingletonService.registerSingletonWithKey(this.componentPrefix,o),this.container.afterAllInstancesRemoved.subscribe(()=>{this.container=void 0,this.nzSingletonService.unregisterSingletonWithKey(this.componentPrefix),t.dispose()})),o}},Ct=(()=>{class e{config;instances=[];_afterAllInstancesRemoved=new _;afterAllInstancesRemoved=this._afterAllInstancesRemoved.asObservable();cdr=C(E);nzConfigService=C(ye);constructor(){this.subscribeConfigChange()}create(o){let t=this.onCreate(o);return this.instances.length>=this.config.nzMaxStack&&(this.instances=this.instances.slice(1)),this.instances=[...this.instances,t],this.readyInstances(),t}remove(o,t=!1){this.instances.map((n,i)=>({index:i,instance:n})).filter(({instance:n})=>n.messageId===o).forEach(({index:n,instance:i})=>{this.instances.splice(n,1),this.instances=[...this.instances],this.onRemove(i,t),this.readyInstances()}),this.instances.length||this.onAllInstancesRemoved()}removeAll(){this.instances.forEach(o=>this.onRemove(o,!1)),this.instances=[],this.readyInstances(),this.onAllInstancesRemoved()}onCreate(o){return o.options=this.mergeOptions(o.options),o.onClose=new _,o}onRemove(o,t){o.onClose.next(t),o.onClose.complete()}onAllInstancesRemoved(){this._afterAllInstancesRemoved.next(),this._afterAllInstancesRemoved.complete()}readyInstances(){this.cdr.detectChanges()}mergeOptions(o){let{nzDuration:t,nzAnimate:n,nzPauseOnHover:i}=this.config;return D({nzDuration:t,nzAnimate:n,nzPauseOnHover:i},o)}static \u0275fac=function(t){return new(t||e)};static \u0275dir=G({type:e})}return e})(),vt=(()=>{class e{cdr=C(E);destroyRef=C(J);animationStateChanged=new _;options;autoClose;closeTimer;userAction=!1;eraseTimer;eraseTimingStart;eraseTTL;constructor(){this.destroyRef.onDestroy(()=>{this.autoClose&&this.clearEraseTimeout(),this.animationStateChanged.complete()})}ngOnInit(){this.options=this.instance.options,this.options.nzAnimate&&(this.instance.state="enter",this.animationStateChanged.pipe($(o=>o.phaseName==="done"&&o.toState==="leave"),H(1)).subscribe(()=>{clearTimeout(this.closeTimer),this.destroyed.next({id:this.instance.messageId,userAction:this.userAction})})),this.autoClose=this.options.nzDuration>0,this.autoClose&&(this.initErase(),this.startEraseTimeout())}onEnter(){this.autoClose&&this.options.nzPauseOnHover&&(this.clearEraseTimeout(),this.updateTTL())}onLeave(){this.autoClose&&this.options.nzPauseOnHover&&this.startEraseTimeout()}destroy(o=!1){this.userAction=o,this.options.nzAnimate?(this.instance.state="leave",this.cdr.detectChanges(),this.closeTimer=setTimeout(()=>{this.closeTimer=void 0,this.destroyed.next({id:this.instance.messageId,userAction:o})},200)):this.destroyed.next({id:this.instance.messageId,userAction:o})}initErase(){this.eraseTTL=this.options.nzDuration,this.eraseTimingStart=Date.now()}updateTTL(){this.autoClose&&(this.eraseTTL-=Date.now()-this.eraseTimingStart)}startEraseTimeout(){this.eraseTTL>0?(this.clearEraseTimeout(),this.eraseTimer=setTimeout(()=>this.destroy(),this.eraseTTL),this.eraseTimingStart=Date.now()):this.destroy()}clearEraseTimeout(){this.eraseTimer!==null&&(clearTimeout(this.eraseTimer),this.eraseTimer=void 0)}static \u0275fac=function(t){return new(t||e)};static \u0275dir=G({type:e})}return e})(),bt=(()=>{class e extends vt{instance;destroyed=new Q;index;static \u0275fac=(()=>{let o;return function(n){return(o||(o=L(e)))(n||e)}})();static \u0275cmp=d({type:e,selectors:[["nz-message"]],inputs:{instance:"instance"},outputs:{destroyed:"destroyed"},exportAs:["nzMessage"],features:[F],decls:9,vars:9,consts:[[1,"ant-message-notice",3,"mouseenter","mouseleave"],[1,"ant-message-notice-content"],[1,"ant-message-custom-content"],["nzType","check-circle"],["nzType","info-circle"],["nzType","exclamation-circle"],["nzType","close-circle"],["nzType","loading"],[4,"nzStringTemplateOutlet","nzStringTemplateOutletContext"],[3,"innerHTML"]],template:function(t,n){if(t&1&&(a(0,"div",0),h("@moveUpMotion.done",function(m){return n.animationStateChanged.next(m)})("mouseenter",function(){return n.onEnter()})("mouseleave",function(){return n.onLeave()}),a(1,"div",1)(2,"div",2),ee(3,mt,1,0,"nz-icon",3)(4,lt,1,0,"nz-icon",4)(5,pt,1,0,"nz-icon",5)(6,dt,1,0,"nz-icon",6)(7,ht,1,0,"nz-icon",7),v(8,ut,2,1,"ng-container",8),r()()()),t&2){let i;c("@moveUpMotion",n.instance.state),l(2),le("ant-message-"+n.instance.type),l(),te((i=n.instance.type)==="success"?3:i==="info"?4:i==="warning"?5:i==="error"?6:i==="loading"?7:-1),l(5),c("nzStringTemplateOutlet",n.instance.content)("nzStringTemplateOutletContext",pe(6,ct,n,n.instance.options==null?null:n.instance.options.nzData))}},dependencies:[_e,Ee,Ce,ge],encapsulation:2,data:{animation:[De]},changeDetection:0})}return e})(),N="message",yt={nzAnimate:!0,nzDuration:3e3,nzMaxStack:7,nzPauseOnHover:!0,nzTop:24,nzDirection:"ltr"},Tt=(()=>{class e extends Ct{dir=this.nzConfigService.getConfigForComponent(N)?.nzDirection||"ltr";top;constructor(){super(),this.updateConfig()}subscribeConfigChange(){Te(N,()=>{this.updateConfig(),this.dir=this.nzConfigService.getConfigForComponent(N)?.nzDirection||this.dir})}updateConfig(){this.config=D(D(D({},yt),this.config),this.nzConfigService.getConfigForComponent(N)),this.top=fe(this.config.nzTop),this.cdr.markForCheck()}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=d({type:e,selectors:[["nz-message-container"]],exportAs:["nzMessageContainer"],features:[F],decls:3,vars:4,consts:[[1,"ant-message"],[3,"instance"],[3,"destroyed","instance"]],template:function(t,n){t&1&&(a(0,"div",0),ne(1,ft,1,1,"nz-message",1,oe),r()),t&2&&(ce("top",n.top),me("ant-message-rtl",n.dir==="rtl"),l(),ie(n.instances))},dependencies:[bt],encapsulation:2,changeDetection:0})}return e})(),Ue=(()=>{class e extends X{componentPrefix="message-";success(o,t){return this.createInstance({type:"success",content:o},t)}error(o,t){return this.createInstance({type:"error",content:o},t)}info(o,t){return this.createInstance({type:"info",content:o},t)}warning(o,t){return this.createInstance({type:"warning",content:o},t)}loading(o,t){return this.createInstance({type:"loading",content:o},t)}create(o,t,n){return this.createInstance({type:o,content:t},n)}createInstance(o,t){return this.container=this.withContainer(Tt),this.container.create(j(D({},o),{createdAt:new Date,messageId:this.getInstanceId(),options:t}))}static \u0275fac=(()=>{let o;return function(n){return(o||(o=L(e)))(n||e)}})();static \u0275prov=V({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var Pe=`<!-- DEMO START -->
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
`;var Xe=`import { Component, inject } from '@angular/core';
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
`;var O=(()=>{class e{constructor(){this.msg=C(Ue),this.html=Pe,this.component=Xe,this.options={backgroundColor:"#2c343c",title:{text:"Customized Pie",left:"center",top:20,textStyle:{color:"#ccc"}},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},visualMap:{show:!1,min:80,max:600,inRange:{colorLightness:[0,1]}},series:[{name:"Counters",type:"pie",radius:"55%",center:["50%","50%"],data:[{value:335,name:"C-1"},{value:310,name:"C-2"},{value:274,name:"C-3"},{value:235,name:"C-4"},{value:400,name:"C-5"}].sort((o,t)=>o.value-t.value),roseType:"radius",label:{color:"rgba(255, 255, 255, 0.3)"},labelLine:{lineStyle:{color:"rgba(255, 255, 255, 0.3)"},smooth:.2,length:10,length2:20},itemStyle:{color:"#c23531",shadowBlur:200,shadowColor:"rgba(0, 0, 0, 0.5)"},animationType:"scale",animationEasing:"elasticOut",animationDelay:()=>Math.random()*200}]}}onChartInit(o){this.chartInstance=o,console.log("on chart init:",o)}callMethod(o){if(this.chartInstance){let t=this.chartInstance[o]();this.msg.info(`${o}(): ${t||"void"}`),console.log(t)}}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=d({type:e,selectors:[["app-basic-instance"]],decls:13,vars:3,consts:[[1,"button-groups"],["nz-button","","nzType","default",3,"click"],["echarts","",1,"demo-chart",3,"chartInit","options"],[3,"html","component"]],template:function(t,n){t&1&&(a(0,"div",0)(1,"button",1),h("click",function(){return n.callMethod("getWidth")}),u(2,"getWidth()"),r(),a(3,"button",1),h("click",function(){return n.callMethod("getHeight")}),u(4,"getHeight()"),r(),a(5,"button",1),h("click",function(){return n.callMethod("getDom")}),u(6,"getDom()"),r(),a(7,"button",1),h("click",function(){return n.callMethod("getOption")}),u(8,"getOption()"),r(),a(9,"button",1),h("click",function(){return n.callMethod("clear")}),u(10,"clear()"),r()(),a(11,"div",2),h("chartInit",function(m){return n.onChartInit(m)}),r(),s(12,"app-code-block",3)),t&2&&(l(11),c("options",n.options),l(),c("html",n.html)("component",n.component))},dependencies:[T,y,f,g],encapsulation:2})}}return e})();var je=`<!-- DEMO START -->
<div class="button-groups">
  <button (click)="isLoading = !isLoading" nz-button nzType="default">Toggle Loading</button>
</div>
<div echarts [options]="options" [loading]="isLoading" theme="macarons" class="demo-chart"></div>
<!-- DEMO END -->

<app-code-block [html]="html" [component]="component"> </app-code-block>
`;var $e=`import { Component } from '@angular/core';
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
`;var I=(()=>{class e{constructor(){this.html=je,this.component=$e,this.isLoading=!0,this.options={tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},legend:{data:["X-1","X-2","X-3","X-4","X-5"]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",boundaryGap:!1,data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]}],yAxis:[{type:"value"}],series:[{name:"X-1",type:"line",stack:"counts",areaStyle:{},data:[120,132,101,134,90,230,210]},{name:"X-2",type:"line",stack:"counts",areaStyle:{},data:[220,182,191,234,290,330,310]},{name:"X-3",type:"line",stack:"counts",areaStyle:{},data:[150,232,201,154,190,330,410]},{name:"X-4",type:"line",stack:"counts",areaStyle:{},data:[320,332,301,334,390,330,320]},{name:"X-5",type:"line",stack:"counts",label:{show:!0,position:"top"},areaStyle:{},data:[820,932,901,934,1290,1330,1320]}]}}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=d({type:e,selectors:[["app-basic-loading"]],decls:5,vars:4,consts:[[1,"button-groups"],["nz-button","","nzType","default",3,"click"],["echarts","","theme","macarons",1,"demo-chart",3,"options","loading"],[3,"html","component"]],template:function(t,n){t&1&&(a(0,"div",0)(1,"button",1),h("click",function(){return n.isLoading=!n.isLoading}),u(2,"Toggle Loading"),r()(),s(3,"div",2)(4,"app-code-block",3)),t&2&&(l(3),c("options",n.options)("loading",n.isLoading),l(),c("html",n.html)("component",n.component))},dependencies:[T,y,f,g],encapsulation:2})}}return e})();var He=`<!-- DEMO START -->
<div echarts [options]="options" class="demo-chart"></div>
<!-- DEMO END -->

<app-code-block [html]="html" [component]="component"> </app-code-block>
`;var Ve=`import { Component, OnInit } from '@angular/core';
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
`;var B=(()=>{class e{constructor(){this.html=He,this.component=Ve}ngOnInit(){let o=[],t=[],n=[];for(let i=0;i<100;i++)o.push("category"+i),t.push((Math.sin(i/5)*(i/5-10)+i/6)*5),n.push((Math.cos(i/5)*(i/5-10)+i/6)*5);this.options={legend:{data:["bar","bar2"],align:"left"},tooltip:{},xAxis:{data:o,silent:!1,splitLine:{show:!1}},yAxis:{},series:[{name:"bar",type:"bar",data:t,animationDelay:i=>i*10},{name:"bar2",type:"bar",data:n,animationDelay:i=>i*10+100}],animationEasing:"elasticOut",animationDelayUpdate:i=>i*5}}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=d({type:e,selectors:[["app-basic-simple"]],decls:2,vars:3,consts:[["echarts","",1,"demo-chart",3,"options"],[3,"html","component"]],template:function(t,n){t&1&&s(0,"div",0)(1,"app-code-block",1),t&2&&(c("options",n.options),l(),c("html",n.html)("component",n.component))},dependencies:[f,g],encapsulation:2})}}return e})();var Ze={color:["#b21ab4","#6f0099","#2a2073","#0b5ea8","#17aecc","#b3b3ff","#eb99ff","#fae6ff","#e6f2ff","#eeeeee"],title:{fontWeight:"normal",color:"#00aecd"},visualMap:{color:["#00aecd","#a2d4e6"]},toolbox:{color:["#00aecd","#00aecd","#00aecd","#00aecd"]},tooltip:{backgroundColor:"rgba(0,0,0,0.5)",axisPointer:{type:"line",lineStyle:{color:"#00aecd",type:"dashed"},crossStyle:{color:"#00aecd"},shadowStyle:{color:"rgba(200,200,200,0.3)"}}},dataZoom:{dataBackgroundColor:"#eee",fillerColor:"rgba(144,197,237,0.2)",handleColor:"#00aecd"},timeline:{lineStyle:{color:"#00aecd"},controlStyle:{color:"#00aecd",borderColor:"00aecd"}},candlestick:{itemStyle:{color:"#00aecd",color0:"#a2d4e6"},lineStyle:{width:1,color:"#00aecd",color0:"#a2d4e6"},areaStyle:{color:"#b21ab4",color0:"#0b5ea8"}},chord:{padding:4,itemStyle:{color:"#b21ab4",borderWidth:1,borderColor:"rgba(128, 128, 128, 0.5)"},lineStyle:{color:"rgba(128, 128, 128, 0.5)"},areaStyle:{color:"#0b5ea8"}},graph:{itemStyle:{color:"#b21ab4"},linkStyle:{color:"#2a2073"}},map:{itemStyle:{color:"#c12e34"},areaStyle:{color:"#ddd"},label:{color:"#c12e34"}},gauge:{axisLine:{lineStyle:{color:[[.2,"#dddddd"],[.8,"#00aecd"],[1,"#f5ccff"]],width:8}}}};var Ke=`<!-- DEMO START -->
<div class="button-groups">
  <button (click)="theme = undefined" nz-button nzType="default">default</button>
  <button (click)="theme = 'dark'" nz-button nzType="default">dark</button>
  <button (click)="theme = 'macarons'" nz-button nzType="default">macarons(theme file)</button>
  <button (click)="theme = coolTheme" nz-button nzType="default">cool(theme object)</button>
</div>
<div echarts [options]="options" [theme]="theme" class="demo-chart"></div>
<!-- DEMO END -->

<app-code-block [html]="html" [component]="component" [data]="data"> </app-code-block>
`;var Ye=`import { Component } from '@angular/core';
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
`;var Je=`export const CoolTheme = {
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
`;var w=(()=>{class e{constructor(){this.html=Ke,this.component=Ye,this.data=Je,this.coolTheme=Ze,this.options={title:{left:"50%",text:"Nightingale Rose Diagram",subtext:"Mocking Data",textAlign:"center"},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{align:"auto",bottom:10,data:["rose1","rose2","rose3","rose4","rose5","rose6","rose7","rose8"]},calculable:!0,series:[{name:"area",type:"pie",radius:[30,110],roseType:"area",data:[{value:10,name:"rose1"},{value:5,name:"rose2"},{value:15,name:"rose3"},{value:25,name:"rose4"},{value:20,name:"rose5"},{value:35,name:"rose6"},{value:30,name:"rose7"},{value:40,name:"rose8"}]}]}}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=d({type:e,selectors:[["app-basic-themes"]],decls:11,vars:5,consts:[[1,"button-groups"],["nz-button","","nzType","default",3,"click"],["echarts","",1,"demo-chart",3,"options","theme"],[3,"html","component","data"]],template:function(t,n){t&1&&(a(0,"div",0)(1,"button",1),h("click",function(){return n.theme=void 0}),u(2,"default"),r(),a(3,"button",1),h("click",function(){return n.theme="dark"}),u(4,"dark"),r(),a(5,"button",1),h("click",function(){return n.theme="macarons"}),u(6,"macarons(theme file)"),r(),a(7,"button",1),h("click",function(){return n.theme=n.coolTheme}),u(8,"cool(theme object)"),r()(),s(9,"div",2)(10,"app-code-block",3)),t&2&&(l(9),c("options",n.options)("theme",n.theme),l(),c("html",n.html)("component",n.component)("data",n.data))},dependencies:[T,y,f,g],encapsulation:2})}}return e})();var Qe=`<!-- DEMO START -->
<div echarts [options]="options" [merge]="updateOptions" class="demo-chart"></div>
<!-- DEMO END -->

<app-code-block [html]="html" [component]="component"> </app-code-block>
`;var qe=`import { Component, OnInit, OnDestroy } from '@angular/core';
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
`;var R=(()=>{class e{constructor(){this.html=Qe,this.component=qe,this.oneDay=24*3600*1e3,this.cdr=C(E)}ngOnInit(){this.data=[],this.now=new Date(1997,9,3),this.value=Math.random()*1e3;for(let o=0;o<1e3;o++)this.data.push(this.randomData());this.options={title:{text:"Dynamic Data + Time Axis"},tooltip:{trigger:"axis",formatter:o=>{o=o[0];let t=new Date(o.name);return t.getDate()+"/"+(t.getMonth()+1)+"/"+t.getFullYear()+" : "+o.value[1]},axisPointer:{animation:!1}},xAxis:{type:"time",splitLine:{show:!1}},yAxis:{type:"value",boundaryGap:[0,"100%"],splitLine:{show:!1}},series:[{name:"Mocking Data",type:"line",showSymbol:!1,data:this.data}]},this.timer=setInterval(()=>{for(let o=0;o<5;o++)this.data.shift(),this.data.push(this.randomData());this.updateOptions={series:[{data:this.data}]},this.cdr.detectChanges()},1e3)}ngOnDestroy(){clearInterval(this.timer)}randomData(){return this.now=new Date(this.now.getTime()+this.oneDay),this.value=this.value+Math.random()*21-10,{name:this.now.toString(),value:[[this.now.getFullYear(),this.now.getMonth()+1,this.now.getDate()].join("/"),Math.round(this.value)]}}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=d({type:e,selectors:[["app-basic-update"]],decls:2,vars:4,consts:[["echarts","",1,"demo-chart",3,"options","merge"],[3,"html","component"]],template:function(t,n){t&1&&s(0,"div",0)(1,"app-code-block",1),t&2&&(c("options",n.options)("merge",n.updateOptions),l(),c("html",n.html)("component",n.component))},dependencies:[f,g],encapsulation:2})}}return e})();function Bt(e,p){e&1&&s(0,"app-basic-simple")}function wt(e,p){e&1&&s(0,"app-basic-dataset")}function Rt(e,p){e&1&&s(0,"app-basic-events")}function At(e,p){e&1&&s(0,"app-basic-themes")}function Lt(e,p){e&1&&s(0,"app-basic-loading")}function Gt(e,p){e&1&&s(0,"app-basic-update")}function Ft(e,p){e&1&&s(0,"app-basic-init-opts")}function Wt(e,p){e&1&&s(0,"app-basic-instance")}var A=(()=>{class e{constructor(){}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=d({type:e,selectors:[["app-basic"]],decls:25,vars:1,consts:[["nzTitle","Getting Started"],["nz-page-header-breadcrumb",""],["routerLink","/welcome"],[2,"margin-top","8px",3,"nzTabPosition"],["nzTitle","Simple Chart"],["nz-tab",""],["nzTitle","Dataset"],["nzTitle","Events"],["nzTitle","[theme]"],["nzTitle","[loading]"],["nzTitle","[merge]"],["nzTitle","[initOpts]"],["nzTitle","ECharts Instance"]],template:function(t,n){t&1&&(a(0,"nz-page-header",0)(1,"nz-breadcrumb",1)(2,"nz-breadcrumb-item")(3,"a",2),u(4,"Home"),r()(),a(5,"nz-breadcrumb-item"),u(6,"Getting Started"),r()()(),s(7,"nz-divider"),a(8,"nz-tabs",3)(9,"nz-tab",4),v(10,Bt,1,0,"ng-template",5),r(),a(11,"nz-tab",6),v(12,wt,1,0,"ng-template",5),r(),a(13,"nz-tab",7),v(14,Rt,1,0,"ng-template",5),r(),a(15,"nz-tab",8),v(16,At,1,0,"ng-template",5),r(),a(17,"nz-tab",9),v(18,Lt,1,0,"ng-template",5),r(),a(19,"nz-tab",10),v(20,Gt,1,0,"ng-template",5),r(),a(21,"nz-tab",11),v(22,Ft,1,0,"ng-template",5),r(),a(23,"nz-tab",12),v(24,Wt,1,0,"ng-template",5),r()()),t&2&&(l(8),c("nzTabPosition","left"))},dependencies:[Ne,xe,ke,ze,ue,Se,Be,Ie,Oe,B,S,M,w,I,R,k,O],encapsulation:2})}}return e})();var Ut=[{path:"",redirectTo:"basic-usage",pathMatch:"full"},{path:"basic-usage",component:A}],et=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275mod=x({type:e})}static{this.\u0275inj=z({imports:[U.forChild(Ut),U]})}}return e})();var ci=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275mod=x({type:e})}static{this.\u0275inj=z({imports:[de,we,he,et,A,B,M,w,I,R,k,O,S]})}}return e})();export{ci as DemoBasicModule};
