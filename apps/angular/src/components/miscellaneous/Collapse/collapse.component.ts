import { Component, computed, forwardRef, InjectionToken, input } from '@angular/core';

export interface CollapsePanelRef {
  id: string;
  disabled: () => boolean;
  isOpen: () => boolean;
  setOpen: (open: boolean) => void;
}

export interface CollapseContextValue {
  effect: () => string | undefined;
  registerPanel: (panel: CollapsePanelRef) => () => void;
  togglePanel: (id: string) => void;
  focusAdjacent: (id: string, key: string) => boolean;
}

export const COLLAPSE_CONTEXT = new InjectionToken<CollapseContextValue>('CollapseContext');

@Component({
  selector: 'Collapse',
  standalone: true,
  template: `
    <div
      [class]="classes()"
      data-collapse=""
      [attr.data-collapse-accordion]="accordion() ? '' : null"
      data-component="Collapse"
      [attr.data-effect]="effect() === 'slide' ? 'slide' : null"
    >
      <ng-content />
    </div>
  `,
  providers: [{ provide: COLLAPSE_CONTEXT, useExisting: forwardRef(() => Collapse) }],
})
export class Collapse implements CollapseContextValue {
  readonly hostClass = input<string>('');
  readonly variant = input<string>('bordered');
  readonly size = input<string>('md');
  readonly accordion = input<boolean>(false);
  readonly effect = input<string | undefined>(undefined);

  private readonly panels = new Map<string, CollapsePanelRef>();
  private rootEl: HTMLElement | null = null;

  readonly resolvedVariant = computed(() =>
    ['bordered', 'ghost', 'card'].includes(this.variant()) ? this.variant() : 'bordered',
  );

  readonly resolvedSize = computed(() =>
    ['sm', 'md', 'lg'].includes(this.size()) ? this.size() : 'md',
  );

  readonly classes = computed(() =>
    [
      'collapse_group',
      `collapse_${this.resolvedVariant()}`,
      this.resolvedSize() !== 'md' && `collapse_${this.resolvedSize()}`,
      this.hostClass(),
    ]
      .filter(Boolean)
      .join(' '),
  );

  registerPanel(panel: CollapsePanelRef) {
    this.panels.set(panel.id, panel);
    return () => this.panels.delete(panel.id);
  }

  togglePanel(id: string) {
    const panel = this.panels.get(id);
    if (!panel || panel.disabled()) return;
    const willOpen = !panel.isOpen();
    if (willOpen && this.accordion()) {
      this.panels.forEach((other, otherId) => {
        if (otherId !== id && !other.disabled()) other.setOpen(false);
      });
    }
    panel.setOpen(willOpen);
  }

  focusAdjacent(id: string, key: string): boolean {
    const enabled = [...this.panels.values()].filter((panel) => !panel.disabled());
    const index = enabled.findIndex((panel) => panel.id === id);
    let nextIndex: number | null = null;
    if (key === 'ArrowDown') nextIndex = (index + 1) % enabled.length;
    else if (key === 'ArrowUp') nextIndex = (index - 1 + enabled.length) % enabled.length;
    else if (key === 'Home') nextIndex = 0;
    else if (key === 'End') nextIndex = enabled.length - 1;
    if (nextIndex == null || !enabled[nextIndex]) return false;
    return true;
  }
}

export default Collapse;
