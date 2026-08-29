import {
  afterNextRender,
  Component,
  computed,
  effect,
  ElementRef,
  input,
  signal,
  viewChild,
} from '@angular/core';
import { setSlideRegionOpen } from '@uxkm/interactions/slide-region';
import Button from '../../basic/Button/button.component';
import Icon from '../../basic/Icon/icon.component';

@Component({
  selector: 'CollapseExternal',
  standalone: true,
  imports: [Button, Icon],
  template: `
    <div [class]="hostClass()">
      @if (lead() != null) {
        <div>{{ lead() }}</div>
      }
      <Button
        variant="ghost"
        size="sm"
        [expanded]="isOpen()"
        [attr.aria-controls]="panelId()"
        [ripple]="ripple()"
        (click)="toggle()"
      >
        {{ triggerLabel() }}
        <span icon-after><Icon name="chevron-down" size="sm" /></span>
      </Button>
      <div
        #panel
        [id]="panelId()"
        [class]="panelClasses()"
        [attr.data-effect]="slide() ? 'slide' : null"
        [hidden]="slide() ? null : !isOpen()"
        [style.margin-top]="boxed() ? 'var(--space-sm)' : null"
      >
        <div [class]="boxed() ? 'collapse_inner' : ''">
          <ng-content />
        </div>
      </div>
    </div>
  `,
})
export class CollapseExternal {
  readonly hostClass = input<string>('');
  readonly triggerLabel = input<string>('더보기');
  readonly lead = input<string | undefined>(undefined);
  readonly open = input<boolean>(false);
  readonly effect = input<string | undefined>(undefined);
  readonly boxed = input<boolean>(true);
  readonly ripple = input<boolean>(true);

  private readonly panel = viewChild<ElementRef<HTMLElement>>('panel');

  private static uidCounter = 0;
  readonly panelId = computed(() => `collapse-external-${++CollapseExternal.uidCounter}`);

  readonly isOpen = signal(false);
  private firstSlideSync = true;

  readonly slide = computed(() => this.effect() === 'slide');

  readonly panelClasses = computed(() =>
    ['collapse', this.isOpen() && 'is-open'].filter(Boolean).join(' '),
  );

  constructor() {
    effect(() => {
      this.isOpen.set(this.open());
    });

    afterNextRender(() => {
      effect(() => {
        if (!this.slide()) return;
        const el = this.panel()?.nativeElement;
        if (el) setSlideRegionOpen(el, this.isOpen(), !this.firstSlideSync);
        this.firstSlideSync = false;
      });
    });
  }

  toggle() {
    this.isOpen.update((v) => !v);
  }
}

export default CollapseExternal;
