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
import ResizeObserver from 'resize-observer-polyfill';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ChangeFilter } from './change-filter';

export interface NgxEchartsConfig {
  echarts: any | (() => Promise<any>);
}

export const NGX_ECHARTS_CONFIG = new InjectionToken<NgxEchartsConfig>('NGX_ECHARTS_CONFIG');

@Directive({
  selector: 'echarts, [echarts]',
  exportAs: 'echarts',
})
export class NgxEchartsDirective implements OnChanges, OnDestroy, OnInit, AfterViewInit {
  @Input() options: any;
  @Input() theme: string;
  @Input() loading: boolean;
  @Input() initOpts: {
    devicePixelRatio?: number;
    renderer?: string;
    width?: number | string;
    height?: number | string;
  };
  @Input() merge: any;
  @Input() autoResize = true;
  @Input() loadingType = 'default';
  @Input() loadingOpts: object;

  // ngx-echarts events
  @Output() chartInit = new EventEmitter<any>();
  @Output() optionsError = new EventEmitter<Error>();

  // echarts mouse events
  @Output() chartClick = this.createLazyEvent('click');
  @Output() chartDblClick = this.createLazyEvent('dblclick');
  @Output() chartMouseDown = this.createLazyEvent('mousedown');
  @Output() chartMouseMove = this.createLazyEvent('mousemove');
  @Output() chartMouseUp = this.createLazyEvent('mouseup');
  @Output() chartMouseOver = this.createLazyEvent('mouseover');
  @Output() chartMouseOut = this.createLazyEvent('mouseout');
  @Output() chartGlobalOut = this.createLazyEvent('globalout');
  @Output() chartContextMenu = this.createLazyEvent('contextmenu');

  // echarts mouse events
  @Output() chartLegendSelectChanged = this.createLazyEvent('legendselectchanged');
  @Output() chartLegendSelected = this.createLazyEvent('legendselected');
  @Output() chartLegendUnselected = this.createLazyEvent('legendunselected');
  @Output() chartLegendScroll = this.createLazyEvent('legendscroll');
  @Output() chartDataZoom = this.createLazyEvent('datazoom');
  @Output() chartDataRangeSelected = this.createLazyEvent('datarangeselected');
  @Output() chartTimelineChanged = this.createLazyEvent('timelinechanged');
  @Output() chartTimelinePlayChanged = this.createLazyEvent('timelineplaychanged');
  @Output() chartRestore = this.createLazyEvent('restore');
  @Output() chartDataViewChanged = this.createLazyEvent('dataviewchanged');
  @Output() chartMagicTypeChanged = this.createLazyEvent('magictypechanged');
  @Output() chartPieSelectChanged = this.createLazyEvent('pieselectchanged');
  @Output() chartPieSelected = this.createLazyEvent('pieselected');
  @Output() chartPieUnselected = this.createLazyEvent('pieunselected');
  @Output() chartMapSelectChanged = this.createLazyEvent('mapselectchanged');
  @Output() chartMapSelected = this.createLazyEvent('mapselected');
  @Output() chartMapUnselected = this.createLazyEvent('mapunselected');
  @Output() chartAxisAreaSelected = this.createLazyEvent('axisareaselected');
  @Output() chartFocusNodeAdjacency = this.createLazyEvent('focusnodeadjacency');
  @Output() chartUnfocusNodeAdjacency = this.createLazyEvent('unfocusnodeadjacency');
  @Output() chartBrush = this.createLazyEvent('brush');
  @Output() chartBrushEnd = this.createLazyEvent('brushend');
  @Output() chartBrushSelected = this.createLazyEvent('brushselected');
  @Output() chartRendered = this.createLazyEvent('rendered');
  @Output() chartFinished = this.createLazyEvent('finished');

  public animationFrameID = null;
  private chart: any;
  private echarts: any;
  private resizeSub: ResizeObserver;

  constructor(
    @Inject(NGX_ECHARTS_CONFIG) config: NgxEchartsConfig,
    private el: ElementRef,
    private ngZone: NgZone,
  ) {
    this.echarts = config.echarts;
  }

  ngOnChanges(changes: SimpleChanges) {
    const filter = ChangeFilter.of(changes);
    filter.notFirstAndEmpty<any>('options').subscribe((opt) => this.onOptionsChange(opt));
    filter.notFirstAndEmpty<any>('merge').subscribe((opt) => this.setOption(opt));
    filter.has<boolean>('loading').subscribe((v) => this.toggleLoading(!!v));
    filter.notFirst<string>('theme').subscribe(() => this.refreshChart());
  }

  ngOnInit() {
    if (this.autoResize) {
      this.resizeSub = new ResizeObserver(() => {
        this.animationFrameID = window.requestAnimationFrame(() => this.resize());
      });
      this.resizeSub.observe(this.el.nativeElement);
    }
  }

  ngOnDestroy() {
    if (this.resizeSub) {
      this.resizeSub.unobserve(this.el.nativeElement);
      window.cancelAnimationFrame(this.animationFrameID);
    }
    this.dispose();
  }

  ngAfterViewInit() {
    setTimeout(() => this.initChart());
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
          new Observable((observer) => {
            chart.on(eventName, (data: T) => this.ngZone.run(() => observer.next(data)));
            return () => chart.off(eventName);
          }),
      ),
    ) as EventEmitter<T>;
  }
}
