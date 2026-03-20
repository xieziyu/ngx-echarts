import { NgModule } from '@angular/core';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome.component';

@NgModule({
  imports: [WelcomeRoutingModule, WelcomeComponent],
  exports: [WelcomeComponent],
})
export class WelcomeModule {}
