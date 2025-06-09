import { Component, Input, inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { APP_MENUS, AppMenu } from '../../menus';

interface AppMenuEx extends AppMenu {
  pathRegex: RegExp;
}

@Component({
  selector: 'app-menu',
  templateUrl: './app-menu.component.html',
  styleUrls: ['./app-menu.component.scss'],
  standalone: false,
})
export class AppMenuComponent {
  private router = inject(Router);

  @Input() isCollapsed: boolean;
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
