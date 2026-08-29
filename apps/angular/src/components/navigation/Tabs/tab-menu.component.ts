import { Component, input } from '@angular/core';

@Component({
  selector: 'TabMenu',
  standalone: true,
  template: `<ng-content />`,
})
export class TabMenu {
  static readonly tabsType = 'menu';
  readonly value = input<string | undefined>(undefined);
  readonly label = input<string | undefined>(undefined);
}

export default TabMenu;
