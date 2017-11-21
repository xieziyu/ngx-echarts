# ngx-echarts [![npm version](https://badge.fury.io/js/ngx-echarts.svg)](http://badge.fury.io/js/ngx-echarts) [![npm downloads](https://img.shields.io/npm/dm/ngx-echarts.svg)](https://npmjs.org/ngx-echarts)
Angular directive for echarts v3. Please refer to the [demo](https://xieziyu.github.io/#/ngx-echarts/demo) page. (The project is renamed from **angular2-echarts**)

## Table of contents 
1. [Getting Started](#getting-started)
2. [Latest Update](#latest-update)
3. [Installation](#installation)
4. [Usage](#usage)
5. [API](#api)
6. [Events](#events)
7. [Demo](#demo)

# Getting Started
ngx-echarts is an angular (ver >= 2.x) directive for ECharts v3.

# Latest Update
+ 2017.11.21: Clear chart by setting options to {}. ([PR #42](https://github.com/xieziyu/ngx-echarts/pull/42) by [Jack-Valentine](https://github.com/Jack-Valentine))

+ 2017.08.22: Bugfix: support chart with `timeline` options.

+ 2017.07.21: Reduced CPU usage. ([PR #16](https://github.com/xieziyu/ngx-echarts/pull/16) by [RozennK](https://github.com/RozennK))

+ 2017.07.08: Support `rollup`. ([PR #12](https://github.com/xieziyu/ngx-echarts/pull/12) by [ysfjwd](https://github.com/ysfjwd))

+ 2017.06.01: Support `chartContextMenu` emitter for `contextmenu` event.

+ 2017.05.18: Publish `UMD` bundle

+ 2017.05.10: Support `theme`.

+ 2017.05.02: Expose `echartsInstance` in `chartInit` event. So we can directly call the API provided by echarts instance. Refer to: [http://echarts.baidu.com/api.html#echartsInstance](http://echarts.baidu.com/api.html#echartsInstance)

# Installation
```
npm install echarts --save

npm install ngx-echarts --save
```

## How to use it with:
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

+ `index.html`: If you don't use any module resovler, you need to add script tag in **"index.html"** just like:

```html
<script type='text/javascript' src='vendor/path/echarts/dist/echarts.js'></script>
```

# Usage
Please refer to the [demo](https://xieziyu.github.io/#/ngx-echarts/demo) page.

1. Firstly, import `AngularEchartsModule` in your app module (or any other proper angular module):
    ```typescript
    import { AngularEchartsModule } from 'ngx-echarts';

    @NgModule({
      imports: [
        ...,
        AngularEchartsModule
      ],
      ...
    })
    export class AppModule { }
    ```

2. Then: use `echarts` directive in a div which has **pre-defined height**.
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
`echarts` directive support following input porperties:
+ `options`: It's the same with the options in official demo site.

+ `dataset`: You can ignore the "data" property in "series" of the `options`, and use `dataset` to bind the series data instead.

+ `loading`: boolean property. Use it to toggle the echarts loading animation when your data is not ready.

+ `theme`: use it to init echarts with theme. You need to include the theme file in `.angular-cli.json` or the `index.html`. For example, if we want to use `dark.js` in [Echarts Themes Page](http://echarts.baidu.com/download-theme.html): 
  
  ```html
  <div echarts theme="dark" class="demo-chart" [options]="chartOptions"></div>
  ```

It exposes the `echartsInstance` (since v1.1.6) in `'chartInit'` event. So you can directly call the APIs just like: `resize()`, `showLoading()`, etc. For example:

  + html:

  ```html
  <div echarts class="demo-chart" [options]="chartOptions" (chartInit)="onChartInit($event)"></div>
  ```

  + component:

  ```javascript
  onChartInit(ec) {
    this.echartsIntance = ec;
  }

  resizeChart() {
    if (this.echartsIntance) {
      this.echartsIntance.resize();
    }
  }
  ```

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
```
npm install
npm run demo
```
The demo page server is listening to: http://localhost:4202