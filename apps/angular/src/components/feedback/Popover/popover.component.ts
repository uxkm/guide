import { DOCUMENT } from '@angular/common';
import {
  afterNextRender,
  Component,
  computed,
  contentChildren,
  DestroyRef,
  effect,
  ElementRef,
  HostListener,
  inject,
  input,
  output,
  signal,
  viewChild,
} from '@angular/core';

const placements = new Set(['top', 'top-center', 'bottom', 'bottom-center', 'left', 'right', 'end']);
const sizes = new Set(['sm', 'md', 'lg']);

@Component({
  selector: 'Popover',
  standalone: true,
  template: `
    <span #trigger class="popover_trigger" [class]="hostClass()">
      <ng-content select="[trigger]" />
      @if (!hasTriggerSlot()) {
        <button
          type="button"
          class="btn btn_outline popover_trigger-btn"
          [disabled]="disabled()"
          [attr.aria-expanded]="visible()"
          [attr.aria-controls]="panelId()"
          (click)="toggle()"
        >
          {{ triggerLabel() }}
        </button>
      }
    </span>
    @if (visible()) {
      <div
        #panel
        [id]="panelId()"
        [class]="panelClasses()"
        role="dialog"
        [attr.aria-label]="title() || panelLabel()"
        [style]="panelStyle()"
      >
        @if (!noArrow()) {
          <span class="popover_arrow" aria-hidden="true"></span>
        }
        @if (title() || closable()) {
          <div class="popover_header">
            @if (title()) {
              <div class="popover_title" [id]="titleId()">{{ title() }}</div>
            }
            @if (closable()) {
              <button type="button" class="popover_close" [attr.aria-label]="closeLabel()" (click)="setOpen(false)">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            }
          </div>
        }
        <div class="popover_body"><ng-content /></div>
        @if (hasFooterSlot()) {
          <div class="popover_footer"><ng-content select="[footer]" /></div>
        }
      </div>
    }
  `,
})
export class Popover {
  readonly hostClass = input<string>('');
  readonly id = input<string | undefined>(undefined);
  readonly placement = input<string>('bottom');
  readonly size = input<string>('md');
  readonly open = input<boolean | undefined>(undefined);
  readonly defaultOpen = input<boolean>(false);
  readonly trigger = input<string>('click');
  readonly triggerLabel = input<string>('Popover');
  readonly title = input<string | undefined>(undefined);
  readonly panelLabel = input<string | undefined>(undefined);
  readonly noArrow = input<boolean>(false);
  readonly closable = input<boolean | undefined>(undefined);
  readonly disabled = input<boolean>(false);
  readonly closeLabel = input<string>('닫기');
  readonly panelAlign = input<string>('start');

  readonly openChange = output<boolean>();

  private readonly triggerEl = viewChild<ElementRef<HTMLElement>>('trigger');
  private readonly panel = viewChild<ElementRef<HTMLElement>>('panel');
  private readonly document = inject(DOCUMENT);
  private readonly destroyRef = inject(DestroyRef);
  private readonly triggerSlots = contentChildren('[trigger]');
  private readonly footerSlots = contentChildren('[footer]');

  private static idCounter = 0;
  readonly panelId = computed(() => this.id() || `popover-${++Popover.idCounter}`);
  readonly titleId = computed(() => `${this.panelId()}-title`);

  readonly internalOpen = signal(false);
  readonly visible = computed(() => this.open() ?? this.internalOpen());
  readonly hasTriggerSlot = computed(() => this.triggerSlots().length > 0);
  readonly hasFooterSlot = computed(() => this.footerSlots().length > 0);

  readonly resolvedPlacement = computed(() =>
    placements.has(this.placement()) ? this.placement() : 'bottom',
  );
  readonly resolvedSize = computed(() => (sizes.has(this.size()) ? this.size() : 'md'));
  readonly resolvedClosable = computed(() => this.closable() ?? this.trigger() === 'click');

  readonly panelClasses = computed(() =>
    [
      'popover_panel',
      `popover_placement-${this.resolvedPlacement()}`,
      this.resolvedSize() !== 'md' && `popover_${this.resolvedSize()}`,
      this.panelAlign() !== 'start' && `popover_align-${this.panelAlign()}`,
      this.visible() && 'is-open',
    ]
      .filter(Boolean)
      .join(' '),
  );

  readonly panelStyle = signal<Record<string, string>>({});

  constructor() {
    if (this.defaultOpen()) this.internalOpen.set(true);

    afterNextRender(() => {
      effect(() => {
        if (!this.visible()) return;
        const trigger = this.triggerEl()?.nativeElement;
        const panel = this.panel()?.nativeElement;
        const doc = this.document;
        if (!trigger || !panel) return;
        if (!doc.body.contains(panel)) doc.body.appendChild(panel);

        const rect = trigger.getBoundingClientRect();
        this.panelStyle.set({
          position: 'fixed',
          top: `${rect.bottom + 8}px`,
          left: `${rect.left}px`,
          zIndex: '1000',
        });
      });

      this.destroyRef.onDestroy(() => {
        this.panel()?.nativeElement?.remove();
      });
    });
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
    const trigger = this.triggerEl()?.nativeElement;
    const panel = this.panel()?.nativeElement;
    const target = event.target as Node;
    if (trigger?.contains(target) || panel?.contains(target)) return;
    this.setOpen(false);
  }
}

export default Popover;
