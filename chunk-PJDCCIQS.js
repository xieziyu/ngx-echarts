import{b as wt,d as At,e as It}from"./chunk-FABETXFS.js";import{c as y,d as k}from"./chunk-RQR4QM2M.js";import{a as v}from"./chunk-GTFRDNZ3.js";import{a as b,c as xt,i as nt,j as Bt,k as Ot,n as at,p as g,u as it,v as ne}from"./chunk-LHKDU3S5.js";import{Aa as Ct,Ba as yt,Ca as p,Da as l,Ea as c,Fa as m,H as lt,Ja as j,Kb as et,L as pt,La as d,M as T,N as Q,Na as M,Ob as Et,P as r,Ra as Y,S as I,Sa as J,T as R,Ta as tt,V as B,Vb as Mt,W as dt,Wa as G,Y as ht,Ya as u,Zb as Dt,_ as ut,_a as w,_b as St,a as E,ba as ft,fa as s,fc as Tt,gc as ot,ha as K,ia as bt,ib as F,k as x,o as mt,oa as h,pa as O,qa as N,qb as kt,ra as vt,sa as gt,wa as _t,xa as L,ya as P}from"./chunk-G2O2MX4B.js";var Rt=`<!-- DEMO START -->
<div class="button-groups">
  <button (click)="RandomDataset()" mat-stroked-button>Random Dataset</button>
</div>
<div
  echarts
  [options]="options"
  [merge]="mergeOptions"
  [theme]="themeService.echartsTheme()"
  class="demo-chart"></div>
<!-- DEMO END -->

<app-code-block [html]="html" [component]="component"> </app-code-block>
`;var Nt=`import { Component, inject } from '@angular/core';
import type { EChartsCoreOption } from 'echarts/core';
// IGNORE START
import { MatButtonModule } from '@angular/material/button';
import { NgxEchartsDirective } from 'ngx-echarts';
import { CodeBlockComponent } from '../../../../shared/code-block/code-block.component';
import { ThemeService } from '../../../../services/theme.service';
import html from './basic-dataset.component.html';
import component from './basic-dataset.component.txt';
// IGNORE END

@Component({
  selector: 'app-basic-dataset',
  templateUrl: './basic-dataset.component.html',
  styleUrls: ['./basic-dataset.component.scss'],
  imports: [MatButtonModule, NgxEchartsDirective, CodeBlockComponent],
})
export class BasicDatasetComponent {
  // IGNORE START
  html = html;
  component = component;
  // IGNORE END
  readonly themeService = inject(ThemeService);
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
`;var U=(()=>{class n{constructor(){this.html=Rt,this.component=Nt,this.themeService=r(g),this.options={legend:{},tooltip:{},dataset:{source:[["product","2015","2016","2017"],["Matcha Latte",43.3,85.8,93.7],["Milk Tea",83.1,73.4,55.1],["Cheese Cocoa",86.4,65.2,82.5],["Walnut Brownie",72.4,53.9,39.1]]},xAxis:{type:"category"},yAxis:{},series:[{type:"bar"},{type:"bar"},{type:"bar"}]}}RandomDataset(){this.mergeOptions={dataset:{source:[["product","2015","2016","2017"],["Matcha Latte",...this.getRandomValues()],["Milk Tea",...this.getRandomValues()],["Cheese Cocoa",...this.getRandomValues()],["Walnut Brownie",...this.getRandomValues()]]}}}getRandomValues(){let e=[];for(let t=0;t<3;t++)e.push(Math.random()*100);return e}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275cmp=h({type:n,selectors:[["app-basic-dataset"]],decls:5,vars:5,consts:[[1,"button-groups"],["mat-stroked-button","",3,"click"],["echarts","",1,"demo-chart",3,"options","merge","theme"],[3,"html","component"]],template:function(t,o){t&1&&(l(0,"div",0)(1,"button",1),d("click",function(){return o.RandomDataset()}),u(2,"Random Dataset"),c()(),m(3,"div",2)(4,"app-code-block",3)),t&2&&(s(3),p("options",o.options)("merge",o.mergeOptions)("theme",o.themeService.echartsTheme()),s(),p("html",o.html)("component",o.component))},dependencies:[k,y,b,v],encapsulation:2})}}return n})();ne();var Lt=`<!-- DEMO START -->
<div
  echarts
  [options]="options"
  [theme]="themeService.echartsTheme()"
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
`;var Pt=`import { Component, OnInit, inject } from '@angular/core';
import type { ECElementEvent, ECharts, EChartsCoreOption } from 'echarts/core';
import type { ECActionEvent } from '../../../../shared/interface';
import LinearGradient from 'zrender/lib/graphic/LinearGradient';
// IGNORE START
import html from './basic-events.component.html';
import component from './basic-events.component.txt';
import { NgxEchartsDirective } from 'ngx-echarts';
import { CodeBlockComponent } from '../../../../shared/code-block/code-block.component';
import { ThemeService } from '../../../../services/theme.service';
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
  readonly themeService = inject(ThemeService);
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
`;var z=(()=>{class n{constructor(){this.html=Lt,this.component=Pt,this.themeService=r(g)}ngOnInit(){let e=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T"],t=[220,182,191,234,290,330,310,123,442,321,90,149,210,122,133,334,198,123,125,220],o=500,a=[];for(let i=0;i<t.length;i++)a.push(o);this.options={title:{text:"Check Console for Events"},xAxis:{data:e,axisLabel:{inside:!0,color:"#fff"},axisTick:{show:!1},axisLine:{show:!1},z:10},yAxis:{axisLine:{show:!1},axisTick:{show:!1},axisLabel:{color:"#999"}},dataZoom:[{type:"inside"}],series:[{type:"bar",itemStyle:{color:"rgba(0,0,0,0.05)"},barGap:"-100%",barCategoryGap:"40%",data:a,animation:!1},{type:"bar",itemStyle:{color:new it(0,0,0,1,[{offset:0,color:"#83bff6"},{offset:.5,color:"#188df0"},{offset:1,color:"#188df0"}])},emphasis:{itemStyle:{color:new it(0,0,0,1,[{offset:0,color:"#2378f7"},{offset:.7,color:"#2378f7"},{offset:1,color:"#83bff6"}])}},data:t}]}}onChartEvent(e,t){console.log("chart event:",t,e)}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275cmp=h({type:n,selectors:[["app-basic-events"]],decls:2,vars:4,consts:[["echarts","",1,"demo-chart",3,"chartInit","chartClick","chartDblClick","chartMouseDown","chartMouseUp","chartMouseOver","chartMouseOut","chartGlobalOut","chartContextMenu","chartDataZoom","options","theme"],[3,"html","component"]],template:function(t,o){t&1&&(l(0,"div",0),d("chartInit",function(i){return o.onChartEvent(i,"chartInit")})("chartClick",function(i){return o.onChartEvent(i,"chartClick")})("chartDblClick",function(i){return o.onChartEvent(i,"chartDblClick")})("chartMouseDown",function(i){return o.onChartEvent(i,"chartMouseDown")})("chartMouseUp",function(i){return o.onChartEvent(i,"chartMouseUp")})("chartMouseOver",function(i){return o.onChartEvent(i,"chartMouseOver")})("chartMouseOut",function(i){return o.onChartEvent(i,"chartMouseOut")})("chartGlobalOut",function(i){return o.onChartEvent(i,"chartGlobalOut")})("chartContextMenu",function(i){return o.onChartEvent(i,"chartContextMenu")})("chartDataZoom",function(i){return o.onChartEvent(i,"chartDataZoom")}),c(),m(1,"app-code-block",1)),t&2&&(p("options",o.options)("theme",o.themeService.echartsTheme()),s(),p("html",o.html)("component",o.component))},dependencies:[b,v],encapsulation:2})}}return n})();var jt=`<!-- DEMO START -->
<echarts [initOpts]="initOpts" [options]="options" [theme]="themeService.echartsTheme()"></echarts>
<!-- DEMO END -->

<app-code-block [html]="html" [component]="component"> </app-code-block>
`;var Gt=`import { Component, inject } from '@angular/core';
import type { EChartsCoreOption } from 'echarts/core';
// IGNORE START
import html from './basic-init-opts.component.html';
import component from './basic-init-opts.component.txt';
import { NgxEchartsDirective } from 'ngx-echarts';
import { CodeBlockComponent } from '../../../../shared/code-block/code-block.component';
import { ThemeService } from '../../../../services/theme.service';
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
  readonly themeService = inject(ThemeService);
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
`;var V=(()=>{class n{constructor(){this.html=jt,this.component=Gt,this.themeService=r(g),this.initOpts={renderer:"svg",width:300,height:300},this.options={color:["#3398DB"],tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],axisTick:{alignWithLabel:!0}}],yAxis:[{type:"value"}],series:[{name:"Counters",type:"bar",barWidth:"60%",data:[10,52,200,334,390,330,220]}]}}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275cmp=h({type:n,selectors:[["app-basic-init-opts"]],decls:2,vars:5,consts:[[3,"initOpts","options","theme"],[3,"html","component"]],template:function(t,o){t&1&&m(0,"echarts",0)(1,"app-code-block",1),t&2&&(p("initOpts",o.initOpts)("options",o.options)("theme",o.themeService.echartsTheme()),s(),p("html",o.html)("component",o.component))},dependencies:[b,v],encapsulation:2})}}return n})();function le(n,f){if(n&1){let e=j();l(0,"div",1)(1,"button",2),d("click",function(){I(e);let o=M();return R(o.action())}),u(2),c()()}if(n&2){let e=M();s(2),w(" ",e.data.action," ")}}var pe=["label"];function de(n,f){}var he=Math.pow(2,31)-1,A=class{_overlayRef;instance;containerInstance;_afterDismissed=new x;_afterOpened=new x;_onAction=new x;_durationTimeoutId;_dismissedByAction=!1;constructor(f,e){this._overlayRef=e,this.containerInstance=f,f._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(f){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(f,he))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}},Ft=new Q("MatSnackBarData"),D=class{politeness="polite";announcementMessage="";viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition="center";verticalPosition="bottom"},ue=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=N({type:n,selectors:[["","matSnackBarLabel",""]],hostAttrs:[1,"mat-mdc-snack-bar-label","mdc-snackbar__label"]})}return n})(),fe=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=N({type:n,selectors:[["","matSnackBarActions",""]],hostAttrs:[1,"mat-mdc-snack-bar-actions","mdc-snackbar__actions"]})}return n})(),be=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=N({type:n,selectors:[["","matSnackBarAction",""]],hostAttrs:[1,"mat-mdc-snack-bar-action","mdc-snackbar__action"]})}return n})(),ve=(()=>{class n{snackBarRef=r(A);data=r(Ft);constructor(){}action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=h({type:n,selectors:[["simple-snack-bar"]],hostAttrs:[1,"mat-mdc-simple-snack-bar"],exportAs:["matSnackBar"],decls:3,vars:2,consts:[["matSnackBarLabel",""],["matSnackBarActions",""],["matButton","","matSnackBarAction","",3,"click"]],template:function(t,o){t&1&&(l(0,"div",0),u(1),c(),L(2,le,3,1,"div",1)),t&2&&(s(),w(" ",o.data.message,`
`),s(),P(o.hasAction?2:-1))},dependencies:[y,ue,fe,be],styles:[`.mat-mdc-simple-snack-bar{display:flex}.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label{max-height:50vh;overflow:auto}
`],encapsulation:2,changeDetection:0})}return n})(),st="_mat-snack-bar-enter",ct="_mat-snack-bar-exit",ge=(()=>{class n extends Ot{_ngZone=r(ht);_elementRef=r(ft);_changeDetectorRef=r(F);_platform=r(Et);_animationsDisabled=ot();snackBarConfig=r(D);_document=r(dt);_trackedModals=new Set;_enterFallback;_exitFallback;_injector=r(B);_announceDelay=150;_announceTimeoutId;_destroyed=!1;_portalOutlet;_onAnnounce=new x;_onExit=new x;_onEnter=new x;_animationState="void";_live;_label;_role;_liveElementId=r(St).getId("mat-snack-bar-container-live-");constructor(){super();let e=this.snackBarConfig;e.politeness==="assertive"&&!e.announcementMessage?this._live="assertive":e.politeness==="off"?this._live="off":this._live="polite",this._platform.FIREFOX&&(this._live==="polite"&&(this._role="status"),this._live==="assertive"&&(this._role="alert"))}attachComponentPortal(e){this._assertNotAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._afterPortalAttached(),t}attachTemplatePortal(e){this._assertNotAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._afterPortalAttached(),t}attachDomPortal=e=>{this._assertNotAttached();let t=this._portalOutlet.attachDomPortal(e);return this._afterPortalAttached(),t};onAnimationEnd(e){e===ct?this._completeExit():e===st&&(clearTimeout(this._enterFallback),this._ngZone.run(()=>{this._onEnter.next(),this._onEnter.complete()}))}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce(),this._animationsDisabled?K(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(st)))},{injector:this._injector}):(clearTimeout(this._enterFallback),this._enterFallback=setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-snack-bar-fallback-visible"),this.onAnimationEnd(st)},200)))}exit(){return this._destroyed?mt(void 0):(this._ngZone.run(()=>{this._animationState="hidden",this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute("mat-exit",""),clearTimeout(this._announceTimeoutId),this._animationsDisabled?K(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(ct)))},{injector:this._injector}):(clearTimeout(this._exitFallback),this._exitFallback=setTimeout(()=>this.onAnimationEnd(ct),200))}),this._onExit)}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){clearTimeout(this._exitFallback),queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let e=this._elementRef.nativeElement,t=this.snackBarConfig.panelClass;t&&(Array.isArray(t)?t.forEach(i=>e.classList.add(i)):e.classList.add(t)),this._exposeToModals();let o=this._label.nativeElement,a="mdc-snackbar__label";o.classList.toggle(a,!o.querySelector(`.${a}`))}_exposeToModals(){let e=this._liveElementId,t=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let o=0;o<t.length;o++){let a=t[o],i=a.getAttribute("aria-owns");this._trackedModals.add(a),i?i.indexOf(e)===-1&&a.setAttribute("aria-owns",i+" "+e):a.setAttribute("aria-owns",e)}}_clearFromModals(){this._trackedModals.forEach(e=>{let t=e.getAttribute("aria-owns");if(t){let o=t.replace(this._liveElementId,"").trim();o.length>0?e.setAttribute("aria-owns",o):e.removeAttribute("aria-owns")}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{if(this._destroyed)return;let e=this._elementRef.nativeElement,t=e.querySelector("[aria-hidden]"),o=e.querySelector("[aria-live]");if(t&&o){let a=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&t.contains(document.activeElement)&&(a=document.activeElement),t.removeAttribute("aria-hidden"),o.appendChild(t),a?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=h({type:n,selectors:[["mat-snack-bar-container"]],viewQuery:function(t,o){if(t&1&&(Y(at,7),Y(pe,7)),t&2){let a;J(a=tt())&&(o._portalOutlet=a.first),J(a=tt())&&(o._label=a.first)}},hostAttrs:[1,"mdc-snackbar","mat-mdc-snack-bar-container"],hostVars:6,hostBindings:function(t,o){t&1&&d("animationend",function(i){return o.onAnimationEnd(i.animationName)})("animationcancel",function(i){return o.onAnimationEnd(i.animationName)}),t&2&&G("mat-snack-bar-container-enter",o._animationState==="visible")("mat-snack-bar-container-exit",o._animationState==="hidden")("mat-snack-bar-container-animations-enabled",!o._animationsDisabled)},features:[vt],decls:6,vars:3,consts:[["label",""],[1,"mdc-snackbar__surface","mat-mdc-snackbar-surface"],[1,"mat-mdc-snack-bar-label"],["aria-hidden","true"],["cdkPortalOutlet",""]],template:function(t,o){t&1&&(l(0,"div",1)(1,"div",2,0)(3,"div",3),gt(4,de,0,0,"ng-template",4),c(),m(5,"div"),c()()),t&2&&(s(5),_t("aria-live",o._live)("role",o._role)("id",o._liveElementId))},dependencies:[at],styles:[`@keyframes _mat-snack-bar-enter{from{transform:scale(0.8);opacity:0}to{transform:scale(1);opacity:1}}@keyframes _mat-snack-bar-exit{from{opacity:1}to{opacity:0}}.mat-mdc-snack-bar-container{display:flex;align-items:center;justify-content:center;box-sizing:border-box;-webkit-tap-highlight-color:rgba(0,0,0,0);margin:8px}.mat-mdc-snack-bar-handset .mat-mdc-snack-bar-container{width:100vw}.mat-snack-bar-container-animations-enabled{opacity:0}.mat-snack-bar-container-animations-enabled.mat-snack-bar-fallback-visible{opacity:1}.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-enter{animation:_mat-snack-bar-enter 150ms cubic-bezier(0, 0, 0.2, 1) forwards}.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-exit{animation:_mat-snack-bar-exit 75ms cubic-bezier(0.4, 0, 1, 1) forwards}.mat-mdc-snackbar-surface{box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);display:flex;align-items:center;justify-content:flex-start;box-sizing:border-box;padding-left:0;padding-right:8px}[dir=rtl] .mat-mdc-snackbar-surface{padding-right:0;padding-left:8px}.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface{min-width:344px;max-width:672px}.mat-mdc-snack-bar-handset .mat-mdc-snackbar-surface{width:100%;min-width:0}@media(forced-colors: active){.mat-mdc-snackbar-surface{outline:solid 1px}}.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface{color:var(--mat-snack-bar-supporting-text-color, var(--mat-sys-inverse-on-surface));border-radius:var(--mat-snack-bar-container-shape, var(--mat-sys-corner-extra-small));background-color:var(--mat-snack-bar-container-color, var(--mat-sys-inverse-surface))}.mdc-snackbar__label{width:100%;flex-grow:1;box-sizing:border-box;margin:0;padding:14px 8px 14px 16px}[dir=rtl] .mdc-snackbar__label{padding-left:8px;padding-right:16px}.mat-mdc-snack-bar-container .mdc-snackbar__label{font-family:var(--mat-snack-bar-supporting-text-font, var(--mat-sys-body-medium-font));font-size:var(--mat-snack-bar-supporting-text-size, var(--mat-sys-body-medium-size));font-weight:var(--mat-snack-bar-supporting-text-weight, var(--mat-sys-body-medium-weight));line-height:var(--mat-snack-bar-supporting-text-line-height, var(--mat-sys-body-medium-line-height))}.mat-mdc-snack-bar-actions{display:flex;flex-shrink:0;align-items:center;box-sizing:border-box}.mat-mdc-snack-bar-handset,.mat-mdc-snack-bar-container,.mat-mdc-snack-bar-label{flex:1 1 auto}.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled){--mat-button-text-state-layer-color: currentColor;--mat-button-text-ripple-color: currentColor}.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled).mat-unthemed{color:var(--mat-snack-bar-button-color, var(--mat-sys-inverse-primary))}.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element{opacity:.1}
`],encapsulation:2})}return n})(),_e=new Q("mat-snack-bar-default-options",{providedIn:"root",factory:()=>new D}),Ut=(()=>{class n{_live=r(Dt);_injector=r(B);_breakpointObserver=r(Mt);_parentSnackBar=r(n,{optional:!0,skipSelf:!0});_defaultConfig=r(_e);_animationsDisabled=ot();_snackBarRefAtThisLevel=null;simpleSnackBarComponent=ve;snackBarContainerComponent=ge;handsetCssClass="mat-mdc-snack-bar-handset";get _openedSnackBarRef(){let e=this._parentSnackBar;return e?e._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(e){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=e:this._snackBarRefAtThisLevel=e}constructor(){}openFromComponent(e,t){return this._attach(e,t)}openFromTemplate(e,t){return this._attach(e,t)}open(e,t="",o){let a=E(E({},this._defaultConfig),o);return a.data={message:e,action:t},a.announcementMessage===e&&(a.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,a)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(e,t){let o=t&&t.viewContainerRef&&t.viewContainerRef.injector,a=B.create({parent:o||this._injector,providers:[{provide:D,useValue:t}]}),i=new nt(this.snackBarContainerComponent,t.viewContainerRef,a),_=e.attach(i);return _.instance.snackBarConfig=t,_.instance}_attach(e,t){let o=E(E(E({},new D),this._defaultConfig),t),a=this._createOverlay(o),i=this._attachSnackBarContainer(a,o),_=new A(i,a);if(e instanceof bt){let S=new Bt(e,null,{$implicit:o.data,snackBarRef:_});_.instance=i.attachTemplatePortal(S)}else{let S=this._createInjector(o,_),ee=new nt(e,void 0,S),oe=i.attachComponentPortal(ee);_.instance=oe.instance}return this._breakpointObserver.observe(Tt.HandsetPortrait).pipe(lt(a.detachments())).subscribe(S=>{a.overlayElement.classList.toggle(this.handsetCssClass,S.matches)}),o.announcementMessage&&i._onAnnounce.subscribe(()=>{this._live.announce(o.announcementMessage,o.politeness)}),this._animateSnackBar(_,o),this._openedSnackBarRef=_,this._openedSnackBarRef}_animateSnackBar(e,t){e.afterDismissed().subscribe(()=>{this._openedSnackBarRef==e&&(this._openedSnackBarRef=null),t.announcementMessage&&this._live.clear()}),t.duration&&t.duration>0&&e.afterOpened().subscribe(()=>e._dismissAfter(t.duration)),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{e.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):e.containerInstance.enter()}_createOverlay(e){let t=new wt;t.direction=e.direction;let o=At(this._injector),a=e.direction==="rtl",i=e.horizontalPosition==="left"||e.horizontalPosition==="start"&&!a||e.horizontalPosition==="end"&&a,_=!i&&e.horizontalPosition!=="center";return i?o.left("0"):_?o.right("0"):o.centerHorizontally(),e.verticalPosition==="top"?o.top("0"):o.bottom("0"),t.positionStrategy=o,t.disableAnimations=this._animationsDisabled,It(this._injector,t)}_createInjector(e,t){let o=e&&e.viewContainerRef&&e.viewContainerRef.injector;return B.create({parent:o||this._injector,providers:[{provide:A,useValue:t},{provide:Ft,useValue:e.data}]})}static \u0275fac=function(t){return new(t||n)};static \u0275prov=pt({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var zt=`<!-- DEMO START -->
<div class="button-groups">
  <button (click)="callMethod('getWidth')" mat-stroked-button>getWidth()</button>
  <button (click)="callMethod('getHeight')" mat-stroked-button>getHeight()</button>
  <button (click)="callMethod('getDom')" mat-stroked-button>getDom()</button>
  <button (click)="callMethod('getOption')" mat-stroked-button>getOption()</button>
  <button (click)="callMethod('clear')" mat-stroked-button>clear()</button>
</div>
<div
  echarts
  (chartInit)="onChartInit($event)"
  [options]="options"
  [theme]="themeService.echartsTheme()"
  class="demo-chart"></div>
<!-- DEMO END -->

<app-code-block [html]="html" [component]="component"> </app-code-block>
`;var Vt=`import { Component, inject } from '@angular/core';
import type { ECharts, EChartsCoreOption } from 'echarts/core';
import { MatSnackBar } from '@angular/material/snack-bar';
// IGNORE START
import { MatButtonModule } from '@angular/material/button';
import { NgxEchartsDirective } from 'ngx-echarts';
import { CodeBlockComponent } from '../../../../shared/code-block/code-block.component';
import { ThemeService } from '../../../../services/theme.service';
import html from './basic-instance.component.html';
import component from './basic-instance.component.txt';
// IGNORE END

@Component({
  selector: 'app-basic-instance',
  templateUrl: './basic-instance.component.html',
  styleUrls: ['./basic-instance.component.scss'],
  imports: [MatButtonModule, NgxEchartsDirective, CodeBlockComponent],
})
export class BasicInstanceComponent {
  private snackBar = inject(MatSnackBar);
  readonly themeService = inject(ThemeService);

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
      this.snackBar.open(\`\${type}(): \${result || 'void'}\`, 'OK', { duration: 3000 });
      console.log(result);
    }
  }
}
`;var W=(()=>{class n{constructor(){this.snackBar=r(Ut),this.themeService=r(g),this.html=zt,this.component=Vt,this.options={backgroundColor:"#2c343c",title:{text:"Customized Pie",left:"center",top:20,textStyle:{color:"#ccc"}},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},visualMap:{show:!1,min:80,max:600,inRange:{colorLightness:[0,1]}},series:[{name:"Counters",type:"pie",radius:"55%",center:["50%","50%"],data:[{value:335,name:"C-1"},{value:310,name:"C-2"},{value:274,name:"C-3"},{value:235,name:"C-4"},{value:400,name:"C-5"}].sort((e,t)=>e.value-t.value),roseType:"radius",label:{color:"rgba(255, 255, 255, 0.3)"},labelLine:{lineStyle:{color:"rgba(255, 255, 255, 0.3)"},smooth:.2,length:10,length2:20},itemStyle:{color:"#c23531",shadowBlur:200,shadowColor:"rgba(0, 0, 0, 0.5)"},animationType:"scale",animationEasing:"elasticOut",animationDelay:()=>Math.random()*200}]}}onChartInit(e){this.chartInstance=e,console.log("on chart init:",e)}callMethod(e){if(this.chartInstance){let t=this.chartInstance[e]();this.snackBar.open(`${e}(): ${t||"void"}`,"OK",{duration:3e3}),console.log(t)}}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275cmp=h({type:n,selectors:[["app-basic-instance"]],decls:13,vars:4,consts:[[1,"button-groups"],["mat-stroked-button","",3,"click"],["echarts","",1,"demo-chart",3,"chartInit","options","theme"],[3,"html","component"]],template:function(t,o){t&1&&(l(0,"div",0)(1,"button",1),d("click",function(){return o.callMethod("getWidth")}),u(2,"getWidth()"),c(),l(3,"button",1),d("click",function(){return o.callMethod("getHeight")}),u(4,"getHeight()"),c(),l(5,"button",1),d("click",function(){return o.callMethod("getDom")}),u(6,"getDom()"),c(),l(7,"button",1),d("click",function(){return o.callMethod("getOption")}),u(8,"getOption()"),c(),l(9,"button",1),d("click",function(){return o.callMethod("clear")}),u(10,"clear()"),c()(),l(11,"div",2),d("chartInit",function(i){return o.onChartInit(i)}),c(),m(12,"app-code-block",3)),t&2&&(s(11),p("options",o.options)("theme",o.themeService.echartsTheme()),s(),p("html",o.html)("component",o.component))},dependencies:[k,y,b,v],encapsulation:2})}}return n})();var Wt=`<!-- DEMO START -->
<div class="button-groups">
  <button (click)="isLoading = !isLoading" mat-stroked-button>Toggle Loading</button>
</div>
<div echarts [options]="options" [loading]="isLoading" theme="macarons" class="demo-chart"></div>
<!-- DEMO END -->

<app-code-block [html]="html" [component]="component"> </app-code-block>
`;var Xt=`import { Component } from '@angular/core';
import type { EChartsCoreOption } from 'echarts/core';
// IGNORE START
import { MatButtonModule } from '@angular/material/button';
import { NgxEchartsDirective } from 'ngx-echarts';
import { CodeBlockComponent } from '../../../../shared/code-block/code-block.component';
import html from './basic-loading.component.html';
import component from './basic-loading.component.txt';
// IGNORE END

@Component({
  selector: 'app-basic-loading',
  templateUrl: './basic-loading.component.html',
  styleUrls: ['./basic-loading.component.scss'],
  imports: [MatButtonModule, NgxEchartsDirective, CodeBlockComponent],
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
`;var X=(()=>{class n{constructor(){this.html=Wt,this.component=Xt,this.isLoading=!0,this.options={tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},legend:{data:["X-1","X-2","X-3","X-4","X-5"]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",boundaryGap:!1,data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]}],yAxis:[{type:"value"}],series:[{name:"X-1",type:"line",stack:"counts",areaStyle:{},data:[120,132,101,134,90,230,210]},{name:"X-2",type:"line",stack:"counts",areaStyle:{},data:[220,182,191,234,290,330,310]},{name:"X-3",type:"line",stack:"counts",areaStyle:{},data:[150,232,201,154,190,330,410]},{name:"X-4",type:"line",stack:"counts",areaStyle:{},data:[320,332,301,334,390,330,320]},{name:"X-5",type:"line",stack:"counts",label:{show:!0,position:"top"},areaStyle:{},data:[820,932,901,934,1290,1330,1320]}]}}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275cmp=h({type:n,selectors:[["app-basic-loading"]],decls:5,vars:4,consts:[[1,"button-groups"],["mat-stroked-button","",3,"click"],["echarts","","theme","macarons",1,"demo-chart",3,"options","loading"],[3,"html","component"]],template:function(t,o){t&1&&(l(0,"div",0)(1,"button",1),d("click",function(){return o.isLoading=!o.isLoading}),u(2,"Toggle Loading"),c()(),m(3,"div",2)(4,"app-code-block",3)),t&2&&(s(3),p("options",o.options)("loading",o.isLoading),s(),p("html",o.html)("component",o.component))},dependencies:[k,y,b,v],encapsulation:2})}}return n})();var $t=`<!-- DEMO START -->
<div echarts [options]="options" [theme]="themeService.echartsTheme()" class="demo-chart"></div>
<!-- DEMO END -->

<app-code-block [html]="html" [component]="component"> </app-code-block>
`;var Zt=`import { Component, OnInit, inject } from '@angular/core';
import type { EChartsCoreOption } from 'echarts/core';
// IGNORE START
import html from './basic-simple.component.html';
import component from './basic-simple.component.txt';
import { NgxEchartsDirective } from 'ngx-echarts';
import { CodeBlockComponent } from '../../../../shared/code-block/code-block.component';
import { ThemeService } from '../../../../services/theme.service';
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
  readonly themeService = inject(ThemeService);
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
`;var $=(()=>{class n{constructor(){this.html=$t,this.component=Zt,this.themeService=r(g)}ngOnInit(){let e=[],t=[],o=[];for(let a=0;a<100;a++)e.push("category"+a),t.push((Math.sin(a/5)*(a/5-10)+a/6)*5),o.push((Math.cos(a/5)*(a/5-10)+a/6)*5);this.options={legend:{data:["bar","bar2"],align:"left"},tooltip:{},xAxis:{data:e,silent:!1,splitLine:{show:!1}},yAxis:{},series:[{name:"bar",type:"bar",data:t,animationDelay:a=>a*10},{name:"bar2",type:"bar",data:o,animationDelay:a=>a*10+100}],animationEasing:"elasticOut",animationDelayUpdate:a=>a*5}}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275cmp=h({type:n,selectors:[["app-basic-simple"]],decls:2,vars:4,consts:[["echarts","",1,"demo-chart",3,"options","theme"],[3,"html","component"]],template:function(t,o){t&1&&m(0,"div",0)(1,"app-code-block",1),t&2&&(p("options",o.options)("theme",o.themeService.echartsTheme()),s(),p("html",o.html)("component",o.component))},dependencies:[b,v],encapsulation:2})}}return n})();var Ht={color:["#b21ab4","#6f0099","#2a2073","#0b5ea8","#17aecc","#b3b3ff","#eb99ff","#fae6ff","#e6f2ff","#eeeeee"],title:{fontWeight:"normal",color:"#00aecd"},visualMap:{color:["#00aecd","#a2d4e6"]},toolbox:{color:["#00aecd","#00aecd","#00aecd","#00aecd"]},tooltip:{backgroundColor:"rgba(0,0,0,0.5)",axisPointer:{type:"line",lineStyle:{color:"#00aecd",type:"dashed"},crossStyle:{color:"#00aecd"},shadowStyle:{color:"rgba(200,200,200,0.3)"}}},dataZoom:{dataBackgroundColor:"#eee",fillerColor:"rgba(144,197,237,0.2)",handleColor:"#00aecd"},timeline:{lineStyle:{color:"#00aecd"},controlStyle:{color:"#00aecd",borderColor:"00aecd"}},candlestick:{itemStyle:{color:"#00aecd",color0:"#a2d4e6"},lineStyle:{width:1,color:"#00aecd",color0:"#a2d4e6"},areaStyle:{color:"#b21ab4",color0:"#0b5ea8"}},chord:{padding:4,itemStyle:{color:"#b21ab4",borderWidth:1,borderColor:"rgba(128, 128, 128, 0.5)"},lineStyle:{color:"rgba(128, 128, 128, 0.5)"},areaStyle:{color:"#0b5ea8"}},graph:{itemStyle:{color:"#b21ab4"},linkStyle:{color:"#2a2073"}},map:{itemStyle:{color:"#c12e34"},areaStyle:{color:"#ddd"},label:{color:"#c12e34"}},gauge:{axisLine:{lineStyle:{color:[[.2,"#dddddd"],[.8,"#00aecd"],[1,"#f5ccff"]],width:8}}}};var qt=`<!-- DEMO START -->
<div class="button-groups">
  <button (click)="theme = undefined" mat-stroked-button>default</button>
  <button (click)="theme = 'dark'" mat-stroked-button>dark</button>
  <button (click)="theme = 'macarons'" mat-stroked-button>macarons(theme file)</button>
  <button (click)="theme = coolTheme" mat-stroked-button>cool(theme object)</button>
</div>
<div echarts [options]="options" [theme]="theme" class="demo-chart"></div>
<!-- DEMO END -->

<app-code-block [html]="html" [component]="component" [data]="data"> </app-code-block>
`;var Qt=`import { Component } from '@angular/core';
import type { EChartsCoreOption } from 'echarts/core';
import { NgxEchartsDirective, ThemeOption } from 'ngx-echarts';
import { CoolTheme } from './cool-theme';
// IGNORE START
import { MatButtonModule } from '@angular/material/button';
import { CodeBlockComponent } from '../../../../shared/code-block/code-block.component';
import html from './basic-themes.component.html';
import component from './basic-themes.component.txt';
import data from './cool-theme.txt';
// IGNORE END

@Component({
  selector: 'app-basic-themes',
  templateUrl: './basic-themes.component.html',
  styleUrls: ['./basic-themes.component.scss'],
  imports: [MatButtonModule, NgxEchartsDirective, CodeBlockComponent],
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
`;var Kt=`export const CoolTheme = {
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
`;var Z=(()=>{class n{constructor(){this.html=qt,this.component=Qt,this.data=Kt,this.coolTheme=Ht,this.options={title:{left:"50%",text:"Nightingale Rose Diagram",subtext:"Mocking Data",textAlign:"center"},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{align:"auto",bottom:10,data:["rose1","rose2","rose3","rose4","rose5","rose6","rose7","rose8"]},calculable:!0,series:[{name:"area",type:"pie",radius:[30,110],roseType:"area",data:[{value:10,name:"rose1"},{value:5,name:"rose2"},{value:15,name:"rose3"},{value:25,name:"rose4"},{value:20,name:"rose5"},{value:35,name:"rose6"},{value:30,name:"rose7"},{value:40,name:"rose8"}]}]}}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275cmp=h({type:n,selectors:[["app-basic-themes"]],decls:11,vars:5,consts:[[1,"button-groups"],["mat-stroked-button","",3,"click"],["echarts","",1,"demo-chart",3,"options","theme"],[3,"html","component","data"]],template:function(t,o){t&1&&(l(0,"div",0)(1,"button",1),d("click",function(){return o.theme=void 0}),u(2,"default"),c(),l(3,"button",1),d("click",function(){return o.theme="dark"}),u(4,"dark"),c(),l(5,"button",1),d("click",function(){return o.theme="macarons"}),u(6,"macarons(theme file)"),c(),l(7,"button",1),d("click",function(){return o.theme=o.coolTheme}),u(8,"cool(theme object)"),c()(),m(9,"div",2)(10,"app-code-block",3)),t&2&&(s(9),p("options",o.options)("theme",o.theme),s(),p("html",o.html)("component",o.component)("data",o.data))},dependencies:[k,y,b,v],encapsulation:2})}}return n})();var Yt=`<!-- DEMO START -->
<div
  echarts
  [options]="options"
  [merge]="updateOptions"
  [theme]="themeService.echartsTheme()"
  class="demo-chart"></div>
<!-- DEMO END -->

<app-code-block [html]="html" [component]="component"> </app-code-block>
`;var Jt=`import { ChangeDetectorRef, Component, inject, OnDestroy, OnInit } from '@angular/core';
import type { EChartsCoreOption } from 'echarts/core';
// IGNORE START
import { NgxEchartsDirective } from 'ngx-echarts';
import { CodeBlockComponent } from '../../../../shared/code-block/code-block.component';
import { ThemeService } from '../../../../services/theme.service';
import html from './basic-update.component.html';
import component from './basic-update.component.txt';
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
  readonly themeService = inject(ThemeService);
  options: EChartsCoreOption;
  updateOptions: EChartsCoreOption;

  private oneDay = 24 * 3600 * 1000;
  private now: Date;
  private value: number;
  private data: DataT[];
  private timer: any;

  private cdr = inject(ChangeDetectorRef);

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

      // Manually trigger change detection to ensure updates are detected when not using zone.js
      this.cdr.detectChanges();
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
`;var H=(()=>{class n{constructor(){this.html=Yt,this.component=Jt,this.themeService=r(g),this.oneDay=24*3600*1e3,this.cdr=r(F)}ngOnInit(){this.data=[],this.now=new Date(1997,9,3),this.value=Math.random()*1e3;for(let e=0;e<1e3;e++)this.data.push(this.randomData());this.options={title:{text:"Dynamic Data + Time Axis"},tooltip:{trigger:"axis",formatter:e=>{e=e[0];let t=new Date(e.name);return t.getDate()+"/"+(t.getMonth()+1)+"/"+t.getFullYear()+" : "+e.value[1]},axisPointer:{animation:!1}},xAxis:{type:"time",splitLine:{show:!1}},yAxis:{type:"value",boundaryGap:[0,"100%"],splitLine:{show:!1}},series:[{name:"Mocking Data",type:"line",showSymbol:!1,data:this.data}]},this.timer=setInterval(()=>{for(let e=0;e<5;e++)this.data.shift(),this.data.push(this.randomData());this.updateOptions={series:[{data:this.data}]},this.cdr.detectChanges()},1e3)}ngOnDestroy(){clearInterval(this.timer)}randomData(){return this.now=new Date(this.now.getTime()+this.oneDay),this.value=this.value+Math.random()*21-10,{name:this.now.toString(),value:[[this.now.getFullYear(),this.now.getMonth()+1,this.now.getDate()].join("/"),Math.round(this.value)]}}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275cmp=h({type:n,selectors:[["app-basic-update"]],decls:2,vars:5,consts:[["echarts","",1,"demo-chart",3,"options","merge","theme"],[3,"html","component"]],template:function(t,o){t&1&&m(0,"div",0)(1,"app-code-block",1),t&2&&(p("options",o.options)("merge",o.updateOptions)("theme",o.themeService.echartsTheme()),s(),p("html",o.html)("component",o.component))},dependencies:[b,v],encapsulation:2})}}return n})();var we=(n,f)=>f.label;function Ae(n,f){if(n&1){let e=j();l(0,"button",4),d("click",function(){let o=I(e).$index,a=M();return R(a.selectedIndex.set(o))}),u(1),c()}if(n&2){let e=f.$implicit,t=f.$index,o=M();G("active",o.selectedIndex()===t),s(),w(" ",e.label," ")}}function Ie(n,f){n&1&&m(0,"app-basic-simple")}function Re(n,f){n&1&&m(0,"app-basic-dataset")}function Ne(n,f){n&1&&m(0,"app-basic-events")}function Le(n,f){n&1&&m(0,"app-basic-themes")}function Pe(n,f){n&1&&m(0,"app-basic-loading")}function je(n,f){n&1&&m(0,"app-basic-update")}function Ge(n,f){n&1&&m(0,"app-basic-init-opts")}function Fe(n,f){n&1&&m(0,"app-basic-instance")}var q=(()=>{class n{constructor(){this.selectedIndex=ut(0),this.tabs=[{label:"Simple Chart"},{label:"Dataset"},{label:"Events"},{label:"[theme]"},{label:"[loading]"},{label:"[merge]"},{label:"[initOpts]"},{label:"ECharts Instance"}]}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275cmp=h({type:n,selectors:[["app-basic"]],decls:13,vars:1,consts:[[1,"demo-layout"],[1,"demo-sidebar"],[3,"active"],[1,"demo-content"],[3,"click"]],template:function(t,o){if(t&1&&(l(0,"div",0)(1,"nav",1),Ct(2,Ae,2,3,"button",2,we),c(),l(4,"div",3),L(5,Ie,1,0,"app-basic-simple")(6,Re,1,0,"app-basic-dataset")(7,Ne,1,0,"app-basic-events")(8,Le,1,0,"app-basic-themes")(9,Pe,1,0,"app-basic-loading")(10,je,1,0,"app-basic-update")(11,Ge,1,0,"app-basic-init-opts")(12,Fe,1,0,"app-basic-instance"),c()()),t&2){let a;s(2),yt(o.tabs),s(3),P((a=o.selectedIndex())===0?5:a===1?6:a===2?7:a===3?8:a===4?9:a===5?10:a===6?11:a===7?12:-1)}},dependencies:[$,U,z,Z,X,H,V,W],styles:[".demo-layout[_ngcontent-%COMP%]{display:flex;min-height:600px}.demo-sidebar[_ngcontent-%COMP%]{width:200px;flex-shrink:0;border-right:1px solid var(--app-border);background:var(--app-surface);display:flex;flex-direction:column;padding:8px 0}.demo-sidebar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{all:unset;box-sizing:border-box;padding:10px 20px;cursor:pointer;font-size:14px;color:var(--mat-sys-on-surface);border-left:3px solid transparent;transition:background-color .15s,border-color .15s,color .15s}.demo-sidebar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:var(--app-glow);color:var(--app-accent)}.demo-sidebar[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%]{color:var(--app-accent);border-left-color:var(--app-accent);background-color:var(--app-glow);font-weight:500}.demo-content[_ngcontent-%COMP%]{flex:1;min-width:0;padding:0 24px}@media(max-width:768px){.demo-layout[_ngcontent-%COMP%]{flex-direction:column}.demo-sidebar[_ngcontent-%COMP%]{width:100%;flex-direction:row;border-right:none;border-bottom:1px solid var(--app-border);overflow-x:auto;padding:0}.demo-sidebar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{white-space:nowrap;border-left:none;border-bottom:3px solid transparent;padding:10px 16px}.demo-sidebar[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%]{border-left-color:transparent;border-bottom-color:var(--app-accent)}.demo-content[_ngcontent-%COMP%]{padding:0}}"]})}}return n})();var Ue=[{path:"",redirectTo:"basic-usage",pathMatch:"full"},{path:"basic-usage",component:q}],te=(()=>{class n{static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275mod=O({type:n})}static{this.\u0275inj=T({imports:[et.forChild(Ue),et]})}}return n})();var ha=(()=>{class n{static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275mod=O({type:n})}static{this.\u0275inj=T({imports:[kt,xt,te,q,$,z,Z,X,H,V,W,U]})}}return n})();export{ha as DemoBasicModule};
