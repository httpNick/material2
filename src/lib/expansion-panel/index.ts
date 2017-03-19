import {  ModuleWithProviders, NgModule} from '@angular/core';

import {
  MdExpansionPanel,
  MdExpansionPanelListContent
} from './expansion-panel';
import { CompatibilityModule } from '../core';

@NgModule({
  imports: [CompatibilityModule],
  exports: [
    CompatibilityModule,
    MdExpansionPanel,
    MdExpansionPanelListContent
  ],
  declarations: [
    MdExpansionPanel, MdExpansionPanelListContent
  ],
})
export class MdExpansionPanelModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MdExpansionPanelModule,
      providers: []
    };
  }
}

export * from './expansion-panel';