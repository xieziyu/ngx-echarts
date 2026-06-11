import {j as je$1,A as Ae$1,r as rh,g as Me,n as nx,Q,u as ut,p,F as Fe$1,h as Ae$2,T as Tr,i as Ax,l as le$1,k as hx,o as pb,q as m,s as $$1,t as uo,v as R,z as $4,W as We,B,C as Dt,K as At,y,L as R$1,N as D,P as z$1,V as he$1,Z as Zt$1,X as W$1,Y as H$1,_ as lp,a0 as po,a1 as A$1,a2 as we$1,a3 as Ue$1,O as Ot,S as St,a4 as ze,J as Ja,e as yc,G as Gf,c as Uf,m as mc,w as wf,M as Mv,a5 as ET,a6 as Wf,a7 as bT,a8 as Ye,a9 as bv,aa as _v,f as Ri,D as Do,ab as kv,ac as Vf,ad as zf,ae as _T,af as IT,ag as AT,ah as RT,ai as xg,aj as Rg}from'./main-34M3ZFJN.js';import {A as An}from'./chunk-CD8Tubx7.js';var Rt=`<!-- DEMO START -->
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
`;var U=(()=>{class n{constructor(){this.html=Rt,this.component=Nt,this.themeService=p(Fe$1),this.options={legend:{},tooltip:{},dataset:{source:[["product","2015","2016","2017"],["Matcha Latte",43.3,85.8,93.7],["Milk Tea",83.1,73.4,55.1],["Cheese Cocoa",86.4,65.2,82.5],["Walnut Brownie",72.4,53.9,39.1]]},xAxis:{type:"category"},yAxis:{},series:[{type:"bar"},{type:"bar"},{type:"bar"}]};}RandomDataset(){this.mergeOptions={dataset:{source:[["product","2015","2016","2017"],["Matcha Latte",...this.getRandomValues()],["Milk Tea",...this.getRandomValues()],["Cheese Cocoa",...this.getRandomValues()],["Walnut Brownie",...this.getRandomValues()]]}};}getRandomValues(){let e=[];for(let t=0;t<3;t++)e.push(Math.random()*100);return e}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=ut({type:n,selectors:[["app-basic-dataset"]],decls:5,vars:5,consts:[[1,"button-groups"],["mat-stroked-button","",3,"click"],["echarts","",1,"demo-chart",3,"options","merge","theme"],[3,"html","component"]],template:function(t,o){t&1&&(Ja(0,"div",0)(1,"button",1),yc("click",function(){return o.RandomDataset()}),Gf(2,"Random Dataset"),Uf()(),mc(3,"div",2)(4,"app-code-block",3)),t&2&&(wf(3),Mv("options",o.options)("merge",o.mergeOptions)("theme",o.themeService.echartsTheme()),wf(),Mv("html",o.html)("component",o.component));},dependencies:[Ot,St,ze,An],encapsulation:2,changeDetection:1});}}return n})();we$1();var Lt=`<!-- DEMO START -->
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
`;var z=(()=>{class n{constructor(){this.html=Lt,this.component=Pt,this.themeService=p(Fe$1);}ngOnInit(){let e=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T"],t=[220,182,191,234,290,330,310,123,442,321,90,149,210,122,133,334,198,123,125,220],o=500,a=[];for(let i=0;i<t.length;i++)a.push(o);this.options={title:{text:"Check Console for Events"},xAxis:{data:e,axisLabel:{inside:true,color:"#fff"},axisTick:{show:false},axisLine:{show:false},z:10},yAxis:{axisLine:{show:false},axisTick:{show:false},axisLabel:{color:"#999"}},dataZoom:[{type:"inside"}],series:[{type:"bar",itemStyle:{color:"rgba(0,0,0,0.05)"},barGap:"-100%",barCategoryGap:"40%",data:a,animation:false},{type:"bar",itemStyle:{color:new Ae$2(0,0,0,1,[{offset:0,color:"#83bff6"},{offset:.5,color:"#188df0"},{offset:1,color:"#188df0"}])},emphasis:{itemStyle:{color:new Ae$2(0,0,0,1,[{offset:0,color:"#2378f7"},{offset:.7,color:"#2378f7"},{offset:1,color:"#83bff6"}])}},data:t}]};}onChartEvent(e,t){console.log("chart event:",t,e);}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=ut({type:n,selectors:[["app-basic-events"]],decls:2,vars:4,consts:[["echarts","",1,"demo-chart",3,"chartInit","chartClick","chartDblClick","chartMouseDown","chartMouseUp","chartMouseOver","chartMouseOut","chartGlobalOut","chartContextMenu","chartDataZoom","options","theme"],[3,"html","component"]],template:function(t,o){t&1&&(Ja(0,"div",0),yc("chartInit",function(i){return o.onChartEvent(i,"chartInit")})("chartClick",function(i){return o.onChartEvent(i,"chartClick")})("chartDblClick",function(i){return o.onChartEvent(i,"chartDblClick")})("chartMouseDown",function(i){return o.onChartEvent(i,"chartMouseDown")})("chartMouseUp",function(i){return o.onChartEvent(i,"chartMouseUp")})("chartMouseOver",function(i){return o.onChartEvent(i,"chartMouseOver")})("chartMouseOut",function(i){return o.onChartEvent(i,"chartMouseOut")})("chartGlobalOut",function(i){return o.onChartEvent(i,"chartGlobalOut")})("chartContextMenu",function(i){return o.onChartEvent(i,"chartContextMenu")})("chartDataZoom",function(i){return o.onChartEvent(i,"chartDataZoom")}),Uf(),mc(1,"app-code-block",1)),t&2&&(Mv("options",o.options)("theme",o.themeService.echartsTheme()),wf(),Mv("html",o.html)("component",o.component));},dependencies:[ze,An],encapsulation:2,changeDetection:1});}}return n})();var jt=`<!-- DEMO START -->
<echarts [initOpts]="initOpts" [options]="options" [theme]="themeService.echartsTheme()"></echarts>
<!-- DEMO END -->

<app-code-block [html]="html" [component]="component"> </app-code-block>
`;var Gt=`import { Component, inject } from '@angular/core';
import type { EChartsCoreOption, EChartsInitOpts } from 'echarts/core';
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
  initOpts: EChartsInitOpts = {
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
`;var V=(()=>{class n{constructor(){this.html=jt,this.component=Gt,this.themeService=p(Fe$1),this.initOpts={renderer:"svg",width:300,height:300},this.options={color:["#3398DB"],tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:true},xAxis:[{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],axisTick:{alignWithLabel:true}}],yAxis:[{type:"value"}],series:[{name:"Counters",type:"bar",barWidth:"60%",data:[10,52,200,334,390,330,220]}]};}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=ut({type:n,selectors:[["app-basic-init-opts"]],decls:2,vars:5,consts:[[3,"initOpts","options","theme"],[3,"html","component"]],template:function(t,o){t&1&&mc(0,"echarts",0)(1,"app-code-block",1),t&2&&(Mv("initOpts",o.initOpts)("options",o.options)("theme",o.themeService.echartsTheme()),wf(),Mv("html",o.html)("component",o.component));},dependencies:[ze,An],encapsulation:2,changeDetection:1});}}return n})();function le(n,f){if(n&1){let e=AT();Ja(0,"div",1)(1,"button",2),yc("click",function(){xg(e);let o=RT();return Rg(o.action())}),Gf(2),Uf()();}if(n&2){let e=RT();wf(2),Wf(" ",e.data.action," ");}}var pe=["label"];function de(n,f){}var he=Math.pow(2,31)-1,A=class{_overlayRef;instance;containerInstance;_afterDismissed=new H$1;_afterOpened=new H$1;_onAction=new H$1;_durationTimeoutId;_dismissedByAction=false;constructor(f,e){this._overlayRef=e,this.containerInstance=f,f._onExit.subscribe(()=>this._finishDismiss());}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId);}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=true,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId);}closeWithAction(){this.dismissWithAction();}_dismissAfter(f){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(f,he));}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete());}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=false;}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}},Ft=new y("MatSnackBarData"),S=class{politeness="polite";announcementMessage="";viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition="center";verticalPosition="bottom"},ue=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=Ue$1({type:n,selectors:[["","matSnackBarLabel",""]],hostAttrs:[1,"mat-mdc-snack-bar-label","mdc-snackbar__label"]})}return n})(),fe=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=Ue$1({type:n,selectors:[["","matSnackBarActions",""]],hostAttrs:[1,"mat-mdc-snack-bar-actions","mdc-snackbar__actions"]})}return n})(),be=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=Ue$1({type:n,selectors:[["","matSnackBarAction",""]],hostAttrs:[1,"mat-mdc-snack-bar-action","mdc-snackbar__action"]})}return n})(),ge=(()=>{class n{snackBarRef=p(A);data=p(Ft);action(){this.snackBarRef.dismissWithAction();}get hasAction(){return !!this.data.action}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=ut({type:n,selectors:[["simple-snack-bar"]],hostAttrs:[1,"mat-mdc-simple-snack-bar"],exportAs:["matSnackBar"],decls:3,vars:2,consts:[["matSnackBarLabel",""],["matSnackBarActions",""],["matButton","","matSnackBarAction","",3,"click"]],template:function(t,o){t&1&&(Ja(0,"div",0),Gf(1),Uf(),ET(2,le,3,1,"div",1)),t&2&&(wf(),Wf(" ",o.data.message,`
`),wf(),bT(o.hasAction?2:-1));},dependencies:[St,ue,fe,be],styles:[`.mat-mdc-simple-snack-bar {
  display: flex;
}
.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label {
  max-height: 50vh;
  overflow: auto;
}
`],encapsulation:2})}return n})(),rt="_mat-snack-bar-enter",st="_mat-snack-bar-exit",ve=(()=>{class n extends D{_ngZone=p(z$1);_elementRef=p(he$1);_changeDetectorRef=p(Tr);_platform=p(Zt$1);_animationsDisabled=pb();snackBarConfig=p(S);_document=p(W$1);_trackedModals=new Set;_enterFallback;_exitFallback;_injector=p(le$1);_announceDelay=150;_announceTimeoutId;_destroyed=false;_portalOutlet;_onAnnounce=new H$1;_onExit=new H$1;_onEnter=new H$1;_animationState="void";_live;_label;_role;_liveElementId=p(lp).getId("mat-snack-bar-container-live-");constructor(){super();let e=this.snackBarConfig;e.politeness==="assertive"&&!e.announcementMessage?this._live="assertive":e.politeness==="off"?this._live="off":this._live="polite",this._platform.FIREFOX&&(this._live==="polite"&&(this._role="status"),this._live==="assertive"&&(this._role="alert"));}attachComponentPortal(e){this._assertNotAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._afterPortalAttached(),t}attachTemplatePortal(e){this._assertNotAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._afterPortalAttached(),t}attachDomPortal=e=>{this._assertNotAttached();let t=this._portalOutlet.attachDomPortal(e);return this._afterPortalAttached(),t};onAnimationEnd(e){e===st?this._completeExit():e===rt&&(clearTimeout(this._enterFallback),this._ngZone.run(()=>{this._onEnter.next(),this._onEnter.complete();}));}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce(),this._animationsDisabled?po(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(rt)));},{injector:this._injector}):(clearTimeout(this._enterFallback),this._enterFallback=setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-snack-bar-fallback-visible"),this.onAnimationEnd(rt);},200)));}exit(){return this._destroyed?A$1(void 0):(this._ngZone.run(()=>{this._animationState="hidden",this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute("mat-exit",""),clearTimeout(this._announceTimeoutId),this._animationsDisabled?po(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(st)));},{injector:this._injector}):(clearTimeout(this._exitFallback),this._exitFallback=setTimeout(()=>this.onAnimationEnd(st),200));}),this._onExit)}ngOnDestroy(){this._destroyed=true,this._clearFromModals(),this._completeExit();}_completeExit(){clearTimeout(this._exitFallback),queueMicrotask(()=>{this._onExit.next(),this._onExit.complete();});}_afterPortalAttached(){let e=this._elementRef.nativeElement,t=this.snackBarConfig.panelClass;t&&(Array.isArray(t)?t.forEach(i=>e.classList.add(i)):e.classList.add(t)),this._exposeToModals();let o=this._label.nativeElement,a="mdc-snackbar__label";o.classList.toggle(a,!o.querySelector(`.${a}`));}_exposeToModals(){let e=this._liveElementId,t=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let o=0;o<t.length;o++){let a=t[o],i=a.getAttribute("aria-owns");this._trackedModals.add(a),i?i.indexOf(e)===-1&&a.setAttribute("aria-owns",i+" "+e):a.setAttribute("aria-owns",e);}}_clearFromModals(){this._trackedModals.forEach(e=>{let t=e.getAttribute("aria-owns");if(t){let o=t.replace(this._liveElementId,"").trim();o.length>0?e.setAttribute("aria-owns",o):e.removeAttribute("aria-owns");}}),this._trackedModals.clear();}_assertNotAttached(){this._portalOutlet.hasAttached();}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{if(this._destroyed)return;let e=this._elementRef.nativeElement,t=e.querySelector("[aria-hidden]"),o=e.querySelector("[aria-live]");if(t&&o){let a=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&t.contains(document.activeElement)&&(a=document.activeElement),t.removeAttribute("aria-hidden"),o.appendChild(t),a?.focus(),this._onAnnounce.next(),this._onAnnounce.complete();}},this._announceDelay);});}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=ut({type:n,selectors:[["mat-snack-bar-container"]],viewQuery:function(t,o){if(t&1&&kv(Ye,7)(pe,7),t&2){let a;Vf(a=zf())&&(o._portalOutlet=a.first),Vf(a=zf())&&(o._label=a.first);}},hostAttrs:[1,"mdc-snackbar","mat-mdc-snack-bar-container"],hostVars:6,hostBindings:function(t,o){t&1&&yc("animationend",function(i){return o.onAnimationEnd(i.animationName)})("animationcancel",function(i){return o.onAnimationEnd(i.animationName)}),t&2&&Do("mat-snack-bar-container-enter",o._animationState==="visible")("mat-snack-bar-container-exit",o._animationState==="hidden")("mat-snack-bar-container-animations-enabled",!o._animationsDisabled);},features:[bv],decls:6,vars:3,consts:[["label",""],[1,"mdc-snackbar__surface","mat-mdc-snackbar-surface"],[1,"mat-mdc-snack-bar-label"],["aria-hidden","true"],["cdkPortalOutlet",""]],template:function(t,o){t&1&&(Ja(0,"div",1)(1,"div",2,0)(3,"div",3),_v(4,de,0,0,"ng-template",4),Uf(),mc(5,"div"),Uf()()),t&2&&(wf(5),Ri("aria-live",o._live)("role",o._role)("id",o._liveElementId));},dependencies:[Ye],styles:[`@keyframes _mat-snack-bar-enter {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes _mat-snack-bar-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-snack-bar-container {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  margin: 8px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snack-bar-container {
  width: 100vw;
}

.mat-snack-bar-container-animations-enabled {
  opacity: 0;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-fallback-visible {
  opacity: 1;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-enter {
  animation: _mat-snack-bar-enter 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-exit {
  animation: _mat-snack-bar-exit 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}

.mat-mdc-snackbar-surface {
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  padding-left: 0;
  padding-right: 8px;
}
[dir=rtl] .mat-mdc-snackbar-surface {
  padding-right: 0;
  padding-left: 8px;
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  min-width: 344px;
  max-width: 672px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snackbar-surface {
  width: 100%;
  min-width: 0;
}
@media (forced-colors: active) {
  .mat-mdc-snackbar-surface {
    outline: solid 1px;
  }
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  color: var(--mat-snack-bar-supporting-text-color, var(--mat-sys-inverse-on-surface));
  border-radius: var(--mat-snack-bar-container-shape, var(--mat-sys-corner-extra-small));
  background-color: var(--mat-snack-bar-container-color, var(--mat-sys-inverse-surface));
}

.mdc-snackbar__label {
  width: 100%;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  padding: 14px 8px 14px 16px;
}
[dir=rtl] .mdc-snackbar__label {
  padding-left: 8px;
  padding-right: 16px;
}
.mat-mdc-snack-bar-container .mdc-snackbar__label {
  font-family: var(--mat-snack-bar-supporting-text-font, var(--mat-sys-body-medium-font));
  font-size: var(--mat-snack-bar-supporting-text-size, var(--mat-sys-body-medium-size));
  font-weight: var(--mat-snack-bar-supporting-text-weight, var(--mat-sys-body-medium-weight));
  line-height: var(--mat-snack-bar-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
}

.mat-mdc-snack-bar-actions {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  box-sizing: border-box;
}

.mat-mdc-snack-bar-handset,
.mat-mdc-snack-bar-container,
.mat-mdc-snack-bar-label {
  flex: 1 1 auto;
}

.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled).mat-unthemed {
  color: var(--mat-snack-bar-button-color, var(--mat-sys-inverse-primary));
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) {
  --mat-button-text-state-layer-color: currentColor;
  --mat-button-text-ripple-color: currentColor;
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element {
  opacity: 0.1;
}
`],encapsulation:2,changeDetection:1})}return n})(),Ce=new y("mat-snack-bar-default-options",{providedIn:"root",factory:()=>new S}),Ut=(()=>{class n{_live=p(Ax);_injector=p(le$1);_breakpointObserver=p(hx);_parentSnackBar=p(n,{optional:true,skipSelf:true});_defaultConfig=p(Ce);_animationsDisabled=pb();_snackBarRefAtThisLevel=null;simpleSnackBarComponent=ge;snackBarContainerComponent=ve;handsetCssClass="mat-mdc-snack-bar-handset";get _openedSnackBarRef(){let e=this._parentSnackBar;return e?e._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(e){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=e:this._snackBarRefAtThisLevel=e;}openFromComponent(e,t){return this._attach(e,t)}openFromTemplate(e,t){return this._attach(e,t)}open(e,t="",o){let a=m(m({},this._defaultConfig),o);return a.data={message:e,action:t},a.announcementMessage===e&&(a.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,a)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss();}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss();}_attachSnackBarContainer(e,t){let o=t&&t.viewContainerRef&&t.viewContainerRef.injector,a=le$1.create({parent:o||this._injector,providers:[{provide:S,useValue:t}]}),i=new $$1(this.snackBarContainerComponent,t.viewContainerRef,a),C=e.attach(i);return C.instance.snackBarConfig=t,C.instance}_attach(e,t){let o=m(m(m({},new S),this._defaultConfig),t),a=this._createOverlay(o),i=this._attachSnackBarContainer(a,o),C=new A(i,a);if(e instanceof uo){let M=new R(e,null,{$implicit:o.data,snackBarRef:C});C.instance=i.attachTemplatePortal(M);}else {let M=this._createInjector(o,C),ee=new $$1(e,void 0,M),oe=i.attachComponentPortal(ee);C.instance=oe.instance;}return this._breakpointObserver.observe($4.HandsetPortrait).pipe(We(a.detachments())).subscribe(M=>{a.overlayElement.classList.toggle(this.handsetCssClass,M.matches);}),o.announcementMessage&&i._onAnnounce.subscribe(()=>{this._live.announce(o.announcementMessage,o.politeness);}),this._animateSnackBar(C,o),this._openedSnackBarRef=C,this._openedSnackBarRef}_animateSnackBar(e,t){e.afterDismissed().subscribe(()=>{this._openedSnackBarRef==e&&(this._openedSnackBarRef=null),t.announcementMessage&&this._live.clear();}),t.duration&&t.duration>0&&e.afterOpened().subscribe(()=>e._dismissAfter(t.duration)),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{e.containerInstance.enter();}),this._openedSnackBarRef.dismiss()):e.containerInstance.enter();}_createOverlay(e){let t=new B;t.direction=e.direction;let o=Dt(this._injector),a=e.direction==="rtl",i=e.horizontalPosition==="left"||e.horizontalPosition==="start"&&!a||e.horizontalPosition==="end"&&a,C=!i&&e.horizontalPosition!=="center";return i?o.left("0"):C?o.right("0"):o.centerHorizontally(),e.verticalPosition==="top"?o.top("0"):o.bottom("0"),t.positionStrategy=o,t.disableAnimations=this._animationsDisabled,At(this._injector,t)}_createInjector(e,t){let o=e&&e.viewContainerRef&&e.viewContainerRef.injector;return le$1.create({parent:o||this._injector,providers:[{provide:A,useValue:t},{provide:Ft,useValue:e.data}]})}static \u0275fac=function(t){return new(t||n)};static \u0275prov=R$1({token:n,factory:n.\u0275fac})}return n})();var zt=`<!-- DEMO START -->
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
`;var W=(()=>{class n{constructor(){this.snackBar=p(Ut),this.themeService=p(Fe$1),this.html=zt,this.component=Vt,this.options={backgroundColor:"#2c343c",title:{text:"Customized Pie",left:"center",top:20,textStyle:{color:"#ccc"}},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},visualMap:{show:false,min:80,max:600,inRange:{colorLightness:[0,1]}},series:[{name:"Counters",type:"pie",radius:"55%",center:["50%","50%"],data:[{value:335,name:"C-1"},{value:310,name:"C-2"},{value:274,name:"C-3"},{value:235,name:"C-4"},{value:400,name:"C-5"}].sort((e,t)=>e.value-t.value),roseType:"radius",label:{color:"rgba(255, 255, 255, 0.3)"},labelLine:{lineStyle:{color:"rgba(255, 255, 255, 0.3)"},smooth:.2,length:10,length2:20},itemStyle:{color:"#c23531",shadowBlur:200,shadowColor:"rgba(0, 0, 0, 0.5)"},animationType:"scale",animationEasing:"elasticOut",animationDelay:()=>Math.random()*200}]};}onChartInit(e){this.chartInstance=e,console.log("on chart init:",e);}callMethod(e){if(this.chartInstance){let t=this.chartInstance[e]();this.snackBar.open(`${e}(): ${t||"void"}`,"OK",{duration:3e3}),console.log(t);}}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=ut({type:n,selectors:[["app-basic-instance"]],decls:13,vars:4,consts:[[1,"button-groups"],["mat-stroked-button","",3,"click"],["echarts","",1,"demo-chart",3,"chartInit","options","theme"],[3,"html","component"]],template:function(t,o){t&1&&(Ja(0,"div",0)(1,"button",1),yc("click",function(){return o.callMethod("getWidth")}),Gf(2,"getWidth()"),Uf(),Ja(3,"button",1),yc("click",function(){return o.callMethod("getHeight")}),Gf(4,"getHeight()"),Uf(),Ja(5,"button",1),yc("click",function(){return o.callMethod("getDom")}),Gf(6,"getDom()"),Uf(),Ja(7,"button",1),yc("click",function(){return o.callMethod("getOption")}),Gf(8,"getOption()"),Uf(),Ja(9,"button",1),yc("click",function(){return o.callMethod("clear")}),Gf(10,"clear()"),Uf()(),Ja(11,"div",2),yc("chartInit",function(i){return o.onChartInit(i)}),Uf(),mc(12,"app-code-block",3)),t&2&&(wf(11),Mv("options",o.options)("theme",o.themeService.echartsTheme()),wf(),Mv("html",o.html)("component",o.component));},dependencies:[Ot,St,ze,An],encapsulation:2,changeDetection:1});}}return n})();var Wt=`<!-- DEMO START -->
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
`;var X=(()=>{class n{constructor(){this.html=Wt,this.component=Xt,this.isLoading=true,this.options={tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},legend:{data:["X-1","X-2","X-3","X-4","X-5"]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:true},xAxis:[{type:"category",boundaryGap:false,data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]}],yAxis:[{type:"value"}],series:[{name:"X-1",type:"line",stack:"counts",areaStyle:{},data:[120,132,101,134,90,230,210]},{name:"X-2",type:"line",stack:"counts",areaStyle:{},data:[220,182,191,234,290,330,310]},{name:"X-3",type:"line",stack:"counts",areaStyle:{},data:[150,232,201,154,190,330,410]},{name:"X-4",type:"line",stack:"counts",areaStyle:{},data:[320,332,301,334,390,330,320]},{name:"X-5",type:"line",stack:"counts",label:{show:true,position:"top"},areaStyle:{},data:[820,932,901,934,1290,1330,1320]}]};}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=ut({type:n,selectors:[["app-basic-loading"]],decls:5,vars:4,consts:[[1,"button-groups"],["mat-stroked-button","",3,"click"],["echarts","","theme","macarons",1,"demo-chart",3,"options","loading"],[3,"html","component"]],template:function(t,o){t&1&&(Ja(0,"div",0)(1,"button",1),yc("click",function(){return o.isLoading=!o.isLoading}),Gf(2,"Toggle Loading"),Uf()(),mc(3,"div",2)(4,"app-code-block",3)),t&2&&(wf(3),Mv("options",o.options)("loading",o.isLoading),wf(),Mv("html",o.html)("component",o.component));},dependencies:[Ot,St,ze,An],encapsulation:2,changeDetection:1});}}return n})();var $t=`<!-- DEMO START -->
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
`;var $=(()=>{class n{constructor(){this.html=$t,this.component=Zt,this.themeService=p(Fe$1);}ngOnInit(){let e=[],t=[],o=[];for(let a=0;a<100;a++)e.push("category"+a),t.push((Math.sin(a/5)*(a/5-10)+a/6)*5),o.push((Math.cos(a/5)*(a/5-10)+a/6)*5);this.options={legend:{data:["bar","bar2"],align:"left"},tooltip:{},xAxis:{data:e,silent:false,splitLine:{show:false}},yAxis:{},series:[{name:"bar",type:"bar",data:t,animationDelay:a=>a*10},{name:"bar2",type:"bar",data:o,animationDelay:a=>a*10+100}],animationEasing:"elasticOut",animationDelayUpdate:a=>a*5};}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=ut({type:n,selectors:[["app-basic-simple"]],decls:2,vars:4,consts:[["echarts","",1,"demo-chart",3,"options","theme"],[3,"html","component"]],template:function(t,o){t&1&&mc(0,"div",0)(1,"app-code-block",1),t&2&&(Mv("options",o.options)("theme",o.themeService.echartsTheme()),wf(),Mv("html",o.html)("component",o.component));},dependencies:[ze,An],encapsulation:2,changeDetection:1});}}return n})();var Ht={color:["#b21ab4","#6f0099","#2a2073","#0b5ea8","#17aecc","#b3b3ff","#eb99ff","#fae6ff","#e6f2ff","#eeeeee"],title:{fontWeight:"normal",color:"#00aecd"},visualMap:{color:["#00aecd","#a2d4e6"]},toolbox:{color:["#00aecd","#00aecd","#00aecd","#00aecd"]},tooltip:{backgroundColor:"rgba(0,0,0,0.5)",axisPointer:{type:"line",lineStyle:{color:"#00aecd",type:"dashed"},crossStyle:{color:"#00aecd"},shadowStyle:{color:"rgba(200,200,200,0.3)"}}},dataZoom:{dataBackgroundColor:"#eee",fillerColor:"rgba(144,197,237,0.2)",handleColor:"#00aecd"},timeline:{lineStyle:{color:"#00aecd"},controlStyle:{color:"#00aecd",borderColor:"00aecd"}},candlestick:{itemStyle:{color:"#00aecd",color0:"#a2d4e6"},lineStyle:{width:1,color:"#00aecd",color0:"#a2d4e6"},areaStyle:{color:"#b21ab4",color0:"#0b5ea8"}},chord:{padding:4,itemStyle:{color:"#b21ab4",borderWidth:1,borderColor:"rgba(128, 128, 128, 0.5)"},lineStyle:{color:"rgba(128, 128, 128, 0.5)"},areaStyle:{color:"#0b5ea8"}},graph:{itemStyle:{color:"#b21ab4"},linkStyle:{color:"#2a2073"}},map:{itemStyle:{color:"#c12e34"},areaStyle:{color:"#ddd"},label:{color:"#c12e34"}},gauge:{axisLine:{lineStyle:{color:[[.2,"#dddddd"],[.8,"#00aecd"],[1,"#f5ccff"]],width:8}}}};var qt=`<!-- DEMO START -->
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
`;var Z=(()=>{class n{constructor(){this.html=qt,this.component=Qt,this.data=Kt,this.coolTheme=Ht,this.options={title:{left:"50%",text:"Nightingale Rose Diagram",subtext:"Mocking Data",textAlign:"center"},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{align:"auto",bottom:10,data:["rose1","rose2","rose3","rose4","rose5","rose6","rose7","rose8"]},calculable:true,series:[{name:"area",type:"pie",radius:[30,110],roseType:"area",data:[{value:10,name:"rose1"},{value:5,name:"rose2"},{value:15,name:"rose3"},{value:25,name:"rose4"},{value:20,name:"rose5"},{value:35,name:"rose6"},{value:30,name:"rose7"},{value:40,name:"rose8"}]}]};}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=ut({type:n,selectors:[["app-basic-themes"]],decls:11,vars:5,consts:[[1,"button-groups"],["mat-stroked-button","",3,"click"],["echarts","",1,"demo-chart",3,"options","theme"],[3,"html","component","data"]],template:function(t,o){t&1&&(Ja(0,"div",0)(1,"button",1),yc("click",function(){return o.theme=void 0}),Gf(2,"default"),Uf(),Ja(3,"button",1),yc("click",function(){return o.theme="dark"}),Gf(4,"dark"),Uf(),Ja(5,"button",1),yc("click",function(){return o.theme="macarons"}),Gf(6,"macarons(theme file)"),Uf(),Ja(7,"button",1),yc("click",function(){return o.theme=o.coolTheme}),Gf(8,"cool(theme object)"),Uf()(),mc(9,"div",2)(10,"app-code-block",3)),t&2&&(wf(9),Mv("options",o.options)("theme",o.theme),wf(),Mv("html",o.html)("component",o.component)("data",o.data));},dependencies:[Ot,St,ze,An],encapsulation:2,changeDetection:1});}}return n})();var Yt=`<!-- DEMO START -->
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
`;var H=(()=>{class n{constructor(){this.html=Yt,this.component=Jt,this.themeService=p(Fe$1),this.oneDay=24*3600*1e3,this.cdr=p(Tr);}ngOnInit(){this.data=[],this.now=new Date(1997,9,3),this.value=Math.random()*1e3;for(let e=0;e<1e3;e++)this.data.push(this.randomData());this.options={title:{text:"Dynamic Data + Time Axis"},tooltip:{trigger:"axis",formatter:e=>{e=e[0];let t=new Date(e.name);return t.getDate()+"/"+(t.getMonth()+1)+"/"+t.getFullYear()+" : "+e.value[1]},axisPointer:{animation:false}},xAxis:{type:"time",splitLine:{show:false}},yAxis:{type:"value",boundaryGap:[0,"100%"],splitLine:{show:false}},series:[{name:"Mocking Data",type:"line",showSymbol:false,data:this.data}]},this.timer=setInterval(()=>{for(let e=0;e<5;e++)this.data.shift(),this.data.push(this.randomData());this.updateOptions={series:[{data:this.data}]},this.cdr.detectChanges();},1e3);}ngOnDestroy(){clearInterval(this.timer);}randomData(){return this.now=new Date(this.now.getTime()+this.oneDay),this.value=this.value+Math.random()*21-10,{name:this.now.toString(),value:[[this.now.getFullYear(),this.now.getMonth()+1,this.now.getDate()].join("/"),Math.round(this.value)]}}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=ut({type:n,selectors:[["app-basic-update"]],decls:2,vars:5,consts:[["echarts","",1,"demo-chart",3,"options","merge","theme"],[3,"html","component"]],template:function(t,o){t&1&&mc(0,"div",0)(1,"app-code-block",1),t&2&&(Mv("options",o.options)("merge",o.updateOptions)("theme",o.themeService.echartsTheme()),wf(),Mv("html",o.html)("component",o.component));},dependencies:[ze,An],encapsulation:2,changeDetection:1});}}return n})();var we=(n,f)=>f.label;function Ae(n,f){if(n&1){let e=AT();Ja(0,"button",4),yc("click",function(){let o=xg(e).$index,a=RT();return Rg(a.selectedIndex.set(o))}),Gf(1),Uf();}if(n&2){let e=f.$implicit,t=f.$index,o=RT();Do("active",o.selectedIndex()===t),wf(),Wf(" ",e.label," ");}}function Ie(n,f){n&1&&mc(0,"app-basic-simple");}function Re(n,f){n&1&&mc(0,"app-basic-dataset");}function Ne(n,f){n&1&&mc(0,"app-basic-events");}function Le(n,f){n&1&&mc(0,"app-basic-themes");}function Pe(n,f){n&1&&mc(0,"app-basic-loading");}function je(n,f){n&1&&mc(0,"app-basic-update");}function Ge(n,f){n&1&&mc(0,"app-basic-init-opts");}function Fe(n,f){n&1&&mc(0,"app-basic-instance");}var q=(()=>{class n{constructor(){this.selectedIndex=Q(0),this.tabs=[{label:"Simple Chart"},{label:"Dataset"},{label:"Events"},{label:"[theme]"},{label:"[loading]"},{label:"[merge]"},{label:"[initOpts]"},{label:"ECharts Instance"}];}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=ut({type:n,selectors:[["app-basic"]],decls:13,vars:1,consts:[[1,"demo-layout"],[1,"demo-sidebar"],[3,"active"],[1,"demo-content"],[3,"click"]],template:function(t,o){if(t&1&&(Ja(0,"div",0)(1,"nav",1),_T(2,Ae,2,3,"button",2,we),Uf(),Ja(4,"div",3),ET(5,Ie,1,0,"app-basic-simple")(6,Re,1,0,"app-basic-dataset")(7,Ne,1,0,"app-basic-events")(8,Le,1,0,"app-basic-themes")(9,Pe,1,0,"app-basic-loading")(10,je,1,0,"app-basic-update")(11,Ge,1,0,"app-basic-init-opts")(12,Fe,1,0,"app-basic-instance"),Uf()()),t&2){let a;wf(2),IT(o.tabs),wf(3),bT((a=o.selectedIndex())===0?5:a===1?6:a===2?7:a===3?8:a===4?9:a===5?10:a===6?11:a===7?12:-1);}},dependencies:[$,U,z,Z,X,H,V,W],styles:[".demo-layout[_ngcontent-%COMP%]{display:flex;min-height:600px}.demo-sidebar[_ngcontent-%COMP%]{width:200px;flex-shrink:0;border-right:1px solid var(--app-border);background:var(--app-surface);display:flex;flex-direction:column;padding:8px 0}.demo-sidebar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{all:unset;box-sizing:border-box;padding:10px 20px;cursor:pointer;font-size:14px;color:var(--mat-sys-on-surface);border-left:3px solid transparent;transition:background-color .15s,border-color .15s,color .15s}.demo-sidebar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:var(--app-glow);color:var(--app-accent)}.demo-sidebar[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%]{color:var(--app-accent);border-left-color:var(--app-accent);background-color:var(--app-glow);font-weight:500}.demo-content[_ngcontent-%COMP%]{flex:1;min-width:0;padding:0 24px}@media(max-width:768px){.demo-layout[_ngcontent-%COMP%]{flex-direction:column}.demo-sidebar[_ngcontent-%COMP%]{width:100%;flex-direction:row;border-right:none;border-bottom:1px solid var(--app-border);overflow-x:auto;padding:0}.demo-sidebar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{white-space:nowrap;border-left:none;border-bottom:3px solid transparent;padding:10px 16px}.demo-sidebar[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%]{border-left-color:transparent;border-bottom-color:var(--app-accent)}.demo-content[_ngcontent-%COMP%]{padding:0}}"],changeDetection:1});}}return n})();var Ue=[{path:"",redirectTo:"basic-usage",pathMatch:"full"},{path:"basic-usage",component:q}],te=(()=>{class n{static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275mod=je$1({type:n});}static{this.\u0275inj=Ae$1({imports:[nx.forChild(Ue),nx]});}}return n})();var _a=(()=>{class n{static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275mod=je$1({type:n});}static{this.\u0275inj=Ae$1({imports:[rh,Me,te,q,$,z,Z,X,H,V,W,U]});}}return n})();export{_a as DemoBasicModule};