import {
  Component,
  Directive,
  OnDestroy,
  ViewEncapsulation, Input, Output, EventEmitter
} from '@angular/core';
import {iconRotate, contentExpand, panelMarginOut} from "./expansion-panel-animations";

@Directive({
  selector: 'md-expansion-panel-list-content, mat-expansion-panel-list-content',
  host: {
    '[class.mat-expansion-panel-list-content]': 'true'
  }
})
export class MdExpansionPanelListContent {}

@Directive({
  selector: 'md-expansion-panel-sub-list-content, mat-expansion-panel-sub-list-content',
  host: {
    '[class.mat-expansion-panel-sub-list-content]': 'true'
  }
})
export class MdExpansionPanelSubListContent {}

@Directive({
  selector: 'md-expansion-panel-secondary-content, mat-expansion-panel-secondary-content',
  host: {
    '[class.mat-expansion-panel-secondary-content]': 'true'
  }
})
export class MdExpansionPanelSecondaryContent {}

@Directive({
  selector: 'md-expansion-panel-expansion-content, mat-expansion-panel-expansion-content',
  host: {
    '[class.mat-expansion-panel-expansion-content]': 'true',
  },
})
export class MdExpansionPanelExpansionContent {}

@Component({
  moduleId: module.id,
  selector: 'md-expansion-panel, mat-expansion-panel',
  templateUrl: 'expansion-panel.html',
  styleUrls: ['expansion-panel.css'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    contentExpand,
    iconRotate,
    panelMarginOut
  ],
  host: {
    '[class.mat-expansion-panel]': 'true',
    '[@panelMarginOut]': 'openStateValue'
  }
})
export class MdExpansionPanel implements OnDestroy {

  @Input() editable: boolean = false;
  @Output() cancel: EventEmitter<any> = new EventEmitter();
  @Output() save: EventEmitter<any> = new EventEmitter();

  private openState: boolean = false;

  private static get closed() {
    return 'closed';
  }

  private static get open() {
    return 'open';
  }

  private get openStateValue() {
    return this.openState ? MdExpansionPanel.open : MdExpansionPanel.closed;
  }

  constructor() {}

  ngOnDestroy() {}

  togglePanel() {
    this.openState = !this.openState;
  }

  handleCancel() {
    this.cancel.emit();
    this.togglePanel();
  }

  handleSave() {
    this.save.emit();
    this.togglePanel();
  }

}