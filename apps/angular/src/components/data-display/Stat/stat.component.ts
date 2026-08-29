import { Component, computed, input } from '@angular/core';

const SIZES = new Set(['sm', 'md', 'lg']);

@Component({
  selector: 'Stat',
  standalone: true,
  template: `
    <div [class]="classes()" data-component="Stat">
      @if (showHeader()) {
        <div class="stat_header">
          <span class="stat_label">{{ title() }}</span>
          <span [class]="trendClasses()">
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path d="m6 15 6-6 6 6" />
            </svg>
            {{ trend() }}
          </span>
        </div>
      } @else if (title()) {
        <span class="stat_label">{{ title() }}</span>
      }

      @if (prefix() || suffix()) {
        <div class="stat_value-row">
          @if (prefix()) { <span class="stat_prefix">{{ prefix() }}</span> }
          @if (hasValue()) { <span class="stat_value">{{ value() }}</span> }
          @if (suffix()) { <span class="stat_suffix">{{ suffix() }}</span> }
        </div>
      } @else if (hasValue()) {
        <span class="stat_value">{{ value() }}</span>
      }

      @if (description()) {
        <span [class]="descriptionClasses()">{{ description() }}</span>
      } @else if (trend() && !showHeader()) {
        <span [class]="trendClasses()">
          <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path d="m6 15 6-6 6 6" />
          </svg>
          {{ trend() }}
        </span>
      }

      <ng-content />
    </div>
  `,
})
export class Stat {
  readonly hostClass = input<string>('');
  readonly title = input<string | undefined>(undefined);
  readonly value = input<string | number | undefined>(undefined);
  readonly prefix = input<string | undefined>(undefined);
  readonly suffix = input<string | undefined>(undefined);
  readonly description = input<string | undefined>(undefined);
  readonly trend = input<string | undefined>(undefined);
  readonly trendColor = input<string | undefined>(undefined);
  readonly size = input<string>('md');
  readonly card = input<boolean>(false);
  readonly shadow = input<boolean>(false);

  readonly resolvedSize = computed(() => (SIZES.has(this.size()) ? this.size() : 'md'));
  readonly hasValue = computed(() => this.value() != null && this.value() !== '');
  readonly showHeader = computed(() => Boolean(this.title() && this.trend()));

  readonly classes = computed(() =>
    [
      'stat',
      this.resolvedSize() !== 'md' && `stat_${this.resolvedSize()}`,
      this.card() && 'stat_card',
      this.shadow() && 'stat_shadow',
      this.hostClass(),
    ]
      .filter(Boolean)
      .join(' '),
  );

  readonly trendClasses = computed(() =>
    ['stat_trend', this.trendColor() && `color_${this.trendColor()}`]
      .filter(Boolean)
      .join(' '),
  );

  readonly descriptionClasses = computed(() =>
    ['stat_desc', this.description() && this.trendColor() && `color_${this.trendColor()}`]
      .filter(Boolean)
      .join(' '),
  );
}

export default Stat;
