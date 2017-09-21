import { BrowserModule } from '@angular/platform-browser';
import {NgModule, SystemJsNgModuleLoader} from '@angular/core';
import {provideRoutes} from '@angular/router';

import { AppComponent } from './app.component';
import {TestModule} from './test/test.module';
import {ViewHostDirective} from './view-host.directive';

@NgModule({
  declarations: [
    AppComponent,
    ViewHostDirective
  ],
  imports: [
    BrowserModule,
    TestModule
  ],
  providers: [
    SystemJsNgModuleLoader,
    provideRoutes([
      { loadChildren: 'app/test/test.module#TestModule' }
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
