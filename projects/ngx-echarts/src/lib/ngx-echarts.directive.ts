import {
  Directive, ElementRef, Renderer, Input, Output, HostListener, EventEmitter,
  OnChanges, OnDestroy, SimpleChanges, NgZone, DoCheck, AfterViewInit
} from '@angular/core';
import { ChangeFilter } from './change-filter';
import { Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { init, ECharts, EChartOption } from 'echarts';
import { EChartEvents } from './echart-events';

@Directive({
  selector: 'echarts, [echarts]',
})
export class NgxEchartsDirective implements OnChanges, OnDestroy, DoCheck, AfterViewInit {
  @Input() options: EChartOption;
  @Input() theme: string;
  @Input() loading: boolean;
  @Input() initOpts: {
    devicePixelRatio?: number
    renderer?: string
    width?: number | string
    height?: number | string
  };
  @Input() merge: EChartOption;
  @Input() autoResize = true;
  @Input() loadingType = 'default';
  @Input() loadingOpts: object;

  /**
   * Whether to register event handlers on echartInstance. Default is true.
   * Use it to avoid unwanted change detection, if you want to optimize the performance.
   */
  @Input() detectEventChanges = true;

  // chart events:
  @Output() chartInit = new EventEmitter<ECharts>();
  @Output() chartClick = new EventEmitter<any>();
  @Output() chartDblClick = new EventEmitter<any>();
  @Output() chartMouseDown = new EventEmitter<any>();
  @Output() chartMouseUp = new EventEmitter<any>();
  @Output() chartMouseOver = new EventEmitter<any>();
  @Output() chartMouseOut = new EventEmitter<any>();
  @Output() chartGlobalOut = new EventEmitter<any>();
  @Output() chartContextMenu = new EventEmitter<any>();
  @Output() chartDataZoom = new EventEmitter<any>();

  private _chart: ECharts;
  private currentOffsetWidth = 0;
  private currentOffsetHeight = 0;
  private currentWindowWidth: number;
  private _resize$ = new Subject<void>();
  private _resizeSub: Subscription;

  constructor(private el: ElementRef, private _ngZone: NgZone) { }

  private createChart() {
    this.currentWindowWidth = window.innerWidth;
    this.currentOffsetWidth = this.el.nativeElement.offsetWidth;
    this.currentOffsetHeight = this.el.nativeElement.offsetHeight;
    const dom = this.el.nativeElement;

    if (window && window.getComputedStyle) {
      const prop = window.getComputedStyle(dom, null).getPropertyValue('height');
      if ((!prop || prop === '0px') &&
        (!dom.style.height || dom.style.height === '0px')) {
        dom.style.height = '400px';
      }
    }

    return this._ngZone.runOutsideAngular(() => init(dom, this.theme || undefined, this.initOpts || undefined));
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: Event) {
    const target = event.target as Window;

    if (this.autoResize && target.innerWidth !== this.currentWindowWidth) {
      this.currentWindowWidth = target.innerWidth;
      this.currentOffsetWidth = this.el.nativeElement.offsetWidth;
      this.currentOffsetHeight = this.el.nativeElement.offsetHeight;

      this._resize$.next();
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    const filter = ChangeFilter.of(changes);
    filter.notFirstAndEmpty<any>('options').subscribe(opt => this.onOptionsChange(opt));
    filter.notFirstAndEmpty<any>('merge').subscribe(opt => this.setOption(opt));
    filter.has<boolean>('loading').subscribe(v => this.toggleLoading(!!v));
    filter.notFirst<boolean>('detectEventChanges').subscribe(v => this.toggleEventDetectors(!!v));
    filter.notFirst<string>('theme').subscribe(() => this.refreshChart());
  }

  ngOnDestroy() {
    if (this._resizeSub) {
      this._resizeSub.unsubscribe();
      this._resizeSub = null;
    }

    if (this._chart) {
      this._chart.dispose();
      this._chart = null;
    }
  }

  ngDoCheck() {
    // No heavy work in DoCheck!
    if (this._chart && this.autoResize) {
      const offsetWidth = this.el.nativeElement.offsetWidth;
      const offsetHeight = this.el.nativeElement.offsetHeight;

      if (this.currentOffsetWidth !== offsetWidth || this.currentOffsetHeight !== offsetHeight) {
        this.currentOffsetWidth = offsetWidth;
        this.currentOffsetHeight = offsetHeight;
        this._resize$.next();
      }
    }
  }

  ngAfterViewInit() {
    setTimeout(() => this.initChart());
  }

  private initChart() {
    this.onOptionsChange(this.options);

    if (this.merge && this._chart) {
      this.setOption(this.merge);
    }
  }

  private onOptionsChange(opt: EChartOption) {
    if (opt) {
      if (!this._chart) {
        this._chart = this.createChart();

        // subscribe to _resize$ and debounced
        this._resizeSub = this._resize$.pipe(debounceTime(50)).subscribe(() => {
          if (this._chart) {
            this._chart.resize();
          }
        });

        // output echart instance:
        this.chartInit.emit(this._chart);

        // register events:
        if (this.detectEventChanges) {
          this.registerEvents();
        }
      }

      this._chart.setOption(this.options, true);
    }
  }

  private registerEvents() {
    if (this._chart) {
      const events = EChartEvents.All;
      for (let i = 0, len = events.length; i < len; i++) {
        this._chart.on(events[i], this.eventHandler, this);
      }
    }
  }

  private unregisterEvents() {
    if (this._chart) {
      const events = EChartEvents.All;
      for (let i = 0, len = events.length; i < len; i++) {
        this._chart.off(events[i], this.eventHandler);
      }
    }
  }

  clear() {
    if (this._chart) {
      this._chart.clear();
    }
  }

  toggleLoading(loading: boolean) {
    if (this._chart) {
      loading ? this._chart.showLoading(this.loadingType, this.loadingOpts) : this._chart.hideLoading();
    }
  }

  setOption(option: any, opts?: any) {
    if (this._chart) {
      this._chart.setOption(option, opts);
    }
  }

  private eventHandler(event) {
    switch (event.type) {
      case EChartEvents.Click:
        this._ngZone.run(() => this.chartClick.emit(event));
        break;
      case EChartEvents.DblClick:
        this._ngZone.run(() => this.chartDblClick.emit(event));
        break;
      case EChartEvents.MouseDown:
        this._ngZone.run(() => this.chartMouseDown.emit(event));
        break;
      case EChartEvents.MouseUp:
        this._ngZone.run(() => this.chartMouseUp.emit(event));
        break;
      case EChartEvents.MouseOver:
        this._ngZone.run(() => this.chartMouseOver.emit(event));
        break;
      case EChartEvents.MouseOut:
        this._ngZone.run(() => this.chartMouseOut.emit(event));
        break;
      case EChartEvents.GlobalOut:
        this._ngZone.run(() => this.chartGlobalOut.emit(event));
        break;
      case EChartEvents.ContextMenu:
        this._ngZone.run(() => this.chartContextMenu.emit(event));
        break;
      case EChartEvents.DataZoom:
        this._ngZone.run(() => this.chartDataZoom.emit(event));
        break;
    }
  }

  private toggleEventDetectors(detect: boolean) {
    if (this._chart) {
      detect ? this.registerEvents() : this.unregisterEvents();
    }
  }

  private refreshChart() {
    this.ngOnDestroy();
    this.initChart();
  }
}
