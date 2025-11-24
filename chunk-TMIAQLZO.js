import{$a as v,Aa as f,G as m,H as u,Ha as h,I as s,Qa as g,R as p,S as t,T as r,U as i,Ya as x,ab as C,ba as o,mb as y,s as a}from"./chunk-Z3IVGXVU.js";var c=(()=>{class e{constructor(){this.scriptText=`
  ## Install
  \`\`\`bash
  # if you use npm
  npm install echarts --save
  npm install ngx-echarts --save
  # or if you use yarn
  yarn add echarts ngx-echarts
  \`\`\`
`,this.importText=`
  ## Import Standalone Directive
  \`\`\`typescript
  import { NgxEchartsDirective, provideEchartsCore } from 'ngx-echarts';
  import * as echarts from 'echarts/core';
  import { BarChart } from 'echarts/charts';
  import { GridComponent } from 'echarts/components';
  import { CanvasRenderer } from 'echarts/renderers';
  echarts.use([BarChart, GridComponent, CanvasRenderer]);

  @Component({
    selector: 'app-root',
    imports: [CommonModule, NgxEchartsDirective],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [
      provideEchartsCore({ echarts }),
    ]
  })
  export class AppComponent {}
  \`\`\`
`,this.importNgModuleText=`
  ## Import NgModule
  \`\`\`typescript
  import { NgxEchartsModule } from 'ngx-echarts';
  import * as echarts from 'echarts/core';
  import { BarChart } from 'echarts/charts';
  import { GridComponent } from 'echarts/components';
  import { CanvasRenderer } from 'echarts/renderers';
  echarts.use([BarChart, GridComponent, CanvasRenderer]);

  @NgModule({
    imports: [
      ...,
      NgxEchartsModule.forRoot({ echarts })
    ],
  })
  export class AppModule {}
  \`\`\`
`}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275cmp=u({type:e,selectors:[["app-welcome"]],decls:31,vars:3,consts:[[1,"text-center"],["href","https://xieziyu.github.io/ngx-echarts"],["src","assets/img/logo.svg","alt","Logo","width","80"],["align","center"],["src","https://img.shields.io/npm/v/ngx-echarts.svg","alt","version",1,"mr-2"],["src","https://img.shields.io/npm/dm/ngx-echarts.svg","alt","downloads"],[1,"lead","text-muted"],[1,"text-danger"],["href","https://github.com/xieziyu/ngx-echarts","target","blank","nz-button","","nzType","primary",1,"mr-2"],["nz-icon","","nzType","github","nzTheme","outline"],["href","https://xieziyu.github.io/ngx-echarts/api-doc","target","blank","nz-button","","nzType","default"],["nz-icon","","nzType","read","nzTheme","outline"],[1,"container"],["nz-row","","nzGutter","16"],["nz-col","","nzSpan","24"],[3,"data"]],template:function(n,d){n&1&&(t(0,"div",0)(1,"a",1),i(2,"img",2),r(),t(3,"h1",3),o(4,"NGX-ECHARTS"),r(),t(5,"p"),i(6,"img",4)(7,"img",5),r(),t(8,"p",6),o(9," ngx-echarts is an "),t(10,"strong",7),o(11,"Angular"),r(),o(12,"(ver >= 2.x) directive for "),t(13,"strong",7),o(14,"ECharts"),r(),o(15," (ver >= 3.x) "),r(),t(16,"p")(17,"a",8),i(18,"i",9),o(19," GitHub"),r(),t(20,"a",10),i(21,"i",11),o(22," Documents"),r()()(),t(23,"div",12)(24,"div",13)(25,"div",14),i(26,"markdown",15),r(),t(27,"div",14),i(28,"markdown",15),r(),t(29,"div",14),i(30,"markdown",15),r()()()),n&2&&(m(26),p("data",d.scriptText),m(2),p("data",d.importText),m(2),p("data",d.importNgModuleText))},dependencies:[x,g,v,C,f],encapsulation:2})}}return e})();var E=[{path:"",component:c}],M=(()=>{class e{static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275mod=s({type:e})}static{this.\u0275inj=a({imports:[h.forChild(E),h]})}}return e})();var B=(()=>{class e{static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275mod=s({type:e})}static{this.\u0275inj=a({imports:[M,y,c]})}}return e})();export{B as WelcomeModule};
