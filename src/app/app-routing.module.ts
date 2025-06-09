import { Routes } from '@angular/router';
import { DEMO_BASIC_ROUTES } from './pages/demo-basic/demo-basic-routing.module';
import { DEMO_ADVANCED_MODULE } from './pages/demo-advanced/demo-advanced-routing.module';
import { DEMO_SERIES_ROUTES } from './pages/demo-series/demo-series-routing.module';

export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  {
    path: 'welcome',
    loadComponent: () => import('./pages/welcome/welcome.component').then(c => c.WelcomeComponent),
  },
  {
    path: 'basic',
    children: DEMO_BASIC_ROUTES,
  },
  {
    path: 'advanced',
    children: DEMO_ADVANCED_MODULE,
  },
  {
    path: 'series',
    children: DEMO_SERIES_ROUTES,
  },
];
