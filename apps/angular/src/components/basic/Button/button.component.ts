import { Component, computed, input, output } from '@angular/core';

@Component({
  selector: 'Button',
  standalone: true,
  template: `
    @switch (tag()) {
      @case ('a') {
        <a
          [attr.aria-busy]="loading() || null"
          [attr.aria-disabled]="ariaDisabled() || disabled() || null"
          [attr.aria-expanded]="expanded() ?? (open() || null)"
          [attr.aria-haspopup]="haspopup()"
          [attr.aria-invalid]="invalid() || error() || null"
          [attr.aria-label]="ariaLabel()"
          [class]="classes()"
          data-component="Button"
          [attr.data-ripple]="ripple() ? 'true' : 'false'"
          [href]="href()"
          [attr.role]="role() ?? (needsButtonSemantics() ? 'button' : null)"
          [attr.tabindex]="inactive() ? -1 : tabindex() ?? (needsButtonSemantics() ? 0 : null)"
          (click)="handleClick($event)"
          (keydown)="handleKeydown($event)"
        >
          @if (loading()) { <span class="btn_spinner" aria-hidden="true"></span> }
          <ng-content select="[icon-before]" />
          @if (!iconOnly()) { <span class="btn_label"><ng-content>{{ label() }}</ng-content></span> } @else { <ng-content /> }
          <ng-content select="[icon-after]" />
          @if (variant() === 'select' || selectCaret()) {
            <svg class="icon" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path d="m9 6 6 6-6 6" /></svg>
          }
        </a>
      }
      @case ('div') {
        <div
          [attr.aria-busy]="loading() || null"
          [attr.aria-disabled]="ariaDisabled() || disabled() || null"
          [attr.aria-expanded]="expanded() ?? (open() || null)"
          [attr.aria-haspopup]="haspopup()"
          [attr.aria-invalid]="invalid() || error() || null"
          [attr.aria-label]="ariaLabel()"
          [class]="classes()"
          data-component="Button"
          [attr.data-ripple]="ripple() ? 'true' : 'false'"
          [attr.role]="role() ?? 'button'"
          [attr.tabindex]="inactive() ? -1 : tabindex() ?? 0"
          (click)="handleClick($event)"
          (keydown)="handleKeydown($event)"
        >
          @if (loading()) { <span class="btn_spinner" aria-hidden="true"></span> }
          <ng-content select="[icon-before]" />
          @if (!iconOnly()) { <span class="btn_label"><ng-content>{{ label() }}</ng-content></span> } @else { <ng-content /> }
          <ng-content select="[icon-after]" />
          @if (variant() === 'select' || selectCaret()) {
            <svg class="icon" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path d="m9 6 6 6-6 6" /></svg>
          }
        </div>
      }
      @default {
        <button
          [attr.aria-busy]="loading() || null"
          [attr.aria-disabled]="ariaDisabled() || null"
          [attr.aria-expanded]="expanded() ?? (open() || null)"
          [attr.aria-haspopup]="haspopup()"
          [attr.aria-invalid]="invalid() || error() || null"
          [attr.aria-label]="ariaLabel()"
          [class]="classes()"
          data-component="Button"
          [attr.data-ripple]="ripple() ? 'true' : 'false'"
          [disabled]="disabled()"
          [type]="type()"
          (click)="handleClick($event)"
          (keydown)="handleKeydown($event)"
        >
          @if (loading()) { <span class="btn_spinner" aria-hidden="true"></span> }
          <ng-content select="[icon-before]" />
          @if (!iconOnly()) { <span class="btn_label"><ng-content>{{ label() }}</ng-content></span> } @else { <ng-content /> }
          <ng-content select="[icon-after]" />
          @if (variant() === 'select' || selectCaret()) {
            <svg class="icon" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path d="m9 6 6 6-6 6" /></svg>
          }
        </button>
      }
    }
  `,
})
export class Button {
  readonly hostClass = input<string>('');
  readonly label = input<string>('Button');
  readonly ripple = input<boolean>(true);
  readonly variant = input<string>('filled');
  readonly color = input<string>('primary');
  readonly size = input<string>('md');
  readonly iconOnly = input<boolean>(false);
  readonly vertical = input<boolean>(false);
  readonly round = input<boolean>(false);
  readonly block = input<boolean>(false);
  readonly grow = input<boolean | string>(false);
  readonly fit = input<boolean>(false);
  readonly loading = input<boolean>(false);
  readonly open = input<boolean>(false);
  readonly error = input<boolean>(false);
  readonly placeholder = input<boolean>(false);
  readonly selectText = input<boolean>(false);
  readonly selectCaret = input<boolean>(false);
  readonly disabled = input<boolean>(false);
  readonly ariaDisabled = input<boolean>(false);
  readonly ariaLabel = input<string | undefined>(undefined);
  readonly haspopup = input<string | boolean | undefined>(undefined);
  readonly expanded = input<boolean | undefined>(undefined);
  readonly invalid = input<boolean>(false);
  readonly tag = input<string>('button');
  readonly href = input<string | undefined>(undefined);
  readonly role = input<string | undefined>(undefined);
  readonly tabindex = input<number | undefined>(undefined);
  readonly type = input<string>('button');

  readonly click = output<Event>();
  readonly keydown = output<Event>();

  readonly inactive = computed(() => this.disabled() || this.ariaDisabled() || this.loading());
  readonly needsButtonSemantics = computed(
    () => this.tag() === 'div' || (this.tag() === 'a' && !this.href()),
  );
  readonly classes = computed(() =>
    [
      'btn',
      this.variant() === 'select' ? 'btn_select' : `btn_${this.variant()}`,
      this.variant() !== 'ghost' ? `color_${this.color()}` : '',
      this.size() !== 'md' ? `btn_${this.size()}` : '',
      this.selectText() ? 'btn_select-text' : '',
      this.placeholder() ? 'btn_select-placeholder' : '',
      this.iconOnly() ? 'btn_icon-only' : '',
      this.vertical() ? 'btn_vertical' : '',
      this.round() ? 'btn_round' : '',
      this.block() ? 'btn_block' : '',
      this.grow() === true ? 'btn_grow' : '',
      this.grow() === '2' ? 'btn_grow-2' : '',
      this.fit() ? 'btn_fit' : '',
      this.ariaDisabled() ? 'is-disabled' : '',
      this.loading() ? 'is-loading' : '',
      this.open() ? 'is-open' : '',
      this.error() ? 'is-error' : '',
      this.hostClass(),
    ]
      .filter(Boolean)
      .join(' '),
  );

  handleClick(event: Event) {
    if (this.inactive()) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    this.click.emit(event);
  }

  handleKeydown(event: KeyboardEvent) {
    if (this.inactive()) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    if (this.needsButtonSemantics() && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
      (event.currentTarget as HTMLElement).click();
    }
    this.keydown.emit(event);
  }
}

export default Button;
