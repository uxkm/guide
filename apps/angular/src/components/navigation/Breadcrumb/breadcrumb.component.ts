import { Component, computed, contentChildren, input } from '@angular/core';
import BreadcrumbItem from './breadcrumb-item.component';

export interface BreadcrumbItemData {
  key?: string;
  label?: string;
  href?: string;
  current?: boolean;
  disabled?: boolean;
  icon?: boolean;
  ariaLabel?: string;
}

const SEPARATORS = new Set(['chevron', 'slash', 'dot']);
const SIZES = new Set(['sm', 'md', 'lg']);

@Component({
  selector: 'Breadcrumb',
  standalone: true,
  imports: [BreadcrumbItem],
  template: `
    <nav
      [class]="classes()"
      [attr.aria-label]="ariaLabel()"
      data-component="Breadcrumb"
    >
      <ol class="breadcrumb_list">
        @if (items().length) {
          @for (item of items(); track item.key ?? item.label ?? $index; let index = $index) {
            <BreadcrumbItem
              [label]="item.label"
              [href]="item.href"
              [current]="item.current ?? index === items().length - 1"
              [disabled]="item.disabled"
              [icon]="item.icon"
              [ariaLabel]="item.ariaLabel"
            />
          }
        } @else {
          <ng-content />
        }
      </ol>
    </nav>
  `,
})
export class Breadcrumb {
  readonly hostClass = input<string>('');
  readonly items = input<BreadcrumbItemData[]>([]);
  readonly ariaLabel = input<string>('경로');
  readonly separator = input<string>('chevron');
  readonly size = input<string>('md');

  readonly projectedItems = contentChildren(BreadcrumbItem);

  readonly resolvedSeparator = computed(() =>
    SEPARATORS.has(this.separator()) ? this.separator() : 'chevron',
  );
  readonly resolvedSize = computed(() => (SIZES.has(this.size()) ? this.size() : 'md'));

  readonly classes = computed(() =>
    [
      'breadcrumb',
      this.resolvedSeparator() !== 'chevron' && `breadcrumb_sep-${this.resolvedSeparator()}`,
      this.resolvedSize() !== 'md' && `breadcrumb_${this.resolvedSize()}`,
      this.hostClass(),
    ]
      .filter(Boolean)
      .join(' '),
  );
}

export default Breadcrumb;
