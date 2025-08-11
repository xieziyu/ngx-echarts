import{a as g,c as ue,h as X,i as ot}from"./chunk-63UHJ6OY.js";import{$ as le,B as G,D as q,E as p,F as h,Fa as fe,G as _,H as F,Ha as U,I as W,Ia as ge,J as b,Ja as Ce,K as ee,Ka as ve,La as be,M as te,Ma as ye,N as oe,Na as Te,O as ne,Oa as Ee,P as ie,Pa as De,Q as ae,Qa as ze,R as l,Ra as xe,S as s,T as c,U as m,V as re,Va as Se,W as se,Wa as _e,X as ce,Xa as T,Y as u,Ya as E,Z as P,Za as Me,_ as me,_a as ke,a as D,aa as pe,b as $,ba as f,fb as Ne,ga as de,gb as Oe,hb as Ie,ib as we,j as x,jb as Be,lb as C,ma as z,mb as Re,n as H,o as V,qa as he,r as Z,s as S,u as v,w as K,x as Y,y as J,z as Q}from"./chunk-GKCWJT7B.js";var Ae=`<!-- DEMO START -->
<div class="button-groups">
  <button (click)="RandomDataset()" nz-button nzType="default">Random Dataset</button>
</div>
<div echarts [options]="options" [merge]="mergeOptions" class="demo-chart"></div>
<!-- DEMO END -->

<app-code-block [html]="html" [component]="component"> </app-code-block>
`;var Le=`import { Component } from '@angular/core';
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
`;var M=(()=>{let o=class o{constructor(){this.html=Ae,this.component=Le,this.options={legend:{},tooltip:{},dataset:{source:[["product","2015","2016","2017"],["Matcha Latte",43.3,85.8,93.7],["Milk Tea",83.1,73.4,55.1],["Cheese Cocoa",86.4,65.2,82.5],["Walnut Brownie",72.4,53.9,39.1]]},xAxis:{type:"category"},yAxis:{},series:[{type:"bar"},{type:"bar"},{type:"bar"}]}}RandomDataset(){this.mergeOptions={dataset:{source:[["product","2015","2016","2017"],["Matcha Latte",...this.getRandomValues()],["Milk Tea",...this.getRandomValues()],["Cheese Cocoa",...this.getRandomValues()],["Walnut Brownie",...this.getRandomValues()]]}}}getRandomValues(){let n=[];for(let t=0;t<3;t++)n.push(Math.random()*100);return n}};o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=h({type:o,selectors:[["app-basic-dataset"]],decls:5,vars:4,consts:[[1,"button-groups"],["nz-button","","nzType","default",3,"click"],["echarts","",1,"demo-chart",3,"options","merge"],[3,"html","component"]],template:function(t,i){t&1&&(s(0,"div",0)(1,"button",1),u("click",function(){return i.RandomDataset()}),f(2,"Random Dataset"),c()(),m(3,"div",2)(4,"app-code-block",3)),t&2&&(p(3),l("options",i.options)("merge",i.mergeOptions),p(),l("html",i.html)("component",i.component))},dependencies:[E,T,g,C],encapsulation:2});let e=o;return e})();ot();var Ge=`<!-- DEMO START -->
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
`;var Fe=`import { Component, OnInit } from '@angular/core';
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
`;var k=(()=>{let o=class o{constructor(){this.html=Ge,this.component=Fe}ngOnInit(){let n=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T"],t=[220,182,191,234,290,330,310,123,442,321,90,149,210,122,133,334,198,123,125,220],i=500,r=[];for(let d=0;d<t.length;d++)r.push(i);this.options={title:{text:"Check Console for Events"},xAxis:{data:n,axisLabel:{inside:!0,color:"#fff"},axisTick:{show:!1},axisLine:{show:!1},z:10},yAxis:{axisLine:{show:!1},axisTick:{show:!1},axisLabel:{color:"#999"}},dataZoom:[{type:"inside"}],series:[{type:"bar",itemStyle:{color:"rgba(0,0,0,0.05)"},barGap:"-100%",barCategoryGap:"40%",data:r,animation:!1},{type:"bar",itemStyle:{color:new X(0,0,0,1,[{offset:0,color:"#83bff6"},{offset:.5,color:"#188df0"},{offset:1,color:"#188df0"}])},emphasis:{itemStyle:{color:new X(0,0,0,1,[{offset:0,color:"#2378f7"},{offset:.7,color:"#2378f7"},{offset:1,color:"#83bff6"}])}},data:t}]}}onChartEvent(n,t){console.log("chart event:",t,n)}};o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=h({type:o,selectors:[["app-basic-events"]],decls:2,vars:3,consts:[["echarts","",1,"demo-chart",3,"chartInit","chartClick","chartDblClick","chartMouseDown","chartMouseUp","chartMouseOver","chartMouseOut","chartGlobalOut","chartContextMenu","chartDataZoom","options"],[3,"html","component"]],template:function(t,i){t&1&&(s(0,"div",0),u("chartInit",function(d){return i.onChartEvent(d,"chartInit")})("chartClick",function(d){return i.onChartEvent(d,"chartClick")})("chartDblClick",function(d){return i.onChartEvent(d,"chartDblClick")})("chartMouseDown",function(d){return i.onChartEvent(d,"chartMouseDown")})("chartMouseUp",function(d){return i.onChartEvent(d,"chartMouseUp")})("chartMouseOver",function(d){return i.onChartEvent(d,"chartMouseOver")})("chartMouseOut",function(d){return i.onChartEvent(d,"chartMouseOut")})("chartGlobalOut",function(d){return i.onChartEvent(d,"chartGlobalOut")})("chartContextMenu",function(d){return i.onChartEvent(d,"chartContextMenu")})("chartDataZoom",function(d){return i.onChartEvent(d,"chartDataZoom")}),c(),m(1,"app-code-block",1)),t&2&&(l("options",i.options),p(),l("html",i.html)("component",i.component))},dependencies:[g,C],encapsulation:2});let e=o;return e})();var We=`<!-- DEMO START -->
<echarts [initOpts]="initOpts" [options]="options"></echarts>
<!-- DEMO END -->

<app-code-block [html]="html" [component]="component"> </app-code-block>
`;var Pe=`import { Component } from '@angular/core';
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
`;var N=(()=>{let o=class o{constructor(){this.html=We,this.component=Pe,this.initOpts={renderer:"svg",width:300,height:300},this.options={color:["#3398DB"],tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],axisTick:{alignWithLabel:!0}}],yAxis:[{type:"value"}],series:[{name:"Counters",type:"bar",barWidth:"60%",data:[10,52,200,334,390,330,220]}]}}};o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=h({type:o,selectors:[["app-basic-init-opts"]],decls:2,vars:4,consts:[[3,"initOpts","options"],[3,"html","component"]],template:function(t,i){t&1&&m(0,"echarts",0)(1,"app-code-block",1),t&2&&(l("initOpts",i.initOpts)("options",i.options),p(),l("html",i.html)("component",i.component))},dependencies:[g,C],encapsulation:2});let e=o;return e})();var mt=(e,o)=>({$implicit:e,data:o});function lt(e,o){e&1&&m(0,"nz-icon",3)}function pt(e,o){e&1&&m(0,"nz-icon",4)}function dt(e,o){e&1&&m(0,"nz-icon",5)}function ht(e,o){e&1&&m(0,"nz-icon",6)}function ut(e,o){e&1&&m(0,"nz-icon",7)}function ft(e,o){if(e&1&&(re(0),m(1,"span",9),se()),e&2){let a=P();p(),l("innerHTML",a.instance.content,q)}}function gt(e,o){if(e&1){let a=ce();s(0,"nz-message",2),u("destroyed",function(t){K(a);let i=P();return Y(i.remove(t.id,t.userAction))}),c()}if(e&2){let a=o.$implicit;l("instance",a)}}var Ct=0,j=class{container;nzSingletonService=v(ke);overlay=v(ye);injector=v(J);remove(o){this.container&&(o?this.container.remove(o):this.container.removeAll())}getInstanceId(){return`${this.componentPrefix}-${Ct++}`}withContainer(o){let a=this.nzSingletonService.getSingletonWithKey(this.componentPrefix);if(a)return a;let n=this.overlay.create({hasBackdrop:!1,scrollStrategy:this.overlay.scrollStrategies.noop(),positionStrategy:this.overlay.position().global()}),t=new be(o,null,this.injector),i=n.attach(t),r=n.hostElement;return r.style.zIndex="1010",a||(this.container=a=i.instance,this.nzSingletonService.registerSingletonWithKey(this.componentPrefix,a),this.container.afterAllInstancesRemoved.subscribe(()=>{this.container=void 0,this.nzSingletonService.unregisterSingletonWithKey(this.componentPrefix),n.dispose()})),a}},vt=(()=>{class e{config;instances=[];_afterAllInstancesRemoved=new x;afterAllInstancesRemoved=this._afterAllInstancesRemoved.asObservable();cdr=v(z);nzConfigService=v(Te);constructor(){this.subscribeConfigChange()}create(a){let n=this.onCreate(a);return this.instances.length>=this.config.nzMaxStack&&(this.instances=this.instances.slice(1)),this.instances=[...this.instances,n],this.readyInstances(),n}remove(a,n=!1){this.instances.map((t,i)=>({index:i,instance:t})).filter(({instance:t})=>t.messageId===a).forEach(({index:t,instance:i})=>{this.instances.splice(t,1),this.instances=[...this.instances],this.onRemove(i,n),this.readyInstances()}),this.instances.length||this.onAllInstancesRemoved()}removeAll(){this.instances.forEach(a=>this.onRemove(a,!1)),this.instances=[],this.readyInstances(),this.onAllInstancesRemoved()}onCreate(a){return a.options=this.mergeOptions(a.options),a.onClose=new x,a}onRemove(a,n){a.onClose.next(n),a.onClose.complete()}onAllInstancesRemoved(){this._afterAllInstancesRemoved.next(),this._afterAllInstancesRemoved.complete()}readyInstances(){this.cdr.detectChanges()}mergeOptions(a){let{nzDuration:n,nzAnimate:t,nzPauseOnHover:i}=this.config;return D({nzDuration:n,nzAnimate:t,nzPauseOnHover:i},a)}static \u0275fac=function(n){return new(n||e)};static \u0275dir=F({type:e})}return e})(),bt=(()=>{class e{cdr=v(z);destroyRef=v(Q);animationStateChanged=new x;options;autoClose;closeTimer;userAction=!1;eraseTimer;eraseTimingStart;eraseTTL;constructor(){this.destroyRef.onDestroy(()=>{this.autoClose&&this.clearEraseTimeout(),this.animationStateChanged.complete()})}ngOnInit(){this.options=this.instance.options,this.options.nzAnimate&&(this.instance.state="enter",this.animationStateChanged.pipe(H(a=>a.phaseName==="done"&&a.toState==="leave"),V(1)).subscribe(()=>{clearTimeout(this.closeTimer),this.destroyed.next({id:this.instance.messageId,userAction:this.userAction})})),this.autoClose=this.options.nzDuration>0,this.autoClose&&(this.initErase(),this.startEraseTimeout())}onEnter(){this.autoClose&&this.options.nzPauseOnHover&&(this.clearEraseTimeout(),this.updateTTL())}onLeave(){this.autoClose&&this.options.nzPauseOnHover&&this.startEraseTimeout()}destroy(a=!1){this.userAction=a,this.options.nzAnimate?(this.instance.state="leave",this.cdr.detectChanges(),this.closeTimer=setTimeout(()=>{this.closeTimer=void 0,this.destroyed.next({id:this.instance.messageId,userAction:a})},200)):this.destroyed.next({id:this.instance.messageId,userAction:a})}initErase(){this.eraseTTL=this.options.nzDuration,this.eraseTimingStart=Date.now()}updateTTL(){this.autoClose&&(this.eraseTTL-=Date.now()-this.eraseTimingStart)}startEraseTimeout(){this.eraseTTL>0?(this.clearEraseTimeout(),this.eraseTimer=setTimeout(()=>this.destroy(),this.eraseTTL),this.eraseTimingStart=Date.now()):this.destroy()}clearEraseTimeout(){this.eraseTimer!==null&&(clearTimeout(this.eraseTimer),this.eraseTimer=void 0)}static \u0275fac=function(n){return new(n||e)};static \u0275dir=F({type:e})}return e})(),yt=(()=>{class e extends bt{instance;destroyed=new ee;index;static \u0275fac=(()=>{let a;return function(t){return(a||(a=G(e)))(t||e)}})();static \u0275cmp=h({type:e,selectors:[["nz-message"]],inputs:{instance:"instance"},outputs:{destroyed:"destroyed"},exportAs:["nzMessage"],features:[W],decls:9,vars:9,consts:[[1,"ant-message-notice",3,"mouseenter","mouseleave"],[1,"ant-message-notice-content"],[1,"ant-message-custom-content"],["nzType","check-circle"],["nzType","info-circle"],["nzType","exclamation-circle"],["nzType","close-circle"],["nzType","loading"],[4,"nzStringTemplateOutlet","nzStringTemplateOutletContext"],[3,"innerHTML"]],template:function(n,t){if(n&1&&(s(0,"div",0),u("@moveUpMotion.done",function(r){return t.animationStateChanged.next(r)})("mouseenter",function(){return t.onEnter()})("mouseleave",function(){return t.onLeave()}),s(1,"div",1)(2,"div",2),te(3,lt,1,0,"nz-icon",3)(4,pt,1,0,"nz-icon",4)(5,dt,1,0,"nz-icon",5)(6,ht,1,0,"nz-icon",6)(7,ut,1,0,"nz-icon",7),b(8,ft,2,1,"ng-container",8),c()()()),n&2){let i;l("@moveUpMotion",t.instance.state),p(2),pe("ant-message-"+t.instance.type),p(),oe((i=t.instance.type)==="success"?3:i==="info"?4:i==="warning"?5:i==="error"?6:i==="loading"?7:-1),p(5),l("nzStringTemplateOutlet",t.instance.content)("nzStringTemplateOutletContext",de(6,mt,t,t.instance.options==null?null:t.instance.options.nzData))}},dependencies:[xe,ze,ve,Ce],encapsulation:2,data:{animation:[De]},changeDetection:0})}return e})(),O="message",Tt={nzAnimate:!0,nzDuration:3e3,nzMaxStack:7,nzPauseOnHover:!0,nzTop:24,nzDirection:"ltr"},Et=(()=>{class e extends vt{dir=this.nzConfigService.getConfigForComponent(O)?.nzDirection||"ltr";top;constructor(){super(),this.updateConfig()}subscribeConfigChange(){Ee(O,()=>{this.updateConfig(),this.dir=this.nzConfigService.getConfigForComponent(O)?.nzDirection||this.dir})}updateConfig(){this.config=D(D(D({},Tt),this.config),this.nzConfigService.getConfigForComponent(O)),this.top=ge(this.config.nzTop),this.cdr.markForCheck()}static \u0275fac=function(n){return new(n||e)};static \u0275cmp=h({type:e,selectors:[["nz-message-container"]],exportAs:["nzMessageContainer"],features:[W],decls:3,vars:4,consts:[[1,"ant-message"],[3,"instance"],[3,"destroyed","instance"]],template:function(n,t){n&1&&(s(0,"div",0),ie(1,gt,1,1,"nz-message",1,ne),c()),n&2&&(me("top",t.top),le("ant-message-rtl",t.dir==="rtl"),p(),ae(t.instances))},dependencies:[yt],encapsulation:2,changeDetection:0})}return e})(),Ue=(()=>{class e extends j{componentPrefix="message-";success(a,n){return this.createInstance({type:"success",content:a},n)}error(a,n){return this.createInstance({type:"error",content:a},n)}info(a,n){return this.createInstance({type:"info",content:a},n)}warning(a,n){return this.createInstance({type:"warning",content:a},n)}loading(a,n){return this.createInstance({type:"loading",content:a},n)}create(a,n,t){return this.createInstance({type:a,content:n},t)}createInstance(a,n){return this.container=this.withContainer(Et),this.container.create($(D({},a),{createdAt:new Date,messageId:this.getInstanceId(),options:n}))}static \u0275fac=(()=>{let a;return function(t){return(a||(a=G(e)))(t||e)}})();static \u0275prov=Z({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var Xe=`<!-- DEMO START -->
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
`;var je=`import { Component, inject } from '@angular/core';
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
`;var I=(()=>{let o=class o{constructor(){this.msg=v(Ue),this.html=Xe,this.component=je,this.options={backgroundColor:"#2c343c",title:{text:"Customized Pie",left:"center",top:20,textStyle:{color:"#ccc"}},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},visualMap:{show:!1,min:80,max:600,inRange:{colorLightness:[0,1]}},series:[{name:"Counters",type:"pie",radius:"55%",center:["50%","50%"],data:[{value:335,name:"C-1"},{value:310,name:"C-2"},{value:274,name:"C-3"},{value:235,name:"C-4"},{value:400,name:"C-5"}].sort((n,t)=>n.value-t.value),roseType:"radius",label:{color:"rgba(255, 255, 255, 0.3)"},labelLine:{lineStyle:{color:"rgba(255, 255, 255, 0.3)"},smooth:.2,length:10,length2:20},itemStyle:{color:"#c23531",shadowBlur:200,shadowColor:"rgba(0, 0, 0, 0.5)"},animationType:"scale",animationEasing:"elasticOut",animationDelay:()=>Math.random()*200}]}}onChartInit(n){this.chartInstance=n,console.log("on chart init:",n)}callMethod(n){if(this.chartInstance){let t=this.chartInstance[n]();this.msg.info(`${n}(): ${t||"void"}`),console.log(t)}}};o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=h({type:o,selectors:[["app-basic-instance"]],decls:13,vars:3,consts:[[1,"button-groups"],["nz-button","","nzType","default",3,"click"],["echarts","",1,"demo-chart",3,"chartInit","options"],[3,"html","component"]],template:function(t,i){t&1&&(s(0,"div",0)(1,"button",1),u("click",function(){return i.callMethod("getWidth")}),f(2,"getWidth()"),c(),s(3,"button",1),u("click",function(){return i.callMethod("getHeight")}),f(4,"getHeight()"),c(),s(5,"button",1),u("click",function(){return i.callMethod("getDom")}),f(6,"getDom()"),c(),s(7,"button",1),u("click",function(){return i.callMethod("getOption")}),f(8,"getOption()"),c(),s(9,"button",1),u("click",function(){return i.callMethod("clear")}),f(10,"clear()"),c()(),s(11,"div",2),u("chartInit",function(d){return i.onChartInit(d)}),c(),m(12,"app-code-block",3)),t&2&&(p(11),l("options",i.options),p(),l("html",i.html)("component",i.component))},dependencies:[E,T,g,C],encapsulation:2});let e=o;return e})();var $e=`<!-- DEMO START -->
<div class="button-groups">
  <button (click)="isLoading = !isLoading" nz-button nzType="default">Toggle Loading</button>
</div>
<div echarts [options]="options" [loading]="isLoading" theme="macarons" class="demo-chart"></div>
<!-- DEMO END -->

<app-code-block [html]="html" [component]="component"> </app-code-block>
`;var He=`import { Component } from '@angular/core';
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
`;var w=(()=>{let o=class o{constructor(){this.html=$e,this.component=He,this.isLoading=!0,this.options={tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},legend:{data:["X-1","X-2","X-3","X-4","X-5"]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",boundaryGap:!1,data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]}],yAxis:[{type:"value"}],series:[{name:"X-1",type:"line",stack:"counts",areaStyle:{},data:[120,132,101,134,90,230,210]},{name:"X-2",type:"line",stack:"counts",areaStyle:{},data:[220,182,191,234,290,330,310]},{name:"X-3",type:"line",stack:"counts",areaStyle:{},data:[150,232,201,154,190,330,410]},{name:"X-4",type:"line",stack:"counts",areaStyle:{},data:[320,332,301,334,390,330,320]},{name:"X-5",type:"line",stack:"counts",label:{show:!0,position:"top"},areaStyle:{},data:[820,932,901,934,1290,1330,1320]}]}}};o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=h({type:o,selectors:[["app-basic-loading"]],decls:5,vars:4,consts:[[1,"button-groups"],["nz-button","","nzType","default",3,"click"],["echarts","","theme","macarons",1,"demo-chart",3,"options","loading"],[3,"html","component"]],template:function(t,i){t&1&&(s(0,"div",0)(1,"button",1),u("click",function(){return i.isLoading=!i.isLoading}),f(2,"Toggle Loading"),c()(),m(3,"div",2)(4,"app-code-block",3)),t&2&&(p(3),l("options",i.options)("loading",i.isLoading),p(),l("html",i.html)("component",i.component))},dependencies:[E,T,g,C],encapsulation:2});let e=o;return e})();var Ve=`<!-- DEMO START -->
<div echarts [options]="options" class="demo-chart"></div>
<!-- DEMO END -->

<app-code-block [html]="html" [component]="component"> </app-code-block>
`;var Ze=`import { Component, OnInit } from '@angular/core';
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
`;var B=(()=>{let o=class o{constructor(){this.html=Ve,this.component=Ze}ngOnInit(){let n=[],t=[],i=[];for(let r=0;r<100;r++)n.push("category"+r),t.push((Math.sin(r/5)*(r/5-10)+r/6)*5),i.push((Math.cos(r/5)*(r/5-10)+r/6)*5);this.options={legend:{data:["bar","bar2"],align:"left"},tooltip:{},xAxis:{data:n,silent:!1,splitLine:{show:!1}},yAxis:{},series:[{name:"bar",type:"bar",data:t,animationDelay:r=>r*10},{name:"bar2",type:"bar",data:i,animationDelay:r=>r*10+100}],animationEasing:"elasticOut",animationDelayUpdate:r=>r*5}}};o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=h({type:o,selectors:[["app-basic-simple"]],decls:2,vars:3,consts:[["echarts","",1,"demo-chart",3,"options"],[3,"html","component"]],template:function(t,i){t&1&&m(0,"div",0)(1,"app-code-block",1),t&2&&(l("options",i.options),p(),l("html",i.html)("component",i.component))},dependencies:[g,C],encapsulation:2});let e=o;return e})();var Ke={color:["#b21ab4","#6f0099","#2a2073","#0b5ea8","#17aecc","#b3b3ff","#eb99ff","#fae6ff","#e6f2ff","#eeeeee"],title:{fontWeight:"normal",color:"#00aecd"},visualMap:{color:["#00aecd","#a2d4e6"]},toolbox:{color:["#00aecd","#00aecd","#00aecd","#00aecd"]},tooltip:{backgroundColor:"rgba(0,0,0,0.5)",axisPointer:{type:"line",lineStyle:{color:"#00aecd",type:"dashed"},crossStyle:{color:"#00aecd"},shadowStyle:{color:"rgba(200,200,200,0.3)"}}},dataZoom:{dataBackgroundColor:"#eee",fillerColor:"rgba(144,197,237,0.2)",handleColor:"#00aecd"},timeline:{lineStyle:{color:"#00aecd"},controlStyle:{color:"#00aecd",borderColor:"00aecd"}},candlestick:{itemStyle:{color:"#00aecd",color0:"#a2d4e6"},lineStyle:{width:1,color:"#00aecd",color0:"#a2d4e6"},areaStyle:{color:"#b21ab4",color0:"#0b5ea8"}},chord:{padding:4,itemStyle:{color:"#b21ab4",borderWidth:1,borderColor:"rgba(128, 128, 128, 0.5)"},lineStyle:{color:"rgba(128, 128, 128, 0.5)"},areaStyle:{color:"#0b5ea8"}},graph:{itemStyle:{color:"#b21ab4"},linkStyle:{color:"#2a2073"}},map:{itemStyle:{color:"#c12e34"},areaStyle:{color:"#ddd"},label:{color:"#c12e34"}},gauge:{axisLine:{lineStyle:{color:[[.2,"#dddddd"],[.8,"#00aecd"],[1,"#f5ccff"]],width:8}}}};var Ye=`<!-- DEMO START -->
<div class="button-groups">
  <button (click)="theme = undefined" nz-button nzType="default">default</button>
  <button (click)="theme = 'dark'" nz-button nzType="default">dark</button>
  <button (click)="theme = 'macarons'" nz-button nzType="default">macarons(theme file)</button>
  <button (click)="theme = coolTheme" nz-button nzType="default">cool(theme object)</button>
</div>
<div echarts [options]="options" [theme]="theme" class="demo-chart"></div>
<!-- DEMO END -->

<app-code-block [html]="html" [component]="component" [data]="data"> </app-code-block>
`;var Je=`import { Component } from '@angular/core';
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
`;var Qe=`export const CoolTheme = {
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
`;var R=(()=>{let o=class o{constructor(){this.html=Ye,this.component=Je,this.data=Qe,this.coolTheme=Ke,this.options={title:{left:"50%",text:"Nightingale Rose Diagram",subtext:"Mocking Data",textAlign:"center"},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{align:"auto",bottom:10,data:["rose1","rose2","rose3","rose4","rose5","rose6","rose7","rose8"]},calculable:!0,series:[{name:"area",type:"pie",radius:[30,110],roseType:"area",data:[{value:10,name:"rose1"},{value:5,name:"rose2"},{value:15,name:"rose3"},{value:25,name:"rose4"},{value:20,name:"rose5"},{value:35,name:"rose6"},{value:30,name:"rose7"},{value:40,name:"rose8"}]}]}}};o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=h({type:o,selectors:[["app-basic-themes"]],decls:11,vars:5,consts:[[1,"button-groups"],["nz-button","","nzType","default",3,"click"],["echarts","",1,"demo-chart",3,"options","theme"],[3,"html","component","data"]],template:function(t,i){t&1&&(s(0,"div",0)(1,"button",1),u("click",function(){return i.theme=void 0}),f(2,"default"),c(),s(3,"button",1),u("click",function(){return i.theme="dark"}),f(4,"dark"),c(),s(5,"button",1),u("click",function(){return i.theme="macarons"}),f(6,"macarons(theme file)"),c(),s(7,"button",1),u("click",function(){return i.theme=i.coolTheme}),f(8,"cool(theme object)"),c()(),m(9,"div",2)(10,"app-code-block",3)),t&2&&(p(9),l("options",i.options)("theme",i.theme),p(),l("html",i.html)("component",i.component)("data",i.data))},dependencies:[E,T,g,C],encapsulation:2});let e=o;return e})();var qe=`<!-- DEMO START -->
<div echarts [options]="options" [merge]="updateOptions" class="demo-chart"></div>
<!-- DEMO END -->

<app-code-block [html]="html" [component]="component"> </app-code-block>
`;var et=`import { Component, OnInit, OnDestroy } from '@angular/core';
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
`;var A=(()=>{let o=class o{constructor(){this.html=qe,this.component=et,this.oneDay=24*3600*1e3,this.cdr=v(z)}ngOnInit(){this.data=[],this.now=new Date(1997,9,3),this.value=Math.random()*1e3;for(let n=0;n<1e3;n++)this.data.push(this.randomData());this.options={title:{text:"Dynamic Data + Time Axis"},tooltip:{trigger:"axis",formatter:n=>{n=n[0];let t=new Date(n.name);return t.getDate()+"/"+(t.getMonth()+1)+"/"+t.getFullYear()+" : "+n.value[1]},axisPointer:{animation:!1}},xAxis:{type:"time",splitLine:{show:!1}},yAxis:{type:"value",boundaryGap:[0,"100%"],splitLine:{show:!1}},series:[{name:"Mocking Data",type:"line",showSymbol:!1,data:this.data}]},this.timer=setInterval(()=>{for(let n=0;n<5;n++)this.data.shift(),this.data.push(this.randomData());this.updateOptions={series:[{data:this.data}]},this.cdr.detectChanges()},1e3)}ngOnDestroy(){clearInterval(this.timer)}randomData(){return this.now=new Date(this.now.getTime()+this.oneDay),this.value=this.value+Math.random()*21-10,{name:this.now.toString(),value:[[this.now.getFullYear(),this.now.getMonth()+1,this.now.getDate()].join("/"),Math.round(this.value)]}}};o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=h({type:o,selectors:[["app-basic-update"]],decls:2,vars:4,consts:[["echarts","",1,"demo-chart",3,"options","merge"],[3,"html","component"]],template:function(t,i){t&1&&m(0,"div",0)(1,"app-code-block",1),t&2&&(l("options",i.options)("merge",i.updateOptions),p(),l("html",i.html)("component",i.component))},dependencies:[g,C],encapsulation:2});let e=o;return e})();function Bt(e,o){e&1&&m(0,"app-basic-simple")}function Rt(e,o){e&1&&m(0,"app-basic-dataset")}function At(e,o){e&1&&m(0,"app-basic-events")}function Lt(e,o){e&1&&m(0,"app-basic-themes")}function Gt(e,o){e&1&&m(0,"app-basic-loading")}function Ft(e,o){e&1&&m(0,"app-basic-update")}function Wt(e,o){e&1&&m(0,"app-basic-init-opts")}function Pt(e,o){e&1&&m(0,"app-basic-instance")}var L=(()=>{let o=class o{constructor(){}};o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=h({type:o,selectors:[["app-basic"]],decls:25,vars:1,consts:[["nzTitle","Getting Started"],["nz-page-header-breadcrumb",""],["routerLink","/welcome"],[2,"margin-top","8px",3,"nzTabPosition"],["nzTitle","Simple Chart"],["nz-tab",""],["nzTitle","Dataset"],["nzTitle","Events"],["nzTitle","[theme]"],["nzTitle","[loading]"],["nzTitle","[merge]"],["nzTitle","[initOpts]"],["nzTitle","ECharts Instance"]],template:function(t,i){t&1&&(s(0,"nz-page-header",0)(1,"nz-breadcrumb",1)(2,"nz-breadcrumb-item")(3,"a",2),f(4,"Home"),c()(),s(5,"nz-breadcrumb-item"),f(6,"Getting Started"),c()()(),m(7,"nz-divider"),s(8,"nz-tabs",3)(9,"nz-tab",4),b(10,Bt,1,0,"ng-template",5),c(),s(11,"nz-tab",6),b(12,Rt,1,0,"ng-template",5),c(),s(13,"nz-tab",7),b(14,At,1,0,"ng-template",5),c(),s(15,"nz-tab",8),b(16,Lt,1,0,"ng-template",5),c(),s(17,"nz-tab",9),b(18,Gt,1,0,"ng-template",5),c(),s(19,"nz-tab",10),b(20,Ft,1,0,"ng-template",5),c(),s(21,"nz-tab",11),b(22,Wt,1,0,"ng-template",5),c(),s(23,"nz-tab",12),b(24,Pt,1,0,"ng-template",5),c()()),t&2&&(p(8),l("nzTabPosition","left"))},dependencies:[Oe,_e,Ne,Se,fe,Me,Be,we,Ie,B,M,k,R,w,A,N,I],encapsulation:2});let e=o;return e})();var Ut=[{path:"",redirectTo:"basic-usage",pathMatch:"full"},{path:"basic-usage",component:L}],tt=(()=>{let o=class o{};o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=_({type:o}),o.\u0275inj=S({imports:[U.forChild(Ut),U]});let e=o;return e})();var mi=(()=>{let o=class o{};o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=_({type:o}),o.\u0275inj=S({imports:[he,Re,ue,tt,L,B,k,R,w,A,N,I,M]});let e=o;return e})();export{mi as DemoBasicModule};
