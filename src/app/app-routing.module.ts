import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  {
    path: 'welcome',
    loadChildren: () => import('./pages/welcome/welcome.module').then((m) => m.WelcomeModule),
  },
  {
    path: 'basic',
    loadChildren: () =>
      import('./pages/demo-basic/demo-basic.module').then((m) => m.DemoBasicModule),
  },
  {
    path: 'advanced',
    loadChildren: () =>
      import('./pages/demo-advanced/demo-advanced.module').then((m) => m.DemoAdvancedModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
