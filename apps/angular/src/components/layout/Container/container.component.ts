import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'Container',
  standalone: true,
  template: `
    <div [class]="classes()" data-component="Container">
      <ng-content>Container</ng-content>
    </div>
  `,
})
export class Container {
  readonly hostClass = input<string>('');
  readonly as = input<string>('div');
  readonly size = input<string>('');
  readonly fluid = input<boolean>(false);

  private readonly sizes = new Set(['', 'sm', 'md', 'lg', 'xl']);

  readonly resolvedSize = computed(() => (this.sizes.has(this.size()) ? this.size() : ''));

  readonly classes = computed(() =>
    [
      'container',
      this.resolvedSize() && `container_${this.resolvedSize()}`,
      this.fluid() && 'container_fluid',
      this.hostClass(),
    ]
      .filter(Boolean)
      .join(' '),
  );
}

export default Container;
