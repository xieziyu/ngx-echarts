# ngx-echarts
<!-- Badges section here. -->
[![npm](https://img.shields.io/npm/v/ngx-echarts.svg)][npm-badge-url]
[![npm](https://img.shields.io/npm/dm/ngx-echarts.svg)][npm-badge-url]
[![Build Status](https://travis-ci.org/xieziyu/ngx-echarts.svg?branch=master)][ci-url]

Angular directive for echarts (version >= 3.x) (The project is renamed from **angular2-echarts**)

+ [Online Demo](https://xieziyu.github.io/ngx-echarts)
+ [Online Docs](https://xieziyu.github.io/ngx-echarts/api-doc)
+ [Starter Project](https://github.com/xieziyu/ngx-echarts-starter)

## Table of contents 
1. [Getting Started](#getting-started)
2. [Latest Update](#latest-update)
3. [Installation](#installation)
4. [Usage](#usage)
5. [API](#api)
6. [Events](#events)
7. [Demo](#demo)

# Getting Started
`ngx-echarts` is an Angular (ver >= 2.x) directive for ECharts (ver >= 3.x).

Latest version @npm:
+ `v4.1.0` for Angular >= 6
+ `v2.3.1` for Angular < 6 (Please refer to https://github.com/xieziyu/ngx-echarts/blob/v2.x/README.md)

A starter project on Github: https://github.com/xieziyu/ngx-echarts-starter

# Latest Update
+ 2018.12.16: v4.1.0
  + Perfomance update: echarts events are now lazily bounded, so it won't trigger change dectection unexpectedly. Please refer to [PR #154](https://github.com/xieziyu/ngx-echarts/pull/154) for more details. Thanks to [smnbbrv](https://github.com/smnbbrv)!
  + `[detectEventChanges]` is now deprecated.
  + Plenty of echarts event are now [supported](#events).

+ 2018.11.11: v4.0.1
  + Add map events support: (chartMapSelectChanged), (chartMapSelected), (chartMapUnselected). (by [amirch1](https://github.com/amirch1) - [PR #147](https://github.com/xieziyu/ngx-echarts/pull/147))

+ 2018.08.20: v4.0.0
  + Change: ECharts instance creating is delayed until view initialized.
  + New: [detectEventChanges] Use it to avoid unwanted change detections.
    + If you set it false, `chartClick` and some other event-emitters become silent. [demo](https://xieziyu.github.io/ngx-echarts/#/usage/events)
  + Change: [theme] now detect changes at runtime. 
    + When you change theme at runtime, the chart would be destroyed first and then initialized again. [demo](https://xieziyu.github.io/ngx-echarts/#/usage/theme)
  + **BREAKING CHANGES**:
    + ES6 import instead of polluting global namespace. [issue #123](https://github.com/xieziyu/ngx-echarts/issues/123)
    + NgxEchartsService is now obsoleted. If you want to use echarts API, please just import it
    ```typescript
    import * as echarts from 'echarts';
    /** or */
    import { graphic, registerMap } from 'echarts';
    ```
    + Import echarts theme files or other extension files in `main.ts`. Refer to [ECharts Extensions](#echarts-extensions)

+ 2018.07.24: v3.2.0 & v2.3.1:
  + New: [autoResize] now detects its container element's offset height.
  + Change: Resizing detection is now debounced.

+ 2018.06.13: v3.1.0 & v2.2.0:
  + New: [autoResize] now detects its container element's offset width. Especially useful for charts inside `<ng-template>` such as NG-ZORRO components.

+ 2018.06.12: v3.0.1 & v2.1.1:
  + Bugfix: Line chart is not animated on init. [issue#102](https://github.com/xieziyu/ngx-echarts/issues/102)

+ 2018.05.08: v3.0.0:
  + Change: Support Angular 6
  + Docs: generate demo app by @angular/cli-6.0.0

+ 2018.03.14: v2.1.0
  + New: `[loadingOpts]` to customize loading style. Refer to [API](#api)
  + Bugfix: double check `dom.style.height` before setting default value.

+ 2018.02.07: v2.0.2. New: `[autoResize]` input (default: true). [PR #73](https://github.com/xieziyu/ngx-echarts/pull/73) by [arethore-actility](https://github.com/arethore-actility)

+ 2017.12.11: v2.0.1. Fix issue: No change detection involved in event handler. Refer to issue [#26](https://github.com/xieziyu/ngx-echarts/issues/26), [#28](https://github.com/xieziyu/ngx-echarts/issues/28)

+ 2017.12.04: v2.0.0. Provide an echarts wrapper service: NgxEchartsService.

+ 2017.11.25: v2.0.0-beta.0. It has some [BREAKING CHANGES](https://github.com/xieziyu/ngx-echarts/blob/master/src/assets/CHANGELOG.md) you should know.

# Installation
+ Since v4.0
  ```bash
  # if you use npm
  npm install echarts -S
  npm install ngx-echarts -S
  npm install @types/echarts -D

  # or if you use yarn
  yarn add echarts
  yarn add ngx-echarts
  yarn add @types/echarts -D
  ```

+ If you need ECharts GL support, please install it first:
  ```bash
  npm install echarts-gl -S

  # or
  yarn add echarts-gl
  ```

+ Import other extentions such as themes or `echarts-gl` in your `main.ts`: [ECharts Extensions](#echarts-extensions)


## Upgrade from v3.x
1. Install `@types/echarts`
2. Import necessary theme or extension files in `main.ts`. Refer to [ECharts Extensions](#echarts-extensions).
3. Remove `echarts` related scripts in `angular.json`.

# Usage
Please refer to the [demo](https://xieziyu.github.io/ngx-echarts) page.

1. Firstly, import `NgxEchartsModule` in your app module (or any other proper angular module):
    ```typescript
    import { NgxEchartsModule } from 'ngx-echarts';

    @NgModule({
      imports: [
        ...,
        NgxEchartsModule
      ],
      ...
    })
    export class AppModule { }
    ```

2. Then: use `echarts` directive in a div which has **pre-defined height**. (From v2.0, it has default height: 400px)
    + Simple example:

      + html:
      ```html
      <div echarts [options]="chartOption" class="demo-chart"></div>
      ```

      + scss:
      ```css
      .demo-chart {
        height: 400px;
      }
      ```

      + component:
      ```typescript
      import { EChartOption } from 'echarts';
      
      // ...
      
      chartOption: EChartOption = {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line'
        }]
      }
      ```

# API
### Directive
`echarts` directive support following input porperties:

| Input | Type | Default | Description |
|-------|------|---------|-------------|
| `[options]` | object | null | It's the same with the options in official demo site. |
| `[merge]` | object | null | You can use it to update part of the `options`, especially helpful when you need to update the chart data. In fact, the value of `merge` will be used in `echartsInstance.setOption()` with `notMerge = false`. So you can refer to [ECharts documentation](https://ecomfe.github.io/echarts-doc/public/en/api.html#echartsInstance.setOption) for details |
| `[loading]` | boolean | false | Use it to toggle the echarts loading animation when your data is not ready. |
| `[autoResize]` | boolean | true | Charts will be automatically resized when container's width changed. |
| `[initOpts]` | object | null | The value of `[initOpts]` will be used in `echarts.init()`. It may contain `devicePixelRatio`, `renderer`, `width` or `height` properties. Refer to [ECharts documentation](https://ecomfe.github.io/echarts-doc/public/en/api.html#echarts.init) for details |
| `[theme]` | string | null | Use it to init echarts with theme. You need to import the theme file in `main.ts`. |
| `[loadingOpts]` | object | null | Input an object to customize loading style. Refer to [ECharts documentation](https://ecomfe.github.io/echarts-doc/public/en/api.html#echartsInstance.showLoading) for details. |
| `[detectEventChanges]` | boolean | true | Whether to register mouse event handlers on echartInstance. Use it to avoid unwanted change detections. |

By default, `loadingOpts` is:

```javascript
{
  text: 'loading',
  color: '#c23531',
  textColor: '#000',
  maskColor: 'rgba(255, 255, 255, 0.8)',
  zlevel: 0
}
```

### ECharts API
If you need echarts API such as `echarts.graphic`, please import it from echarts. For example:

```typescript
/** import all */
import * as echarts from 'echarts';

new echarts.graphic.LinearGradient(/** ... */);

/** or you can */
import { graphic } from 'echarts';

new graphic.LinearGradient(/** ... */);
```

### ECharts Instance
`echartsInstance` is exposed (since v1.1.6) in `(chartInit)` event. So you can directly call the APIs just like: `resize()`, `showLoading()`, etc. For example:

+ html:

```html
<div echarts class="demo-chart" [options]="chartOptions" (chartInit)="onChartInit($event)"></div>
```

+ component:

```typescript
onChartInit(ec) {
  this.echartsIntance = ec;
}

resizeChart() {
  if (this.echartsIntance) {
    this.echartsIntance.resize();
  }
}
```

### ECharts Extensions
Import echarts theme files or other extension files in `main.ts`. For example:

  ```typescript
  import { enableProdMode } from '@angular/core';
  import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

  import { AppModule } from './app/app.module';
  import { environment } from './environments/environment';

  /** echarts extensions: */
  import 'echarts-gl';
  import 'echarts/theme/macarons.js';
  import 'echarts/dist/extension/bmap.min.js';

  if (environment.production) {
    enableProdMode();
  }

  platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.log(err));
  ```

### Service
`NgxEchartsService` has been obsoleted since v4.0

# Events
As echarts support the `'click'`, `'dblclick'`, `'mousedown'`, `'mouseup'`, `'mouseover'`, `'mouseout'`, `'globalout'` mouse events, our `ngx-echarts` directive also support the same mouse events but with additional `chart` prefix.

  + html:

  ```html
  <div echarts class="demo-chart" [options]="chartOptions" (chartClick)="onChartClick($event)"></div>
  ```

  + The '$event' is same with the 'params' that Echarts dispatches

It supports following event outputs:

| @Output | Event |
| ------- | ----- |
| chartInit | Emitted when chart is intialized |
| chartClick | echarts event: `'click'` |
| chartDblClick | echarts event: `'dblclick'` |
| chartMouseDown | echarts event: `'mousedown'` |
| chartMouseMove | echarts event: `'mousemove'` |
| chartMouseUp | echarts event: `'mouseup'` |
| chartMouseOver | echarts event: `'mouseover'` |
| chartMouseOut | echarts event: `'mouseout'` |
| chartGlobalOut | echarts event: `'globalout'` |
| chartContextMenu | echarts event: `'contextmenu'` |
| chartLegendSelectChanged | echarts event: `'legendselectchanged'` |
| chartLegendSelected | echarts event: `'legendselected'` |
| chartLegendUnselected | echarts event: `'legendunselected'` |
| chartLegendScroll | echarts event: `'legendscroll'` |
| chartDataZoom | echarts event: `'datazoom'` |
| chartDataRangeSelected | echarts event: `'datarangeselected'` |
| chartTimelineChanged | echarts event: `'timelinechanged'` |
| chartTimelinePlayChanged | echarts event: `'timelineplaychanged'` |
| chartRestore | echarts event: `'restore'` |
| chartDataViewChanged | echarts event: `'dataviewchanged'` |
| chartMagicTypeChanged | echarts event: `'magictypechanged'` |
| chartPieSelectChanged | echarts event: `'pieselectchanged'` |
| chartPieSelected | echarts event: `'pieselected'` |
| chartPieUnselected | echarts event: `'pieunselected'` |
| chartMapSelectChanged | echarts event: `'mapselectchanged'` |
| chartMapSelected | echarts event: `'mapselected'` |
| chartMapUnselected | echarts event: `'mapunselected'` |
| chartAxisAreaSelected | echarts event: `'axisareaselected'` |
| chartFocusNodeAdjacency | echarts event: `'focusnodeadjacency'` |
| chartUnfocusNodeAdjacency | echarts event: `'unfocusnodeadjacency'` |
| chartBrush | echarts event: `'brush'` |
| chartBrushSelected | echarts event: `'brushselected'` |
| chartRendered | echarts event: `'rendered'` |
| chartFinished | echarts event: `'finished'` |


You can refer to the echarts tutorial: [Events and Actions in ECharts](https://ecomfe.github.io/echarts-doc/public/en/tutorial.html#Events%20and%20Actions%20in%20ECharts) for more details of the event params. You can also refer to the [demo](https://xieziyu.github.io/#/ngx-echarts/demo) page for the detailed example.

# Demo
You can clone this repo to your working copy and then launch the demo page in your local machine:
```bash
npm install
npm run demo

# or
yarn install
yarn demo
```
The demo page server is listening to: http://localhost:4202


[npm-badge-url]: https://www.npmjs.com/package/ngx-echarts
[ci-url]: https://travis-ci.org/xieziyu/ngx-echarts
