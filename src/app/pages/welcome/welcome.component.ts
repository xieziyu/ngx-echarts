import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MarkdownComponent } from 'ngx-markdown';
import { GithubIconComponent } from '../../shared/github-icon/github-icon.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  imports: [
    RouterLink,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MarkdownComponent,
    GithubIconComponent,
  ],
})
export class WelcomeComponent {
  copied = signal(false);

  copyInstallCmd() {
    navigator.clipboard.writeText('npm install ngx-echarts echarts').then(() => {
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 2000);
    });
  }

  scriptText = `
  ## Install
  \`\`\`bash
  # npm
  npm install echarts ngx-echarts
  # yarn
  yarn add echarts ngx-echarts
  # pnpm
  pnpm add echarts ngx-echarts
  \`\`\`
`;
  importText = `
  ## Standalone Directive
  \`\`\`typescript
  import { NgxEchartsDirective, provideEchartsCore } from 'ngx-echarts';
  import * as echarts from 'echarts/core';
  import { BarChart } from 'echarts/charts';
  import { GridComponent } from 'echarts/components';
  import { CanvasRenderer } from 'echarts/renderers';
  echarts.use([BarChart, GridComponent, CanvasRenderer]);

  @Component({
    selector: 'app-root',
    imports: [NgxEchartsDirective],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    providers: [
      provideEchartsCore({ echarts }),
    ]
  })
  export class AppComponent {}
  \`\`\`
`;
  importNgModuleText = `
  ## NgModule
  \`\`\`typescript
  import { NgxEchartsModule } from 'ngx-echarts';
  import * as echarts from 'echarts/core';
  import { BarChart } from 'echarts/charts';
  import { GridComponent } from 'echarts/components';
  import { CanvasRenderer } from 'echarts/renderers';
  echarts.use([BarChart, GridComponent, CanvasRenderer]);

  @NgModule({
    imports: [
      NgxEchartsModule.forRoot({ echarts }),
    ],
  })
  export class AppModule {}
  \`\`\`
`;
}
