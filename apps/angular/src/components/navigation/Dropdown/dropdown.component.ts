import {
  Component,
  computed,
  contentChildren,
  effect,
  ElementRef,
  HostListener,
  input,
  output,
  signal,
  viewChild,
} from '@angular/core';
import Button from '../../basic/Button/button.component';
import Icon from '../../basic/Icon/icon.component';

const placements = new Set(['start', 'end', 'top']);

@Component({
  selector: 'Dropdown',
  standalone: true,
  imports: [Button, Icon],
  template: `
    <div #root [class]="classes()" data-component="Dropdown">
      @if (hasTriggerSlot()) {
        <span
          class="dropdown_trigger"
          [attr.aria-expanded]="visible()"
          [attr.aria-controls]="menuId()"
          (click)="toggle()"
        >
          <ng-content select="[trigger]" />
        </span>
      } @else {
        <Button
          hostClass="dropdown_trigger"
          [label]="triggerLabel()"
          [open]="visible()"
          [haspopup]="'menu'"
          [expanded]="visible()"
          [attr.aria-controls]="menuId()"
          [disabled]="disabled()"
          (click)="toggle()"
        />
      }
      @if (visible()) {
        <div
          [id]="menuId()"
          class="dropdown_menu"
          [style]="menuStyle()"
          role="menu"
        >
          <ng-content />
        </div>
      }
    </div>
  `,
})
export class Dropdown {
  readonly hostClass = input<string>('');
  readonly open = input<boolean | undefined>(undefined);
  readonly defaultOpen = input<boolean>(false);
  readonly disabled = input<boolean>(false);
  readonly placement = input<string>('start');
  readonly fit = input<boolean>(false);
  readonly maxVisibleItems = input<number | undefined>(undefined);
  readonly menuWidth = input<string | number | undefined>(undefined);
  readonly menuMinWidth = input<string | number | undefined>(undefined);
  readonly triggerLabel = input<string>('메뉴');
  readonly closeOnSelect = input<boolean>(true);

  readonly openChange = output<boolean>();
  readonly select = output<Event>();

  private readonly root = viewChild<ElementRef<HTMLElement>>('root');
  private readonly triggerSlots = contentChildren('[trigger]');

  private static idCounter = 0;
  readonly menuId = computed(() => `dropdown-menu-${++Dropdown.idCounter}`);

  readonly internalOpen = signal(false);
  readonly visible = computed(() => this.open() ?? this.internalOpen());
  readonly hasTriggerSlot = computed(() => this.triggerSlots().length > 0);

  readonly resolvedPlacement = computed(() =>
    placements.has(this.placement()) ? this.placement() : 'start',
  );

  readonly classes = computed(() =>
    [
      'dropdown',
      this.visible() && 'is-open',
      `dropdown_${this.resolvedPlacement()}`,
      this.fit() && 'dropdown_fit',
      this.hostClass(),
    ]
      .filter(Boolean)
      .join(' '),
  );

  readonly menuStyle = computed(() => {
    const style: Record<string, string> = {};
    const width = this.menuWidth();
    const minWidth = this.menuMinWidth();
    if (width != null) style['width'] = typeof width === 'number' ? `${width}rem` : String(width);
    if (minWidth != null) {
      style['minWidth'] = typeof minWidth === 'number' ? `${minWidth}rem` : String(minWidth);
    }
    const max = this.maxVisibleItems();
    if (max != null) style['--dropdown-max-visible-items'] = String(max);
    return style;
  });

  constructor() {
    if (this.defaultOpen()) this.internalOpen.set(true);
  }

  setOpen(next: boolean) {
    if (this.disabled()) return;
    if (this.open() === undefined) this.internalOpen.set(next);
    this.openChange.emit(next);
  }

  toggle() {
    this.setOpen(!this.visible());
  }

  @HostListener('document:pointerdown', ['$event'])
  onOutside(event: PointerEvent) {
    if (!this.visible()) return;
    if (!this.root()?.nativeElement.contains(event.target as Node)) this.setOpen(false);
  }

  @HostListener('document:keydown', ['$event'])
  onEscape(event: KeyboardEvent) {
    if (this.visible() && event.key === 'Escape') this.setOpen(false);
  }
}

export default Dropdown;
