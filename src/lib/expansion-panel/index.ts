import {  ModuleWithProviders, NgModule} from '@angular/core';

import {
  MdExpansionPanel,
  MdExpansionPanelListContent,
  MdExpansionPanelSecondaryContent
} from './expansion-panel';
import { CompatibilityModule } from '../core';

@NgModule({
  imports: [CompatibilityModule],
  exports: [
    CompatibilityModule,
    MdExpansionPanel,
    MdExpansionPanelListContent,
    MdExpansionPanelSecondaryContent
  ],
  declarations: [
    MdExpansionPanel,
    MdExpansionPanelListContent,
    MdExpansionPanelSecondaryContent
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