import {style, animate, state, transition, trigger, AnimationTriggerMetadata} from "@angular/animations";

export const iconRotate: AnimationTriggerMetadata = trigger('iconRotate', [
  state('closed', style({ transform: 'rotate(0deg)' })),
  state('open', style({ transform: 'rotate(180deg)' })),
  transition('closed <=> open', animate('200ms'))
]);

export const contentExpand: AnimationTriggerMetadata = trigger('contentExpand', [
  state('closed', style({ height: '0px', display: 'none' })),
  state('open', style({ height: '*', display: 'flex' })),
  transition('closed => open', [
    style({ height: '0px' }),
    animate('200ms', style({ height: '*' }))
  ]),
  transition('open => closed', [
    style({ height: '*' }),
    animate('200ms', style({ height: '0px' })),
  ])
]);

export const panelMarginOut: AnimationTriggerMetadata = trigger('panelMarginOut', [
  state('closed', style({ marginTop: '0px', marginBottom: '1px' })),
  state('open', style({ marginTop: '16px', marginBottom: '16px' })),
  transition('closed <=> open', animate('200ms'))
]);