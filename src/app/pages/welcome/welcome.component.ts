import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  standalone: false,
})
export class WelcomeComponent {
  scriptText = `
  ## Install
  \`\`\`bash
  # if you use npm
  npm install echarts --save
  npm install ngx-echarts --save
  # or if you use yarn
  yarn add echarts ngx-echarts
  \`\`\`
`;
  importText = `
  ## Import Standalone Directive
  \`\`\`typescript
  import { NgxEchartsDirective, provideEchartsCore } from 'ngx-echarts';
  import * as echarts from 'echarts/core';
  import { BarChart } from 'echarts/charts';
  import { GridComponent } from 'echarts/components';
  import { CanvasRenderer } from 'echarts/renderers';
  echarts.use([BarChart, GridComponent, CanvasRenderer]);

  @Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, NgxEchartsDirective],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [
      provideEchartsCore({ echarts }),
    ]
  })
  export class AppComponent {}
  \`\`\`
`;
  importNgModuleText = `
  ## Import NgModule
  \`\`\`typescript
  import { NgxEchartsModule } from 'ngx-echarts';
  import * as echarts from 'echarts/core';
  import { BarChart } from 'echarts/charts';
  import { GridComponent } from 'echarts/components';
  import { CanvasRenderer } from 'echarts/renderers';
  echarts.use([BarChart, GridComponent, CanvasRenderer]);

  @NgModule({
    imports: [
      ...,
      NgxEchartsModule.forRoot({ echarts })
    ],
  })
  export class AppModule {}
  \`\`\`
`;
}
