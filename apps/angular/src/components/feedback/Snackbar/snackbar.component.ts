import {
  afterNextRender,
  Component,
  computed,
  contentChildren,
  DestroyRef,
  inject,
  input,
  output,
  signal,
} from '@angular/core';
import { SNACKBAR_PLACEMENT_CONTEXT } from './snackbar-region.component';

const colors = new Set(['info', 'success', 'warning', 'danger']);
const sizes = new Set(['sm', 'md', 'lg']);
const motions = new Set(['fade', 'slide', 'none']);

@Component({
  selector: 'Snackbar',
  standalone: true,
  template: `
    @if (domVisible()) {
      <div
        [class]="classes()"
        data-component="Snackbar"
        [attr.role]="role()"
        [attr.data-motion]="resolvedMotion()"
        [attr.data-phase]="phase()"
        (animationend)="onAnimationEnd($event)"
      >
        @if (showIcon()) {
          <span class="snackbar_icon" aria-hidden="true"></span>
        }
        <div class="snackbar_message">
          <ng-content>{{ message() }}</ng-content>
        </div>
        @if (closable()) {
          <button
            type="button"
            class="snackbar_close"
            [attr.aria-label]="closeLabel()"
            (click)="dismiss('close', $event)"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        }
        @if (hasActionSlot()) {
          <div class="snackbar_action"><ng-content select="[action]" /></div>
        }
      </div>
    }
  `,
})
export class Snackbar {
  readonly hostClass = input<string>('');
  readonly message = input<string | undefined>(undefined);
  readonly color = input<string>('info');
  readonly size = input<string>('md');
  readonly motion = input<string>('fade');
  readonly placement = input<string | undefined>(undefined);
  readonly duration = input<number>(0);
  readonly role = input<string>('status');
  readonly closable = input<boolean>(false);
  readonly closeLabel = input<string>('알림 닫기');
  readonly showIcon = input<boolean>(true);
  readonly round = input<boolean>(false);

  readonly close = output<{ reason: string; event?: Event }>();

  private readonly region = inject(SNACKBAR_PLACEMENT_CONTEXT, { optional: true });
  private readonly actionSlots = contentChildren('[action]');
  private readonly destroyRef = inject(DestroyRef);

  readonly domVisible = signal(true);
  readonly phase = signal('entering');

  readonly resolvedColor = computed(() => (colors.has(this.color()) ? this.color() : 'info'));
  readonly resolvedSize = computed(() => (sizes.has(this.size()) ? this.size() : 'md'));
  readonly resolvedMotion = computed(() => (motions.has(this.motion()) ? this.motion() : 'fade'));
  readonly resolvedPlacement = computed(
    () => this.placement() ?? this.region?.resolvedPlacement() ?? 'bottom-center',
  );
  readonly hasActionSlot = computed(() => this.actionSlots().length > 0);

  readonly classes = computed(() =>
    [
      'snackbar',
      `color_${this.resolvedColor() === 'danger' ? 'error' : this.resolvedColor()}`,
      this.resolvedSize() !== 'md' && `snackbar_${this.resolvedSize()}`,
      `snackbar_${this.resolvedPlacement()}`,
      `snackbar_motion-${this.resolvedMotion()}`,
      this.phase(),
      this.round() && 'snackbar_round',
      this.hostClass(),
    ]
      .filter(Boolean)
      .join(' '),
  );

  private timer: ReturnType<typeof setTimeout> | null = null;

  constructor() {
    afterNextRender(() => {
      if (this.resolvedMotion() === 'none') this.phase.set('open');
      const ms = Number(this.duration());
      if (Number.isFinite(ms) && ms > 0) {
        this.timer = setTimeout(() => this.dismiss('timeout'), ms);
      }
      this.destroyRef.onDestroy(() => {
        if (this.timer) clearTimeout(this.timer);
      });
    });
  }

  dismiss(reason: string, event?: Event) {
    if (this.phase() === 'leaving') return;
    if (this.timer) clearTimeout(this.timer);
    if (this.resolvedMotion() === 'none') {
      this.domVisible.set(false);
      this.close.emit({ reason, event });
    } else {
      this.phase.set('leaving');
    }
  }

  onAnimationEnd(_event: AnimationEvent) {
    if (this.phase() === 'leaving') {
      this.domVisible.set(false);
      this.close.emit({ reason: 'close' });
    } else if (this.phase() === 'entering') {
      this.phase.set('open');
    }
  }
}

export default Snackbar;
