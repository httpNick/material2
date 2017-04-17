import {ModuleWithProviders, NgModule} from '@angular/core';

import {
  MdExpansionPanel,
  MdExpansionPanelListContent,
  MdExpansionPanelSubListContent,
  MdExpansionPanelSecondaryContent,
  MdExpansionPanelExpansionContent,
} from './expansion-panel';
import {CompatibilityModule} from '../core';
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    CompatibilityModule,
    CommonModule
  ],
  exports: [
    CompatibilityModule,
    MdExpansionPanel,
    MdExpansionPanelListContent,
    MdExpansionPanelSubListContent,
    MdExpansionPanelSecondaryContent,
    MdExpansionPanelExpansionContent,
  ],
  declarations: [
    MdExpansionPanel,
    MdExpansionPanelListContent,
    MdExpansionPanelSubListContent,
    MdExpansionPanelSecondaryContent,
    MdExpansionPanelExpansionContent,
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