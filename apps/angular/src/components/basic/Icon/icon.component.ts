import { NgTemplateOutlet } from '@angular/common';
import { Component, computed, input, output } from '@angular/core';

@Component({
  selector: 'Icon',
  standalone: true,
  imports: [NgTemplateOutlet],
  template: `
    @if (button() || circle() || square()) {
      @switch (wrapperTag()) {
        @case ('button') {
          <button
            type="button"
            [class]="wrapperClass()"
            [attr.data-ripple]="button() ? (ripple() ? 'true' : 'false') : null"
            [attr.aria-label]="label()"
          >
            <ng-container *ngTemplateOutlet="svgTpl" />
          </button>
        }
        @default {
          <span
            [class]="wrapperClass()"
            [attr.aria-label]="label()"
            [attr.aria-hidden]="!label() ? 'true' : null"
            [attr.role]="label() ? 'img' : null"
          >
            <ng-container *ngTemplateOutlet="svgTpl" />
          </span>
        }
      }
    } @else {
      <svg
        [class]="svgClass()"
        [attr.aria-hidden]="label() ? null : 'true'"
        [attr.aria-label]="label()"
        [attr.role]="label() ? 'img' : null"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        @if (title()) {
          <title>{{ title() }}</title>
        }
        <ng-container *ngTemplateOutlet="pathsTpl" />
      </svg>
    }

    <ng-template #svgTpl>
      <svg
        class="icon"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <ng-container *ngTemplateOutlet="pathsTpl" />
      </svg>
    </ng-template>

    <ng-template #pathsTpl>
      <ng-content>
        @switch (name()) {
          @case ('plus') { <path d="M12 5v14M5 12h14" /> }
          @case ('minus') { <path d="M5 12h14" /> }
          @case ('download') { <path d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14" /> }
          @case ('upload') { <path d="M5 16v5h14v-5M12 17V3m0 0-4 4m4-4 4 4" /> }
          @case ('trash') { <path d="M4 7h16M9 7V4h6v3m-9 0 1 14h10l1-14M10 11v6m4-6v6" /> }
          @case ('check') { <path d="m5 12 4 4L19 6" /> }
          @case ('warning') { <path d="M12 3 2.5 20h19L12 3ZM12 9v4m0 3h.01" /> }
          @case ('alert-triangle') { <path d="M12 3 2.5 20h19L12 3ZM12 9v4m0 3h.01" /> }
          @case ('chevron') { <path d="m9 6 6 6-6 6" /> }
          @case ('chevron-right') { <path d="m9 6 6 6-6 6" /> }
          @case ('chevron-left') { <path d="m15 6-6 6 6 6" /> }
          @case ('chevron-down') { <path d="m6 9 6 6 6-6" /> }
          @case ('search') { <path d="M18 18 21 21M19 11a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z" /> }
          @case ('inbox') { <path d="M4 5h16l2 9v5H2v-5l2-9ZM2 14h5l2 3h6l2-3h5" /> }
          @case ('menu') { <path d="M4 6h16M4 12h16M4 18h16" /> }
          @case ('edit') { <path d="M4 20h4L19 9l-4-4L4 16v4Zm9.5-13.5 4 4" /> }
          @case ('close') { <path d="m6 6 12 12M18 6 6 18" /> }
          @case ('home') { <path d="m3 11 9-8 9 8M5 10v11h14V10M10 21v-7h4v7" /> }
          @case ('user') { <path d="M16 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM4 21a8 8 0 0 1 16 0" /> }
          @case ('star') { <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z" /> }
          @case ('info') { <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM12 11v6m0-10h.01" /> }
          @case ('check-circle') { <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-13 0 3 3 5-6" /> }
          @case ('x-circle') { <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-12-3 6 6m0-6-6 6" /> }
          @case ('bell') { <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M14 21h-4" /> }
          @case ('loader') { <path d="M21 12a9 9 0 1 1-6.2-8.6" /> }
          @case ('arrow-left') { <path d="M19 12H5m7 7-7-7 7-7" /> }
          @default { <path d="M12 5v14M5 12h14" /> }
        }
      </ng-content>
    </ng-template>
  `,
})
export class Icon {
  readonly hostClass = input<string>('');
  readonly name = input<string>('plus');
  readonly color = input<string | undefined>(undefined);
  readonly size = input<string>('md');
  readonly inline = input<boolean>(false);
  readonly spin = input<boolean>(false);
  readonly button = input<boolean>(false);
  readonly circle = input<boolean>(false);
  readonly square = input<boolean>(false);
  readonly pulse = input<boolean>(false);
  readonly ripple = input<boolean>(true);
  readonly ariaLabel = input<string | undefined>(undefined);
  readonly title = input<string | undefined>(undefined);

  readonly click = output<Event>();

  readonly label = computed(() => this.ariaLabel() ?? this.title());

  readonly svgClass = computed(() =>
    [
      'icon',
      this.size() !== 'md' && `icon_${this.size()}`,
      this.spin() && 'icon_spin',
      !this.button() && !this.circle() && !this.square() && this.color() && `color_${this.color()}`,
      !this.button() && !this.circle() && !this.square() && this.inline() && 'icon_inline',
      !this.button() && !this.circle() && !this.square() && this.hostClass(),
    ]
      .filter(Boolean)
      .join(' '),
  );

  readonly wrapperClass = computed(() =>
    [
      this.button() ? 'icon_button' : this.circle() ? 'icon_circle' : 'icon_square',
      this.color() && `color_${this.color()}`,
      this.inline() && 'icon_inline',
      this.circle() && this.pulse() && 'icon_pulse',
      this.circle() && this.size() === 'sm' && 'icon_circle-sm',
      this.circle() && this.size() === 'lg' && 'icon_circle-lg',
      this.hostClass(),
    ]
      .filter(Boolean)
      .join(' '),
  );

  readonly wrapperTag = computed(() => (this.button() ? 'button' : 'span'));
}

export default Icon;
