import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NzIconDirective } from 'ng-zorro-antd/icon';
import {
  NzContentComponent,
  NzHeaderComponent,
  NzLayoutComponent,
  NzSiderComponent,
} from 'ng-zorro-antd/layout';
import { AppMenuComponent } from './layout/app-menu/app-menu.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    NzLayoutComponent,
    NzSiderComponent,
    AppMenuComponent,
    NzHeaderComponent,
    NzIconDirective,
    NzContentComponent,
    RouterOutlet,
  ],
})
export class AppComponent {
  isCollapsed = false;
}
