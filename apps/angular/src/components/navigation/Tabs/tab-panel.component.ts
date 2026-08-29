import { Component, input } from '@angular/core';

@Component({
  selector: 'TabPanel',
  standalone: true,
  template: `<ng-content />`,
})
export class TabPanel {
  static readonly tabsType = 'panel';
  readonly value = input<string | undefined>(undefined);
  readonly label = input<string | undefined>(undefined);
}

export default TabPanel;
