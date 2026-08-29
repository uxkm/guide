import { Component, computed, input, output } from '@angular/core';

const MODES = new Set(['vertical', 'horizontal', 'inline']);

@Component({
  selector: 'Menu',
  standalone: true,
  template: `
    <nav
      [class]="classes()"
      data-component="Menu"
      data-menu-selectable
      [attr.aria-label]="ariaLabel()"
      (click)="handleClick($event)"
    >
      <ul class="menu_list"><ng-content /></ul>
    </nav>
  `,
})
export class Menu {
  readonly hostClass = input<string>('');
  readonly mode = input<string>('vertical');
  readonly bordered = input<boolean>(false);
  readonly compact = input<boolean>(false);
  readonly dark = input<boolean>(false);
  readonly ariaLabel = input<string | undefined>(undefined);

  readonly click = output<Event>();

  readonly resolvedMode = computed(() => (MODES.has(this.mode()) ? this.mode() : 'vertical'));

  readonly classes = computed(() =>
    [
      'menu',
      `menu_${this.resolvedMode()}`,
      this.bordered() && 'menu_bordered',
      this.compact() && 'menu_compact',
      this.dark() && 'menu_dark',
      this.hostClass(),
    ]
      .filter(Boolean)
      .join(' '),
  );

  handleClick(event: Event) {
    const target = event.target as HTMLElement | null;
    const link = target?.closest('.menu_link') as HTMLElement | null;
    if (
      link &&
      !link.classList.contains('is-disabled') &&
      !link.parentElement?.classList.contains('menu_item-submenu')
    ) {
      const nav = (event.currentTarget as HTMLElement);
      nav.querySelectorAll('.menu_link.is-active').forEach((item) => {
        item.classList.remove('is-active');
        item.removeAttribute('aria-current');
      });
      link.classList.add('is-active');
      link.setAttribute('aria-current', 'page');
    }
    this.click.emit(event);
  }
}

export default Menu;
