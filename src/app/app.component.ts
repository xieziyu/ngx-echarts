import { Component } from '@angular/core';
import { AppMenuComponent } from './layout/app-menu/app-menu.component';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIconAnchor } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [AppMenuComponent, MatIcon, MatToolbar, RouterOutlet, MatIconAnchor],
})
export class AppComponent {
  isCollapsed = false;
}
