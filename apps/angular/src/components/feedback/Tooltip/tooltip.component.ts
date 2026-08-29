import { DOCUMENT } from '@angular/common';
import {
  afterNextRender,
  Component,
  computed,
  contentChildren,
  DestroyRef,
  effect,
  ElementRef,
  inject,
  input,
  output,
  signal,
  viewChild,
} from '@angular/core';

const placements = new Set(['top', 'bottom', 'left', 'right']);

@Component({
  selector: 'Tooltip',
  standalone: true,
  template: `
    <span
      #trigger
      class="tooltip_trigger"
      [class]="hostClass()"
      (mouseenter)="show()"
      (mouseleave)="hide()"
      (focusin)="show()"
      (focusout)="hide()"
    >
      <ng-content />
    </span>
    @if (visible()) {
      <div
        #panel
        [id]="panelId()"
        [class]="panelClasses()"
        role="tooltip"
        [style]="panelStyle()"
      >
        {{ content() ?? label() }}
      </div>
    }
  `,
})
export class Tooltip {
  readonly hostClass = input<string>('');
  readonly content = input<string | undefined>(undefined);
  readonly label = input<string | undefined>(undefined);
  readonly placement = input<string>('top');
  readonly open = input<boolean | undefined>(undefined);
  readonly disabled = input<boolean>(false);

  readonly openChange = output<boolean>();

  private readonly trigger = viewChild<ElementRef<HTMLElement>>('trigger');
  private readonly panel = viewChild<ElementRef<HTMLElement>>('panel');
  private readonly document = inject(DOCUMENT);
  private readonly destroyRef = inject(DestroyRef);

  private static idCounter = 0;
  readonly panelId = computed(() => `tooltip-${++Tooltip.idCounter}`);

  readonly internalOpen = signal(false);
  readonly visible = computed(() => this.open() ?? this.internalOpen());

  readonly resolvedPlacement = computed(() =>
    placements.has(this.placement()) ? this.placement() : 'top',
  );

  readonly panelClasses = computed(() =>
    ['tooltip_panel', `tooltip_placement-${this.resolvedPlacement()}`, this.visible() && 'is-open']
      .filter(Boolean)
      .join(' '),
  );

  readonly panelStyle = signal<Record<string, string>>({});

  constructor() {
    afterNextRender(() => {
      effect(() => {
        if (!this.visible()) return;
        const trigger = this.trigger()?.nativeElement;
        const panel = this.panel()?.nativeElement;
        const doc = this.document;
        if (!trigger || !panel) return;
        if (!doc.body.contains(panel)) doc.body.appendChild(panel);

        const rect = trigger.getBoundingClientRect();
        const styles: Record<string, string> = {
          position: 'fixed',
          zIndex: '1000',
        };
        if (this.resolvedPlacement() === 'bottom') {
          styles['top'] = `${rect.bottom + 6}px`;
          styles['left'] = `${rect.left + rect.width / 2}px`;
          styles['transform'] = 'translateX(-50%)';
        } else {
          styles['bottom'] = `${window.innerHeight - rect.top + 6}px`;
          styles['left'] = `${rect.left + rect.width / 2}px`;
          styles['transform'] = 'translateX(-50%)';
        }
        this.panelStyle.set(styles);
      });

      this.destroyRef.onDestroy(() => {
        this.panel()?.nativeElement?.remove();
      });
    });
  }

  show() {
    if (this.disabled()) return;
    if (this.open() === undefined) this.internalOpen.set(true);
    this.openChange.emit(true);
  }

  hide() {
    if (this.open() === undefined) this.internalOpen.set(false);
    this.openChange.emit(false);
  }
}

export default Tooltip;
