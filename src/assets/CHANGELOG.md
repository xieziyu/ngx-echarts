## 4.1.0 (2018-12-16)

#### New
+ Perfomance update: echarts events are now lazily bounded, so it won't trigger change dectection unexpectedly. Please refer to [PR #154](https://github.com/xieziyu/ngx-echarts/pull/154) for more details. Thanks to [smnbbrv](https://github.com/smnbbrv)!
+ Plenty of echarts event are now [supported](#events).

#### Deprecated
+ `[detectEventChanges]` is now deprecated.

---

## 4.0.1 (2018-11-11)

#### New
+ Add map events support: (chartMapSelectChanged), (chartMapSelected), (chartMapUnselected). (by [amirch1](https://github.com/amirch1) - [PR #147](https://github.com/xieziyu/ngx-echarts/pull/147))

---

## 4.0.0 (2018-08-20)

#### BREAKING CHANGES
+ ES6 import instead of polluting global namespace. [issue #123](https://github.com/xieziyu/ngx-echarts/issues/123)
+ NgxEchartsService is now obsoleted. If you want to use echarts API, please just import it
  ```typescript
  import * as echarts from 'echarts';
  /** or */
  import { graphic, registerMap } from 'echarts';
  ```
+ No need to configure `angular.json` any more. But we still need to configure `tsconfig.json` currently.
+ Import echarts theme files or other extension files in `main.ts`.

#### New
+ [detectEventChanges] Use it to avoid unwanted change detections. Note that, if you set it false, `chartClick` and some other event-emitters become silent.

#### Changes
+ ECharts instance creating is delayed until view initialized
+ [theme] now detect changes at runtime. Note that, when you change theme at runtime, the chart would be destroyed first and then initialized again.

---

## 3.2.0 & 2.3.0 (2018-07-24)

#### New
+ [autoResize] now detects its container element's offset height. 

#### Change
+ Resizing detection is now debounced.

---

## 3.1.0 & 2.2.0 (2018-06-13)

#### New
+ [autoResize] now detects its container element's offset width. Especially useful for charts inside `<ng-template>` such as NG-ZORRO components.

---

## 3.0.1 & 2.1.1 (2018-06-12)

#### Bugfix
+ Line chart is not animated on init.

---

## 3.0.0 (2018-05-08)

#### Changes
+ Support Angular 6

---

## 2.1.0 (2018-03-14)

#### New
+ `[loadingOpts]`. Use this option to customize loading style.

#### Bugfix
+ Double check `dom.style.height` before setting default value.

---

## 2.0.2 (2018-02-07)

#### New
+ `[autoResize]` input (default: true). [PR #73](https://github.com/xieziyu/ngx-echarts/pull/73) by [arethore-actility](https://github.com/arethore-actility)

---

## 2.0.1 (2017-12-11)

#### Bugfix
+ Fix issue: No change detection involved in event handler. [#26](https://github.com/xieziyu/ngx-echarts/issues/26), [#28](https://github.com/xieziyu/ngx-echarts/issues/28)

---

## 2.0.0 (2017-12-04)

#### New
+ New Service: `NgxEchartsService` provided. Refer to [API document](https://xieziyu.github.io/ngx-echarts/api-doc/injectables/NgxEchartsService.html) for details

---

## 2.0.0-beta.0 (2017-11-25)

#### New
+ New input: `[merge]`. The value of `[merge]` will be merged into `[options]`. So it's perfect for updating chart data series. Refer to [ECharts documentation](https://ecomfe.github.io/echarts-doc/public/en/api.html#echartsInstance.setOption) for details

+ New input: `[initOpts]`. The value of `[initOpts]` will be used in `echarts.init()`. It may contain `devicePixelRatio`, `renderer`, `width` or `height` properties. Refer to [ECharts documentation](https://ecomfe.github.io/echarts-doc/public/en/api.html#echarts.init) for details

+ New public methods: `setOption(option: any, otps?: any)`

#### BREAKING CHANGES
+ `[dataset]` is deprecated. It's really hard to understand how `[dataset]` works for chart with multiple data series. So I recommend to use `[merge]` input instead. It's more powerful to merge series than to update values only.

+ `AngularEchartsModule` is renamed to `NgxEchartsModule`. I have to say, it's weird to import `AngularEchartsModule` from `ngx-echarts`.

+ `AngularEchartsDirective` is renamed to `NgxEchartsDirective`. Weird too.

#### Changes
+ `ngx-echarts` now has default `400px` height, if you forget to set height for the div.

---

## 1.2.5 (2017-11-21)

#### Changes
+ Clear chart by setting options to {}. ([PR #42](https://github.com/xieziyu/ngx-echarts/pull/42) by [Jack-Valentine](https://github.com/Jack-Valentine))
+ Provide `clear()` method for directive. ([PR #29](https://github.com/xieziyu/ngx-echarts/pull/29) by [berichte](https://github.com/berichte))

---

## [1.2.4](https://github.com/xieziyu/ngx-echarts/compare/v1.2.3...v1.2.4) (2017-08-22)

#### Bugfix
+ Support chart with `timeline` options.

---

## [1.2.3](https://github.com/xieziyu/ngx-echarts/compare/v1.2.2...v1.2.3) (2017-07-21)

#### Changes
+ Reduced CPU usage. ([PR #16](https://github.com/xieziyu/ngx-echarts/pull/16) by [RozennK](https://github.com/RozennK))

---

## [1.2.2](https://github.com/xieziyu/ngx-echarts/compare/v1.2.1...v1.2.2) (2017-07-08)

#### New
+ Support `rollup` ([PR #12](https://github.com/xieziyu/ngx-echarts/pull/12) by [ysfjwd](https://github.com/ysfjwd))

---

## [1.2.1](https://github.com/xieziyu/ngx-echarts/compare/v1.2.0...v1.2.1) (2017-06-01)

#### New
+ Support `chartContextMenu` emitter for `contextmenu` event

---

## [1.2.0](https://github.com/xieziyu/angular2-echarts/compare/v1.1.7...v1.2.0) (2017-05-18)

#### New
+ Publish `UMD` bundle

---

## [1.1.7](https://github.com/xieziyu/angular2-echarts/compare/v1.1.6...v1.1.7) (2017-05-10)

#### New
+ Support `theme`. Refer to: [http://echarts.baidu.com/download-theme.html](http://echarts.baidu.com/download-theme.html)

---

## [1.1.6](https://github.com/xieziyu/angular2-echarts/compare/v1.1.5...v1.1.6) (2017-05-02)

#### Changes
+ Expose `echartsInstance` in `chartInit` event. Refer to: [http://echarts.baidu.com/api.html#echartsInstance](http://echarts.baidu.com/api.html#echartsInstance)

---

## [1.1.5](https://github.com/xieziyu/angular2-echarts/compare/v1.1.4...v1.1.5) (2017-05-01)

#### Changes
+ Support `chartDataZoom` event. (Thanks to averhaegen)

---

## [1.1.4](https://github.com/xieziyu/angular2-echarts/compare/v1.1.3...v1.1.4) (2017-03-24)

#### Changes
+ Support angular-4.0.0

---

## [1.1.3](https://github.com/xieziyu/angular2-echarts/compare/v1.1.2...v1.1.3) (2017-03-16)

#### Bugfix
+ Fix a bug causing the `dataset` change detection was unexpectedly skipped when `options` was changed in the same cycle.

---

## [1.1.2](https://github.com/xieziyu/angular2-echarts/compare/v1.1.1...v1.1.2) (2017-03-11)

#### Bugfix
+ Fix a bug causing the `dataset` change detection was skipped once after `options` changed.

---

## [1.1.1](https://github.com/xieziyu/angular2-echarts/compare/v1.1.0...v1.1.1) (2017-03-11)

#### Bugfix
+ If `options.series.data` is lost and `[dataset]` input is valid, `echarts` will correctly update the chart now.

---

## [1.1.0](https://github.com/xieziyu/angular2-echarts/compare/v1.0.3...v1.1.0) (2017-03-09)

#### New
+ Support mouse event outputs.

---

## [1.0.3](https://github.com/xieziyu/angular2-echarts/compare/v1.0.2...v1.0.3) (2017-03-07)

#### Changes
+ Involed ngc to support AoT.

---

## [1.0.2](https://github.com/xieziyu/angular2-echarts/compare/v1.0.1...v1.0.2) (2017-02-24)

#### Changes
+ updated README.md
+ added CHANGELOG.md

---

## [1.0.1](https://github.com/xieziyu/angular2-echarts/compare/v1.0.0...v1.0.1) (2017-02-24)

#### Changes
+ updated README.md