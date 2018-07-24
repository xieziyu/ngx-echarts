import {
  Directive, ElementRef, Renderer, Input, Output, HostListener, EventEmitter,
  OnChanges, OnDestroy, SimpleChanges, NgZone, DoCheck
} from '@angular/core';
import { ChangeFilter } from '../util/change-filter';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import { debounceTime } from 'rxjs/operators';

declare var echarts: any;

@Directive({
  selector: 'echarts, [echarts]'
})
export class NgxEchartsDirective implements OnChanges, OnDestroy, DoCheck {
  @Input() options: any;
  @Input() theme: string;
  @Input() loading: boolean;
  @Input() initOpts: any;
  @Input() merge: any;
  @Input() autoResize = true;
  @Input() loadingType = 'default';
  @Input() loadingOpts: any;

  // chart events:
  @Output() chartInit = new EventEmitter<any>();
  @Output() chartClick = new EventEmitter<any>();
  @Output() chartDblClick = new EventEmitter<any>();
  @Output() chartMouseDown = new EventEmitter<any>();
  @Output() chartMouseUp = new EventEmitter<any>();
  @Output() chartMouseOver = new EventEmitter<any>();
  @Output() chartMouseOut = new EventEmitter<any>();
  @Output() chartGlobalOut = new EventEmitter<any>();
  @Output() chartContextMenu = new EventEmitter<any>();
  @Output() chartDataZoom = new EventEmitter<any>();

  private _chart: any = null;
  private currentOffsetWidth = 0;
  private currentOffsetHeight = 0;
  private currentWindowWidth: any = null;
  private _resize$ = new Subject<any>();
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

    return this._ngZone.runOutsideAngular(() => echarts.init(dom, this.theme || undefined, this.initOpts || undefined));
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: any) {
    if (this.autoResize && event.target.innerWidth !== this.currentWindowWidth) {
      this.currentWindowWidth = event.target.innerWidth;
      this.currentOffsetWidth = this.el.nativeElement.offsetWidth;
      this.currentOffsetHeight = this.el.nativeElement.offsetHeight;

      this._resize$.next();
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    const filter = ChangeFilter.of(changes);
    filter.notEmpty<any>('options').subscribe(opt => this.onOptionsChange(opt));
    filter.notEmpty<any>('merge').subscribe(opt => this.setOption(opt));
    filter.has<boolean>('loading').subscribe(v => this.toggleLoading(!!v));
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

  private onOptionsChange(opt: any) {
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
        this.registerEvents(this._chart);
      }

      this._chart.setOption(this.options, true);

      /**
       * Bugfix: Line chart is not animated on init
       * https://github.com/xieziyu/ngx-echarts/issues/102
       */
      // this._chart.resize();
    }
  }

  private registerEvents(_chart: any) {
    if (_chart) {
      // register mouse events:
      _chart.on('click', e => this._ngZone.run(() => this.chartClick.emit(e)));
      _chart.on('dblClick', e => this._ngZone.run(() => this.chartDblClick.emit(e)));
      _chart.on('mousedown', e => this._ngZone.run(() => this.chartMouseDown.emit(e)));
      _chart.on('mouseup', e => this._ngZone.run(() => this.chartMouseUp.emit(e)));
      _chart.on('mouseover', e => this._ngZone.run(() => this.chartMouseOver.emit(e)));
      _chart.on('mouseout', e => this._ngZone.run(() => this.chartMouseOut.emit(e)));
      _chart.on('globalout', e => this._ngZone.run(() => this.chartGlobalOut.emit(e)));
      _chart.on('contextmenu', e => this._ngZone.run(() => this.chartContextMenu.emit(e)));
      // other events;
      _chart.on('datazoom', e => this._ngZone.run(() => this.chartDataZoom.emit(e)));
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
}
