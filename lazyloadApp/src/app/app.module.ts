import { BrowserModule } from '@angular/platform-browser';
import {NgModule, SystemJsNgModuleLoader} from '@angular/core';
import {provideRoutes} from '@angular/router';

import { AppComponent } from './app.component';
import {TestModule} from './test/test.module';
import {ViewHostDirective} from './view-host.directive';

import {SampleModule} from 'lazyloadLib';


@NgModule({
  declarations: [
    AppComponent,
    ViewHostDirective
  ],
  imports: [
    BrowserModule,
    TestModule,
    SampleModule.forRoot()
  ],
  providers: [
    SystemJsNgModuleLoader,
    provideRoutes([
      { loadChildren: 'lazyloadLib#SampleModule' }
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
