import { Routes } from '@angular/router';
import { BasicComponent } from './basic/basic.component';

export const DEMO_BASIC_ROUTES: Routes = [
  { path: '', redirectTo: 'basic-usage', pathMatch: 'full' },
  { path: 'basic-usage', component: BasicComponent },
];
