import{A as z,B as C,c as l,h as o,i as g,j as y,k as m,l as u,m as b,p as v,q as w,r as O,s as S,t as L,u as d,v as E,w as _,y as c}from"./chunk-LSKXCNT7.js";function j(n,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");p(n,t);function i(){this.constructor=n}n.prototype=t===null?Object.create(t):(i.prototype=t.prototype,new i)}var p,T=l(()=>{p=function(n,t){return p=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,e){i.__proto__=e}||function(i,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(i[r]=e[r])},p(n,t)}});var G,R,D=l(()=>{G=function(){function n(t){this.colorStops=t||[]}return n.prototype.addColorStop=function(t,i){this.colorStops.push({offset:t,color:i})},n}(),R=G});var I,te,P=l(()=>{T();D();I=function(n){j(t,n);function t(i,e,r,a,h,F){var s=n.call(this,h)||this;return s.x=i??0,s.y=e??0,s.x2=r??1,s.y2=a??0,s.type="linear",s.global=F||!1,s}return t}(R),te=I});var f=class{constructor(){this.subject=new u(1),this.subscriptions=new g}doFilter(t){this.subject.next(t)}dispose(){this.subscriptions.unsubscribe()}notEmpty(t,i){this.subscriptions.add(this.subject.subscribe(e=>{if(e[t]){let r=e[t].currentValue;r!=null&&i(r)}}))}has(t,i){this.subscriptions.add(this.subject.subscribe(e=>{if(e[t]){let r=e[t].currentValue;i(r)}}))}notFirst(t,i){this.subscriptions.add(this.subject.subscribe(e=>{if(e[t]&&!e[t].isFirstChange()){let r=e[t].currentValue;i(r)}}))}notFirstAndEmpty(t,i){this.subscriptions.add(this.subject.subscribe(e=>{if(e[t]&&!e[t].isFirstChange()){let r=e[t].currentValue;r!=null&&i(r)}}))}},x=new S("NGX_ECHARTS_CONFIG"),X=(()=>{let t=class t{constructor(e,r,a){this.el=r,this.ngZone=a,this.options=null,this.theme=null,this.initOpts=null,this.merge=null,this.autoResize=!0,this.loading=!1,this.loadingType="default",this.loadingOpts=null,this.chartInit=new d,this.optionsError=new d,this.chartClick=this.createLazyEvent("click"),this.chartDblClick=this.createLazyEvent("dblclick"),this.chartMouseDown=this.createLazyEvent("mousedown"),this.chartMouseMove=this.createLazyEvent("mousemove"),this.chartMouseUp=this.createLazyEvent("mouseup"),this.chartMouseOver=this.createLazyEvent("mouseover"),this.chartMouseOut=this.createLazyEvent("mouseout"),this.chartGlobalOut=this.createLazyEvent("globalout"),this.chartContextMenu=this.createLazyEvent("contextmenu"),this.chartHighlight=this.createLazyEvent("highlight"),this.chartDownplay=this.createLazyEvent("downplay"),this.chartSelectChanged=this.createLazyEvent("selectchanged"),this.chartLegendSelectChanged=this.createLazyEvent("legendselectchanged"),this.chartLegendSelected=this.createLazyEvent("legendselected"),this.chartLegendUnselected=this.createLazyEvent("legendunselected"),this.chartLegendLegendSelectAll=this.createLazyEvent("legendselectall"),this.chartLegendLegendInverseSelect=this.createLazyEvent("legendinverseselect"),this.chartLegendScroll=this.createLazyEvent("legendscroll"),this.chartDataZoom=this.createLazyEvent("datazoom"),this.chartDataRangeSelected=this.createLazyEvent("datarangeselected"),this.chartGraphRoam=this.createLazyEvent("graphroam"),this.chartGeoRoam=this.createLazyEvent("georoam"),this.chartTreeRoam=this.createLazyEvent("treeroam"),this.chartTimelineChanged=this.createLazyEvent("timelinechanged"),this.chartTimelinePlayChanged=this.createLazyEvent("timelineplaychanged"),this.chartRestore=this.createLazyEvent("restore"),this.chartDataViewChanged=this.createLazyEvent("dataviewchanged"),this.chartMagicTypeChanged=this.createLazyEvent("magictypechanged"),this.chartGeoSelectChanged=this.createLazyEvent("geoselectchanged"),this.chartGeoSelected=this.createLazyEvent("geoselected"),this.chartGeoUnselected=this.createLazyEvent("geounselected"),this.chartAxisAreaSelected=this.createLazyEvent("axisareaselected"),this.chartBrush=this.createLazyEvent("brush"),this.chartBrushEnd=this.createLazyEvent("brushend"),this.chartBrushSelected=this.createLazyEvent("brushselected"),this.chartGlobalCursorTaken=this.createLazyEvent("globalcursortaken"),this.chartRendered=this.createLazyEvent("rendered"),this.chartFinished=this.createLazyEvent("finished"),this.animationFrameID=null,this.chart$=new u(1),this.resize$=new m,this.changeFilter=new f,this.resizeObFired=!1,this.echarts=e.echarts,this.theme=e.theme||null}ngOnChanges(e){this.changeFilter.doFilter(e)}ngOnInit(){if(!window.ResizeObserver)throw new Error("please install a polyfill for ResizeObserver");this.resizeSub=this.resize$.pipe(w(100,b,{leading:!1,trailing:!0})).subscribe(()=>this.resize()),this.autoResize&&(this.resizeOb=this.ngZone.runOutsideAngular(()=>new window.ResizeObserver(e=>{for(let r of e)r.target===this.el.nativeElement&&(this.resizeObFired?this.animationFrameID=window.requestAnimationFrame(()=>{this.resize$.next()}):this.resizeObFired=!0)})),this.resizeOb.observe(this.el.nativeElement)),this.changeFilter.notFirstAndEmpty("options",e=>this.onOptionsChange(e)),this.changeFilter.notFirstAndEmpty("merge",e=>this.setOption(e)),this.changeFilter.has("loading",e=>this.toggleLoading(!!e)),this.changeFilter.notFirst("theme",()=>this.refreshChart())}ngOnDestroy(){window.clearTimeout(this.initChartTimer),this.resizeSub&&this.resizeSub.unsubscribe(),this.animationFrameID&&window.cancelAnimationFrame(this.animationFrameID),this.resizeOb&&this.resizeOb.unobserve(this.el.nativeElement),this.loadingSub&&this.loadingSub.unsubscribe(),this.changeFilter.dispose(),this.dispose()}ngAfterViewInit(){this.initChartTimer=window.setTimeout(()=>this.initChart())}dispose(){this.chart&&(this.chart.isDisposed()||this.chart.dispose(),this.chart=null)}resize(){this.chart&&this.chart.resize()}toggleLoading(e){this.chart?e?this.chart.showLoading(this.loadingType,this.loadingOpts):this.chart.hideLoading():this.loadingSub=this.chart$.subscribe(r=>e?r.showLoading(this.loadingType,this.loadingOpts):r.hideLoading())}setOption(e,r){if(this.chart)try{this.chart.setOption(e,r)}catch(a){console.error(a),this.optionsError.emit(a)}}refreshChart(){return o(this,null,function*(){this.dispose(),yield this.initChart()})}createChart(){let e=this.el.nativeElement;if(window&&window.getComputedStyle){let r=window.getComputedStyle(e,null).getPropertyValue("height");(!r||r==="0px")&&(!e.style.height||e.style.height==="0px")&&(e.style.height="400px")}return this.ngZone.runOutsideAngular(()=>(typeof this.echarts=="function"?this.echarts:()=>Promise.resolve(this.echarts))().then(({init:a})=>a(e,this.theme,this.initOpts)))}initChart(){return o(this,null,function*(){yield this.onOptionsChange(this.options),this.merge&&this.chart&&this.setOption(this.merge)})}onOptionsChange(e){return o(this,null,function*(){e&&(this.chart?this.setOption(this.options,!0):(this.chart=yield this.createChart(),this.chart$.next(this.chart),this.chartInit.emit(this.chart),this.setOption(this.options,!0)))})}createLazyEvent(e){return this.chartInit.pipe(v(r=>new y(a=>(r.on(e,h=>this.ngZone.run(()=>a.next(h))),()=>{this.chart&&(this.chart.isDisposed()||r.off(e))}))))}};t.\u0275fac=function(r){return new(r||t)(c(x),c(_),c(E))},t.\u0275dir=C({type:t,selectors:[["echarts"],["","echarts",""]],inputs:{options:"options",theme:"theme",initOpts:"initOpts",merge:"merge",autoResize:"autoResize",loading:"loading",loadingType:"loadingType",loadingOpts:"loadingOpts"},outputs:{chartInit:"chartInit",optionsError:"optionsError",chartClick:"chartClick",chartDblClick:"chartDblClick",chartMouseDown:"chartMouseDown",chartMouseMove:"chartMouseMove",chartMouseUp:"chartMouseUp",chartMouseOver:"chartMouseOver",chartMouseOut:"chartMouseOut",chartGlobalOut:"chartGlobalOut",chartContextMenu:"chartContextMenu",chartHighlight:"chartHighlight",chartDownplay:"chartDownplay",chartSelectChanged:"chartSelectChanged",chartLegendSelectChanged:"chartLegendSelectChanged",chartLegendSelected:"chartLegendSelected",chartLegendUnselected:"chartLegendUnselected",chartLegendLegendSelectAll:"chartLegendLegendSelectAll",chartLegendLegendInverseSelect:"chartLegendLegendInverseSelect",chartLegendScroll:"chartLegendScroll",chartDataZoom:"chartDataZoom",chartDataRangeSelected:"chartDataRangeSelected",chartGraphRoam:"chartGraphRoam",chartGeoRoam:"chartGeoRoam",chartTreeRoam:"chartTreeRoam",chartTimelineChanged:"chartTimelineChanged",chartTimelinePlayChanged:"chartTimelinePlayChanged",chartRestore:"chartRestore",chartDataViewChanged:"chartDataViewChanged",chartMagicTypeChanged:"chartMagicTypeChanged",chartGeoSelectChanged:"chartGeoSelectChanged",chartGeoSelected:"chartGeoSelected",chartGeoUnselected:"chartGeoUnselected",chartAxisAreaSelected:"chartAxisAreaSelected",chartBrush:"chartBrush",chartBrushEnd:"chartBrushEnd",chartBrushSelected:"chartBrushSelected",chartGlobalCursorTaken:"chartGlobalCursorTaken",chartRendered:"chartRendered",chartFinished:"chartFinished"},exportAs:["echarts"],features:[L]});let n=t;return n})(),M=n=>({provide:x,useValue:n}),J=(()=>{let t=class t{static forRoot(e){return{ngModule:t,providers:[M(e)]}}static forChild(){return{ngModule:t}}};t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=z({type:t}),t.\u0275inj=O({});let n=t;return n})();export{X as a,M as b,J as c,j as d,T as e,R as f,D as g,te as h,P as i};
