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

const sizes = new Set(['sm', 'md', 'lg']);
const placements = new Set(['left', 'right', 'top', 'bottom']);
const documentDrawerCounts = new WeakMap<Document, number>();

@Component({
  selector: 'Drawer',
  standalone: true,
  template: `
    @if (visible()) {
      <div
        #root
        [id]="drawerId()"
        [class]="rootClasses()"
        data-component="Drawer"
        data-drawer=""
        [attr.data-drawer-draggable]="showDragHandle() ? 'true' : null"
        [attr.data-drawer-backdrop]="backdrop() && !noBackdrop() ? null : 'false'"
        role="dialog"
        aria-modal="true"
        [attr.aria-labelledby]="title() || hasHeaderSlot() ? titleId() : null"
        tabindex="-1"
      >
        <div
          class="drawer_backdrop"
          aria-hidden="true"
          (click)="handleBackdrop($event)"
        ></div>
        <div #panel [class]="panelClasses()">
          @if (showDragHandle()) {
            <div class="drawer_handle" data-drawer-drag-handle="" aria-hidden="true">
              <span class="drawer_handle-bar"></span>
            </div>
          }
          @if (title() || hasHeaderSlot()) {
            <div class="drawer_header">
              @if (hasHeaderSlot()) {
                <ng-content select="[header]" />
              } @else {
                <h2 class="drawer_title" [id]="titleId()">{{ title() }}</h2>
              }
              @if (hasExtraSlot()) {
                <div class="drawer_extra"><ng-content select="[extra]" /></div>
              }
              <button
                type="button"
                class="btn btn_ghost btn_icon-only drawer_close"
                [attr.aria-label]="closeLabel()"
                (click)="requestClose('close', $event)"
              >
                <svg class="icon drawer_close-icon" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
          }
          <div class="drawer_body"><ng-content /></div>
          @if (hasFooterSlot()) {
            <div [class]="footerClasses()"><ng-content select="[footer]" /></div>
          }
        </div>
      </div>
    }
  `,
})
export class Drawer {
  readonly hostClass = input<string>('');
  readonly id = input<string | undefined>(undefined);
  readonly title = input<string | undefined>(undefined);
  readonly size = input<string>('md');
  readonly placement = input<string>('right');
  readonly backdrop = input<boolean>(true);
  readonly noBackdrop = input<boolean>(false);
  readonly open = input<boolean | undefined>(undefined);
  readonly defaultOpen = input<boolean>(false);
  readonly openOnLoad = input<boolean>(false);
  readonly draggable = input<boolean>(false);
  readonly footerAlign = input<string>('end');
  readonly footerRatio = input<string>('1-1');
  readonly footerNoPadBottom = input<boolean>(false);
  readonly closeLabel = input<string>('닫기');

  readonly close = output<{ reason: string; event?: Event }>();
  readonly openChange = output<boolean>();

  private readonly root = viewChild<ElementRef<HTMLElement>>('root');
  private readonly document = inject(DOCUMENT);
  private readonly destroyRef = inject(DestroyRef);
  private readonly headerSlots = contentChildren('[header]');
  private readonly extraSlots = contentChildren('[extra]');
  private readonly footerSlots = contentChildren('[footer]');

  private static idCounter = 0;
  readonly drawerId = computed(() => this.id() || `drawer-${++Drawer.idCounter}`);
  readonly titleId = computed(() => `${this.drawerId()}-title`);

  readonly internalOpen = signal(false);
  readonly visible = computed(() => this.open() ?? this.internalOpen());
  readonly resolvedSize = computed(() => (sizes.has(this.size()) ? this.size() : 'md'));
  readonly resolvedPlacement = computed(() =>
    placements.has(this.placement()) ? this.placement() : 'right',
  );
  readonly showDragHandle = computed(
    () => this.draggable() && this.resolvedPlacement() === 'bottom',
  );
  readonly hasHeaderSlot = computed(() => this.headerSlots().length > 0);
  readonly hasExtraSlot = computed(() => this.extraSlots().length > 0);
  readonly hasFooterSlot = computed(() => this.footerSlots().length > 0);

  readonly rootClasses = computed(() =>
    ['drawer', this.visible() && 'is-open', this.hostClass()].filter(Boolean).join(' '),
  );

  readonly panelClasses = computed(() =>
    [
      'drawer_panel',
      `drawer_placement-${this.resolvedPlacement()}`,
      this.resolvedSize() !== 'md' && `drawer_${this.resolvedSize()}`,
      this.showDragHandle() && 'drawer_draggable',
    ]
      .filter(Boolean)
      .join(' '),
  );

  readonly footerClasses = computed(() =>
    [
      'drawer_footer',
      this.footerAlign() !== 'end' && `drawer_footer-${this.footerAlign()}`,
      this.footerAlign() === 'even' &&
        this.footerRatio() !== '1-1' &&
        `drawer_footer-even-${this.footerRatio()}`,
      this.footerNoPadBottom() && 'drawer_footer-no-pad-b',
    ]
      .filter(Boolean)
      .join(' '),
  );

  constructor() {
    if (this.defaultOpen() || this.openOnLoad()) this.internalOpen.set(true);

    afterNextRender(() => {
      let cleanup: (() => void) | undefined;
      effect(() => {
        cleanup?.();
        cleanup = undefined;
        if (!this.visible()) return;

        const el = this.root()?.nativeElement;
        const doc = this.document;
        if (!el) return;
        if (!doc.body.contains(el)) doc.body.appendChild(el);

        documentDrawerCounts.set(doc, (documentDrawerCounts.get(doc) || 0) + 1);
        doc.body.classList.add('is-drawer-open');
        requestAnimationFrame(() => el.focus());

        const onKeyDown = (event: KeyboardEvent) => {
          if (event.key === 'Escape') this.requestClose('escape', event);
        };
        doc.addEventListener('keydown', onKeyDown);
        cleanup = () => {
          doc.removeEventListener('keydown', onKeyDown);
          const remaining = Math.max(0, (documentDrawerCounts.get(doc) || 1) - 1);
          documentDrawerCounts.set(doc, remaining);
          if (remaining === 0) doc.body.classList.remove('is-drawer-open');
        };
      });

      this.destroyRef.onDestroy(() => {
        cleanup?.();
        this.root()?.nativeElement?.remove();
      });
    });
  }

  requestClose(reason: string, event?: Event) {
    if (this.open() === undefined) this.internalOpen.set(false);
    this.openChange.emit(false);
    this.close.emit({ reason, event });
  }

  handleBackdrop(event: Event) {
    if (this.backdrop() && !this.noBackdrop()) this.requestClose('backdrop', event);
  }
}

export default Drawer;
