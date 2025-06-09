import { Component, inject, input } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { NzMenuDirective, NzMenuItemComponent, NzSubMenuComponent } from 'ng-zorro-antd/menu';
import { filter } from 'rxjs/operators';
import { APP_MENUS, AppMenu } from '../../menus';

import { NzIconDirective } from 'ng-zorro-antd/icon';

interface AppMenuEx extends AppMenu {
  pathRegex: RegExp;
}

@Component({
  selector: 'app-menu',
  templateUrl: './app-menu.component.html',
  styleUrls: ['./app-menu.component.scss'],
  imports: [
    NzMenuDirective,
    NzMenuItemComponent,
    RouterLink,
    RouterLinkActive,
    NzIconDirective,
    NzSubMenuComponent,
  ],
})
export class AppMenuComponent {
  private router = inject(Router);

  readonly isCollapsed = input<boolean>(undefined);
  menus: AppMenuEx[];
  currentUrl: string;

  constructor() {
    const router = this.router;

    router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe((e: NavigationEnd) => {
      this.currentUrl = e.url;
    });
    this.menus = APP_MENUS.map(m => ({
      path: m.path,
      pathRegex: new RegExp(m.path),
      text: m.text,
      icon: m.icon,
      iconTheme: m.iconTheme,
      submenus: m.submenus ? m.submenus.concat() : undefined,
    }));
  }
}
