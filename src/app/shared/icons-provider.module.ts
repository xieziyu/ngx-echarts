import { NgModule } from '@angular/core';
import { NZ_ICONS } from 'ng-zorro-antd/icon';

import {
  MenuFoldOutline,
  MenuUnfoldOutline,
  FormOutline,
  DashboardOutline,
} from '@ant-design/icons-angular/icons';

const icons = [MenuFoldOutline, MenuUnfoldOutline, DashboardOutline, FormOutline];

@NgModule({
  providers: [{ provide: NZ_ICONS, useValue: icons }],
})
export class IconsProviderModule {}
