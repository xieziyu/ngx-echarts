# ngx-echarts
[![npm version](https://badge.fury.io/js/ngx-echarts.svg)](http://badge.fury.io/js/ngx-echarts)
[![npm downloads](https://img.shields.io/npm/dm/ngx-echarts.svg)](https://npmjs.org/ngx-echarts)
[![Build Status](https://travis-ci.org/xieziyu/ngx-echarts.svg?branch=master)](https://travis-ci.org/xieziyu/ngx-echarts)

Angular directive for echarts (version >= 3.x) (The project is renamed from **angular2-echarts**)

+ [Online Demo](https://xieziyu.github.io/ngx-echarts)
+ [Online Docs](https://xieziyu.github.io/ngx-echarts/api-doc)

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

# Latest Update
+ 2018.02.07: v2.0.2. New: `[autoResize]` input (default: true). [PR #73](https://github.com/xieziyu/ngx-echarts/pull/73) by [arethore-actility](https://github.com/arethore-actility)

+ 2017.12.11: v2.0.1. Fix issue: No change detection involved in event handler. Refer to issue [#26](https://github.com/xieziyu/ngx-echarts/issues/26), [#28](https://github.com/xieziyu/ngx-echarts/issues/28)

+ 2017.12.04: v2.0.0. Provide an echarts wrapper service: NgxEchartsService. Please see [demo](https://xieziyu.github.io/ngx-echarts/#/usage/NgxEchartsService)

+ 2017.11.25: v2.0.0-beta.0. It has some [BREAKING CHANGES](https://github.com/xieziyu/ngx-echarts/blob/master/src/assets/CHANGELOG.md) you should know.

# Installation
```bash
# if you use npm
npm install echarts --save
npm install ngx-echarts --save

# or if you use yarn
yarn add echarts
yarn add ngx-echarts
```

## How to use it within:
+ `angular-cli`: If you already have an angular-cli project. You need to import echarts in the **"scripts"** list of .angular-cli.json just like:

```javascript
{
  "scripts": [
    // ...

    // add this:
    "../node_modules/echarts/dist/echarts.min.js"  // or echarts.js for debug purpose
  ],
}
```

+ `Webpack`: You need to edit `webpack.common.js`, just like:
```javascript
new webpack.ProvidePlugin({
  // ...

  // add this:
  echarts: "echarts"
})
```

+ `SystemJS`: For example: angular `quickstart`. You need to modify `systemjs.config.js` file just like:

```javascript
{
  map: {
    // ...

    // ngx-echarts
    'echarts':                   'npm:echarts',
    'ngx-echarts':          'npm:ngx-echarts'
  },
  packages: {
    // other packages ...

    // ngx-echarts
    echarts: {
      defaultExtension: 'js',
      main: 'dist/echarts.min.js',
      meta: {
        './*.js': {
          format: 'global', // load this module as a global
          exports: 'echarts', // the global property to take as the module value
        }
      }
    },
    'ngx-echarts': {
      defaultExtension: 'js',
      main: 'bundles/ngx-echarts.umd.js',
      meta: {
        './*.js': {
          deps: ['echarts']
        }
      }
    }
  }
}
```

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

      + css:
      ```css
      .demo-chart {
        height: 400px;
      }
      ```

      + component:
      ```javascript
      chartOption = {
        title: {
          text: '堆叠区域图'
        },
        tooltip : {
          trigger: 'axis'
        },
        legend: {
          data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis : [
          {
            type : 'category',
            boundaryGap : false,
            data : ['周一','周二','周三','周四','周五','周六','周日']
          }
        ],
        yAxis : [
          {
            type : 'value'
          }
        ],
        series : [
          {
            name:'邮件营销',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[120, 132, 101, 134, 90, 230, 210]
          },
          {
            name:'联盟广告',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[220, 182, 191, 234, 290, 330, 310]
          },
          {
            name:'视频广告',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[150, 232, 201, 154, 190, 330, 410]
          },
          {
            name:'直接访问',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[320, 332, 301, 334, 390, 330, 320]
          },
          {
            name:'搜索引擎',
            type:'line',
            stack: '总量',
            label: {
              normal: {
                show: true,
                position: 'top'
              }
            },
            areaStyle: {normal: {}},
            data:[820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      }
      ```

# API
### Directive
`echarts` directive support following input porperties:
+ `[options]`: It's the same with the options in official demo site.

+ `[merge]`: You can use it to update part of the `options`, especially helpful when you need to update the chart data. In fact, the value of `merge` will be used in `echartsInstance.setOption()` with `notMerge = false`. So you can refer to [ECharts documentation](https://ecomfe.github.io/echarts-doc/public/en/api.html#echartsInstance.setOption) for details

+ `[loading]`: boolean property. Use it to toggle the echarts loading animation when your data is not ready.

+ `[initOpts]`: The value of `[initOpts]` will be used in `echarts.init()`. It may contain `devicePixelRatio`, `renderer`, `width` or `height` properties. Refer to [ECharts documentation](https://ecomfe.github.io/echarts-doc/public/en/api.html#echarts.init) for details

+ `[theme]`: use it to init echarts with theme. You need to include the theme file in `.angular-cli.json` or other module resolver. 

  For example, if we want to use `dark.js` in [Echarts Themes Page](http://echarts.baidu.com/download-theme.html): 
    
    ```html
    <div echarts theme="dark" class="demo-chart" [options]="chartOptions"></div>
    ```

It exposes the `echartsInstance` (since v1.1.6) in `(chartInit)` event. So you can directly call the APIs just like: `resize()`, `showLoading()`, etc. For example:

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

### Service
`NgxEchartsService` is a wrapper for global `echarts` object. You can get native echarts object or use wrapper method directly. For example:
  + usage:

    ```typescript
    import {NgxEchartsService} from 'ngx-echarts';

    //...
    constructor(private es: NgxEchartsService) {}

    ngOnInit() {
      const echarts = this.es.echarts;
      echarts.registerMap('HK', HK_GEO_JSON);
      // Or you can:
      // this.es.registerMap('HK', HK_GEO_JSON);
    }
    ```

More details in [Document](https://xieziyu.github.io/ngx-echarts/api-doc/injectables/NgxEchartsService.html) and [Demo](https://xieziyu.github.io/ngx-echarts/#/usage/NgxEchartsService)

# Events
As echarts support the `'click'`, `'dblclick'`, `'mousedown'`, `'mouseup'`, `'mouseover'`, `'mouseout'`, `'globalout'` mouse events, our `ngx-echarts` directive also support the same mouse events but with additional `chart` prefix.

  + html:

  ```html
  <div echarts class="demo-chart" [options]="chartOptions" (chartClick)="onChartClick($event)"></div>
  ```

  + The '$event' is same with the 'params' that Echarts dispatches

It supports following event outputs:
+ `chartClick`: It emits the same `params` of `'click'` event
+ `chartDblClick`: It emits the same `params` of `'dblclick'` event
+ `chartMouseDown`: It emits the same `params` of `'mousedown'` event
+ `chartMouseUp`: It emits the same `params` of `'mouseup'` event
+ `chartMouseOver`: It emits the same `params` of `'mouseover'` event
+ `chartMouseOut`: It emits the same `params` of `'mouseout'` event
+ `chartGlobalOut`: It emits the same `params` of `'globalout'` event
+ `chartContextMenu`: It emits the same `params` of `'contextmenu'` event (since v1.2.1)
+ `chartDataZoom`: It emits the same `params` of `'dataZoom'` event (thanks to averhaegen)

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