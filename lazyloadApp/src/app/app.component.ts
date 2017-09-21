import {
  ChangeDetectorRef,
  Component,
  Injector,
  NgModuleFactory,
  SystemJsNgModuleLoader,
  ViewChild
} from '@angular/core';

import {ViewHostDirective} from './view-host.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  @ViewChild(ViewHostDirective) viewHost: ViewHostDirective;

  constructor(private cdRef: ChangeDetectorRef,
              private loader: SystemJsNgModuleLoader,
              private inj: Injector) { }

  loadTest() {
    const viewContainerRef = this.viewHost.viewContainerRef;
    viewContainerRef.clear();

    this.loader.load('lazyloadLib#SampleModule').then((moduleFactory: NgModuleFactory<any>) => {
      const entryComponent = (<any>moduleFactory.moduleType).entry;
      const moduleRef = moduleFactory.create(this.inj);

      const compFactory = moduleRef.componentFactoryResolver.resolveComponentFactory(entryComponent);
      viewContainerRef.createComponent(compFactory);
      this.cdRef.detectChanges();
    });
  }
}
