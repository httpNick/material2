# Expansion Panels

`import {MdExpansionPanelModule} from '@angular/material'`

## Components

### MdExpansionPanel

Expansion panels contain creation flows and allow lightweight editing of an element.

An expansion panel is a lightweight container that may either stand alone or be connected to a larger surface, such as a card.

They may be used for a variety of tasks, such as:

- To edit a setting
- To create a tool for ad campaigns

#### Properties

| Name            | Description                                                                                                                                   |
|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------|
| @Input editable | Configures expansion panel to be editable. This includes a cancel/save button at the foot of this panel's  `MdExpansionPanelExpansionContent` |
| @Output cancel  | Emits an empty event when the cancel button is pressed.                                                                                       |
| @Output save    | Emits an empty event when the save button is pressed.                                                                                         |

## Preset style elements

- md-expansion-panel-list-content
- md-expansion-panel-sub-list-content
- md-expansion-panel-secondary-content
- md-expansion-panel-expansion-content