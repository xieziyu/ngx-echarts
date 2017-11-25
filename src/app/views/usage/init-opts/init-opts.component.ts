import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-init-opts',
  templateUrl: './init-opts.component.html',
  styleUrls: ['./init-opts.component.scss']
})
export class InitOptsComponent implements OnInit {
  demo_html = `\
<!-- <echarts></echarts> has no height. But We can define it in [initOpts] -->
<echarts [initOpts]="initOpts" [options]="options"></echarts>
`;

  demo_ts = `\
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-init-opts',
  templateUrl: './init-opts.component.html',
  styleUrls: ['./init-opts.component.scss']
})
export class InitOptsComponent implements OnInit {
  initOpts = {
    renderer: 'svg',
    width: 300,
    height: 300
  };

  options = {
    color: ['#3398DB'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisTick: {
          alignWithLabel: true
        }
      }
    ],
    yAxis: [{
      type: 'value'
    }],
    series: [{
      name: 'Counters',
      type: 'bar',
      barWidth: '60%',
      data: [10, 52, 200, 334, 390, 330, 220]
    }]
  };

  constructor() { }

  ngOnInit() {
  }

}`;

  options = {
    color: ['#3398DB'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisTick: {
          alignWithLabel: true
        }
      }
    ],
    yAxis: [{
      type: 'value'
    }],
    series: [{
      name: 'Counters',
      type: 'bar',
      barWidth: '60%',
      data: [10, 52, 200, 334, 390, 330, 220]
    }]
  };

  initOpts = {
    renderer: 'svg',
    width: 300,
    height: 300
  };

  constructor() { }

  ngOnInit() {
  }

}
