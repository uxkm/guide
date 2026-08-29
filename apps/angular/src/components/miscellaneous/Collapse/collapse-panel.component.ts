import {
  afterNextRender,
  Component,
  computed,
  DestroyRef,
  effect,
  ElementRef,
  inject,
  input,
  signal,
  viewChild,
} from '@angular/core';
import { setSlideRegionOpen } from '@uxkm/interactions/slide-region';
import Button from '../../basic/Button/button.component';
import Icon from '../../basic/Icon/icon.component';
import { COLLAPSE_CONTEXT } from './collapse.component';

@Component({
  selector: 'CollapsePanel',
  standalone: true,
  imports: [Button, Icon],
  template: `
    <div [class]="classes()">
      <div class="collapse_header">
        <Button
          [attr.id]="triggerId()"
          variant="text"
          color="default"
          hostClass="collapse_trigger"
          [expanded]="isOpen()"
          [attr.aria-controls]="bodyId()"
          [disabled]="disabled()"
          [ripple]="ripple()"
          (click)="toggle()"
          (keydown)="handleKeydown($event)"
        >
          <span class="collapse_label">{{ resolvedTitle() }}</span>
          @if (extra() != null) {
            <span class="collapse_extra">{{ extra() }}</span>
          }
          <span icon-after><Icon name="chevron-down" hostClass="collapse_icon" /></span>
        </Button>
      </div>
      <div
        #body
        [id]="bodyId()"
        class="collapse_body"
        role="region"
        [attr.aria-labelledby]="triggerId()"
        [hidden]="slide() ? null : !isOpen()"
      >
        <div class="collapse_content">
          <ng-content>{{ content() }}</ng-content>
        </div>
      </div>
    </div>
  `,
})
export class CollapsePanel {
  readonly hostClass = input<string>('');
  readonly label = input<string | undefined>(undefined);
  readonly title = input<string | undefined>(undefined);
  readonly content = input<string | undefined>(undefined);
  readonly extra = input<string | undefined>(undefined);
  readonly open = input<boolean>(false);
  readonly disabled = input<boolean>(false);
  readonly ripple = input<boolean>(true);

  private readonly collapse = inject(COLLAPSE_CONTEXT, { optional: true });
  private readonly body = viewChild<ElementRef<HTMLElement>>('body');
  private readonly destroyRef = inject(DestroyRef);

  private static uidCounter = 0;
  readonly uid = `collapse-${++CollapsePanel.uidCounter}`;
  readonly triggerId = computed(() => `collapse-trigger-${this.uid}`);
  readonly bodyId = computed(() => `collapse-body-${this.uid}`);

  readonly isOpen = signal(false);
  private firstSlideSync = true;

  readonly resolvedTitle = computed(() => this.title() ?? this.label());

  readonly classes = computed(() =>
    [
      'collapse_panel',
      this.isOpen() && 'is-open',
      this.disabled() && 'is-disabled',
      this.hostClass(),
    ]
      .filter(Boolean)
      .join(' '),
  );

  readonly slide = computed(() => this.collapse?.effect() === 'slide');

  constructor() {
    effect(() => {
      this.isOpen.set(this.open());
    });

    afterNextRender(() => {
      const unregister = this.collapse?.registerPanel({
        id: this.triggerId(),
        disabled: () => this.disabled(),
        isOpen: () => this.isOpen(),
        setOpen: (value) => this.isOpen.set(value),
      });
      if (unregister) this.destroyRef.onDestroy(unregister);

      effect(() => {
        if (!this.slide()) return;
        const el = this.body()?.nativeElement;
        if (el) setSlideRegionOpen(el, this.isOpen(), !this.firstSlideSync);
        this.firstSlideSync = false;
      });
    });
  }

  toggle() {
    this.collapse?.togglePanel(this.triggerId());
  }

  handleKeydown(event: KeyboardEvent) {
    if (this.collapse?.focusAdjacent(this.triggerId(), event.key)) {
      event.preventDefault();
    }
  }
}

export default CollapsePanel;
