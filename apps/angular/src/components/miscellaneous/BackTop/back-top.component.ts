import { DOCUMENT } from '@angular/common';
import {
  afterNextRender,
  Component,
  computed,
  DestroyRef,
  effect,
  ElementRef,
  inject,
  input,
  viewChild,
} from '@angular/core';
import { initBackTop } from '@uxkm/html/back-top';

@Component({
  selector: 'BackTop',
  standalone: true,
  template: `
    <div
      #root
      [class]="classes()"
      data-component="BackTop"
      [attr.data-back-top]="interactive() ? '' : null"
      [attr.data-target]="target() || null"
      [attr.data-visibility-height]="visibilityHeightData()"
    >
      <button
        type="button"
        class="btn btn_ghost back_top_btn"
        [attr.aria-label]="ariaLabel()"
        [attr.data-ripple]="ripple() ? 'surface' : 'false'"
      >
        <ng-content>
          <svg
            class="back_top_icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            aria-hidden="true"
          >
            <path d="m6 15 6-6 6 6" />
          </svg>
          @if (label()) {
            <span class="back_top_label">{{ label() }}</span>
          }
        </ng-content>
      </button>
    </div>
  `,
})
export class BackTop {
  readonly hostClass = input<string>('');
  readonly target = input<string | undefined>(undefined);
  readonly visibilityHeight = input<number>(400);
  readonly size = input<string>('md');
  readonly color = input<string>('');
  readonly label = input<string | undefined>(undefined);
  readonly ariaLabel = input<string>('맨 위로');
  readonly interactive = input<boolean>(true);
  readonly ripple = input<boolean>(true);

  private readonly root = viewChild<ElementRef<HTMLElement>>('root');
  private readonly document = inject(DOCUMENT);
  private readonly destroyRef = inject(DestroyRef);

  readonly resolvedSize = computed(() =>
    ['sm', 'md', 'lg'].includes(this.size()) ? this.size() : 'md',
  );

  readonly resolvedColor = computed(() =>
    ['', 'primary', 'ghost'].includes(this.color()) ? this.color() : '',
  );

  readonly classes = computed(() =>
    [
      'back_top',
      this.resolvedSize() !== 'md' && `back_top_${this.resolvedSize()}`,
      this.resolvedColor() && `back_top_${this.resolvedColor()}`,
      this.hostClass(),
    ]
      .filter(Boolean)
      .join(' '),
  );

  readonly visibilityHeightData = computed(() =>
    Number(this.visibilityHeight()) !== 400 ? this.visibilityHeight() : null,
  );

  constructor() {
    afterNextRender(() => {
      let cleanup: (() => void) | undefined;
      let portalHost: HTMLElement | null = null;

      effect(() => {
        cleanup?.();
        cleanup = undefined;
        const el = this.root()?.nativeElement;
        if (!el) return;

        if (!this.target() && this.document.body && el.parentElement !== this.document.body) {
          portalHost = this.document.body;
          portalHost.appendChild(el);
        }

        if (this.interactive()) cleanup = initBackTop(el);
      });

      this.destroyRef.onDestroy(() => {
        cleanup?.();
        const el = this.root()?.nativeElement;
        if (portalHost && el?.parentElement === portalHost) {
          portalHost.removeChild(el);
        }
      });
    });
  }
}

export default BackTop;
