import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'Space',
  standalone: true,
  template: `
    <div [class]="classes()" data-component="Space">
      <ng-content>Space</ng-content>
    </div>
  `,
})
export class Space {
  readonly hostClass = input<string>('');
  readonly as = input<string>('div');
  readonly gap = input<string | undefined>(undefined);
  readonly size = input<string>('');
  readonly vertical = input<boolean>(false);
  readonly wrap = input<boolean>(false);
  readonly block = input<boolean>(false);
  readonly align = input<string>('');
  readonly justify = input<string>('');

  private readonly sizes = new Set(['', 'xs', 'sm', 'md', 'lg', 'xl']);
  private readonly aligns = new Set(['', 'start', 'center', 'end', 'baseline', 'stretch']);
  private readonly justifies = new Set(['', 'start', 'center', 'end', 'between']);

  readonly resolvedSize = computed(() => (this.gap() ?? this.size()) || 'md');

  readonly classes = computed(() =>
    [
      'space',
      this.sizes.has(this.resolvedSize()) &&
        this.resolvedSize() !== 'md' &&
        `space_gap-${this.resolvedSize()}`,
      this.vertical() && 'space_vertical',
      this.wrap() && 'space_wrap',
      this.block() && 'space_block',
      this.aligns.has(this.align()) && this.align() && `space_align-${this.align()}`,
      this.justifies.has(this.justify()) && this.justify() && `space_justify-${this.justify()}`,
      this.hostClass(),
    ]
      .filter(Boolean)
      .join(' '),
  );
}

export default Space;
