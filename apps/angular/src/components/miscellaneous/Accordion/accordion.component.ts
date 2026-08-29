import { Component, computed, forwardRef, InjectionToken, input } from '@angular/core';

export interface AccordionItemRef {
  id: string;
  disabled: () => boolean;
  isOpen: () => boolean;
  setOpen: (open: boolean) => void;
}

export interface AccordionContextValue {
  effect: () => string | undefined;
  registerItem: (item: AccordionItemRef) => () => void;
  toggleItem: (id: string) => void;
  focusAdjacent: (id: string, key: string) => boolean;
}

export const ACCORDION_CONTEXT = new InjectionToken<AccordionContextValue>('AccordionContext');

@Component({
  selector: 'Accordion',
  standalone: true,
  template: `
    <div
      #root
      [class]="classes()"
      data-accordion=""
      [attr.data-accordion-multiple]="multiple() ? '' : null"
      data-component="Accordion"
      [attr.data-effect]="effect() === 'slide' ? 'slide' : null"
    >
      <ng-content />
    </div>
  `,
  providers: [{ provide: ACCORDION_CONTEXT, useExisting: forwardRef(() => Accordion) }],
})
export class Accordion implements AccordionContextValue {
  readonly hostClass = input<string>('');
  readonly variant = input<string>('bordered');
  readonly size = input<string>('md');
  readonly multiple = input<boolean>(false);
  readonly effect = input<string | undefined>(undefined);

  private readonly items = new Map<string, AccordionItemRef>();
  private rootEl: HTMLElement | null = null;

  readonly resolvedVariant = computed(() =>
    ['bordered', 'flush', 'card'].includes(this.variant()) ? this.variant() : 'bordered',
  );

  readonly resolvedSize = computed(() =>
    ['sm', 'md', 'lg'].includes(this.size()) ? this.size() : 'md',
  );

  readonly classes = computed(() =>
    [
      'accordion',
      `accordion_${this.resolvedVariant()}`,
      this.resolvedSize() !== 'md' && `accordion_${this.resolvedSize()}`,
      this.hostClass(),
    ]
      .filter(Boolean)
      .join(' '),
  );

  setRoot(el: HTMLElement) {
    this.rootEl = el;
  }

  registerItem(item: AccordionItemRef) {
    this.items.set(item.id, item);
    return () => this.items.delete(item.id);
  }

  toggleItem(id: string) {
    const item = this.items.get(id);
    if (!item || item.disabled()) return;
    const willOpen = !item.isOpen();
    if (willOpen && !this.multiple()) {
      this.items.forEach((other, otherId) => {
        if (otherId !== id && !other.disabled()) other.setOpen(false);
      });
    }
    item.setOpen(willOpen);
  }

  focusAdjacent(id: string, key: string): boolean {
    const enabled = [...this.items.values()].filter((item) => !item.disabled());
    const index = enabled.findIndex((item) => item.id === id);
    let nextIndex: number | null = null;
    if (key === 'ArrowDown') nextIndex = (index + 1) % enabled.length;
    else if (key === 'ArrowUp') nextIndex = (index - 1 + enabled.length) % enabled.length;
    else if (key === 'Home') nextIndex = 0;
    else if (key === 'End') nextIndex = enabled.length - 1;
    if (nextIndex == null || !enabled[nextIndex]) return false;
    (this.rootEl?.querySelector(`#${CSS.escape(enabled[nextIndex].id)}`) as HTMLElement | null)?.focus();
    return true;
  }
}

export default Accordion;
