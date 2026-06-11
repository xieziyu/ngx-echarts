import {j as je,A as Ae,n as nx,Q,u as ut,y,p,a as y5,$ as $f,H as Hf,D as Do,I as Iu,O as Ot,S as St,d as dt,b as At,R as Rt,x as xG,U as Ut,J as Ja,m as mc,c as Uf,G as Gf,e as yc,w as wf,f as Ri,E as Ec,M as Mv}from'./main-34M3ZFJN.js';var N=["*"];var R=new y("MAT_CARD_CONFIG"),T=(()=>{class a{appearance;constructor(){let o=p(R,{optional:true});this.appearance=o?.appearance||"raised";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=ut({type:a,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(r,i){r&2&&Do("mat-mdc-card-outlined",i.appearance==="outlined")("mdc-card--outlined",i.appearance==="outlined")("mat-mdc-card-filled",i.appearance==="filled")("mdc-card--filled",i.appearance==="filled");},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:N,decls:1,vars:0,template:function(r,i){r&1&&($f(),Hf(0));},styles:[`.mat-mdc-card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  border-style: solid;
  border-width: 0;
  background-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-elevated-container-elevation, var(--mat-sys-level1));
}
.mat-mdc-card::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 1px transparent;
  content: "";
  display: block;
  pointer-events: none;
  box-sizing: border-box;
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
}

.mat-mdc-card-outlined {
  background-color: var(--mat-card-outlined-container-color, var(--mat-sys-surface));
  border-radius: var(--mat-card-outlined-container-shape, var(--mat-sys-corner-medium));
  border-width: var(--mat-card-outlined-outline-width, 1px);
  border-color: var(--mat-card-outlined-outline-color, var(--mat-sys-outline-variant));
  box-shadow: var(--mat-card-outlined-container-elevation, var(--mat-sys-level0));
}
.mat-mdc-card-outlined::after {
  border: none;
}

.mat-mdc-card-filled {
  background-color: var(--mat-card-filled-container-color, var(--mat-sys-surface-container-highest));
  border-radius: var(--mat-card-filled-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-filled-container-elevation, var(--mat-sys-level0));
}

.mdc-card__media {
  position: relative;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.mdc-card__media::before {
  display: block;
  content: "";
}
.mdc-card__media:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.mdc-card__media:last-child {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}

.mat-mdc-card-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  padding: 8px;
}

.mat-mdc-card-title {
  font-family: var(--mat-card-title-text-font, var(--mat-sys-title-large-font));
  line-height: var(--mat-card-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-size: var(--mat-card-title-text-size, var(--mat-sys-title-large-size));
  letter-spacing: var(--mat-card-title-text-tracking, var(--mat-sys-title-large-tracking));
  font-weight: var(--mat-card-title-text-weight, var(--mat-sys-title-large-weight));
}

.mat-mdc-card-subtitle {
  color: var(--mat-card-subtitle-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-card-subtitle-text-font, var(--mat-sys-title-medium-font));
  line-height: var(--mat-card-subtitle-text-line-height, var(--mat-sys-title-medium-line-height));
  font-size: var(--mat-card-subtitle-text-size, var(--mat-sys-title-medium-size));
  letter-spacing: var(--mat-card-subtitle-text-tracking, var(--mat-sys-title-medium-tracking));
  font-weight: var(--mat-card-subtitle-text-weight, var(--mat-sys-title-medium-weight));
}

.mat-mdc-card-title,
.mat-mdc-card-subtitle {
  display: block;
  margin: 0;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle {
  padding: 16px 16px 0;
}

.mat-mdc-card-header {
  display: flex;
  padding: 16px 16px 0;
}

.mat-mdc-card-content {
  display: block;
  padding: 0 16px;
}
.mat-mdc-card-content:first-child {
  padding-top: 16px;
}
.mat-mdc-card-content:last-child {
  padding-bottom: 16px;
}

.mat-mdc-card-title-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.mat-mdc-card-avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-bottom: 16px;
  object-fit: cover;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title {
  line-height: normal;
}

.mat-mdc-card-sm-image {
  width: 80px;
  height: 80px;
}

.mat-mdc-card-md-image {
  width: 112px;
  height: 112px;
}

.mat-mdc-card-lg-image {
  width: 152px;
  height: 152px;
}

.mat-mdc-card-xl-image {
  width: 240px;
  height: 240px;
}

.mat-mdc-card-subtitle ~ .mat-mdc-card-title,
.mat-mdc-card-title ~ .mat-mdc-card-subtitle,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-title-group .mat-mdc-card-title,
.mat-mdc-card-title-group .mat-mdc-card-subtitle {
  padding-top: 0;
}

.mat-mdc-card-content > :last-child:not(.mat-mdc-card-footer) {
  margin-bottom: 0;
}

.mat-mdc-card-actions-align-end {
  justify-content: flex-end;
}
`],encapsulation:2})}return a})();var j=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=je({type:a});static \u0275inj=Ae({imports:[y5]})}return a})();var g=(()=>{class a{constructor(){this.copied=Q(false),this.scriptText=`
  ## Install
  \`\`\`bash
  # npm
  npm install echarts ngx-echarts
  # yarn
  yarn add echarts ngx-echarts
  # pnpm
  pnpm add echarts ngx-echarts
  \`\`\`
`,this.importText=`
  ## Standalone Directive
  \`\`\`typescript
  import { NgxEchartsDirective, provideEchartsCore } from 'ngx-echarts';
  import * as echarts from 'echarts/core';
  import { BarChart } from 'echarts/charts';
  import { GridComponent } from 'echarts/components';
  import { CanvasRenderer } from 'echarts/renderers';
  echarts.use([BarChart, GridComponent, CanvasRenderer]);

  @Component({
    selector: 'app-root',
    imports: [NgxEchartsDirective],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    providers: [
      provideEchartsCore({ echarts }),
    ]
  })
  export class AppComponent {}
  \`\`\`
`,this.importNgModuleText=`
  ## NgModule
  \`\`\`typescript
  import { NgxEchartsModule } from 'ngx-echarts';
  import * as echarts from 'echarts/core';
  import { BarChart } from 'echarts/charts';
  import { GridComponent } from 'echarts/components';
  import { CanvasRenderer } from 'echarts/renderers';
  echarts.use([BarChart, GridComponent, CanvasRenderer]);

  @NgModule({
    imports: [
      NgxEchartsModule.forRoot({ echarts }),
    ],
  })
  export class AppModule {}
  \`\`\`
`;}copyInstallCmd(){navigator.clipboard.writeText("npm install ngx-echarts echarts").then(()=>{this.copied.set(true),setTimeout(()=>this.copied.set(false),2e3);});}static{this.\u0275fac=function(r){return new(r||a)};}static{this.\u0275cmp=ut({type:a,selectors:[["app-welcome"]],decls:69,vars:6,consts:[[1,"hero"],[1,"hero-inner"],["src","assets/img/logo.svg","alt","ngx-echarts",1,"hero-logo"],[1,"hero-badges"],["href","https://www.npmjs.com/package/ngx-echarts","target","_blank"],["alt","npm version","src","https://img.shields.io/npm/v/ngx-echarts.svg"],["alt","npm downloads","src","https://img.shields.io/npm/dm/ngx-echarts.svg"],[1,"accent"],[1,"hero-badge"],[1,"tagline"],[1,"install-card"],["mat-icon-button","",1,"copy-btn",3,"click"],[1,"hero-actions"],["mat-flat-button","","color","primary","routerLink","/basic"],["mat-stroked-button","","href","https://github.com/xieziyu/ngx-echarts","target","_blank"],[3,"size"],[1,"features"],[1,"section-header"],[1,"features-grid"],[1,"feature-card"],[1,"feature-icon"],[1,"docs-section"],[3,"data"]],template:function(r,i){r&1&&(Ja(0,"section",0)(1,"div",1),mc(2,"img",2),Ja(3,"div",3)(4,"a",4),mc(5,"img",5),Uf(),Ja(6,"a",4),mc(7,"img",6),Uf()(),Ja(8,"h1"),Gf(9,"ngx-"),Ja(10,"span",7),Gf(11,"echarts"),Uf()(),Ja(12,"div",8),Gf(13,"Angular + ECharts"),Uf(),Ja(14,"p",9),Gf(15," Reactive, declarative Apache ECharts for Angular. Build powerful data visualizations with a simple directive. "),Uf(),Ja(16,"div",10)(17,"code"),Gf(18,"npm install ngx-echarts echarts"),Uf(),Ja(19,"button",11),yc("click",function(){return i.copyInstallCmd()}),Ja(20,"mat-icon"),Gf(21),Uf()()(),Ja(22,"div",12)(23,"a",13)(24,"mat-icon"),Gf(25,"arrow_forward"),Uf(),Gf(26," Get Started "),Uf(),Ja(27,"a",14),mc(28,"app-github-icon",15),Gf(29," View on GitHub "),Uf()()()(),Ja(30,"section",16)(31,"div",17)(32,"h2"),Gf(33,"Why ngx-echarts?"),Uf(),Ja(34,"p"),Gf(35,"Everything you need to build production-grade charts in Angular"),Uf()(),Ja(36,"div",18)(37,"mat-card",19)(38,"mat-icon",20),Gf(39,"change_history"),Uf(),Ja(40,"h3"),Gf(41,"Always Up-to-date"),Uf(),Ja(42,"p"),Gf(43," Tracks the latest Angular with standalone components, signals, and zoneless change detection support. "),Uf()(),Ja(44,"mat-card",19)(45,"mat-icon",20),Gf(46,"bar_chart"),Uf(),Ja(47,"h3"),Gf(48,"Tree-shakable"),Uf(),Ja(49,"p"),Gf(50," Import only the ECharts modules you need for minimal bundle size with full custom build support. "),Uf()(),Ja(51,"mat-card",19)(52,"mat-icon",20),Gf(53,"code"),Uf(),Ja(54,"h3"),Gf(55,"TypeScript"),Uf(),Ja(56,"p"),Gf(57," Complete type definitions with strict typing for chart options, events, and configuration objects. "),Uf()(),Ja(58,"mat-card",19)(59,"mat-icon",20),Gf(60,"devices"),Uf(),Ja(61,"h3"),Gf(62,"Responsive"),Uf(),Ja(63,"p"),Gf(64,"Auto-resize support out of the box. Charts adapt seamlessly to container size changes."),Uf()()()(),Ja(65,"section",21),mc(66,"markdown",22)(67,"markdown",22)(68,"markdown",22),Uf()),r&2&&(wf(19),Ri("aria-label",i.copied()?"Copied":"Copy to clipboard"),wf(2),Ec(i.copied()?"check":"content_copy"),wf(7),Mv("size",18),wf(38),Mv("data",i.scriptText),wf(),Mv("data",i.importText),wf(),Mv("data",i.importNgModuleText));},dependencies:[Iu,Ot,St,dt,At,Rt,j,T,xG,Ut],styles:['.hero[_ngcontent-%COMP%]{text-align:center;padding:80px 24px 64px;background:linear-gradient(135deg,var(--app-hero-from) 0%,var(--app-hero-via) 50%,var(--app-hero-to) 100%);border-radius:16px;margin-bottom:64px;border:1px solid var(--app-border);position:relative;overflow:hidden}.hero-inner[_ngcontent-%COMP%]{max-width:640px;margin:0 auto}.hero-logo[_ngcontent-%COMP%]{display:block;width:120px;height:auto;margin:0 auto 24px}.hero-badge[_ngcontent-%COMP%]{display:inline-block;padding:4px 16px;border-radius:20px;font-size:13px;font-weight:500;color:var(--app-accent);border:1px solid var(--app-accent);background:var(--app-glow);margin-bottom:16px}.hero-badges[_ngcontent-%COMP%]{display:flex;gap:8px;justify-content:center;margin-bottom:24px}.hero-badges[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:20px}h1[_ngcontent-%COMP%]{font-size:56px;font-weight:800;margin-bottom:16px;letter-spacing:-1.5px}.accent[_ngcontent-%COMP%]{color:var(--app-accent)}.tagline[_ngcontent-%COMP%]{font-size:18px;color:var(--app-text-secondary);margin-bottom:32px;line-height:1.6}.install-card[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:8px;padding:8px 8px 8px 24px;background:var(--app-surface);border:1px solid var(--app-border);border-left:3px solid var(--app-accent);border-radius:8px;margin-bottom:32px}.install-card[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{font-family:Roboto Mono,monospace;font-size:14px;color:var(--app-accent)}.hero-actions[_ngcontent-%COMP%]{display:flex;gap:12px;justify-content:center;flex-wrap:wrap}.features[_ngcontent-%COMP%]{margin-bottom:64px}.section-header[_ngcontent-%COMP%]{text-align:center;margin-bottom:40px}.section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:32px;font-weight:700;margin-bottom:10px;color:var(--app-accent);letter-spacing:-.5px}.section-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;color:var(--app-text-secondary)}.features-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr);gap:20px}.feature-card[_ngcontent-%COMP%]{padding:28px;text-align:left;background:var(--app-surface);border:1px solid var(--app-border);border-radius:14px;transition:transform .25s cubic-bezier(.33,1,.68,1),box-shadow .25s cubic-bezier(.33,1,.68,1);position:relative;overflow:hidden}.feature-card[_ngcontent-%COMP%]:before{content:"";position:absolute;top:0;left:0;right:0;height:3px}.feature-card[_ngcontent-%COMP%]:hover{transform:translateY(-4px);box-shadow:0 12px 32px var(--app-glow)}.feature-card[_ngcontent-%COMP%]   .feature-icon[_ngcontent-%COMP%]{font-size:28px;width:52px;height:52px;display:flex;align-items:center;justify-content:center;border-radius:12px;margin-bottom:20px}.feature-card[_ngcontent-%COMP%]:nth-child(1):before{background:var(--app-color-blue)}.feature-card[_ngcontent-%COMP%]:nth-child(1)   .feature-icon[_ngcontent-%COMP%]{color:var(--app-color-blue);background:var(--app-tint-blue)}.feature-card[_ngcontent-%COMP%]:nth-child(2):before{background:var(--app-color-emerald)}.feature-card[_ngcontent-%COMP%]:nth-child(2)   .feature-icon[_ngcontent-%COMP%]{color:var(--app-color-emerald);background:var(--app-tint-emerald)}.feature-card[_ngcontent-%COMP%]:nth-child(3):before{background:var(--app-color-amber)}.feature-card[_ngcontent-%COMP%]:nth-child(3)   .feature-icon[_ngcontent-%COMP%]{color:var(--app-color-amber);background:var(--app-tint-amber)}.feature-card[_ngcontent-%COMP%]:nth-child(4):before{background:var(--app-color-rose)}.feature-card[_ngcontent-%COMP%]:nth-child(4)   .feature-icon[_ngcontent-%COMP%]{color:var(--app-color-rose);background:var(--app-tint-rose)}.feature-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:18px;font-weight:600;margin-bottom:8px}.feature-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;color:var(--app-text-secondary);line-height:1.6;margin:0}.docs-section[_ngcontent-%COMP%]{max-width:800px;margin:0 auto;padding:32px;background:var(--app-surface);border:1px solid var(--app-border);border-radius:14px}@media(max-width:768px){h1[_ngcontent-%COMP%]{font-size:36px}.tagline[_ngcontent-%COMP%]{font-size:16px}.features-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}}'],changeDetection:1});}}return a})();var G=[{path:"",component:g}],F=(()=>{class a{static{this.\u0275fac=function(r){return new(r||a)};}static{this.\u0275mod=je({type:a});}static{this.\u0275inj=Ae({imports:[nx.forChild(G),nx]});}}return a})();var ft=(()=>{class a{static{this.\u0275fac=function(r){return new(r||a)};}static{this.\u0275mod=je({type:a});}static{this.\u0275inj=Ae({imports:[F,g]});}}return a})();
export{ft as WelcomeModule};