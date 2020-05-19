import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  template: `
  <ng-template ngFor let-breadcrumb [ngForOf]="breadcrumbs" let-last = last>
    <li class="breadcrumb-item"
        *ngIf="breadcrumb.label.title"
        [ngClass]="{active: last}">
      <a *ngIf="!last && breadcrumb.label.title&&breadcrumb.url.substring(breadcrumb.url.length-1) == '/'"
        [routerLink]="breadcrumb.url">{{breadcrumb.label.title}}</a>
      <span *ngIf="last || breadcrumb.label.title&&breadcrumb.url.substring(breadcrumb.url.length-1) != '/'"
        >{{breadcrumb.label.title}}</span>
    </li>
  </ng-template>`
})
export class AppBreadcrumbsComponent {
  breadcrumbs: Array<Object>;
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event) => {
      this.breadcrumbs = [];
      let currentRoute = this.route.root,
      url = '';
      do {
        const childrenRoutes = currentRoute.children;
        currentRoute = null;
        // tslint:disable-next-line:no-shadowed-variable
        childrenRoutes.forEach(route => {
          if (route.outlet === 'primary') {
            const routeSnapshot = route.snapshot;
            url += '/' + routeSnapshot.url.map(segment => segment.path).join('/');
            this.breadcrumbs.push({
              label: route.snapshot.data,
              url:   url
            });
            currentRoute = route;
          }
        });
      } while (currentRoute);
    });
  }
}
