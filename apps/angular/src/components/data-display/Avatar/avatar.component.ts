import { Component, computed, effect, input, signal } from '@angular/core';

const VALID_SIZES = new Set(['sm', 'md', 'lg', 'xl']);

@Component({
  selector: 'Avatar',
  standalone: true,
  template: `
    <span
      [class]="classes()"
      [attr.aria-hidden]="ariaHidden() || null"
      data-component="Avatar"
    >
      @if (showImage()) {
        <img class="avatar_image" [src]="src()" [alt]="alt()" (error)="onImageError()" />
      } @else {
        <ng-content select="[icon]" />
        <ng-content>{{ initials() }}</ng-content>
      }
      @if (badgeColor()) {
        <span
          class="avatar_badge"
          [class]="'color_' + badgeColor()"
          role="img"
          [attr.aria-label]="badgeLabel()"
        ></span>
      }
    </span>
  `,
})
export class Avatar {
  readonly hostClass = input<string>('');
  readonly src = input<string | undefined>(undefined);
  readonly alt = input<string>('');
  readonly initials = input<string | undefined>(undefined);
  readonly color = input<string | undefined>(undefined);
  readonly size = input<string>('md');
  readonly square = input<boolean>(false);
  readonly badgeColor = input<string | undefined>(undefined);
  readonly badgeLabel = input<string | undefined>(undefined);
  readonly ariaHidden = input<boolean>(false);

  readonly imageError = signal(false);

  readonly resolvedSize = computed(() =>
    VALID_SIZES.has(this.size()) ? this.size() : 'md',
  );

  readonly showImage = computed(() => Boolean(this.src()) && !this.imageError());

  readonly classes = computed(() =>
    [
      'avatar',
      this.color() && `color_${this.color()}`,
      this.resolvedSize() !== 'md' && `avatar_${this.resolvedSize()}`,
      this.square() && 'avatar_square',
      this.hostClass(),
    ]
      .filter(Boolean)
      .join(' '),
  );

  constructor() {
    effect(() => {
      this.src();
      this.imageError.set(false);
    });
  }

  onImageError() {
    this.imageError.set(true);
  }
}

export default Avatar;
