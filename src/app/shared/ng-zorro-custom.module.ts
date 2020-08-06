import { NgModule } from '@angular/core';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';

const NG_ZORRO_MODULES = [
  NzIconModule,
  NzMenuModule,
  NzGridModule,
  NzBreadCrumbModule,
  NzLayoutModule,
  NzButtonModule,
  NzMessageModule,
  NzTabsModule,
  NzCardModule,
  NzDividerModule,
  NzPageHeaderModule
];

@NgModule({
  imports: [...NG_ZORRO_MODULES],
  exports: [...NG_ZORRO_MODULES],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
})
export class NgZorroCustomModule {}
