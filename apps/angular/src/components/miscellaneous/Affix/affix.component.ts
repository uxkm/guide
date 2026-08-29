import {
  afterNextRender,
  Component,
  computed,
  DestroyRef,
  effect,
  ElementRef,
  inject,
  input,
  output,
  signal,
  viewChild,
} from '@angular/core';
import { initAffix } from '@uxkm/html/affix';

const skins = new Set(['', 'bar', 'anchor']);

@Component({
  selector: 'Affix',
  standalone: true,
  template: `
    <div
      #root
      [class]="classes()"
      data-component="Affix"
      [attr.data-affix]="interactive() ? '' : null"
      [attr.data-target]="target() || null"
      [attr.data-offset-top]="offsetTopData()"
      [attr.data-offset-bottom]="offsetBottomData()"
    >
      <div class="affix_placeholder" aria-hidden="true" hidden></div>
      <div [class]="targetClass()">
        <ng-content />
      </div>
    </div>
  `,
})
export class Affix {
  readonly hostClass = input<string>('');
  readonly target = input<string | undefined>(undefined);
  readonly offsetTop = input<number>(0);
  readonly offsetBottom = input<number | undefined>(undefined);
  readonly skin = input<string>('');
  readonly interactive = input<boolean>(true);

  private readonly root = viewChild<ElementRef<HTMLElement>>('root');
  private readonly destroyRef = inject(DestroyRef);

  readonly resolvedSkin = computed(() => (skins.has(this.skin()) ? this.skin() : ''));

  readonly classes = computed(() =>
    ['affix', this.hostClass()].filter(Boolean).join(' '),
  );

  readonly targetClass = computed(() =>
    ['affix_target', this.resolvedSkin() && `affix_${this.resolvedSkin()}`]
      .filter(Boolean)
      .join(' '),
  );

  readonly offsetTopData = computed(() =>
    Number(this.offsetTop()) !== 0 ? this.offsetTop() : null,
  );

  readonly offsetBottomData = computed(() => {
    const v = this.offsetBottom();
    return v !== undefined && v !== null ? v : null;
  });

  constructor() {
    afterNextRender(() => {
      let cleanup: (() => void) | undefined;
      effect(() => {
        cleanup?.();
        cleanup = undefined;
        if (!this.interactive()) return;
        const el = this.root()?.nativeElement;
        if (el) cleanup = initAffix(el);
      });
      this.destroyRef.onDestroy(() => cleanup?.());
    });
  }
}

export default Affix;
