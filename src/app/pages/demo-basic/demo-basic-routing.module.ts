import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicComponent } from './basic/basic.component';

const routes: Routes = [
  { path: '', redirectTo: 'basic-usage', pathMatch: 'full' },
  { path: 'basic-usage', component: BasicComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemoBasicRoutingModule {}
