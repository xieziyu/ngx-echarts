# ngx-echarts

<!-- Badges section here. -->

[![npm](https://img.shields.io/npm/v/ngx-echarts.svg)][npm-badge-url]
[![npm](https://img.shields.io/npm/dm/ngx-echarts.svg)][npm-badge-url]
[![Build Status](https://travis-ci.org/xieziyu/ngx-echarts.svg?branch=master)][ci-url]

Angular directive for [Apache ECharts (incubating)](https://github.com/apache/incubator-echarts)
(version >= 3.x) (The project is renamed from **angular2-echarts**)

- [Online Demo](https://xieziyu.github.io/ngx-echarts)
- [Online Docs](https://xieziyu.github.io/ngx-echarts/api-doc)
- [Starter Project](https://github.com/xieziyu/ngx-echarts-starter)
- [Changelog](https://xieziyu.github.io/ngx-echarts/#/changelogs)

## Table of contents

- [ngx-echarts](#ngx-echarts)
  - [Table of contents](#table-of-contents)
- [Getting Started](#getting-started)
- [Latest Update](#latest-update)
- [Installation](#installation)
  - [Upgrade from v4.x](#upgrade-from-v4x)
- [Usage](#usage)
- [API](#api)
  - [Directive](#directive)
  - [ECharts API](#echarts-api)
  - [ECharts Instance](#echarts-instance)
  - [ECharts Extensions](#echarts-extensions)
  - [Service](#service)
- [Events](#events)
- [Custom Build](#custom-build)
  - [Legacy version](#legacy-custom-build)
  - [ECharts 5 Treeshaking](#treeshaking-custom-build)
- [Custom Locale](#custom-locale)
- [Demo](#demo)

# Getting Started

`ngx-echarts` is an Angular (ver >= 2.x) directive for ECharts (ver >= 3.x).

Latest version @npm:

- `v8.x` for Angular >= 13
- `v7.x` for Angular >= 11
- `v6.x` for Angular >= 10, < 11
- `v5.x` for Angular >= 6, < 10
- `v2.3.1` for Angular < 6 (Please refer to https://github.com/xieziyu/ngx-echarts/blob/v2.x/README.md)

A starter project on Github: https://github.com/xieziyu/ngx-echarts-starter

# Latest Update

- 2021.12.07: v8.0.1:
  
  - Fix: NgxEchartsModule.forChild() issue [#334](https://github.com/xieziyu/ngx-echarts/issues/334)

- 2021.11.08: v8.0.0 / v7.1.0:
  
  - Fix: remove @juggle/resize-observer from the peer dependencies
  - Perf: fix performance issue [#330](https://github.com/xieziyu/ngx-echarts/issues/330)

- 2021.08.05: v7.0.2:

  - [PR #322](https://github.com/xieziyu/ngx-echarts/pull/322): Add initOpts locale property (by [augustoicaro](https://github.com/augustoicaro))

- 2021.05.17: v7.0.0:

  - Feat: support Angular v11, ECharts v5
  - Feat: support echart theme object
  - Perf: resize animation

- 2021.01.10: v6.0.1:

  - [PR #295](https://github.com/xieziyu/ngx-echarts/pull/295): Guard dispose (by [taipeiwu](https://github.com/taipeiwu))

- 2021.01.10: v6.0.0:

  - [PR #285](https://github.com/xieziyu/ngx-echarts/pull/285): Guard dispose (by [gjsmith66](https://github.com/gjsmith66))
  - update demo to use echarts v5.0
  - [PR #282](https://github.com/xieziyu/ngx-echarts/pull/282): fix avoid "ResizeObserver loop limit exceeded" error (by [parkdihoon](https://github.com/parkdihoon))
  - [PR #272](https://github.com/xieziyu/ngx-echarts/pull/272): Angular 10 support (by [Ghostbird](https://github.com/Ghostbird))

- 2020.11.07: v5.2.1:

  - Required `resize-observer-polyfill`
  - [PR #271](https://github.com/xieziyu/ngx-echarts/pull/271): Fix autoResize functionality (by [ThomasBower](https://github.com/ThomasBower))
  - Exposed methods: `refreshChart()` and `resize()`

- 2020.07.24: v5.1.0:

  - [PR #240](https://github.com/xieziyu/ngx-echarts/pull/240): Added output 'optionsError' (by [trajnisz](https://github.com/trajnisz))
  - [PR #242](https://github.com/xieziyu/ngx-echarts/pull/242): Add output for brushEnd event (by [Uular](https://github.com/Uular))
  - [PR #246](https://github.com/xieziyu/ngx-echarts/pull/246): Allow loading echarts library lazily via native import (by [smnbbrv](https://github.com/smnbbrv))

- 2020.05.19: v5.0.0
  - **BREAKING CHANGES**:
    - `NgxEchartsModule` provides `.forRoot()` method to inject `echarts` core.
    - Due to `.forRoot` method, we can do custom build without `NgxEchartsCoreModule`. Just import the `echarts` core from `echarts/src/echarts`, and other necessary charts.
    - `NgxEchartsCoreModule` is removed.
    - `[detectEventChanges]` is removed.

# Installation

- Since v5.0

  ```bash
  # if you use npm
  npm install echarts -S
  npm install ngx-echarts -S

  # or if you use yarn
  yarn add echarts
  yarn add ngx-echarts
  ```

- If you need ECharts GL support, please install it first:

  ```bash
  npm install echarts-gl -S

  # or
  yarn add echarts-gl
  ```

- Import other extensions such as themes or `echarts-gl` in your `main.ts`: [ECharts Extensions](#echarts-extensions)

## Upgrade from v4.x

1. import `echarts` and provide it in `NgxEchartsModule.forRoot({ echarts })`.
2. `NgxEchartsCoreModule` is removed.

# Usage

Please refer to the [demo](https://xieziyu.github.io/ngx-echarts) page.

1. Firstly, import `NgxEchartsModule` in your app module (or any other proper angular module):

   ```typescript
   import { NgxEchartsModule } from 'ngx-echarts';

   @NgModule({
     imports: [
       NgxEchartsModule.forRoot({
         /**
          * This will import all modules from echarts.
          * If you only need custom modules,
          * please refer to [Custom Build] section.
          */
         echarts: () => import('echarts'), // or import('./path-to-my-custom-echarts')
       }),
     ],
   })
   export class AppModule {}
   ```

   The echarts library will be imported **only when it gets called the first time** thanks to the function that uses the native import.

   You can also directly pass the echarts instead which will slow down initial rendering because it will load the whole echarts into your main bundle.

   ```typescript
   import { NgxEchartsModule } from 'ngx-echarts';

   @NgModule({
     imports: [
       NgxEchartsModule.forRoot({
         echarts: () => import('echarts'),
       }),
     ],
   })
   export class AppModule {}
   ```

2. Then: use `echarts` directive in a div which has **pre-defined height**. (From v2.0, it has default height: 400px)

   - Simple example:

     - html:

     ```html
     <div echarts [options]="chartOption" class="demo-chart"></div>
     ```

     - scss:

     ```css
     .demo-chart {
       height: 400px;
     }
     ```

     - component:

     ```typescript
     import { EChartsOption } from 'echarts';

     // ...

     chartOption: EChartsOption = {
       xAxis: {
         type: 'category',
         data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
       },
       yAxis: {
         type: 'value',
       },
       series: [
         {
           data: [820, 932, 901, 934, 1290, 1330, 1320],
           type: 'line',
         },
       ],
     };
     ```

# API

### Directive

`echarts` directive support following input properties:

| Input           | Type    | Default | Description                                                                                                                                                                                                                                                                                                             |
| --------------- | ------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `[options]`     | object  | null    | The same as the options on the official demo site.                                                                                                                                                                                                                                                                      |
| `[merge]`       | object  | null    | Used to update a part of the `options`, especially helpful when you need to update the chart data. In fact, the value of `merge` will be used in `echartsInstance.setOption()` with `notMerge = false`. Refer to [ECharts documentation](https://echarts.apache.org/en/api.html#echartsInstance.setOption) for details. |
| `[loading]`     | boolean | false   | Used to toggle the echarts loading animation when your data is not ready.                                                                                                                                                                                                                                               |
| `[autoResize]`  | boolean | true    | If set to `true`, the chart will be automatically resized when the window's width is changed.                                                                                                                                                                                                                           |
| `[initOpts]`    | object  | null    | The value of `[initOpts]` will be used in `echarts.init()`. It may contain `devicePixelRatio`, `renderer`, `width` or `height` properties. Refer to [ECharts documentation](https://echarts.apache.org/en/api.html#echarts.init) for details.                                                                           |
| `[theme]`       | string  | null    | Used it to initialize echarts with theme. The theme file must also be imported in `main.ts`.                                                                                                                                                                                                                            |
| `[loadingOpts]` | object  | null    | Input an object to customize the loading style. Refer to [ECharts documentation](https://echarts.apache.org/en/api.html#echartsInstance.showLoading) for details.                                                                                                                                                       |

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

If you need to access parts of the ECharts API such as `echarts.graphic`, please import it from echarts. For example:

```typescript
import { graphic } from 'echarts';

new graphic.LinearGradient(/* ... */);
```

### ECharts Instance

`echartsInstance` is exposed (since v1.1.6) in the `(chartInit)` event, enabling you to directly call functions like: `resize()`, `showLoading()`, etc. For example:

- html:

```html
<div echarts class="demo-chart" [options]="chartOptions" (chartInit)="onChartInit($event)"></div>
```

- component:

```typescript
onChartInit(ec) {
  this.echartsInstance = ec;
}

resizeChart() {
  if (this.echartsInstance) {
    this.echartsInstance.resize();
  }
}
```

### ECharts Extensions

Import echarts theme files or other extension files after you have imported `echarts` core. For example:

```typescript
import * as echarts from 'echarts';

/** echarts extensions: */
import 'echarts-gl';
import 'echarts/theme/macarons.js';
import 'echarts/dist/extension/bmap.min.js';
```

### Service

`NgxEchartsService` has been obsolete since v4.0

# Events

As ECharts supports the `'click'`, `'dblclick'`, `'mousedown'`, `'mouseup'`, `'mouseover'`, `'mouseout'`, and `'globalout'` mouse events, our `ngx-echarts` directive also supports the same mouse events but with an additional `chart` prefix. For example:

- html:

```html
<div echarts class="demo-chart" [options]="chartOptions" (chartClick)="onChartClick($event)"></div>
```

- The '\$event' is same with the 'params' that ECharts dispatches.

It supports following event outputs:

| @Output                   | Event                                   |
| ------------------------- | --------------------------------------- |
| chartInit                 | Emitted when the chart is initialized   |
| chartClick                | echarts event: `'click'`                |
| chartDblClick             | echarts event: `'dblclick'`             |
| chartMouseDown            | echarts event: `'mousedown'`            |
| chartMouseMove            | echarts event: `'mousemove'`            |
| chartMouseUp              | echarts event: `'mouseup'`              |
| chartMouseOver            | echarts event: `'mouseover'`            |
| chartMouseOut             | echarts event: `'mouseout'`             |
| chartGlobalOut            | echarts event: `'globalout'`            |
| chartContextMenu          | echarts event: `'contextmenu'`          |
| chartLegendSelectChanged  | echarts event: `'legendselectchanged'`  |
| chartLegendSelected       | echarts event: `'legendselected'`       |
| chartLegendUnselected     | echarts event: `'legendunselected'`     |
| chartLegendScroll         | echarts event: `'legendscroll'`         |
| chartDataZoom             | echarts event: `'datazoom'`             |
| chartDataRangeSelected    | echarts event: `'datarangeselected'`    |
| chartTimelineChanged      | echarts event: `'timelinechanged'`      |
| chartTimelinePlayChanged  | echarts event: `'timelineplaychanged'`  |
| chartRestore              | echarts event: `'restore'`              |
| chartDataViewChanged      | echarts event: `'dataviewchanged'`      |
| chartMagicTypeChanged     | echarts event: `'magictypechanged'`     |
| chartPieSelectChanged     | echarts event: `'pieselectchanged'`     |
| chartPieSelected          | echarts event: `'pieselected'`          |
| chartPieUnselected        | echarts event: `'pieunselected'`        |
| chartMapSelectChanged     | echarts event: `'mapselectchanged'`     |
| chartMapSelected          | echarts event: `'mapselected'`          |
| chartMapUnselected        | echarts event: `'mapunselected'`        |
| chartAxisAreaSelected     | echarts event: `'axisareaselected'`     |
| chartFocusNodeAdjacency   | echarts event: `'focusnodeadjacency'`   |
| chartUnfocusNodeAdjacency | echarts event: `'unfocusnodeadjacency'` |
| chartBrush                | echarts event: `'brush'`                |
| chartBrushEnd             | echarts event: `'brushend'`             |
| chartBrushSelected        | echarts event: `'brushselected'`        |
| chartRendered             | echarts event: `'rendered'`             |
| chartFinished             | echarts event: `'finished'`             |

You can refer to the ECharts tutorial: [Events and Actions in ECharts](https://echarts.apache.org/en/tutorial.html#Events%20and%20Actions%20in%20ECharts) for more details of the event params. You can also refer to the [demo](https://xieziyu.github.io/#/ngx-echarts/demo) page for a detailed example.

# Custom Build

## Legacy Custom Build

> Please refer to [ECharts Documentation](https://echarts.apache.org/en/tutorial.html#Create%20Custom%20Build%20of%20ECharts) for more details.

If you want to produce a custom build of ECharts, prepare a file like `custom-echarts.ts`:

```ts
// custom-echarts.ts
export * from 'echarts/src/echarts';

import 'echarts/src/chart/line';
import 'echarts/src/chart/bar';
// component examples:
import 'echarts/src/component/tooltip';
import 'echarts/src/component/title';
import 'echarts/src/component/toolbox';
```

And then inject it in your `NgxEchartsModule`:

```ts
import { NgxEchartsModule } from 'ngx-echarts';
import * as echarts from './custom-echarts';

@NgModule({
  imports: [
    NgxEchartsModule.forRoot({
      echarts,
    }),
  ],
})
export class AppModule {}
```

And if you want to use the global `echarts` object, please import it from `lib` or `src` instead:

```ts
import * as echarts from 'echarts/lib/echarts';
```

If you need to import theme files, remember to change the `'echarts'` path to `'echarts/lib/echarts'`, for example:

```ts
// ... part of echarts/theme/dark.js:
function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['exports', 'echarts/lib/echarts'], factory);
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        // CommonJS
        factory(exports, require('echarts/lib/echarts'));
    } else {
        // Browser globals
        factory({}, root.echarts);
    }
}
```

## Treeshaking Custom Build

> Since version 5.0.1 ECharts supports [Treeshaking with NPM](https://echarts.apache.org/en/tutorial.html#Use%20ECharts%20with%20bundler%20and%20NPM).

There is no need for the `custom-echarts.ts` file anymore. The `app.modules.ts` should look like this:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { NgxEchartsModule } from 'ngx-echarts';

import { AppComponent } from './app.component';

// Import the echarts core module, which provides the necessary interfaces for using echarts.
import * as echarts from 'echarts/core';
// Import bar charts, all with Chart suffix
import { BarChart } from 'echarts/charts';
import { TitleComponent, TooltipComponent, GridComponent } from 'echarts/components';
// Import the Canvas renderer, note that introducing the CanvasRenderer or SVGRenderer is a required step
import { CanvasRenderer } from 'echarts/renderers';
import 'echarts/theme/macarons.js';

echarts.use([TitleComponent, TooltipComponent, GridComponent, BarChart, CanvasRenderer]);

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxEchartsModule.forRoot({ echarts }), HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

# Custom Locale

You can change the chart locale registering a built-in locale (located in `node_modules/echarts/lib/i18n/`) or a custom locale object. To register a locale, you will need to change the module that echart is being imported (usually `app.module.ts`).

```ts
import {NgxEchartsModule} from "ngx-echarts";
import * as echarts from 'echarts/core';
import langCZ from 'echarts/lib/i18n/langCZ';

echarts.registerLocale("CZ", langCZ)

@NgModule({
  imports: [NgxEchartsModule.forRoot({echarts})],
  declarations: [],
  providers: [],
  bootstrap: [AppComponent]
})
```

and in your HTML file use:

```html
<div echarts [initOpts]="{ locale: 'CZ' }" [options]="options" class="demo-chart"></div>
```

# Demo

You can clone this repo to your working copy and then launch the demo page in your local machine:

```bash
npm install
npm run demo

# or
yarn install
yarn demo
```

The demo page server is listening on: http://localhost:4202

[npm-badge-url]: https://www.npmjs.com/package/ngx-echarts
[ci-url]: https://travis-ci.org/xieziyu/ngx-echarts
