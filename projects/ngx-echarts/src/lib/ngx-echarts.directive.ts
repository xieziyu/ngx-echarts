import {
  AfterViewInit,
  Directive,
  ElementRef,
  EventEmitter,
  InjectionToken,
  NgZone,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  inject,
  input,
  output,
} from '@angular/core';
import { outputFromObservable, outputToObservable } from '@angular/core/rxjs-interop';
import type { ECElementEvent, ECharts, EChartsCoreOption } from 'echarts/core';
import { Observable, ReplaySubject, Subject, Subscription, asyncScheduler } from 'rxjs';
import { switchMap, throttleTime } from 'rxjs/operators';
import { ChangeFilterV2 } from './change-filter-v2';

export interface NgxEchartsConfig {
  echarts: any | (() => Promise<any>);
  theme?: string | ThemeOption;
}

export type ThemeOption = Record<string, any>;

export const NGX_ECHARTS_CONFIG = new InjectionToken<NgxEchartsConfig>('NGX_ECHARTS_CONFIG');

@Directive({
  standalone: true,
  selector: 'echarts, [echarts]',
  exportAs: 'echarts',
})
export class NgxEchartsDirective implements OnChanges, OnDestroy, OnInit, AfterViewInit {
  private el = inject(ElementRef);
  private ngZone = inject(NgZone);
  private readonly config = inject<NgxEchartsConfig>(NGX_ECHARTS_CONFIG);

  readonly options = input<EChartsCoreOption | null>(null);
  readonly theme = input<string | ThemeOption | null>(this.config.theme ?? null);
  readonly initOpts = input<{
    devicePixelRatio?: number;
    renderer?: string;
    width?: number | string;
    height?: number | string;
    locale?: string;
  } | null>(null);
  readonly merge = input<EChartsCoreOption | null>(null);
  readonly autoResize = input(true);
  readonly loading = input(false);
  readonly loadingType = input('default');
  readonly loadingOpts = input<object | null>(null);

  // ngx-echarts events
  readonly chartInit = output<ECharts>();
  readonly optionsError = output<Error>();

  // echarts mouse events
  readonly chartClick = outputFromObservable(this.createLazyEvent<ECElementEvent>('click'));
  readonly chartDblClick = outputFromObservable(this.createLazyEvent<ECElementEvent>('dblclick'));
  readonly chartMouseDown = outputFromObservable(this.createLazyEvent<ECElementEvent>('mousedown'));
  readonly chartMouseMove = outputFromObservable(this.createLazyEvent<ECElementEvent>('mousemove'));
  readonly chartMouseUp = outputFromObservable(this.createLazyEvent<ECElementEvent>('mouseup'));
  readonly chartMouseOver = outputFromObservable(this.createLazyEvent<ECElementEvent>('mouseover'));
  readonly chartMouseOut = outputFromObservable(this.createLazyEvent<ECElementEvent>('mouseout'));
  readonly chartGlobalOut = outputFromObservable(this.createLazyEvent<ECElementEvent>('globalout'));
  readonly chartContextMenu = outputFromObservable(
    this.createLazyEvent<ECElementEvent>('contextmenu')
  );

  // echarts events
  readonly chartHighlight = outputFromObservable(this.createLazyEvent<any>('highlight'));
  readonly chartDownplay = outputFromObservable(this.createLazyEvent<any>('downplay'));
  readonly chartSelectChanged = outputFromObservable(this.createLazyEvent<any>('selectchanged'));
  readonly chartLegendSelectChanged = outputFromObservable(
    this.createLazyEvent<any>('legendselectchanged')
  );
  readonly chartLegendSelected = outputFromObservable(this.createLazyEvent<any>('legendselected'));
  readonly chartLegendUnselected = outputFromObservable(
    this.createLazyEvent<any>('legendunselected')
  );
  readonly chartLegendLegendSelectAll = outputFromObservable(
    this.createLazyEvent<any>('legendselectall')
  );
  readonly chartLegendLegendInverseSelect = outputFromObservable(
    this.createLazyEvent<any>('legendinverseselect')
  );
  readonly chartLegendScroll = outputFromObservable(this.createLazyEvent<any>('legendscroll'));
  readonly chartDataZoom = outputFromObservable(this.createLazyEvent<any>('datazoom'));
  readonly chartDataRangeSelected = outputFromObservable(
    this.createLazyEvent<any>('datarangeselected')
  );
  readonly chartGraphRoam = outputFromObservable(this.createLazyEvent<any>('graphroam'));
  readonly chartGeoRoam = outputFromObservable(this.createLazyEvent<any>('georoam'));
  readonly chartTreeRoam = outputFromObservable(this.createLazyEvent<any>('treeroam'));
  readonly chartTimelineChanged = outputFromObservable(
    this.createLazyEvent<any>('timelinechanged')
  );
  readonly chartTimelinePlayChanged = outputFromObservable(
    this.createLazyEvent<any>('timelineplaychanged')
  );
  readonly chartRestore = outputFromObservable(this.createLazyEvent<any>('restore'));
  readonly chartDataViewChanged = outputFromObservable(
    this.createLazyEvent<any>('dataviewchanged')
  );
  readonly chartMagicTypeChanged = outputFromObservable(
    this.createLazyEvent<any>('magictypechanged')
  );
  readonly chartGeoSelectChanged = outputFromObservable(
    this.createLazyEvent<any>('geoselectchanged')
  );
  readonly chartGeoSelected = outputFromObservable(this.createLazyEvent<any>('geoselected'));
  readonly chartGeoUnselected = outputFromObservable(this.createLazyEvent<any>('geounselected'));
  readonly chartAxisAreaSelected = outputFromObservable(
    this.createLazyEvent<any>('axisareaselected')
  );
  readonly chartBrush = outputFromObservable(this.createLazyEvent<any>('brush'));
  readonly chartBrushEnd = outputFromObservable(this.createLazyEvent<any>('brushend'));
  readonly chartBrushSelected = outputFromObservable(this.createLazyEvent<any>('brushselected'));
  readonly chartGlobalCursorTaken = outputFromObservable(
    this.createLazyEvent<any>('globalcursortaken')
  );
  readonly chartRendered = outputFromObservable(this.createLazyEvent<any>('rendered'));
  readonly chartFinished = outputFromObservable(this.createLazyEvent<any>('finished'));

  public animationFrameID = null;
  private chart: ECharts;
  private chart$ = new ReplaySubject<ECharts>(1);
  private resizeOb: ResizeObserver;
  private resize$ = new Subject<void>();
  private resizeSub: Subscription;
  private initChartTimer?: number;
  private changeFilter = new ChangeFilterV2();
  private loadingSub: Subscription;
  private resizeObFired: boolean = false;
  private echarts: any = this.config.echarts;

  ngOnChanges(changes: SimpleChanges) {
    this.changeFilter.doFilter(changes);
  }

  ngOnInit() {
    if (!window.ResizeObserver) {
      throw new Error('please install a polyfill for ResizeObserver');
    }
    this.resizeSub = this.resize$
      .pipe(throttleTime(100, asyncScheduler, { leading: false, trailing: true }))
      .subscribe(() => this.resize());

    if (this.autoResize()) {
      // https://github.com/xieziyu/ngx-echarts/issues/413
      this.resizeOb = this.ngZone.runOutsideAngular(
        () =>
          new window.ResizeObserver(entries => {
            for (const entry of entries) {
              if (entry.target === this.el.nativeElement) {
                // Ignore first fire on insertion, no resize actually happened
                if (!this.resizeObFired) {
                  this.resizeObFired = true;
                } else {
                  this.animationFrameID = window.requestAnimationFrame(() => {
                    this.resize$.next();
                  });
                }
              }
            }
          })
      );
      this.resizeOb.observe(this.el.nativeElement);
    }

    this.changeFilter.notFirstAndEmpty('options', opt => this.onOptionsChange(opt));
    this.changeFilter.notFirstAndEmpty('merge', opt => this.setOption(opt));
    this.changeFilter.has<boolean>('loading', v => this.toggleLoading(!!v));
    this.changeFilter.notFirst<string | ThemeOption>('theme', () => this.refreshChart());
  }

  ngOnDestroy() {
    window.clearTimeout(this.initChartTimer);
    if (this.resizeSub) {
      this.resizeSub.unsubscribe();
    }
    if (this.animationFrameID) {
      window.cancelAnimationFrame(this.animationFrameID);
    }
    if (this.resizeOb) {
      this.resizeOb.unobserve(this.el.nativeElement);
    }
    if (this.loadingSub) {
      this.loadingSub.unsubscribe();
    }
    this.changeFilter.dispose();
    this.dispose();
  }

  ngAfterViewInit() {
    this.initChartTimer = window.setTimeout(() => this.initChart());
  }

  private dispose() {
    if (this.chart) {
      if (!this.chart.isDisposed()) {
        this.chart.dispose();
      }
      this.chart = null;
    }
  }

  /**
   * resize chart
   */
  resize() {
    if (this.chart) {
      this.chart.resize();
    }
  }

  private toggleLoading(loading: boolean) {
    if (this.chart) {
      loading
        ? this.chart.showLoading(this.loadingType(), this.loadingOpts())
        : this.chart.hideLoading();
    } else {
      this.loadingSub = this.chart$.subscribe(chart =>
        loading ? chart.showLoading(this.loadingType(), this.loadingOpts()) : chart.hideLoading()
      );
    }
  }

  private setOption(option: any, opts?: any) {
    if (this.chart) {
      try {
        this.chart.setOption(option, opts);
      } catch (e) {
        console.error(e);
        this.optionsError.emit(e);
      }
    }
  }

  /**
   * dispose old chart and create a new one.
   */
  async refreshChart() {
    this.dispose();
    await this.initChart();
  }

  private createChart() {
    const dom = this.el.nativeElement;

    if (window && window.getComputedStyle) {
      const prop = window.getComputedStyle(dom, null).getPropertyValue('height');
      if ((!prop || prop === '0px') && (!dom.style.height || dom.style.height === '0px')) {
        dom.style.height = '400px';
      }
    }

    // here a bit tricky: we check if the echarts module is provided as function returning native import('...') then use the promise
    // otherwise create the function that imitates behaviour above with a provided as is module
    return this.ngZone.runOutsideAngular(() => {
      const load =
        typeof this.echarts === 'function' ? this.echarts : () => Promise.resolve(this.echarts);

      return load().then(({ init }) =>
        init(dom, this.theme ?? this.config?.theme, this.initOpts())
      );
    });
  }

  private async initChart() {
    await this.onOptionsChange(this.options());

    const merge = this.merge();
    if (merge && this.chart) {
      this.setOption(merge);
    }
  }

  private async onOptionsChange(opt: any) {
    if (!opt) {
      return;
    }

    if (this.chart) {
      this.setOption(this.options(), true);
    } else {
      this.chart = await this.createChart();
      this.chart$.next(this.chart);
      this.chartInit.emit(this.chart);
      this.setOption(this.options(), true);
    }
  }

  // allows to lazily bind to only those events that are requested through the `output()` by parent components
  // see https://stackoverflow.com/questions/51787972/optimal-reentering-the-ngzone-from-eventemitter-event for more info
  private createLazyEvent<T>(eventName: string): Observable<T> {
    return outputToObservable(this.chartInit).pipe(
      switchMap(
        (chart: any) =>
          new Observable(observer => {
            chart.on(eventName, (data: T) => this.ngZone.run(() => observer.next(data)));
            return () => {
              if (this.chart) {
                if (!this.chart.isDisposed()) {
                  chart.off(eventName);
                }
              }
            };
          })
      )
    ) as EventEmitter<T>;
  }
}
