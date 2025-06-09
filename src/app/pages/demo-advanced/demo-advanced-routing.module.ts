import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdvancedComponent } from './advanced/advanced.component';

export const DEMO_ADVANCED_MODULE: Routes = [
  { path: '', redirectTo: 'advanced-usage', pathMatch: 'full' },
  { path: 'advanced-usage', component: AdvancedComponent },
];
