import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'Divider',
  standalone: true,
  template: `
    @switch (rootTag()) {
      @case ('hr') { <hr [class]="classes()" data-component="Divider" [attr.aria-hidden]="vertical() ? 'true' : null" /> }
      @case ('span') {
        <span [class]="classes()" data-component="Divider" [attr.aria-hidden]="vertical() ? 'true' : null">
          <ng-content>{{ label() }}</ng-content>
        </span>
      }
      @default {
        <div [class]="classes()" data-component="Divider" [attr.aria-hidden]="vertical() ? 'true' : null">
          <ng-content>{{ label() }}</ng-content>
        </div>
      }
    }
  `,
})
export class Divider {
  readonly hostClass = input<string>('');
  readonly as = input<string | undefined>(undefined);
  readonly tag = input<string>('auto');
  readonly vertical = input<boolean>(false);
  readonly dashed = input<boolean>(false);
  readonly plain = input<boolean>(false);
  readonly orient = input<string | undefined>(undefined);
  readonly orientation = input<string>('');
  readonly label = input<string | undefined>(undefined);

  private readonly orientations = new Set(['', 'left', 'right']);
  private readonly tags = new Set(['auto', 'hr', 'div', 'span']);

  readonly hasContent = computed(() => Boolean(this.label()));
  readonly resolvedOrient = computed(() => this.orient() ?? this.orientation());
  readonly resolvedTag = computed(() => (this.tags.has(this.tag()) ? this.tag() : 'auto'));
  readonly rootTag = computed(() => {
    if (this.as()) return this.as();
    if (this.resolvedTag() !== 'auto') return this.resolvedTag();
    if (this.vertical()) return 'span';
    if (this.hasContent()) return 'div';
    return 'hr';
  });

  readonly classes = computed(() =>
    [
      'divider',
      this.vertical() && 'divider_vertical',
      this.dashed() && 'divider_dashed',
      this.plain() && 'divider_plain',
      this.orientations.has(this.resolvedOrient()) &&
        this.resolvedOrient() &&
        `divider_orient-${this.resolvedOrient()}`,
      this.hostClass(),
    ]
      .filter(Boolean)
      .join(' '),
  );
}

export default Divider;
