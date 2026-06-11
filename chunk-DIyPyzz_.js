import {j as je$1,A as Ae$1,r as rh,g as Me$1,n as nx,Q as Q$1,u as ut,p,F as Fe,ap as Hc,aq as V$1,ar as gd,ao as P,a4 as ze$1,m as mc,M as Mv,w as wf,J as Ja,ae as _T,c as Uf,a5 as ET,af as IT,a7 as bT,as as T,at as WS,au as dS,av as hS,ag as AT,e as yc,G as Gf,ah as RT,D as Do,a6 as Wf,ai as xg,aj as Rg}from'./main-34M3ZFJN.js';import {A as An}from'./chunk-CD8Tubx7.js';var re=`<!-- DEMO START -->
<div echarts [options]="options" [theme]="themeService.echartsTheme()" class="demo-chart-600"></div>
<!-- DEMO END -->

<app-code-block [html]="html" [component]="component"> </app-code-block>
`;var ie=`import { Component, OnInit, inject } from '@angular/core';
import type { EChartsCoreOption } from 'echarts/core';
// IGNORE START
import html from './graph-force-layout.component.html';
import component from './graph-force-layout.component.txt';
import { NgxEchartsDirective } from 'ngx-echarts';
import { CodeBlockComponent } from '../../../../shared/code-block/code-block.component';
import { ThemeService } from '../../../../services/theme.service';
// IGNORE END

@Component({
  selector: 'app-graph-force-layout',
  templateUrl: './graph-force-layout.component.html',
  styleUrls: ['./graph-force-layout.component.scss'],
  imports: [NgxEchartsDirective, CodeBlockComponent],
})
export class GraphForceLayoutComponent implements OnInit {
  // IGNORE START
  html = html;
  component = component;
  // IGNORE END
  readonly themeService = inject(ThemeService);
  options: EChartsCoreOption;

  createNodes(count: number) {
    const nodes = [];
    for (let i = 0; i < count; i++) {
      nodes.push({
        id: i + '',
      });
    }
    return nodes;
  }

  createEdges(count: number) {
    const edges = [];
    if (count === 2) {
      return [[0, 1]];
    }
    for (let i = 0; i < count; i++) {
      edges.push([i, (i + 1) % count]);
    }
    return edges;
  }

  ngOnInit(): void {
    const datas = [];
    for (let i = 0; i < 16; i++) {
      datas.push({
        nodes: this.createNodes(i + 2),
        edges: this.createEdges(i + 2),
      });
    }

    this.options = {
      series: datas.map((item, idx) => {
        return {
          type: 'graph',
          layout: 'force',
          animation: false,
          data: item.nodes,
          left: (idx % 4) * 25 + '%',
          top: Math.floor(idx / 4) * 25 + '%',
          width: '25%',
          height: '25%',
          force: {
            repulsion: 60,
            edgeLength: 2,
          },
          edges: item.edges.map(e => {
            return {
              source: e[0] + '',
              target: e[1] + '',
            };
          }),
        };
      }),
    };
  }
}
`;var $=(()=>{class e{constructor(){this.html=re,this.component=ie,this.themeService=p(Fe);}createNodes(n){let t=[];for(let o=0;o<n;o++)t.push({id:o+""});return t}createEdges(n){let t=[];if(n===2)return [[0,1]];for(let o=0;o<n;o++)t.push([o,(o+1)%n]);return t}ngOnInit(){let n=[];for(let t=0;t<16;t++)n.push({nodes:this.createNodes(t+2),edges:this.createEdges(t+2)});this.options={series:n.map((t,o)=>({type:"graph",layout:"force",animation:false,data:t.nodes,left:o%4*25+"%",top:Math.floor(o/4)*25+"%",width:"25%",height:"25%",force:{repulsion:60,edgeLength:2},edges:t.edges.map(r=>({source:r[0]+"",target:r[1]+""}))}))};}static{this.\u0275fac=function(t){return new(t||e)};}static{this.\u0275cmp=ut({type:e,selectors:[["app-graph-force-layout"]],decls:2,vars:4,consts:[["echarts","",1,"demo-chart-600",3,"options","theme"],[3,"html","component"]],template:function(t,o){t&1&&mc(0,"div",0)(1,"app-code-block",1),t&2&&(Mv("options",o.options)("theme",o.themeService.echartsTheme()),wf(),Mv("html",o.html)("component",o.component));},dependencies:[ze$1,An],encapsulation:2,changeDetection:1});}}return e})();var ae=`<!-- DEMO START -->
<div echarts [options]="options" [theme]="themeService.echartsTheme()" class="demo-chart"></div>
<!-- DEMO END -->

<app-code-block [html]="html" [component]="component"> </app-code-block>
`;var pe=`import { Component, inject } from '@angular/core';
import type { EChartsCoreOption } from 'echarts/core';
// IGNORE START
import html from './graph-simple.component.html';
import component from './graph-simple.component.txt';
import { NgxEchartsDirective } from 'ngx-echarts';
import { CodeBlockComponent } from '../../../../shared/code-block/code-block.component';
import { ThemeService } from '../../../../services/theme.service';
// IGNORE END

@Component({
  selector: 'app-graph-simple',
  templateUrl: './graph-simple.component.html',
  styleUrls: ['./graph-simple.component.scss'],
  imports: [NgxEchartsDirective, CodeBlockComponent],
})
export class GraphSimpleComponent {
  // IGNORE START
  html = html;
  component = component;
  // IGNORE END
  readonly themeService = inject(ThemeService);
  options: EChartsCoreOption = {
    tooltip: {},
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    series: [
      {
        type: 'graph',
        layout: 'none',
        symbolSize: 60,
        roam: true,
        label: {
          show: true,
        },
        edgeSymbol: ['circle', 'arrow'],
        edgeSymbolSize: [4, 10],
        edgeLabel: {
          fontSize: 20,
        },
        data: [
          {
            name: 'Node 1',
            x: 300,
            y: 300,
          },
          {
            name: 'Node 2',
            x: 800,
            y: 300,
          },
          {
            name: 'Node 3',
            x: 550,
            y: 100,
          },
          {
            name: 'Node 4',
            x: 550,
            y: 500,
          },
        ],
        // links: [],
        links: [
          {
            source: 0,
            target: 1,
            symbolSize: [5, 20],
            label: {
              show: true,
            },
            lineStyle: {
              width: 5,
              curveness: 0.2,
            },
          },
          {
            source: 'Node 2',
            target: 'Node 1',
            label: {
              show: true,
            },
            lineStyle: {
              curveness: 0.2,
            },
          },
          {
            source: 'Node 1',
            target: 'Node 3',
          },
          {
            source: 'Node 2',
            target: 'Node 3',
          },
          {
            source: 'Node 2',
            target: 'Node 4',
          },
          {
            source: 'Node 1',
            target: 'Node 4',
          },
        ],
        lineStyle: {
          opacity: 0.9,
          width: 2,
          curveness: 0,
        },
      },
    ],
  };
}
`;var V=(()=>{class e{constructor(){this.html=ae,this.component=pe,this.themeService=p(Fe),this.options={tooltip:{},animationDurationUpdate:1500,animationEasingUpdate:"quinticInOut",series:[{type:"graph",layout:"none",symbolSize:60,roam:true,label:{show:true},edgeSymbol:["circle","arrow"],edgeSymbolSize:[4,10],edgeLabel:{fontSize:20},data:[{name:"Node 1",x:300,y:300},{name:"Node 2",x:800,y:300},{name:"Node 3",x:550,y:100},{name:"Node 4",x:550,y:500}],links:[{source:0,target:1,symbolSize:[5,20],label:{show:true},lineStyle:{width:5,curveness:.2}},{source:"Node 2",target:"Node 1",label:{show:true},lineStyle:{curveness:.2}},{source:"Node 1",target:"Node 3"},{source:"Node 2",target:"Node 3"},{source:"Node 2",target:"Node 4"},{source:"Node 1",target:"Node 4"}],lineStyle:{opacity:.9,width:2,curveness:0}}]};}static{this.\u0275fac=function(t){return new(t||e)};}static{this.\u0275cmp=ut({type:e,selectors:[["app-graph-simple"]],decls:2,vars:4,consts:[["echarts","",1,"demo-chart",3,"options","theme"],[3,"html","component"]],template:function(t,o){t&1&&mc(0,"div",0)(1,"app-code-block",1),t&2&&(Mv("options",o.options)("theme",o.themeService.echartsTheme()),wf(),Mv("html",o.html)("component",o.component));},dependencies:[ze$1,An],encapsulation:2,changeDetection:1});}}return e})();var Me=(e,c)=>c.label;function Ne(e,c){if(e&1){let n=AT();Ja(0,"button",4),yc("click",function(){let o=xg(n).$index,r=RT();return Rg(r.selectedIndex.set(o))}),Gf(1),Uf();}if(e&2){let n=c.$implicit,t=c.$index,o=RT();Do("active",o.selectedIndex()===t),wf(),Wf(" ",n.label," ");}}function we(e,c){e&1&&mc(0,"app-graph-simple");}function Ee(e,c){e&1&&mc(0,"app-graph-force-layout");}var X=(()=>{class e{constructor(){this.selectedIndex=Q$1(0),this.tabs=[{label:"Simple Graph"},{label:"Force Layout"}];}static{this.\u0275fac=function(t){return new(t||e)};}static{this.\u0275cmp=ut({type:e,selectors:[["app-series-graph"]],decls:7,vars:1,consts:[[1,"demo-layout"],[1,"demo-sidebar"],[3,"active"],[1,"demo-content"],[3,"click"]],template:function(t,o){if(t&1&&(Ja(0,"div",0)(1,"nav",1),_T(2,Ne,2,3,"button",2,Me),Uf(),Ja(4,"div",3),ET(5,we,1,0,"app-graph-simple")(6,Ee,1,0,"app-graph-force-layout"),Uf()()),t&2){let r;wf(2),IT(o.tabs),wf(3),bT((r=o.selectedIndex())===0?5:r===1?6:-1);}},dependencies:[V,$],styles:[".demo-layout[_ngcontent-%COMP%]{display:flex;min-height:600px}.demo-sidebar[_ngcontent-%COMP%]{width:200px;flex-shrink:0;border-right:1px solid var(--app-border);background:var(--app-surface);display:flex;flex-direction:column;padding:8px 0}.demo-sidebar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{all:unset;box-sizing:border-box;padding:10px 20px;cursor:pointer;font-size:14px;color:var(--mat-sys-on-surface);border-left:3px solid transparent;transition:background-color .15s,border-color .15s,color .15s}.demo-sidebar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:var(--app-glow);color:var(--app-accent)}.demo-sidebar[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%]{color:var(--app-accent);border-left-color:var(--app-accent);background-color:var(--app-glow);font-weight:500}.demo-content[_ngcontent-%COMP%]{flex:1;min-width:0;padding:0 24px}@media(max-width:768px){.demo-layout[_ngcontent-%COMP%]{flex-direction:column}.demo-sidebar[_ngcontent-%COMP%]{width:100%;flex-direction:row;border-right:none;border-bottom:1px solid var(--app-border);overflow-x:auto;padding:0}.demo-sidebar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{white-space:nowrap;border-left:none;border-bottom:3px solid transparent;padding:10px 16px}.demo-sidebar[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%]{border-left-color:transparent;border-bottom-color:var(--app-accent)}.demo-content[_ngcontent-%COMP%]{padding:0}}"],changeDetection:1});}}return e})();P();var me=`<!-- DEMO START -->
<div
  echarts
  [options]="options | async"
  [theme]="themeService.echartsTheme()"
  class="demo-chart"></div>
<!-- DEMO END -->

<app-code-block [html]="html" [component]="component"> </app-code-block>
`;var ce=`import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import type { EChartsCoreOption } from 'echarts/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as util from 'zrender/lib/core/util';
// IGNORE START
import html from './tree-from-left-to-right.component.html';
import component from './tree-from-left-to-right.component.txt';
import { NgxEchartsDirective } from 'ngx-echarts';
import { CodeBlockComponent } from '../../../../shared/code-block/code-block.component';
import { ThemeService } from '../../../../services/theme.service';
import { AsyncPipe } from '@angular/common';
// IGNORE END

@Component({
  selector: 'app-tree-from-left-to-right',
  templateUrl: './tree-from-left-to-right.component.html',
  styleUrls: ['./tree-from-left-to-right.component.scss'],
  imports: [NgxEchartsDirective, CodeBlockComponent, AsyncPipe],
})
export class TreeFromLeftToRightComponent implements OnInit {
  private http = inject(HttpClient);
  readonly themeService = inject(ThemeService);

  // IGNORE START
  html = html;
  component = component;
  // IGNORE END
  options: Observable<EChartsCoreOption>;

  ngOnInit(): void {
    this.options = this.http.get<any>('assets/data/flare.json', { responseType: 'json' }).pipe(
      map(data => {
        util.each(
          data.children,
          (datum: any, index: number) => index % 2 === 0 && (datum.collapsed = true)
        );
        return {
          tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove',
          },
          series: [
            {
              type: 'tree',
              data: [data],
              top: '1%',
              left: '7%',
              bottom: '1%',
              right: '20%',
              symbolSize: 7,
              label: {
                position: 'left',
                verticalAlign: 'middle',
                align: 'right',
                fontSize: 9,
              },
              leaves: {
                label: {
                  position: 'right',
                  verticalAlign: 'middle',
                  align: 'left',
                },
              },
              expandAndCollapse: true,
              animationDuration: 550,
              animationDurationUpdate: 750,
            },
          ],
        };
      })
    );
  }
}
`;var Y=(()=>{class e{constructor(){this.http=p(Hc),this.themeService=p(Fe),this.html=me,this.component=ce;}ngOnInit(){this.options=this.http.get("assets/data/flare.json",{responseType:"json"}).pipe(V$1(n=>(T(n.children,(t,o)=>o%2===0&&(t.collapsed=true)),{tooltip:{trigger:"item",triggerOn:"mousemove"},series:[{type:"tree",data:[n],top:"1%",left:"7%",bottom:"1%",right:"20%",symbolSize:7,label:{position:"left",verticalAlign:"middle",align:"right",fontSize:9},leaves:{label:{position:"right",verticalAlign:"middle",align:"left"}},expandAndCollapse:true,animationDuration:550,animationDurationUpdate:750}]})));}static{this.\u0275fac=function(t){return new(t||e)};}static{this.\u0275cmp=ut({type:e,selectors:[["app-tree-from-left-to-right"]],decls:3,vars:6,consts:[["echarts","",1,"demo-chart",3,"options","theme"],[3,"html","component"]],template:function(t,o){t&1&&(mc(0,"div",0),dS(1,"async"),mc(2,"app-code-block",1)),t&2&&(Mv("options",hS(1,4,o.options))("theme",o.themeService.echartsTheme()),wf(2),Mv("html",o.html)("component",o.component));},dependencies:[ze$1,An,WS],encapsulation:2,changeDetection:1});}}return e})();var se=`<!-- DEMO START -->
<div
  echarts
  [options]="options | async"
  [theme]="themeService.echartsTheme()"
  class="demo-chart"></div>
<!-- DEMO END -->

<app-code-block [html]="html" [component]="component"> </app-code-block>
`;var le=`import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import type { EChartsCoreOption } from 'echarts/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// IGNORE START
import html from './tree-radial.component.html';
import component from './tree-radial.component.txt';
import { NgxEchartsDirective } from 'ngx-echarts';
import { CodeBlockComponent } from '../../../../shared/code-block/code-block.component';
import { ThemeService } from '../../../../services/theme.service';
import { AsyncPipe } from '@angular/common';
// IGNORE END

@Component({
  selector: 'app-tree-radial',
  templateUrl: './tree-radial.component.html',
  styleUrls: ['./tree-radial.component.scss'],
  imports: [NgxEchartsDirective, CodeBlockComponent, AsyncPipe],
})
export class TreeRadialComponent implements OnInit {
  private http = inject(HttpClient);
  readonly themeService = inject(ThemeService);

  // IGNORE START
  html = html;
  component = component;
  // IGNORE END
  options: Observable<EChartsCoreOption>;

  ngOnInit(): void {
    this.options = this.http.get<any>('assets/data/flare.json', { responseType: 'json' }).pipe(
      map(data => ({
        tooltip: {
          trigger: 'item',
          triggerOn: 'mousemove',
        },
        series: [
          {
            type: 'tree',
            data: [data],
            top: '18%',
            bottom: '14%',
            layout: 'radial',
            symbol: 'emptyCircle',
            symbolSize: 7,
            initialTreeDepth: 3,
            animationDurationUpdate: 750,
          },
        ],
      }))
    );
  }
}
`;var W=(()=>{class e{constructor(){this.http=p(Hc),this.themeService=p(Fe),this.html=se,this.component=le;}ngOnInit(){this.options=this.http.get("assets/data/flare.json",{responseType:"json"}).pipe(V$1(n=>({tooltip:{trigger:"item",triggerOn:"mousemove"},series:[{type:"tree",data:[n],top:"18%",bottom:"14%",layout:"radial",symbol:"emptyCircle",symbolSize:7,initialTreeDepth:3,animationDurationUpdate:750}]})));}static{this.\u0275fac=function(t){return new(t||e)};}static{this.\u0275cmp=ut({type:e,selectors:[["app-tree-radial"]],decls:3,vars:6,consts:[["echarts","",1,"demo-chart",3,"options","theme"],[3,"html","component"]],template:function(t,o){t&1&&(mc(0,"div",0),dS(1,"async"),mc(2,"app-code-block",1)),t&2&&(Mv("options",hS(1,4,o.options))("theme",o.themeService.echartsTheme()),wf(2),Mv("html",o.html)("component",o.component));},dependencies:[ze$1,An,WS],encapsulation:2,changeDetection:1});}}return e})();var Re=(e,c)=>c.label;function je(e,c){if(e&1){let n=AT();Ja(0,"button",4),yc("click",function(){let o=xg(n).$index,r=RT();return Rg(r.selectedIndex.set(o))}),Gf(1),Uf();}if(e&2){let n=c.$implicit,t=c.$index,o=RT();Do("active",o.selectedIndex()===t),wf(),Wf(" ",n.label," ");}}function Ae(e,c){e&1&&mc(0,"app-tree-from-left-to-right");}function ze(e,c){e&1&&mc(0,"app-tree-radial");}var q=(()=>{class e{constructor(){this.selectedIndex=Q$1(0),this.tabs=[{label:"From Left To Right"},{label:"Radial Tree"}];}static{this.\u0275fac=function(t){return new(t||e)};}static{this.\u0275cmp=ut({type:e,selectors:[["app-series-tree"]],decls:7,vars:1,consts:[[1,"demo-layout"],[1,"demo-sidebar"],[3,"active"],[1,"demo-content"],[3,"click"]],template:function(t,o){if(t&1&&(Ja(0,"div",0)(1,"nav",1),_T(2,je,2,3,"button",2,Re),Uf(),Ja(4,"div",3),ET(5,Ae,1,0,"app-tree-from-left-to-right")(6,ze,1,0,"app-tree-radial"),Uf()()),t&2){let r;wf(2),IT(o.tabs),wf(3),bT((r=o.selectedIndex())===0?5:r===1?6:-1);}},dependencies:[Y,W],styles:[".demo-layout[_ngcontent-%COMP%]{display:flex;min-height:600px}.demo-sidebar[_ngcontent-%COMP%]{width:200px;flex-shrink:0;border-right:1px solid var(--app-border);background:var(--app-surface);display:flex;flex-direction:column;padding:8px 0}.demo-sidebar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{all:unset;box-sizing:border-box;padding:10px 20px;cursor:pointer;font-size:14px;color:var(--mat-sys-on-surface);border-left:3px solid transparent;transition:background-color .15s,border-color .15s,color .15s}.demo-sidebar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:var(--app-glow);color:var(--app-accent)}.demo-sidebar[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%]{color:var(--app-accent);border-left-color:var(--app-accent);background-color:var(--app-glow);font-weight:500}.demo-content[_ngcontent-%COMP%]{flex:1;min-width:0;padding:0 24px}@media(max-width:768px){.demo-layout[_ngcontent-%COMP%]{flex-direction:column}.demo-sidebar[_ngcontent-%COMP%]{width:100%;flex-direction:row;border-right:none;border-bottom:1px solid var(--app-border);overflow-x:auto;padding:0}.demo-sidebar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{white-space:nowrap;border-left:none;border-bottom:3px solid transparent;padding:10px 16px}.demo-sidebar[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%]{border-left-color:transparent;border-bottom-color:var(--app-accent)}.demo-content[_ngcontent-%COMP%]{padding:0}}"],changeDetection:1});}}return e})();var de=`<!-- DEMO START -->
<div echarts [options]="options" [theme]="themeService.echartsTheme()" class="demo-chart"></div>
<!-- DEMO END -->

<app-code-block [html]="html" [component]="component"> </app-code-block>
`;var he=`import { Component, OnInit, inject } from '@angular/core';
import { time as echartTime } from 'echarts/core';
import type { EChartsCoreOption } from 'echarts/core';
// IGNORE START
import html from './heatmap-calendar.component.html';
import component from './heatmap-calendar.component.txt';
import { NgxEchartsDirective } from 'ngx-echarts';
import { CodeBlockComponent } from '../../../../shared/code-block/code-block.component';
import { ThemeService } from '../../../../services/theme.service';
// IGNORE END

@Component({
  selector: 'app-heatmap-calendar',
  templateUrl: './heatmap-calendar.component.html',
  styleUrl: './heatmap-calendar.component.scss',
  imports: [NgxEchartsDirective, CodeBlockComponent],
})
export class HeatmapCalendarComponent implements OnInit {
  // IGNORE START
  html = html;
  component = component;
  // IGNORE END
  readonly themeService = inject(ThemeService);
  options: EChartsCoreOption;

  ngOnInit(): void {
    this.options = {
      title: {
        top: 30,
        left: 'center',
        text: 'Daily Step Count',
      },
      tooltip: {},
      visualMap: {
        min: 0,
        max: 10000,
        type: 'piecewise',
        orient: 'horizontal',
        left: 'center',
        top: 65,
      },
      calendar: {
        top: 120,
        left: 30,
        right: 30,
        cellSize: ['auto', 13],
        range: '2016',
        itemStyle: {
          borderWidth: 0.5,
        },
        yearLabel: { show: false },
      },
      series: {
        type: 'heatmap',
        coordinateSystem: 'calendar',
        data: this.getVirtualData('2016'),
      },
    };
  }

  getVirtualData(year: string) {
    const date = +echartTime.parse(year + '-01-01');
    const end = +echartTime.parse(+year + 1 + '-01-01');
    const dayTime = 3600 * 24 * 1000;
    const data: [string, number][] = [];
    for (let time = date; time < end; time += dayTime) {
      data.push([
        echartTime.format(time, '{yyyy}-{MM}-{dd}', false),
        Math.floor(Math.random() * 10000),
      ]);
    }
    return data;
  }
}
`;var J=(()=>{class e{constructor(){this.html=de,this.component=he,this.themeService=p(Fe);}ngOnInit(){this.options={title:{top:30,left:"center",text:"Daily Step Count"},tooltip:{},visualMap:{min:0,max:1e4,type:"piecewise",orient:"horizontal",left:"center",top:65},calendar:{top:120,left:30,right:30,cellSize:["auto",13],range:"2016",itemStyle:{borderWidth:.5},yearLabel:{show:false}},series:{type:"heatmap",coordinateSystem:"calendar",data:this.getVirtualData("2016")}};}getVirtualData(n){let t=+gd.parse(n+"-01-01"),o=+gd.parse(+n+1+"-01-01"),r=3600*24*1e3,y=[];for(let T=t;T<o;T+=r)y.push([gd.format(T,"{yyyy}-{MM}-{dd}",false),Math.floor(Math.random()*1e4)]);return y}static{this.\u0275fac=function(t){return new(t||e)};}static{this.\u0275cmp=ut({type:e,selectors:[["app-heatmap-calendar"]],decls:2,vars:4,consts:[["echarts","",1,"demo-chart",3,"options","theme"],[3,"html","component"]],template:function(t,o){t&1&&mc(0,"div",0)(1,"app-code-block",1),t&2&&(Mv("options",o.options)("theme",o.themeService.echartsTheme()),wf(),Mv("html",o.html)("component",o.component));},dependencies:[ze$1,An],encapsulation:2,changeDetection:1});}}return e})();var fe=`<!-- DEMO START -->
<div echarts [options]="options" [theme]="themeService.echartsTheme()" class="demo-chart"></div>
<!-- DEMO END -->

<app-code-block [html]="html" [component]="component"> </app-code-block>
`;var ue=`import { Component, OnInit, inject } from '@angular/core';
import type { EChartsCoreOption } from 'echarts/core';
// IGNORE START
import html from './heatmap-discrete.component.html';
import component from './heatmap-discrete.component.txt';
import { NgxEchartsDirective } from 'ngx-echarts';
import { CodeBlockComponent } from '../../../../shared/code-block/code-block.component';
import { ThemeService } from '../../../../services/theme.service';
// IGNORE END

@Component({
  selector: 'app-heatmap-discrete',
  templateUrl: './heatmap-discrete.component.html',
  styleUrl: './heatmap-discrete.component.scss',
  imports: [NgxEchartsDirective, CodeBlockComponent],
})
export class HeatmapDiscreteComponent implements OnInit {
  // IGNORE START
  html = html;
  component = component;
  // IGNORE END
  readonly themeService = inject(ThemeService);
  options: EChartsCoreOption;
  noise = getNoiseHelper();

  ngOnInit(): void {
    this.noise.seed(Math.random());
    let { data, xData, yData } = this.generateData();

    this.options = {
      tooltip: {},
      grid: {
        right: 140,
        left: 40,
      },
      xAxis: {
        type: 'category',
        data: xData,
      },
      yAxis: {
        type: 'category',
        data: yData,
      },
      visualMap: {
        type: 'piecewise',
        min: 0,
        max: 1,
        left: 'right',
        top: 'center',
        calculable: true,
        realtime: false,
        splitNumber: 8,
        inRange: {
          color: [
            '#313695',
            '#4575b4',
            '#74add1',
            '#abd9e9',
            '#e0f3f8',
            '#ffffbf',
            '#fee090',
            '#fdae61',
            '#f46d43',
            '#d73027',
            '#a50026',
          ],
        },
      },
      series: [
        {
          name: 'Gaussian',
          type: 'heatmap',
          data: data,
          emphasis: {
            itemStyle: {
              borderColor: '#333',
              borderWidth: 1,
            },
          },
          progressive: 1000,
          animation: false,
        },
      ],
    };
  }

  generateData() {
    let xData: number[] = [];
    let yData: number[] = [];

    let data = [];
    for (let i = 0; i <= 200; i++) {
      for (let j = 0; j <= 100; j++) {
        data.push([i, j, this.noise.perlin2(i / 40, j / 20) + 0.5]);
      }
      xData.push(i);
    }
    for (let j = 0; j < 100; j++) {
      yData.push(j);
    }
    return { data, xData, yData };
  }
}

///////////////////////////////////////////////////////////////////////////
// perlin noise helper from https://github.com/josephg/noisejs
///////////////////////////////////////////////////////////////////////////
function getNoiseHelper() {
  class Grad {
    x: number;
    y: number;
    z: number;
    constructor(x: number, y: number, z: number) {
      this.x = x;
      this.y = y;
      this.z = z;
    }

    dot2(x: number, y: number) {
      return this.x * x + this.y * y;
    }

    dot3(x: number, y: number, z: number) {
      return this.x * x + this.y * y + this.z * z;
    }
  }

  const grad3 = [
    new Grad(1, 1, 0),
    new Grad(-1, 1, 0),
    new Grad(1, -1, 0),
    new Grad(-1, -1, 0),
    new Grad(1, 0, 1),
    new Grad(-1, 0, 1),
    new Grad(1, 0, -1),
    new Grad(-1, 0, -1),
    new Grad(0, 1, 1),
    new Grad(0, -1, 1),
    new Grad(0, 1, -1),
    new Grad(0, -1, -1),
  ];
  const p = [
    151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140, 36, 103, 30, 69,
    142, 8, 99, 37, 240, 21, 10, 23, 190, 6, 148, 247, 120, 234, 75, 0, 26, 197, 62, 94, 252, 219,
    203, 117, 35, 11, 32, 57, 177, 33, 88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175,
    74, 165, 71, 134, 139, 48, 27, 166, 77, 146, 158, 231, 83, 111, 229, 122, 60, 211, 133, 230,
    220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25, 63, 161, 1, 216, 80, 73, 209, 76,
    132, 187, 208, 89, 18, 169, 200, 196, 135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186,
    3, 64, 52, 217, 226, 250, 124, 123, 5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59,
    227, 47, 16, 58, 17, 182, 189, 28, 42, 223, 183, 170, 213, 119, 248, 152, 2, 44, 154, 163, 70,
    221, 153, 101, 155, 167, 43, 172, 9, 129, 22, 39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178,
    185, 112, 104, 218, 246, 97, 228, 251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162, 241, 81,
    51, 145, 235, 249, 14, 239, 107, 49, 192, 214, 31, 181, 199, 106, 157, 184, 84, 204, 176, 115,
    121, 50, 45, 127, 4, 150, 254, 138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128, 195,
    78, 66, 215, 61, 156, 180,
  ];
  // To remove the need for index wrapping, double the permutation table length
  let perm = new Array(512);
  let gradP = new Array(512);
  // This isn't a very good seeding function, but it works ok. It supports 2^16
  // different seed values. Write something better if you need more seeds.
  function seed(seed: number) {
    if (seed > 0 && seed < 1) {
      // Scale the seed out
      seed *= 65536;
    }
    seed = Math.floor(seed);
    if (seed < 256) {
      seed |= seed << 8;
    }
    for (let i = 0; i < 256; i++) {
      let v;
      if (i & 1) {
        v = p[i] ^ (seed & 255);
      } else {
        v = p[i] ^ ((seed >> 8) & 255);
      }
      perm[i] = perm[i + 256] = v;
      gradP[i] = gradP[i + 256] = grad3[v % 12];
    }
  }
  seed(0);
  // ##### Perlin noise stuff
  function fade(t: number) {
    return t * t * t * (t * (t * 6 - 15) + 10);
  }
  function lerp(a: number, b: number, t: number) {
    return (1 - t) * a + t * b;
  }
  // 2D Perlin Noise
  function perlin2(x: number, y: number) {
    // Find unit grid cell containing point
    let X = Math.floor(x),
      Y = Math.floor(y);
    // Get relative xy coordinates of point within that cell
    x = x - X;
    y = y - Y;
    // Wrap the integer cells at 255 (smaller integer period can be introduced here)
    X = X & 255;
    Y = Y & 255;
    // Calculate noise contributions from each of the four corners
    let n00 = gradP[X + perm[Y]].dot2(x, y);
    let n01 = gradP[X + perm[Y + 1]].dot2(x, y - 1);
    let n10 = gradP[X + 1 + perm[Y]].dot2(x - 1, y);
    let n11 = gradP[X + 1 + perm[Y + 1]].dot2(x - 1, y - 1);
    // Compute the fade curve value for x
    let u = fade(x);
    // Interpolate the four results
    return lerp(lerp(n00, n10, u), lerp(n01, n11, u), fade(y));
  }

  return {
    seed,
    perlin2,
  };
}
`;var K=(()=>{class e{constructor(){this.html=fe,this.component=ue,this.themeService=p(Fe),this.noise=Le();}ngOnInit(){this.noise.seed(Math.random());let{data:n,xData:t,yData:o}=this.generateData();this.options={tooltip:{},grid:{right:140,left:40},xAxis:{type:"category",data:t},yAxis:{type:"category",data:o},visualMap:{type:"piecewise",min:0,max:1,left:"right",top:"center",calculable:true,realtime:false,splitNumber:8,inRange:{color:["#313695","#4575b4","#74add1","#abd9e9","#e0f3f8","#ffffbf","#fee090","#fdae61","#f46d43","#d73027","#a50026"]}},series:[{name:"Gaussian",type:"heatmap",data:n,emphasis:{itemStyle:{borderColor:"#333",borderWidth:1}},progressive:1e3,animation:false}]};}generateData(){let n=[],t=[],o=[];for(let r=0;r<=200;r++){for(let y=0;y<=100;y++)o.push([r,y,this.noise.perlin2(r/40,y/20)+.5]);n.push(r);}for(let r=0;r<100;r++)t.push(r);return {data:o,xData:n,yData:t}}static{this.\u0275fac=function(t){return new(t||e)};}static{this.\u0275cmp=ut({type:e,selectors:[["app-heatmap-discrete"]],decls:2,vars:4,consts:[["echarts","",1,"demo-chart",3,"options","theme"],[3,"html","component"]],template:function(t,o){t&1&&mc(0,"div",0)(1,"app-code-block",1),t&2&&(Mv("options",o.options)("theme",o.themeService.echartsTheme()),wf(),Mv("html",o.html)("component",o.component));},dependencies:[ze$1,An],encapsulation:2,changeDetection:1});}}return e})();function Le(){class e{constructor(a,s,v){this.x=a,this.y=s,this.z=v;}dot2(a,s){return this.x*a+this.y*s}dot3(a,s,v){return this.x*a+this.y*s+this.z*v}}let c=[new e(1,1,0),new e(-1,1,0),new e(1,-1,0),new e(-1,-1,0),new e(1,0,1),new e(-1,0,1),new e(1,0,-1),new e(-1,0,-1),new e(0,1,1),new e(0,-1,1),new e(0,1,-1),new e(0,-1,-1)],n=[151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180],t=new Array(512),o=new Array(512);function r(i){i>0&&i<1&&(i*=65536),i=Math.floor(i),i<256&&(i|=i<<8);for(let a=0;a<256;a++){let s;a&1?s=n[a]^i&255:s=n[a]^i>>8&255,t[a]=t[a+256]=s,o[a]=o[a+256]=c[s%12];}}r(0);function y(i){return i*i*i*(i*(i*6-15)+10)}function T(i,a,s){return (1-s)*i+s*a}function be(i,a){let s=Math.floor(i),v=Math.floor(a);i=i-s,a=a-v,s=s&255,v=v&255;let Ce=o[s+t[v]].dot2(i,a),ve=o[s+t[v+1]].dot2(i,a-1),ye=o[s+1+t[v]].dot2(i-1,a),xe=o[s+1+t[v+1]].dot2(i-1,a-1),ee=y(i);return T(T(Ce,ye,ee),T(ve,xe,ee),y(a))}return {seed:r,perlin2:be}}var $e=(e,c)=>c.label;function Ve(e,c){if(e&1){let n=AT();Ja(0,"button",4),yc("click",function(){let o=xg(n).$index,r=RT();return Rg(r.selectedIndex.set(o))}),Gf(1),Uf();}if(e&2){let n=c.$implicit,t=c.$index,o=RT();Do("active",o.selectedIndex()===t),wf(),Wf(" ",n.label," ");}}function Xe(e,c){e&1&&mc(0,"app-heatmap-calendar");}function Ye(e,c){e&1&&mc(0,"app-heatmap-discrete");}var Q=(()=>{class e{constructor(){this.selectedIndex=Q$1(0),this.tabs=[{label:"Calendar Heatmap"},{label:"Discrete Mapping of Color"}];}static{this.\u0275fac=function(t){return new(t||e)};}static{this.\u0275cmp=ut({type:e,selectors:[["app-series-heatmap"]],decls:7,vars:1,consts:[[1,"demo-layout"],[1,"demo-sidebar"],[3,"active"],[1,"demo-content"],[3,"click"]],template:function(t,o){if(t&1&&(Ja(0,"div",0)(1,"nav",1),_T(2,Ve,2,3,"button",2,$e),Uf(),Ja(4,"div",3),ET(5,Xe,1,0,"app-heatmap-calendar")(6,Ye,1,0,"app-heatmap-discrete"),Uf()()),t&2){let r;wf(2),IT(o.tabs),wf(3),bT((r=o.selectedIndex())===0?5:r===1?6:-1);}},dependencies:[J,K],styles:[".demo-layout[_ngcontent-%COMP%]{display:flex;min-height:600px}.demo-sidebar[_ngcontent-%COMP%]{width:200px;flex-shrink:0;border-right:1px solid var(--app-border);background:var(--app-surface);display:flex;flex-direction:column;padding:8px 0}.demo-sidebar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{all:unset;box-sizing:border-box;padding:10px 20px;cursor:pointer;font-size:14px;color:var(--mat-sys-on-surface);border-left:3px solid transparent;transition:background-color .15s,border-color .15s,color .15s}.demo-sidebar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:var(--app-glow);color:var(--app-accent)}.demo-sidebar[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%]{color:var(--app-accent);border-left-color:var(--app-accent);background-color:var(--app-glow);font-weight:500}.demo-content[_ngcontent-%COMP%]{flex:1;min-width:0;padding:0 24px}@media(max-width:768px){.demo-layout[_ngcontent-%COMP%]{flex-direction:column}.demo-sidebar[_ngcontent-%COMP%]{width:100%;flex-direction:row;border-right:none;border-bottom:1px solid var(--app-border);overflow-x:auto;padding:0}.demo-sidebar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{white-space:nowrap;border-left:none;border-bottom:3px solid transparent;padding:10px 16px}.demo-sidebar[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%]{border-left-color:transparent;border-bottom-color:var(--app-accent)}.demo-content[_ngcontent-%COMP%]{padding:0}}"],changeDetection:1});}}return e})();var We=[{path:"",redirectTo:"graph",pathMatch:"full"},{path:"graph",component:X},{path:"tree",component:q},{path:"heatmap",component:Q}],ge=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)};}static{this.\u0275mod=je$1({type:e});}static{this.\u0275inj=Ae$1({imports:[nx.forChild(We),nx]});}}return e})();var Ko=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)};}static{this.\u0275mod=je$1({type:e});}static{this.\u0275inj=Ae$1({imports:[rh,Me$1,ge,X,$,V,q,Y,W,Q,J,K]});}}return e})();export{Ko as DemoSeriesModule};