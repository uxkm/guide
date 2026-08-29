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
import { ACCORDION_CONTEXT } from './accordion.component';

@Component({
  selector: 'AccordionItem',
  standalone: true,
  imports: [Button, Icon],
  template: `
    <div [class]="classes()">
      <div class="accordion_heading" role="heading" [attr.aria-level]="headingLevel()">
        <Button
          [attr.id]="triggerId()"
          variant="text"
          color="default"
          hostClass="accordion_trigger"
          [expanded]="isOpen()"
          [attr.aria-controls]="panelId()"
          [disabled]="disabled()"
          [ripple]="ripple()"
          (click)="toggle()"
          (keydown)="handleKeydown($event)"
        >
          <span class="accordion_label">{{ resolvedTitle() }}</span>
          @if (extra() != null) {
            <span class="accordion_extra">{{ extra() }}</span>
          }
          <span icon-after><Icon name="chevron-down" hostClass="accordion_icon" /></span>
        </Button>
      </div>
      <div
        #panel
        [id]="panelId()"
        class="accordion_panel"
        role="region"
        [attr.aria-labelledby]="triggerId()"
        [hidden]="slide() ? null : !isOpen()"
      >
        <div class="accordion_content">
          <ng-content>{{ content() }}</ng-content>
        </div>
      </div>
    </div>
  `,
})
export class AccordionItem {
  readonly hostClass = input<string>('');
  readonly label = input<string | undefined>(undefined);
  readonly title = input<string | undefined>(undefined);
  readonly content = input<string | undefined>(undefined);
  readonly extra = input<string | undefined>(undefined);
  readonly open = input<boolean>(false);
  readonly disabled = input<boolean>(false);
  readonly headingLevel = input<number>(3);
  readonly ripple = input<boolean>(true);

  private readonly accordion = inject(ACCORDION_CONTEXT, { optional: true });
  private readonly panel = viewChild<ElementRef<HTMLElement>>('panel');
  private readonly destroyRef = inject(DestroyRef);

  private static uidCounter = 0;
  readonly uid = `accordion-${++AccordionItem.uidCounter}`;
  readonly triggerId = computed(() => `accordion-trigger-${this.uid}`);
  readonly panelId = computed(() => `accordion-panel-${this.uid}`);

  readonly isOpen = signal(false);
  private firstSlideSync = true;

  readonly resolvedTitle = computed(() => this.title() ?? this.label());

  readonly classes = computed(() =>
    [
      'accordion_item',
      this.isOpen() && 'is-open',
      this.disabled() && 'is-disabled',
      this.hostClass(),
    ]
      .filter(Boolean)
      .join(' '),
  );

  readonly slide = computed(() => this.accordion?.effect() === 'slide');

  constructor() {
    effect(() => {
      this.isOpen.set(this.open());
    });

    afterNextRender(() => {
      const unregister = this.accordion?.registerItem({
        id: this.triggerId(),
        disabled: () => this.disabled(),
        isOpen: () => this.isOpen(),
        setOpen: (value) => this.isOpen.set(value),
      });
      if (unregister) this.destroyRef.onDestroy(unregister);

      effect(() => {
        if (!this.slide()) return;
        const el = this.panel()?.nativeElement;
        if (el) setSlideRegionOpen(el, this.isOpen(), !this.firstSlideSync);
        this.firstSlideSync = false;
      });
    });
  }

  toggle() {
    this.accordion?.toggleItem(this.triggerId());
  }

  handleKeydown(event: KeyboardEvent) {
    if (this.accordion?.focusAdjacent(this.triggerId(), event.key)) {
      event.preventDefault();
    }
  }
}

export default AccordionItem;
