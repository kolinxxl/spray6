import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Spray6SharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [Spray6SharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [Spray6SharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Spray6SharedModule {
  static forRoot() {
    return {
      ngModule: Spray6SharedModule
    };
  }
}
