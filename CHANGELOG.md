- 2024.05.24: v18.0.0:

  - Feat: upgrade to Angular 18

- 2024.05.16: v17.2.0

  - Feat: `provideEcharts` supports default theme config. (by [wheeljs](https://github.com/wheeljs))
  - Fix: Issue [#413](https://github.com/xieziyu/ngx-echarts/issues/413) (Thanks to [s9ke](https://github.com/s9ke))

- 2023.11.10: v17.1.0 / v16.2.0:

  - Feat: Exported standalone `NgxEchartsDirective`, `provideEcharts` and `provideEchartsCore`

- 2023.11.08: v17.0.1:

  - Feat: upgrade to Angular 17

- 2023.10.11: v16.1.0:

  - Feat: Add types to `chartXXX` EventEmitters. Support new events such as: `'selectchanged'`

- 2023.05.10: v16.0.0:

  - Feat: upgrade to Angular 16
  - Chore: replaced tslint with eslint.

- 2023.03.27: v15.0.3:

  - Fix: `[loading]=true` is not triggered when chart initialized.

- 2023.03.20: v15.0.2:

  - Fix: unsubscribe ChangeFilter subscriptions onDestroy.

- 2022.12.01: v15.0.1:

  - Feat: Support nullable @Inputs. Issue [#378](https://github.com/xieziyu/ngx-echarts/issues/378)

- 2022.11.23: v15.0.0:

  - Feat: upgrade to Angular 15

- 2022.06.21: v14.0.0:

  - Feat: upgrade to Angular 14

- 2021.12.07: v8.0.1:
  
  - Fix: NgxEchartsModule.forChild() issue [#334](https://github.com/xieziyu/ngx-echarts/issues/334)

- 2021.11.08: v8.0.0 / v7.1.0:
  
  - Fix: remove @juggle/resize-observer from the peer dependencies
  - Perf: fix performance issue [#330](https://github.com/xieziyu/ngx-echarts/issues/330)

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
