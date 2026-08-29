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

const sizes = new Set(['sm', 'md', 'lg', 'fullscreen']);
const documentModalCounts = new WeakMap<Document, number>();

@Component({
  selector: 'Modal',
  standalone: true,
  template: `
    @if (visible()) {
      <div
        #root
        [id]="modalId()"
        [class]="classes()"
        data-component="Modal"
        data-modal=""
        [attr.data-modal-backdrop]="backdrop() ? null : 'false'"
        role="dialog"
        aria-modal="true"
        [attr.aria-labelledby]="title() ? titleId() : null"
        tabindex="-1"
      >
        <div class="modal_backdrop" aria-hidden="true" (click)="handleBackdrop($event)"></div>
        <div class="modal_dialog">
          @if (title() || hasHeaderSlot()) {
            <div class="modal_header">
              @if (hasHeaderSlot()) {
                <ng-content select="[header]" />
              } @else {
                <h2 class="modal_title" [id]="titleId()">{{ title() }}</h2>
              }
              <button
                type="button"
                class="btn btn_ghost btn_icon-only modal_close"
                [attr.aria-label]="closeLabel()"
                (click)="requestClose('close', $event)"
              >
                <svg class="icon modal_close-icon" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
          }
          <div class="modal_body"><ng-content /></div>
          @if (hasFooterSlot()) {
            <div [class]="footerClasses()"><ng-content select="[footer]" /></div>
          }
        </div>
      </div>
    }
  `,
})
export class Modal {
  readonly hostClass = input<string>('');
  readonly id = input<string | undefined>(undefined);
  readonly title = input<string | undefined>(undefined);
  readonly size = input<string>('md');
  readonly scrollable = input<boolean>(false);
  readonly backdrop = input<boolean>(true);
  readonly open = input<boolean | undefined>(undefined);
  readonly defaultOpen = input<boolean>(false);
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
  private readonly footerSlots = contentChildren('[footer]');

  private static idCounter = 0;
  readonly modalId = computed(() => this.id() || `modal-${++Modal.idCounter}`);
  readonly titleId = computed(() => `${this.modalId()}-title`);

  readonly internalOpen = signal(false);
  readonly visible = computed(() => this.open() ?? this.internalOpen());
  readonly resolvedSize = computed(() => (sizes.has(this.size()) ? this.size() : 'md'));
  readonly hasHeaderSlot = computed(() => this.headerSlots().length > 0);
  readonly hasFooterSlot = computed(() => this.footerSlots().length > 0);

  readonly classes = computed(() =>
    [
      'modal',
      this.resolvedSize() !== 'md' && `modal_${this.resolvedSize()}`,
      this.scrollable() && 'modal_scrollable',
      this.visible() && 'is-open',
      this.hostClass(),
    ]
      .filter(Boolean)
      .join(' '),
  );

  readonly footerClasses = computed(() =>
    [
      'modal_footer',
      this.footerAlign() !== 'end' && `modal_footer-${this.footerAlign()}`,
      this.footerAlign() === 'even' &&
        this.footerRatio() !== '1-1' &&
        `modal_footer-even-${this.footerRatio()}`,
      this.footerNoPadBottom() && 'modal_footer-no-pad-b',
    ]
      .filter(Boolean)
      .join(' '),
  );

  constructor() {
    if (this.defaultOpen()) this.internalOpen.set(true);

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

        documentModalCounts.set(doc, (documentModalCounts.get(doc) || 0) + 1);
        doc.body.classList.add('is-modal-open');
        requestAnimationFrame(() => el.focus());

        const onKeyDown = (event: KeyboardEvent) => {
          if (event.key === 'Escape') this.requestClose('escape', event);
        };
        doc.addEventListener('keydown', onKeyDown);
        cleanup = () => {
          doc.removeEventListener('keydown', onKeyDown);
          const remaining = Math.max(0, (documentModalCounts.get(doc) || 1) - 1);
          documentModalCounts.set(doc, remaining);
          if (remaining === 0) doc.body.classList.remove('is-modal-open');
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
    if (this.backdrop()) this.requestClose('backdrop', event);
  }
}

export default Modal;
