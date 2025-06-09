import { Component, inject, input } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { filter } from 'rxjs/operators';
import { APP_MENUS, AppMenu } from '../../menus';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButton } from '@angular/material/button';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';

interface AppMenuEx extends AppMenu {
  pathRegex: RegExp;
}

@Component({
  selector: 'app-menu',
  templateUrl: './app-menu.component.html',
  styleUrls: ['./app-menu.component.scss'],
  imports: [
    MatButton,
    MatExpansionModule,
    MatIconModule,
    MatListModule,
    MatMenu,
    MatMenuItem,
    MatMenuTrigger,
    RouterLink,
    RouterLinkActive,
  ],
})
export class AppMenuComponent {
  private readonly router = inject(Router);

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
      submenus: m.submenus ? m.submenus.concat() : undefined,
    }));
  }
}
