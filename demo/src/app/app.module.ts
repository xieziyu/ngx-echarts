import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { FormsModule }          from '@angular/forms';
import { HttpModule }           from '@angular/http';

import { CodeblockModule }      from 'ng-prism';
import { TabsModule }           from 'ngx-bootstrap';
import { AngularEchartsModule } from 'ngx-echarts';

import { AppComponent }         from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CodeblockModule,
    TabsModule.forRoot(),
    AngularEchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
