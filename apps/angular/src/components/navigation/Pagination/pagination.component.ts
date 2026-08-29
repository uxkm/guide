import { Component, computed, input, output } from '@angular/core';
import Button from '../../basic/Button/button.component';
import Icon from '../../basic/Icon/icon.component';

const sizes = new Set(['sm', 'md', 'lg']);

export function buildPaginationPages(totalPages: number, current: number) {
  if (totalPages <= 7) return Array.from({ length: totalPages }, (_, index) => index + 1);
  if (current <= 4) return [1, 2, 3, 4, 5, 'ellipsis-end', totalPages];
  if (current >= totalPages - 3) {
    return [
      1,
      'ellipsis-start',
      totalPages - 4,
      totalPages - 3,
      totalPages - 2,
      totalPages - 1,
      totalPages,
    ];
  }
  return [1, 'ellipsis-start', current - 1, current, current + 1, 'ellipsis-end', totalPages];
}

@Component({
  selector: 'Pagination',
  standalone: true,
  imports: [Button, Icon],
  template: `
    <nav
      [class]="classes()"
      [attr.aria-label]="ariaLabel()"
      data-component="Pagination"
      [attr.data-current]="active()"
      [attr.data-total-pages]="totalPages()"
    >
      @if (simple()) {
        <Button
          variant="ghost"
          color="default"
          size="sm"
          [iconOnly]="true"
          [ripple]="false"
          hostClass="pagination_btn pagination_prev"
          ariaLabel="이전 페이지"
          [disabled]="active() <= 1"
          (click)="goTo(active() - 1)"
        >
          <Icon icon-before name="chevron-left" size="sm" hostClass="pagination_icon" />
        </Button>
        <span class="pagination_simple-text" aria-live="polite">
          <span class="pagination_simple-current">{{ active() }}</span> / {{ totalPages() }}
        </span>
        <Button
          variant="ghost"
          color="default"
          size="sm"
          [iconOnly]="true"
          [ripple]="false"
          hostClass="pagination_btn pagination_next"
          ariaLabel="다음 페이지"
          [disabled]="active() >= totalPages()"
          (click)="goTo(active() + 1)"
        >
          <Icon icon-before name="chevron-right" size="sm" hostClass="pagination_icon" />
        </Button>
      } @else {
        <Button
          variant="ghost"
          color="default"
          size="sm"
          [iconOnly]="true"
          [ripple]="false"
          hostClass="pagination_btn pagination_prev"
          ariaLabel="이전 페이지"
          [disabled]="active() <= 1"
          (click)="goTo(active() - 1)"
        >
          <Icon icon-before name="chevron-left" size="sm" hostClass="pagination_icon" />
        </Button>
        <ul class="pagination_list">
          @for (page of pages(); track $index) {
            @if (page === 'ellipsis-start' || page === 'ellipsis-end') {
              <li class="pagination_item pagination_ellipsis" aria-hidden="true">…</li>
            } @else {
              <li class="pagination_item">
                <Button
                  variant="ghost"
                  color="default"
                  size="sm"
                  hostClass="pagination_btn"
                  [ariaLabel]="page + '페이지'"
                  [attr.aria-current]="page === active() ? 'page' : null"
                  (click)="goTo(page as number)"
                >
                  {{ page }}
                </Button>
              </li>
            }
          }
        </ul>
        <Button
          variant="ghost"
          color="default"
          size="sm"
          [iconOnly]="true"
          [ripple]="false"
          hostClass="pagination_btn pagination_next"
          ariaLabel="다음 페이지"
          [disabled]="active() >= totalPages()"
          (click)="goTo(active() + 1)"
        >
          <Icon icon-before name="chevron-right" size="sm" hostClass="pagination_icon" />
        </Button>
      }
    </nav>
  `,
})
export class Pagination {
  readonly hostClass = input<string>('');
  readonly current = input<number>(1);
  readonly total = input<number>(1);
  readonly pageSize = input<number>(10);
  readonly simple = input<boolean>(false);
  readonly minimal = input<boolean>(false);
  readonly size = input<string>('md');
  readonly round = input<boolean>(false);
  readonly ariaLabel = input<string>('페이지 이동');

  readonly change = output<number>();

  readonly resolvedSize = computed(() => (sizes.has(this.size()) ? this.size() : 'md'));

  readonly totalPages = computed(() =>
    Math.max(1, Math.ceil(Math.max(0, this.total()) / Math.max(1, this.pageSize()))),
  );

  readonly active = computed(() =>
    Math.min(this.totalPages(), Math.max(1, this.current())),
  );

  readonly pages = computed(() => buildPaginationPages(this.totalPages(), this.active()));

  readonly classes = computed(() =>
    [
      'pagination',
      this.simple() && 'pagination_simple',
      this.minimal() && 'pagination_minimal',
      this.resolvedSize() !== 'md' && `pagination_${this.resolvedSize()}`,
      this.round() && 'pagination_round',
      this.hostClass(),
    ]
      .filter(Boolean)
      .join(' '),
  );

  goTo(page: number) {
    const next = Math.min(this.totalPages(), Math.max(1, page));
    if (next !== this.active()) this.change.emit(next);
  }
}

export default Pagination;
