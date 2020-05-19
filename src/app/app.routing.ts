import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import {
  FullLayoutComponent,
  SimpleLayoutComponent
} from './containers';

import { HomeComponent } from './views/home/home.component';
import { ChangelogsComponent } from './views/changelogs/changelogs.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: '',
    component: FullLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'changelogs',
        component: ChangelogsComponent,
        data: { title: 'CHANGELOG' }
      },
      {
        path: 'usage',
        loadChildren: () => import('./views/usage/usage.module').then(m => m.UsageModule),
        data: { title: 'Usage' }
      },
      {
        path: 'demo',
        loadChildren: () => import('./views/demo/demo.module').then(m => m.DemoModule),
        data: { title: 'Demo' }
      },
    ]
  },
  {
    path: 'pages',
    component: SimpleLayoutComponent,
    data: {
      title: 'Pages'
    },
    children: [
      {
        path: '',
        loadChildren: () => import('./views/pages/pages.module').then(m => m.PagesModule),
      }
    ]
  },

  { path: '**', redirectTo: '/pages/404' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
