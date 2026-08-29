import { Component, computed, contentChildren, input, output } from '@angular/core';

const directions = new Set(['horizontal', 'vertical']);
const sizes = new Set(['sm', 'md', 'lg']);

@Component({
  selector: 'Steps',
  standalone: true,
  template: `
    <ol [class]="classes()" [attr.aria-label]="ariaLabel()" data-component="Steps" data-steps>
      <ng-content />
    </ol>
  `,
})
export class Steps {
  readonly hostClass = input<string>('');
  readonly current = input<number | undefined>(undefined);
  readonly direction = input<string>('horizontal');
  readonly size = input<string>('md');
  readonly dot = input<boolean>(false);
  readonly iconStyle = input<boolean>(false);
  readonly navigable = input<boolean>(false);
  readonly align = input<string>('');
  readonly ariaLabel = input<string | undefined>(undefined);

  readonly change = output<number>();

  readonly resolvedDirection = computed(() =>
    directions.has(this.direction()) ? this.direction() : 'horizontal',
  );
  readonly resolvedSize = computed(() => (sizes.has(this.size()) ? this.size() : 'md'));

  readonly classes = computed(() =>
    [
      'steps',
      this.resolvedDirection() === 'vertical' && 'steps_vertical',
      this.resolvedSize() !== 'md' && `steps_${this.resolvedSize()}`,
      this.dot() && 'steps_dot',
      this.iconStyle() && 'steps_icon-style',
      this.navigable() && 'steps_navigable',
      this.align() === 'center' && 'steps_align-center',
      this.hostClass(),
    ]
      .filter(Boolean)
      .join(' '),
  );
}

export default Steps;
