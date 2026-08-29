import { Component, computed, input } from '@angular/core';

const STATUSES = new Set(['', 'success', 'exception']);
const SIZES = new Set(['sm', 'md', 'lg']);
const COLORS = new Set(['primary', 'success', 'warning', 'danger']);

function normalizePercent(value: number | string | undefined): number {
  return Math.min(100, Math.max(0, Number(value) || 0));
}

@Component({
  selector: 'Progress',
  standalone: true,
  template: `
    <div [class]="classes()" data-component="Progress">
      @if (showInfo() || label()) {
        <div class="progress_header">
          @if (label()) { <span class="progress_label">{{ label() }}</span> }
          @if (showInfo()) { <span class="progress_value">{{ displayValue() }}</span> }
        </div>
      }
      <div
        class="progress_track"
        role="progressbar"
        [attr.aria-valuenow]="indeterminate() ? null : normalizedPercent()"
        aria-valuemin="0"
        aria-valuemax="100"
        [attr.aria-label]="ariaLabel()"
        [attr.aria-busy]="indeterminate() || null"
        [style.background]="inside() ? 'var(--color-border-subtle)' : null"
      >
        <span class="progress_bar" [style.width.%]="normalizedPercent()">
          @if (inside()) { {{ displayValue() }} }
        </span>
      </div>
    </div>
  `,
})
export class Progress {
  readonly hostClass = input<string>('');
  readonly percent = input<number>(0);
  readonly status = input<string>('');
  readonly size = input<string>('md');
  readonly showInfo = input<boolean>(false);
  readonly label = input<string | undefined>(undefined);
  readonly color = input<string>('primary');
  readonly striped = input<boolean>(false);
  readonly animated = input<boolean>(false);
  readonly indeterminate = input<boolean>(false);
  readonly inside = input<boolean>(false);
  readonly block = input<boolean>(false);
  readonly ariaLabel = input<string>('진행률');

  readonly normalizedPercent = computed(() => normalizePercent(this.percent()));
  readonly resolvedStatus = computed(() =>
    STATUSES.has(this.status()) ? this.status() : '',
  );
  readonly resolvedSize = computed(() => (SIZES.has(this.size()) ? this.size() : 'md'));
  readonly resolvedColor = computed(() =>
    COLORS.has(this.color()) ? this.color() : 'primary',
  );

  readonly colorClass = computed(() => {
    const status = this.resolvedStatus();
    if (status === 'success') return 'color_success';
    if (status === 'exception') return 'color_danger';
    return `color_${this.resolvedColor()}`;
  });

  readonly displayValue = computed(() => `${this.normalizedPercent()}%`);

  readonly classes = computed(() =>
    [
      'progress',
      this.colorClass(),
      this.block() ? 'progress_block' : 'progress_fit',
      this.resolvedSize() !== 'md' && `progress_${this.resolvedSize()}`,
      this.striped() && 'progress_striped',
      this.animated() && 'progress_animated',
      this.indeterminate() && 'is-indeterminate',
      this.inside() && 'progress_inside',
      this.hostClass(),
    ]
      .filter(Boolean)
      .join(' '),
  );
}

export default Progress;
