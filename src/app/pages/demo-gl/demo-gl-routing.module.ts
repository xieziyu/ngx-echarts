import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GlBar3dComponent } from './gl-bar3d/gl-bar3d.component';

const routes: Routes = [
  { path: '', redirectTo: 'bar3d', pathMatch: 'full' },
  { path: 'bar3d', component: GlBar3dComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemoGlRoutingModule {}
