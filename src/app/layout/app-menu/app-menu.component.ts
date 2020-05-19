import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AppMenu, APP_MENUS } from '../../menus';

interface AppMenuEx extends AppMenu {
  pathRegex: RegExp;
}

@Component({
  selector: 'app-menu',
  templateUrl: './app-menu.component.html',
  styleUrls: ['./app-menu.component.scss'],
})
export class AppMenuComponent implements OnInit {
  @Input() isCollapsed: boolean;
  menus: AppMenuEx[];
  currentUrl: string;

  constructor(private router: Router) {
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

  ngOnInit() {}
}
