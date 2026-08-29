import {
  Component,
  computed,
  contentChildren,
  effect,
  input,
  output,
  signal,
} from '@angular/core';
import TabsTab from './tabs-tab.component';

const valid = {
  mode: new Set(['panels', 'dynamic']),
  variant: new Set(['line', 'card', 'pill']),
  size: new Set(['sm', 'md', 'lg']),
  layout: new Set(['auto', 'equal', 'scroll']),
  indicator: new Set(['static', 'slide']),
};

@Component({
  selector: 'Tabs',
  standalone: true,
  imports: [TabsTab],
  template: `
    <div [class]="classes()" data-component="Tabs">
      <div class="tabs_bar">
        <div class="tabs_list" role="tablist" [attr.aria-label]="ariaLabel()">
          @for (item of tabItems(); track item.key) {
            <button
              type="button"
              class="tabs_tab"
              role="tab"
              [class.is-active]="item.key === selected()"
              [class.is-disabled]="item.disabled"
              [attr.aria-selected]="item.key === selected()"
              [disabled]="item.disabled || null"
              [attr.aria-controls]="panelId(item.key)"
              (click)="selectTab(item.key)"
            >
              {{ item.label }}
            </button>
          }
        </div>
        @if (hasExtra()) {
          <div class="tabs_extra"><ng-content select="[extra]" /></div>
        }
      </div>
      @if (resolvedMode() === 'panels') {
        <div
          [id]="panelId(selected())"
          class="tabs_panel"
          role="tabpanel"
          [attr.aria-labelledby]="tabId(selected())"
        >
          <ng-content />
        </div>
      }
    </div>
  `,
})
export class Tabs {
  readonly hostClass = input<string>('');
  readonly mode = input<string>('panels');
  readonly value = input<string | undefined>(undefined);
  readonly defaultValue = input<string | undefined>(undefined);
  readonly variant = input<string>('line');
  readonly size = input<string>('md');
  readonly layout = input<string>('auto');
  readonly vertical = input<boolean>(false);
  readonly scrollable = input<boolean>(false);
  readonly ariaLabel = input<string | undefined>(undefined);
  readonly indicator = input<string>('static');
  readonly items = input<Array<{ key?: string; value?: string; label?: string; disabled?: boolean }>>(
    [],
  );

  readonly valueChange = output<string>();

  private readonly extraSlots = contentChildren('[extra]');

  readonly internal = signal<string | undefined>(undefined);

  readonly selected = computed(() => this.value() ?? this.internal() ?? this.firstKey());

  readonly resolvedMode = computed(() => (valid.mode.has(this.mode()) ? this.mode() : 'panels'));
  readonly resolvedVariant = computed(() =>
    valid.variant.has(this.variant()) ? this.variant() : 'line',
  );
  readonly resolvedSize = computed(() => (valid.size.has(this.size()) ? this.size() : 'md'));
  readonly resolvedLayout = computed(() =>
    valid.layout.has(this.layout()) ? this.layout() : 'auto',
  );
  readonly resolvedIndicator = computed(() =>
    valid.indicator.has(this.indicator()) ? this.indicator() : 'static',
  );

  readonly hasExtra = computed(() => this.extraSlots().length > 0);

  readonly tabItems = computed(() =>
    this.items().map((item, index) => ({
      key: item.key ?? item.value ?? `tab-${index}`,
      label: item.label ?? item.key ?? `Tab ${index + 1}`,
      disabled: Boolean(item.disabled),
    })),
  );

  readonly classes = computed(() =>
    [
      'tabs',
      `tabs_${this.resolvedVariant()}`,
      this.resolvedSize() !== 'md' && `tabs_${this.resolvedSize()}`,
      this.vertical() && 'tabs_vertical',
      this.resolvedLayout() === 'equal' && 'tabs_equal',
      this.resolvedLayout() === 'scroll' && !this.vertical() && 'tabs_scroll-nav',
      this.scrollable() && this.resolvedLayout() === 'auto' && 'tabs_scrollable',
      this.resolvedMode() === 'dynamic' && 'tabs_dynamic',
      this.resolvedIndicator() === 'slide' && 'tabs_indicator-slide',
      this.hostClass(),
    ]
      .filter(Boolean)
      .join(' '),
  );

  constructor() {
    effect(() => {
      const def = this.defaultValue();
      if (def) this.internal.set(def);
    });
  }

  firstKey(): string {
    const items = this.tabItems();
    return items.find((i) => !i.disabled)?.key ?? items[0]?.key ?? 'tab-0';
  }

  tabId(key: string) {
    return `tab-${key}`;
  }

  panelId(key: string) {
    return `panel-${key}`;
  }

  selectTab(key: string) {
    const item = this.tabItems().find((i) => i.key === key);
    if (!item || item.disabled) return;
    if (this.value() === undefined) this.internal.set(key);
    this.valueChange.emit(key);
  }
}

export default Tabs;
