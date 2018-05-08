import { Injectable } from '@angular/core';

declare var echarts: any;

/**
 * Provide an wrapper for global echarts
 * ```typescript
 * export class AppComponent implements onInit {
 *   constructor(private nes: NgxEchartsService) {}
 *
 *   ngOnInit() {
 *     // const points = ...;
 *     // const rect = ...;
 *
 *     // Get native global echarts object, then call native function
 *     const echarts = this.nes.echarts;
 *     const points = echarts.graphic.clipPointsByRect(points, rect);
 *
 *     // Or call wrapper function directly:
 *     const points = this.nes.graphic.clipPointsByRect(points, rect);
 *   }
 * }
 * ```
 */
@Injectable({
  providedIn: 'root'
})
export class NgxEchartsService {

  constructor() {}

  /**
   * Get global echarts object
   */
  get echarts(): any {
    return echarts;
  }

  /**
   * Wrapper for echarts.graphic
   */
  get graphic(): any {
    return this._checkEcharts() ? echarts.graphic : undefined;
  }

  /**
   * Wrapper for echarts.init
   */
  get init(): any {
    return this._checkEcharts() ? echarts.init : undefined;
  }

  /**
   * Wrapper for echarts.connect
   */
  get connect(): any {
    return this._checkEcharts() ? echarts.connect : undefined;
  }

  /**
   * Wrapper for echarts.disconnect
   */
  get disconnect(): any {
    return this._checkEcharts() ? echarts.disconnect : undefined;
  }

  /**
   * Wrapper for echarts.dispose
   */
  get dispose(): any {
    return this._checkEcharts() ? echarts.dispose : undefined;
  }

  /**
   * Wrapper for echarts.getInstanceByDom
   */
  get getInstanceByDom(): any {
    return this._checkEcharts() ? echarts.getInstanceByDom : undefined;
  }

  /**
   * Wrapper for echarts.registerMap
   */
  get registerMap(): any {
    return this._checkEcharts() ? echarts.registerMap : undefined;
  }

  /**
   * Wrapper for echarts.getMap
   */
  get getMap(): any {
    return this._checkEcharts() ? echarts.getMap : undefined;
  }

  /**
   * Wrapper for echarts.registerTheme
   */
  get registerTheme(): any {
    return this._checkEcharts() ? echarts.registerTheme : undefined;
  }

  private _checkEcharts() {
    if (echarts) {
      return true;
    } else {
      console.error('[ngx-echarts] global ECharts not loaded');
      return false;
    }
  }
}
