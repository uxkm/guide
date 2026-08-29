import { Component, computed, input, output } from '@angular/core';
import Icon from '../../basic/Icon/icon.component';

const statuses = new Set(['finished', 'active', 'wait', 'error']);

@Component({
  selector: 'StepsItem',
  standalone: true,
  imports: [Icon],
  template: `
    <li
      [class]="classes()"
      [attr.aria-current]="!navigable() && resolvedStatus() === 'active' ? 'step' : null"
    >
      @if (navigable()) {
        <button
          type="button"
          class="steps_trigger"
          [disabled]="resolvedStatus() === 'wait'"
          [attr.aria-current]="resolvedStatus() === 'active' ? 'step' : null"
          (click)="handleClick($event)"
        >
          <span class="steps_head">
            <span class="steps_indicator" aria-hidden="true">
              @if (resolvedStatus() === 'finished') {
                <Icon name="check" hostClass="steps_icon" />
              } @else if (resolvedStatus() === 'error') {
                <Icon name="close" hostClass="steps_icon" />
              } @else {
                <span class="steps_index">{{ index() }}</span>
              }
            </span>
            @if (!isLast()) {
              <span class="steps_tail" aria-hidden="true"></span>
            }
          </span>
          <span class="steps_content">
            <span class="steps_title">{{ title() }}</span>
            @if (description() != null) {
              <span class="steps_desc">{{ description() }}</span>
            }
          </span>
        </button>
      } @else {
        <div class="steps_head">
          <span class="steps_indicator" aria-hidden="true">
            @if (resolvedStatus() === 'finished') {
              <Icon name="check" hostClass="steps_icon" />
            } @else if (resolvedStatus() === 'error') {
              <Icon name="close" hostClass="steps_icon" />
            } @else {
              <span class="steps_index">{{ index() }}</span>
            }
          </span>
          @if (!isLast()) {
            <span class="steps_tail" aria-hidden="true"></span>
          }
        </div>
        <div class="steps_content">
          <p class="steps_title">{{ title() }}</p>
          @if (description() != null) {
            <p class="steps_desc">{{ description() }}</p>
          }
        </div>
      }
    </li>
  `,
})
export class StepsItem {
  readonly hostClass = input<string>('');
  readonly title = input<string>('');
  readonly description = input<string | undefined>(undefined);
  readonly status = input<string>('wait');
  readonly index = input<number>(0);
  readonly isLast = input<boolean>(false);
  readonly navigable = input<boolean>(false);

  readonly click = output<Event>();

  readonly resolvedStatus = computed(() =>
    statuses.has(this.status()) ? this.status() : 'wait',
  );

  readonly classes = computed(() =>
    ['steps_item', `is-${this.resolvedStatus()}`, this.hostClass()].filter(Boolean).join(' '),
  );

  handleClick(event: Event) {
    this.click.emit(event);
  }
}

export default StepsItem;
