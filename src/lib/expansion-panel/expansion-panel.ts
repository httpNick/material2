import {
  Component,
  Directive,
  OnDestroy,
  ViewEncapsulation
} from '@angular/core';

@Directive({
  selector: 'md-expansion-panel-list-content, mat-expansion-panel-list-content',
  host: {
    '[class.mat-expansion-panel-list-content]': 'true'
  }
})
export class MdExpansionPanelListContent {}

@Component({
  moduleId: module.id,
  selector: 'md-expansion-panel, mat-expansion-panel',
  templateUrl: 'expansion-panel.html',
  styleUrls: ['expansion-panel.css'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.mat-expansion-panel]': 'true'
  }
})
export class MdExpansionPanel implements OnDestroy {

  constructor() {}

  ngOnDestroy() {}

}