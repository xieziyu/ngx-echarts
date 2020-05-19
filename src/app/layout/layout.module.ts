import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AppMenuComponent } from './app-menu/app-menu.component';

@NgModule({
  declarations: [AppMenuComponent],
  imports: [CommonModule, SharedModule, RouterModule],
  exports: [AppMenuComponent],
})
export class LayoutModule {}
