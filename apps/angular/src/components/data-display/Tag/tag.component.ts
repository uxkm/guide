import { Component, computed, contentChildren, input, output } from '@angular/core';

const VALID_VARIANTS = new Set(['filled', 'solid', 'outline', 'borderless']);
const VALID_SIZES = new Set(['sm', 'md', 'lg']);

@Component({
  selector: 'Tag',
  standalone: true,
  template: `
    @if (splitControl()) {
      <span
        [class]="classes()"
        data-component="Tag"
        [attr.aria-disabled]="disabled() || null"
      >
        @if (checkable() || add()) {
          <button
            class="tag_control"
            [attr.data-ripple]="rippleAttr()"
            type="button"
            [disabled]="disabled()"
            [attr.aria-pressed]="checkable() ? selected() : null"
            (click)="handleClick($event)"
          >
            <ng-content select="[icon]" />
            <ng-content>{{ label() }}</ng-content>
          </button>
        } @else {
          <a
            class="tag_control"
            [attr.data-ripple]="rippleAttr()"
            [href]="disabled() ? null : href()"
            [attr.aria-disabled]="disabled() || null"
            [attr.tabindex]="disabled() ? -1 : null"
            (click)="handleClick($event)"
          >
            <ng-content select="[icon]" />
            <ng-content>{{ label() }}</ng-content>
          </a>
        }
        @if (closable()) {
          <button
            class="tag_close"
            type="button"
            [attr.aria-label]="closeLabel() || '태그 제거'"
            [disabled]="disabled()"
            (click)="handleClose($event)"
          >
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path d="m6 6 12 12M18 6 6 18" />
            </svg>
          </button>
        }
      </span>
    } @else if (checkable() || add()) {
      <button
        [class]="classes()"
        data-component="Tag"
        [attr.data-ripple]="rippleAttr()"
        type="button"
        [disabled]="disabled()"
        [attr.aria-pressed]="checkable() ? selected() : null"
        (click)="handleClick($event)"
      >
        <ng-content select="[icon]" />
        <ng-content>{{ label() }}</ng-content>
        @if (closable()) {
          <button
            class="tag_close"
            type="button"
            [attr.aria-label]="closeLabel() || '태그 제거'"
            [disabled]="disabled()"
            (click)="handleClose($event)"
          >
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path d="m6 6 12 12M18 6 6 18" />
            </svg>
          </button>
        }
      </button>
    } @else if (href()) {
      <a
        [class]="classes()"
        data-component="Tag"
        [attr.data-ripple]="rippleAttr()"
        [href]="disabled() ? null : href()"
        [attr.aria-disabled]="disabled() || null"
        [attr.tabindex]="disabled() ? -1 : null"
        (click)="handleClick($event)"
      >
        <ng-content select="[icon]" />
        <ng-content>{{ label() }}</ng-content>
        @if (closable()) {
          <button
            class="tag_close"
            type="button"
            [attr.aria-label]="closeLabel() || '태그 제거'"
            [disabled]="disabled()"
            (click)="handleClose($event)"
          >
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path d="m6 6 12 12M18 6 6 18" />
            </svg>
          </button>
        }
      </a>
    } @else {
      <span
        [class]="classes()"
        data-component="Tag"
        [attr.aria-disabled]="disabled() || null"
      >
        <ng-content select="[icon]" />
        <ng-content>{{ label() }}</ng-content>
        @if (closable()) {
          <button
            class="tag_close"
            type="button"
            [attr.aria-label]="closeLabel() || '태그 제거'"
            [disabled]="disabled()"
            (click)="handleClose($event)"
          >
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path d="m6 6 12 12M18 6 6 18" />
            </svg>
          </button>
        }
      </span>
    }
  `,
})
export class Tag {
  readonly hostClass = input<string>('');
  readonly label = input<string | undefined>(undefined);
  readonly color = input<string>('primary');
  readonly variant = input<string>('filled');
  readonly size = input<string>('md');
  readonly round = input<boolean>(false);
  readonly checkable = input<boolean>(false);
  readonly add = input<boolean>(false);
  readonly closable = input<boolean>(false);
  readonly selected = input<boolean>(false);
  readonly disabled = input<boolean>(false);
  readonly ripple = input<boolean | undefined>(undefined);
  readonly href = input<string | undefined>(undefined);
  readonly closeLabel = input<string | undefined>(undefined);

  readonly click = output<Event>();
  readonly close = output<Event>();

  private readonly projected = contentChildren('*');

  readonly resolvedVariant = computed(() =>
    VALID_VARIANTS.has(this.variant()) ? this.variant() : 'filled',
  );
  readonly resolvedSize = computed(() =>
    VALID_SIZES.has(this.size()) ? this.size() : 'md',
  );
  readonly interactive = computed(() => this.checkable() || this.add() || Boolean(this.href()));
  readonly splitControl = computed(() => this.closable() && this.interactive());

  readonly rippleAttr = computed(() => {
    if (this.ripple() === false) return 'false';
    if (this.ripple() === true || this.interactive()) return 'true';
    return null;
  });

  readonly classes = computed(() =>
    [
      'tag',
      `color_${this.color()}`,
      this.resolvedVariant() !== 'filled' && `tag_${this.resolvedVariant()}`,
      this.resolvedSize() !== 'md' && `tag_${this.resolvedSize()}`,
      this.round() && 'tag_round',
      this.checkable() && 'tag_checkable',
      this.add() && 'tag_add',
      this.selected() && 'is-selected',
      this.disabled() && 'is-disabled',
      this.hostClass(),
    ]
      .filter(Boolean)
      .join(' '),
  );

  handleClick(event: Event) {
    if (this.disabled()) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    this.click.emit(event);
  }

  handleClose(event: Event) {
    event.stopPropagation();
    this.close.emit(event);
  }
}

export default Tag;
