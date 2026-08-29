import { Component, computed, input } from '@angular/core';

const PARAGRAPH_WIDTHS = ['', 'skeleton_w-md', 'skeleton_w-sm'];

function paragraphCount(paragraph: boolean | number | undefined): number {
  if (paragraph === true) return 3;
  return typeof paragraph === 'number' ? Math.max(0, paragraph) : 0;
}

@Component({
  selector: 'Skeleton',
  standalone: true,
  template: `
    <div
      [class]="groupClass()"
      data-component="Skeleton"
      role="status"
      aria-live="polite"
      aria-busy="true"
      [attr.aria-label]="ariaLabel()"
    >
      @if (avatar()) {
        <div class="skeleton_row">
          <span [class]="itemClass() + ' skeleton_circle'" aria-hidden="true"></span>
          @if (lineCount() > 0) {
            <div class="skeleton_row-body">
              @for (line of lineIndices(); track line) {
                <span
                  [class]="[itemClass(), 'skeleton_text', paragraphWidth(line)].filter(Boolean).join(' ')"
                  aria-hidden="true"
                ></span>
              }
            </div>
          }
        </div>
      } @else if (round()) {
        <span [class]="itemClass() + ' skeleton_circle'" aria-hidden="true"></span>
      } @else {
        <span [class]="itemClass() + ' skeleton_title'" aria-hidden="true"></span>
        @for (line of defaultLineIndices(); track line) {
          <span
            [class]="[itemClass(), 'skeleton_text', paragraphWidth(line)].filter(Boolean).join(' ')"
            aria-hidden="true"
          ></span>
        }
      }
      <ng-content />
    </div>
  `,
})
export class Skeleton {
  readonly hostClass = input<string>('');
  readonly active = input<boolean>(true);
  readonly avatar = input<boolean>(false);
  readonly paragraph = input<boolean | number>(false);
  readonly round = input<boolean>(false);
  readonly ariaLabel = input<string>('콘텐츠 로딩 중');

  readonly lineCount = computed(() => paragraphCount(this.paragraph()));
  readonly defaultLineCount = computed(() =>
    this.paragraph() === false ? 3 : this.lineCount(),
  );

  readonly lineIndices = computed(() =>
    Array.from({ length: this.lineCount() }, (_, index) => index),
  );
  readonly defaultLineIndices = computed(() =>
    Array.from({ length: this.defaultLineCount() }, (_, index) => index),
  );

  readonly groupClass = computed(() =>
    ['skeleton_group', !this.active() && 'skeleton_static', this.hostClass()]
      .filter(Boolean)
      .join(' '),
  );

  readonly itemClass = computed(() =>
    ['skeleton', !this.active() && 'skeleton_static'].filter(Boolean).join(' '),
  );

  paragraphWidth(index: number): string {
    return PARAGRAPH_WIDTHS[index] || (index === 0 ? '' : 'skeleton_w-lg');
  }
}

export default Skeleton;
