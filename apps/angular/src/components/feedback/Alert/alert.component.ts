/**
 * Alert 원본 구현.
 * 피드백 상태와 노출 동작을 관리하고 필요한 접근성 역할과 사용자 이벤트를 연결합니다.
 */
import { Component, computed, input, output, signal } from '@angular/core';

@Component({
  selector: 'Alert',
  standalone: true,
  template: `
    @if (visible()) {
      <div [class]="classes()" data-component="Alert" [attr.role]="role()">
        @if (showIcon()) {
          <ng-content select="[icon]">
            <svg class="alert_icon" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              @if (resolvedColor() === 'info') {
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4M12 8h.01" />
              } @else if (resolvedColor() === 'success') {
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <path d="M22 4 12 14.01l-3-3" />
              } @else if (resolvedColor() === 'warning') {
                <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                <path d="M12 9v4M12 17h.01" />
              } @else {
                <circle cx="12" cy="12" r="10" />
                <path d="m15 9-6 6M9 9l6 6" />
              }
            </svg>
          </ng-content>
        }
        <div class="alert_body">
          @if (title()) {
            <div class="alert_title">{{ title() }}</div>
          }
          @if (description()) {
            <p class="alert_desc"><ng-content>{{ description() }}</ng-content></p>
          } @else {
            <p class="alert_desc"><ng-content /></p>
          }
          <ng-content select="[actions]" />
        </div>
        @if (closable()) {
          <button type="button" class="alert_close" [attr.aria-label]="closeLabel()" (click)="handleClose($event)">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        }
      </div>
    }
  `,
})
export class Alert {
  readonly hostClass = input<string>('');
  readonly color = input<string>('info');
  readonly title = input<string | undefined>(undefined);
  readonly description = input<string | undefined>(undefined);
  readonly closable = input<boolean>(false);
  readonly showIcon = input<boolean>(true);
  readonly size = input<string>('md');
  readonly banner = input<boolean>(false);
  readonly role = input<string>('alert');
  readonly closeLabel = input<string>('알림 닫기');

  readonly close = output<Event>();

  readonly visible = signal(true);

  readonly resolvedColor = computed(() =>
    ['info', 'success', 'warning', 'danger'].includes(this.color()) ? this.color() : 'info',
  );

  readonly classes = computed(() => {
    const colorClass =
      this.resolvedColor() === 'danger' ? 'color_error' : `color_${this.resolvedColor()}`;
    return [
      'alert',
      colorClass,
      this.size() !== 'md' && `alert_${this.size()}`,
      this.banner() && 'alert_banner',
      this.hostClass(),
    ]
      .filter(Boolean)
      .join(' ');
  });

  handleClose(event: Event) {
    this.visible.set(false);
    this.close.emit(event);
  }
}

export default Alert;
