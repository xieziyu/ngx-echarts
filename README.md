<div align="center">
  <a href="https://xieziyu.github.io/ngx-echarts">
    <img src="./src/assets/img/logo.svg" alt="Logo" width="80">
  </a>
  <h3 align="center">NGX-ECHARTS</h3>
  <p align="center">
    Angular directive for <a href="https://github.com/apache/incubator-echarts">Apache ECharts</a>
  </p>
  <p align="center">
    <a href="https://xieziyu.github.io/ngx-echarts">Online Demo</a> |
    <a href="https://github.com/xieziyu/ngx-echarts-starter">Starter</a>
  </p>
  <p align="center">
    <a href="https://www.npmjs.com/package/ngx-echarts"><img src="https://img.shields.io/npm/v/ngx-echarts.svg"></a>
    <a href="https://www.npmjs.com/package/ngx-echarts"><img src="https://img.shields.io/npm/dm/ngx-echarts.svg"></a>
    <a href="https://github.com/xieziyu/ngx-echarts/actions/workflows/ci.yaml"><img src="https://github.com/xieziyu/ngx-echarts/actions/workflows/ci.yaml/badge.svg"></a>
  </p>
</div>

## Table of contents

- [Getting Started](#getting-started)
- [Latest Update](#latest-update)
- [Installation](#installation)
  - [Upgrade from v4.x](#upgrade-from-v4x)
- [Usage](#usage)
  - [Standalone](#standalone)
  - [NgModule](#ngmodule)
  - [Directive](#directive)
- [API](#api)
    - [Directive](#directive-1)
    - [ECharts API](#echarts-api)
    - [ECharts Instance](#echarts-instance)
    - [ECharts Extensions](#echarts-extensions)
    - [Service](#service)
- [Events](#events)
- [Custom Build](#custom-build)
  - [Treeshaking Custom Build](#treeshaking-custom-build)
  - [Legacy Custom Build](#legacy-custom-build)
- [Custom Locale](#custom-locale)
- [Demo](#demo)

# Getting Started

`ngx-echarts` is an Angular (ver >= 2.x) directive for ECharts (ver >= 3.x).

Latest version @npm:

- `v20.0.1` for Angular 20
- `v19.0.0` for Angular 19
- `v18.0.0` for Angular 18
- `v17.2.0` for Angular 17
- `v16.2.0` for Angular 16
- `v15.0.3` for Angular 15
- `v14.0.0` for Angular 14
- `v8.0.1` for Angular 13
- `v7.1.0` for Angular >= 11, < 13
- `v6.0.1` for Angular >= 10, < 11
- `v5.2.2` for Angular >= 6, < 10
- `v2.3.1` for Angular < 6 (Please refer to https://github.com/xieziyu/ngx-echarts/blob/v2.x/README.md)

A starter project on Github: https://github.com/xieziyu/ngx-echarts-starter

# Latest Update

- 2025.06.26: v20.0.1
  - fix: `[theme]` input issue [#28](https://github.com/xieziyu/ngx-echarts-starter/issues/28)

- 2025.06.09: v20.0.0
  - feat: Upgrade to angular 20
  - feat: Zoneless compatibility
  - refactor: Migrate the project to modern angular patterns. (Thanks to [pkurcx](https://github.com/pkurcx))

[CHANGELOG.md](./CHANGELOG.md)

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

## Standalone

import `NgxEchartsDirective` and `provideEchartsCore`. Or you can use `provideEchartsCore` to do treeshaking custom build.

```typescript
import { NgxEchartsDirective, provideEchartsCore } from 'ngx-echarts';
// import echarts core
import * as echarts from 'echarts/core';
// import necessary echarts components
import { BarChart } from 'echarts/charts';
import { GridComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
echarts.use([BarChart, GridComponent, CanvasRenderer]);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NgxEchartsDirective],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [provideEchartsCore({ echarts })],
})
export class AppComponent {}
```

## NgModule

import `NgxEchartsModule`:

```typescript
import { NgxEchartsModule } from 'ngx-echarts';
// import echarts core
import * as echarts from 'echarts/core';
// import necessary echarts components
import { BarChart } from 'echarts/charts';
import { GridComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
echarts.use([BarChart, GridComponent, CanvasRenderer]);

@NgModule({
  imports: [NgxEchartsModule.forRoot({ echarts })],
})
export class AppModule {}
```

## Directive

use `echarts` directive in a div which has **pre-defined height**. (From v2.0, it has default height: 400px)

- html:

```html
<div echarts [options]="chartOption" class="demo-chart"></div>
```

- css:

```css
.demo-chart {
  height: 400px;
}
```

- component:

```typescript
import { EChartsCoreOption } from 'echarts/core';

// ...

chartOption: EChartsCoreOption = {
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
import { graphic } from 'echarts/core';

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
import * as echarts from 'echarts/core';

/** echarts extensions: */
import { Bar3DChart } from 'echarts-gl/charts';
import { Grid3DComponent } from 'echarts-gl/components';
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

| @Output                        | Event                                  |
| ------------------------------ | -------------------------------------- |
| chartInit                      | Emitted when the chart is initialized  |
| chartClick                     | echarts event: `'click'`               |
| chartDblClick                  | echarts event: `'dblclick'`            |
| chartMouseDown                 | echarts event: `'mousedown'`           |
| chartMouseMove                 | echarts event: `'mousemove'`           |
| chartMouseUp                   | echarts event: `'mouseup'`             |
| chartMouseOver                 | echarts event: `'mouseover'`           |
| chartMouseOut                  | echarts event: `'mouseout'`            |
| chartGlobalOut                 | echarts event: `'globalout'`           |
| chartContextMenu               | echarts event: `'contextmenu'`         |
| chartHighlight                 | echarts event: `'highlight'`           |
| chartDownplay                  | echarts event: `'downplay'`            |
| chartSelectChanged             | echarts event: `'selectchanged'`       |
| chartLegendSelectChanged       | echarts event: `'legendselectchanged'` |
| chartLegendSelected            | echarts event: `'legendselected'`      |
| chartLegendUnselected          | echarts event: `'legendunselected'`    |
| chartLegendLegendSelectAll     | echarts event: `'legendselectall'`     |
| chartLegendLegendInverseSelect | echarts event: `'legendinverseselect'` |
| chartLegendScroll              | echarts event: `'legendscroll'`        |
| chartDataZoom                  | echarts event: `'datazoom'`            |
| chartDataRangeSelected         | echarts event: `'datarangeselected'`   |
| chartGraphRoam                 | echarts event: `'graphroam'`           |
| chartGeoRoam                   | echarts event: `'georoam'`             |
| chartTreeRoam                  | echarts event: `'treeroam'`            |
| chartTimelineChanged           | echarts event: `'timelinechanged'`     |
| chartTimelinePlayChanged       | echarts event: `'timelineplaychanged'` |
| chartRestore                   | echarts event: `'restore'`             |
| chartDataViewChanged           | echarts event: `'dataviewchanged'`     |
| chartMagicTypeChanged          | echarts event: `'magictypechanged'`    |
| chartGeoSelectChanged          | echarts event: `'geoselectchanged'`    |
| chartGeoSelected               | echarts event: `'geoselected'`         |
| chartGeoUnselected             | echarts event: `'geounselected'`       |
| chartAxisAreaSelected          | echarts event: `'axisareaselected'`    |
| chartBrush                     | echarts event: `'brush'`               |
| chartBrushEnd                  | echarts event: `'brushend'`            |
| chartBrushSelected             | echarts event: `'brushselected'`       |
| chartGlobalCursorTaken         | echarts event: `'globalcursortaken'`   |
| chartRendered                  | echarts event: `'rendered'`            |
| chartFinished                  | echarts event: `'finished'`            |

You can refer to the ECharts tutorial: [Events and Actions in ECharts](https://echarts.apache.org/en/tutorial.html#Events%20and%20Actions%20in%20ECharts) for more details of the event params. You can also refer to the [demo](https://xieziyu.github.io/#/ngx-echarts/demo) page for a detailed example.

# Custom Build

## Treeshaking Custom Build

> Since version 5.0.1 ECharts supports [Treeshaking with NPM](https://echarts.apache.org/en/tutorial.html#Use%20ECharts%20with%20bundler%20and%20NPM).

The `app.modules.ts` should look like this:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { NgxEchartsDirective, provideEchartsCore } from 'ngx-echarts';

import { AppComponent } from './app.component';

// Import the echarts core module, which provides the necessary interfaces for using echarts.
import * as echarts from 'echarts/core';

// Import bar charts, all suffixed with Chart
import { BarChart } from 'echarts/charts';

// Import the tooltip, title, rectangular coordinate system, dataset and transform components
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent
} from 'echarts/components';

// Features like Universal Transition and Label Layout
import { LabelLayout, UniversalTransition } from 'echarts/features';

// Import the Canvas renderer
// Note that including the CanvasRenderer or SVGRenderer is a required step
import { CanvasRenderer } from 'echarts/renderers';

// Import the theme
import 'echarts/theme/macarons.js';

// Register the required components
echarts.use([
  BarChart,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer
]);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    // import standalone directive:
    NgxEchartsDirective,
  ],
  providers: [{
    // Provide custom builded ECharts core:
    provideEchartsCore({ echarts })
  }],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

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
