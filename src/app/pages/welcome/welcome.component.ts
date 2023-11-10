import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
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
  import { NgxEchartsDirective, provideEcharts } from 'ngx-echarts';

  @Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, NgxEchartsDirective],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [
      provideEcharts(),
    ]
  })
  export class AppComponent {}
  \`\`\`
`;
  importNgModuleText = `
  ## Import NgModule
  \`\`\`typescript
  import { NgxEchartsModule } from 'ngx-echarts';
  @NgModule({
    imports: [
      ...,
      NgxEchartsModule.forRoot({
        echarts: () => import('echarts')
      })
    ],
  })
  export class AppModule {}
  \`\`\`
`;
}
