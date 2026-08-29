import { Component, computed, effect, input, signal } from '@angular/core';
import Button from '../../basic/Button/button.component';
import Icon from '../../basic/Icon/icon.component';

@Component({
  selector: 'MenuSubmenu',
  standalone: true,
  imports: [Button, Icon],
  template: `
    <li
      [class]="classes()"
      [attr.aria-expanded]="isOpen()"
    >
      <Button
        variant="text"
        hostClass="menu_link"
        [expanded]="isOpen()"
        [attr.aria-controls]="submenuId()"
        (click)="toggle()"
      >
        @if (hasIcon()) {
          <span icon-before><ng-content select="[icon]" /></span>
        }
        <span class="menu_label">{{ label() }}</span>
        <span icon-after><Icon name="chevron-down" hostClass="menu_arrow" /></span>
      </Button>
      <ul [id]="submenuId()" class="menu_submenu">
        <ng-content />
      </ul>
    </li>
  `,
})
export class MenuSubmenu {
  readonly hostClass = input<string>('');
  readonly label = input<string>('');
  readonly expanded = input<boolean>(false);
  readonly submenuIdInput = input<string | undefined>(undefined, { alias: 'submenuId' });

  private static idCounter = 0;
  readonly submenuId = computed(
    () => this.submenuIdInput() || `menu-sub-${++MenuSubmenu.idCounter}`,
  );

  readonly isOpen = signal(false);

  readonly classes = computed(() =>
    ['menu_item', 'menu_item-submenu', this.hostClass()].filter(Boolean).join(' '),
  );

  readonly hasIcon = computed(() => false);

  constructor() {
    effect(() => {
      this.isOpen.set(this.expanded());
    });
  }

  toggle() {
    this.isOpen.update((v) => !v);
  }
}

export default MenuSubmenu;
