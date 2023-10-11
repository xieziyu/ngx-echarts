import {
  AfterViewInit,
  Directive,
  ElementRef,
  EventEmitter,
  Inject,
  InjectionToken,
  Input,
  NgZone,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Observable, ReplaySubject, Subject, Subscription, asyncScheduler } from 'rxjs';
import { switchMap, throttleTime } from 'rxjs/operators';
import { ChangeFilterV2 } from './change-filter-v2';
import type { EChartsOption, ECharts, ECElementEvent } from 'echarts';
import type { ECActionEvent } from 'echarts/types/src/util/types';

export interface NgxEchartsConfig {
  echarts: any | (() => Promise<any>);
}

export type ThemeOption = Record<string, any>;

export const NGX_ECHARTS_CONFIG = new InjectionToken<NgxEchartsConfig>('NGX_ECHARTS_CONFIG');

@Directive({
  selector: 'echarts, [echarts]',
  exportAs: 'echarts',
})
export class NgxEchartsDirective implements OnChanges, OnDestroy, OnInit, AfterViewInit {
  @Input() options: EChartsOption | null = null;
  @Input() theme: string | ThemeOption | null = null;
  @Input() initOpts: {
    devicePixelRatio?: number;
    renderer?: string;
    width?: number | string;
    height?: number | string;
    locale?: string;
  } | null = null;
  @Input() merge: EChartsOption | null = null;
  @Input() autoResize = true;
  @Input() loading = false;
  @Input() loadingType = 'default';
  @Input() loadingOpts: object | null = null;

  // ngx-echarts events
  @Output() chartInit = new EventEmitter<any>();
  @Output() optionsError = new EventEmitter<Error>();

  // echarts mouse events
  @Output() chartClick = this.createLazyEvent<ECElementEvent>('click');
  @Output() chartDblClick = this.createLazyEvent<ECElementEvent>('dblclick');
  @Output() chartMouseDown = this.createLazyEvent<ECElementEvent>('mousedown');
  @Output() chartMouseMove = this.createLazyEvent<ECElementEvent>('mousemove');
  @Output() chartMouseUp = this.createLazyEvent<ECElementEvent>('mouseup');
  @Output() chartMouseOver = this.createLazyEvent<ECElementEvent>('mouseover');
  @Output() chartMouseOut = this.createLazyEvent<ECElementEvent>('mouseout');
  @Output() chartGlobalOut = this.createLazyEvent<ECElementEvent>('globalout');
  @Output() chartContextMenu = this.createLazyEvent<ECElementEvent>('contextmenu');

  // echarts events
  @Output() chartHighlight = this.createLazyEvent<ECActionEvent>('highlight');
  @Output() chartDownplay = this.createLazyEvent<ECActionEvent>('downplay');
  @Output() chartSelectChanged = this.createLazyEvent<ECActionEvent>('selectchanged');
  @Output() chartLegendSelected = this.createLazyEvent<ECActionEvent>('legendselected');
  @Output() chartLegendUnselected = this.createLazyEvent<ECActionEvent>('legendunselected');
  @Output() chartLegendLegendSelectAll = this.createLazyEvent<ECActionEvent>('legendselectall');
  @Output() chartLegendLegendInverseSelect =
    this.createLazyEvent<ECActionEvent>('legendinverseselect');
  @Output() chartLegendScroll = this.createLazyEvent<ECActionEvent>('legendscroll');
  @Output() chartDataZoom = this.createLazyEvent<ECActionEvent>('datazoom');
  @Output() chartDataRangeSelected = this.createLazyEvent<ECActionEvent>('datarangeselected');
  @Output() chartGraphRoam = this.createLazyEvent<ECActionEvent>('graphroam');
  @Output() chartGeoRoam = this.createLazyEvent<ECActionEvent>('georoam');
  @Output() chartTreeRoam = this.createLazyEvent<ECActionEvent>('treeroam');
  @Output() chartTimelineChanged = this.createLazyEvent<ECActionEvent>('timelinechanged');
  @Output() chartTimelinePlayChanged = this.createLazyEvent<ECActionEvent>('timelineplaychanged');
  @Output() chartRestore = this.createLazyEvent<ECActionEvent>('restore');
  @Output() chartDataViewChanged = this.createLazyEvent<ECActionEvent>('dataviewchanged');
  @Output() chartMagicTypeChanged = this.createLazyEvent<ECActionEvent>('magictypechanged');
  @Output() chartGeoSelectChanged = this.createLazyEvent<ECActionEvent>('geoselectchanged');
  @Output() chartGeoSelected = this.createLazyEvent<ECActionEvent>('geoselected');
  @Output() chartGeoUnselected = this.createLazyEvent<ECActionEvent>('geounselected');
  @Output() chartAxisAreaSelected = this.createLazyEvent<ECActionEvent>('axisareaselected');
  @Output() chartBrush = this.createLazyEvent<ECActionEvent>('brush');
  @Output() chartBrushEnd = this.createLazyEvent<ECActionEvent>('brushend');
  @Output() chartBrushSelected = this.createLazyEvent<ECActionEvent>('brushselected');
  @Output() chartGlobalCursorTaken = this.createLazyEvent<ECActionEvent>('globalcursortaken');
  @Output() chartRendered = this.createLazyEvent<ECActionEvent>('rendered');
  @Output() chartFinished = this.createLazyEvent<ECActionEvent>('finished');

  public animationFrameID = null;
  private chart: ECharts;
  private chart$ = new ReplaySubject<ECharts>(1);
  private echarts: any;
  private resizeOb: ResizeObserver;
  private resize$ = new Subject<void>();
  private resizeSub: Subscription;
  private initChartTimer?: number;
  private changeFilter = new ChangeFilterV2();
  private loadingSub: Subscription;

  constructor(
    @Inject(NGX_ECHARTS_CONFIG) config: NgxEchartsConfig,
    private el: ElementRef,
    private ngZone: NgZone
  ) {
    this.echarts = config.echarts;
  }

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

    if (this.autoResize) {
      this.resizeOb = this.ngZone.runOutsideAngular(
        () =>
          new window.ResizeObserver(() => {
            this.animationFrameID = window.requestAnimationFrame(() => this.resize$.next());
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
        ? this.chart.showLoading(this.loadingType, this.loadingOpts)
        : this.chart.hideLoading();
    } else {
      this.loadingSub = this.chart$.subscribe(chart =>
        loading ? chart.showLoading(this.loadingType, this.loadingOpts) : chart.hideLoading()
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

      return load().then(({ init }) => init(dom, this.theme, this.initOpts));
    });
  }

  private async initChart() {
    await this.onOptionsChange(this.options);

    if (this.merge && this.chart) {
      this.setOption(this.merge);
    }
  }

  private async onOptionsChange(opt: any) {
    if (!opt) {
      return;
    }

    if (this.chart) {
      this.setOption(this.options, true);
    } else {
      this.chart = await this.createChart();
      this.chart$.next(this.chart);
      this.chartInit.emit(this.chart);
      this.setOption(this.options, true);
    }
  }

  // allows to lazily bind to only those events that are requested through the `@Output` by parent components
  // see https://stackoverflow.com/questions/51787972/optimal-reentering-the-ngzone-from-eventemitter-event for more info
  private createLazyEvent<T>(eventName: string): EventEmitter<T> {
    return this.chartInit.pipe(
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
