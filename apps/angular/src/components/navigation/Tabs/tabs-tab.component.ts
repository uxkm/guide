import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'TabsTab',
  standalone: true,
  template: `
    <button
      type="button"
      [class]="classes()"
      role="tab"
      [attr.aria-selected]="active()"
      [disabled]="disabled() || null"
    >
      <ng-content />
    </button>
  `,
})
export class TabsTab {
  readonly hostClass = input<string>('');
  readonly label = input<string | undefined>(undefined);
  readonly value = input<string | undefined>(undefined);
  readonly active = input<boolean>(false);
  readonly disabled = input<boolean>(false);

  readonly classes = computed(() =>
    [
      'tabs_tab',
      this.active() && 'is-active',
      this.disabled() && 'is-disabled',
      this.hostClass(),
    ]
      .filter(Boolean)
      .join(' '),
  );
}

export default TabsTab;
