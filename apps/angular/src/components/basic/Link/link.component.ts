import { Component, computed, contentChildren, input, output } from '@angular/core';

const COLORS = new Set(['primary', 'muted', 'success', 'warning', 'danger', 'info']);
const SIZES = new Set(['', 'sm', 'lg', 'xl']);

@Component({
  selector: 'Link',
  standalone: true,
  template: `
    @switch (rootTag()) {
      @case ('button') {
        <button
          [class]="classes()"
          data-component="Link"
          [attr.data-ripple]="ripple() ? 'true' : 'false'"
          [disabled]="disabled()"
          [type]="'button'"
          [attr.aria-current]="active() ? 'page' : null"
          [attr.aria-disabled]="disabled() || null"
          [attr.aria-label]="ariaLabel()"
          [attr.tabindex]="disabled() ? -1 : null"
          (click)="handleClick($event)"
        >
          <ng-content select="[icon]" />
          @if (showLabel()) { <ng-content>{{ label() }}</ng-content> }
          <ng-content select="[icon-after]" />
        </button>
      }
      @default {
        <a
          [class]="classes()"
          data-component="Link"
          [attr.data-ripple]="ripple() ? 'true' : 'false'"
          [href]="href() || '#'"
          [attr.rel]="rel()"
          [attr.target]="target()"
          [attr.aria-current]="active() ? 'page' : null"
          [attr.aria-disabled]="disabled() || null"
          [attr.aria-label]="ariaLabel()"
          [attr.tabindex]="disabled() ? -1 : null"
          (click)="handleClick($event)"
        >
          <ng-content select="[icon]" />
          @if (showLabel()) { <ng-content>{{ label() }}</ng-content> }
          <ng-content select="[icon-after]" />
        </a>
      }
    }
  `,
})
export class Link {
  readonly hostClass = input<string>('');
  readonly as = input<string>('a');
  readonly ripple = input<boolean>(true);
  readonly color = input<string>('primary');
  readonly size = input<string>('');
  readonly underline = input<boolean>(false);
  readonly noUnderline = input<boolean>(false);
  readonly standalone = input<boolean>(false);
  readonly nav = input<boolean>(false);
  readonly block = input<boolean>(false);
  readonly back = input<boolean>(false);
  readonly iconOnly = input<boolean>(false);
  readonly active = input<boolean>(false);
  readonly disabled = input<boolean>(false);
  readonly label = input<string | undefined>(undefined);
  readonly href = input<string | undefined>(undefined);
  readonly target = input<string | undefined>(undefined);
  readonly rel = input<string | undefined>(undefined);
  readonly ariaLabel = input<string | undefined>(undefined);

  readonly click = output<Event>();

  private readonly projected = contentChildren('*');

  readonly resolvedColor = computed(() =>
    COLORS.has(this.color()) ? this.color() : 'primary',
  );
  readonly resolvedSize = computed(() => (SIZES.has(this.size()) ? this.size() : ''));
  readonly rootTag = computed(() => (this.as() === 'button' ? 'button' : 'a'));

  readonly showLabel = computed(
    () => !this.iconOnly() && (this.projected().length > 0 || Boolean(this.label())),
  );

  readonly classes = computed(() =>
    [
      'link',
      `color_${this.resolvedColor()}`,
      this.resolvedSize() && `size_${this.resolvedSize()}`,
      this.underline() && 'link_underline',
      this.noUnderline() && 'link_no-underline',
      this.standalone() && 'link_standalone',
      this.nav() && 'link_nav',
      this.block() && 'link_block',
      this.back() && 'link_back',
      this.iconOnly() && 'link_icon-only',
      this.active() && 'is-active',
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
    if (!this.href() || this.href() === '#') event.preventDefault();
    this.click.emit(event);
  }
}

export default Link;
