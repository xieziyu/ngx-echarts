# ngx-echarts

<!-- Badges section here. -->

[![npm](https://img.shields.io/npm/v/ngx-echarts.svg)][npm-badge-url]
[![npm](https://img.shields.io/npm/dm/ngx-echarts.svg)][npm-badge-url]
[![Build Status](https://travis-ci.org/xieziyu/ngx-echarts.svg?branch=master)][ci-url]

Angular directive for echarts (version >= 3.x) (The project is renamed from **angular2-echarts**)

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
- [Demo](#demo)

# Getting Started

`ngx-echarts` is an Angular (ver >= 2.x) directive for ECharts (ver >= 3.x).

Latest version @npm:

- `v5.x` for Angular >= 6
- `v2.3.1` for Angular < 6 (Please refer to https://github.com/xieziyu/ngx-echarts/blob/v2.x/README.md)

A starter project on Github: https://github.com/xieziyu/ngx-echarts-starter

# Latest Update

- 2020.08.06: v5.1.2:
  - [PR #254](https://github.com/xieziyu/ngx-echarts/pull/254): Fix Angular 10 generic ModuleWithProviders depreciation (by[olicooper](https://github.com/olicooper))

- 2020.08.06: v5.1.1:
  - ~~NPM package is broken~~.
 
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

- Import other extentions such as themes or `echarts-gl` in your `main.ts`: [ECharts Extensions](#echarts-extensions)

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

   import * as echarts from 'echarts';

   @NgModule({
     imports: [
       NgxEchartsModule.forRoot({
         echarts,
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
     import { EChartOption } from 'echarts';

     // ...

     chartOption: EChartOption = {
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

`echarts` directive support following input porperties:

| Input           | Type    | Default | Description                                                                                                                                                                                                                                                                                                                                                |
| --------------- | ------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `[options]`     | object  | null    | It's the same with the options in official demo site.                                                                                                                                                                                                                                                                                                      |
| `[merge]`       | object  | null    | You can use it to update part of the `options`, especially helpful when you need to update the chart data. In fact, the value of `merge` will be used in `echartsInstance.setOption()` with `notMerge = false`. So you can refer to [ECharts documentation](https://ecomfe.github.io/echarts-doc/public/en/api.html#echartsInstance.setOption) for details |
| `[loading]`     | boolean | false   | Use it to toggle the echarts loading animation when your data is not ready.                                                                                                                                                                                                                                                                                |
| `[autoResize]`  | boolean | true    | Charts will be automatically resized when container's width changed.                                                                                                                                                                                                                                                                                       |
| `[initOpts]`    | object  | null    | The value of `[initOpts]` will be used in `echarts.init()`. It may contain `devicePixelRatio`, `renderer`, `width` or `height` properties. Refer to [ECharts documentation](https://ecomfe.github.io/echarts-doc/public/en/api.html#echarts.init) for details                                                                                              |
| `[theme]`       | string  | null    | Use it to init echarts with theme. You need to import the theme file in `main.ts`.                                                                                                                                                                                                                                                                         |
| `[loadingOpts]` | object  | null    | Input an object to customize loading style. Refer to [ECharts documentation](https://ecomfe.github.io/echarts-doc/public/en/api.html#echartsInstance.showLoading) for details.                                                                                                                                                                             |

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
import { graphic } from 'echarts';

new graphic.LinearGradient(/** ... */);
```

### ECharts Instance

`echartsInstance` is exposed (since v1.1.6) in `(chartInit)` event. So you can directly call the APIs just like: `resize()`, `showLoading()`, etc. For example:

- html:

```html
<div echarts class="demo-chart" [options]="chartOptions" (chartInit)="onChartInit($event)"></div>
```

- component:

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

Import echarts theme files or other extension files after you imported `echarts` core. For example:

```typescript
import * as echarts from 'echarts';

/** echarts extensions: */
import 'echarts-gl';
import 'echarts/theme/macarons.js';
import 'echarts/dist/extension/bmap.min.js';
```

### Service

`NgxEchartsService` has been obsoleted since v4.0

# Events

As echarts support the `'click'`, `'dblclick'`, `'mousedown'`, `'mouseup'`, `'mouseover'`, `'mouseout'`, `'globalout'` mouse events, our `ngx-echarts` directive also support the same mouse events but with additional `chart` prefix.

- html:

```html
<div echarts class="demo-chart" [options]="chartOptions" (chartClick)="onChartClick($event)"></div>
```

- The '\$event' is same with the 'params' that Echarts dispatches

It supports following event outputs:

| @Output                   | Event                                   |
| ------------------------- | --------------------------------------- |
| chartInit                 | Emitted when chart is intialized        |
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

You can refer to the echarts tutorial: [Events and Actions in ECharts](https://ecomfe.github.io/echarts-doc/public/en/tutorial.html#Events%20and%20Actions%20in%20ECharts) for more details of the event params. You can also refer to the [demo](https://xieziyu.github.io/#/ngx-echarts/demo) page for the detailed example.

# Custom Build

> Please refer to [ECharts Document](https://echarts.apache.org/en/tutorial.html#Create%20Custom%20Build%20of%20ECharts) for more details.

If you want to custom build echarts, prepare a file like `custom-echarts.ts`:

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

If you need to import theme files, remember to change their `'echarts'` path to `'echarts/lib/echarts'`, for example:

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
