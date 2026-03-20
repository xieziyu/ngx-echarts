import { Component, inject } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { GithubIconComponent } from './shared/github-icon/github-icon.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { APP_MENUS } from './menus';
import { ThemeService } from './services/theme.service';
import { filter, map } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    GithubIconComponent,
  ],
})
export class AppComponent {
  readonly themeService = inject(ThemeService);
  private readonly router = inject(Router);
  menus = APP_MENUS;
  sidenavOpened = false;
  currentYear = new Date().getFullYear();

  seriesActive = toSignal(
    this.router.events.pipe(
      filter((e) => e instanceof NavigationEnd),
      map((e) => (e as NavigationEnd).urlAfterRedirects.startsWith('/series'))
    ),
    { initialValue: false }
  );

  get topLevelMenus() {
    return this.menus.filter((m) => !m.submenus);
  }

  get seriesMenu() {
    return this.menus.find((m) => m.submenus);
  }
}
