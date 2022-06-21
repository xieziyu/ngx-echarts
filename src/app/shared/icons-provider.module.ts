import { NgModule } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';

import {
  MenuFoldOutline,
  MenuUnfoldOutline,
  FormOutline,
  DashboardOutline,
} from '@ant-design/icons-angular/icons';

const icons = [MenuFoldOutline, MenuUnfoldOutline, DashboardOutline, FormOutline];

@NgModule({
  imports: [
    NzIconModule.forRoot(icons)
  ],
  exports: [NzIconModule],
})
export class IconsProviderModule { }
