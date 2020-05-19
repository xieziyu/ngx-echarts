import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdvancedComponent } from './advanced/advanced.component';

const routes: Routes = [
  { path: '', redirectTo: 'advanced-usage', pathMatch: 'full' },
  { path: 'advanced-usage', component: AdvancedComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemoAdvancedRoutingModule {}
