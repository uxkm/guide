import {
  afterNextRender,
  Component,
  computed,
  DestroyRef,
  effect,
  ElementRef,
  inject,
  input,
  viewChild,
} from '@angular/core';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

@Component({
  selector: 'Carousel',
  standalone: true,
  template: `
    <div
      #root
      [class]="classes()"
      data-component="Carousel"
      [attr.aria-label]="ariaLabel()"
    >
      <div class="swiper">
        <div class="swiper-wrapper">
          <ng-content />
        </div>
        @if (pagination()) {
          <div class="swiper-pagination"></div>
        }
        @if (navigation()) {
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        }
      </div>
    </div>
  `,
})
export class Carousel {
  readonly hostClass = input<string>('');
  readonly ariaLabel = input<string>('콘텐츠 슬라이드');
  readonly size = input<string>('md');
  readonly multi = input<boolean>(false);
  readonly dotsOutside = input<boolean>(false);
  readonly autoplay = input<boolean>(false);
  readonly delay = input<number>(4000);
  readonly loop = input<boolean>(false);
  readonly initialSlide = input<number>(0);
  readonly slidesPerView = input<number>(1);
  readonly spaceBetween = input<number>(0);
  readonly pagination = input<boolean>(true);
  readonly navigation = input<boolean>(true);

  private readonly root = viewChild<ElementRef<HTMLElement>>('root');
  private readonly destroyRef = inject(DestroyRef);

  readonly classes = computed(() =>
    [
      'carousel',
      this.size() !== 'md' && `carousel_${this.size()}`,
      this.multi() && 'carousel_multi',
      this.dotsOutside() && 'carousel_dots-outside',
      this.hostClass(),
    ]
      .filter(Boolean)
      .join(' '),
  );

  constructor() {
    afterNextRender(() => {
      let swiper: Swiper | undefined;
      effect(() => {
        const el = this.root()?.nativeElement?.querySelector('.swiper');
        if (!el || swiper) return;
        swiper = new Swiper(el as HTMLElement, {
          loop: this.loop(),
          initialSlide: this.initialSlide(),
          slidesPerView: this.slidesPerView(),
          spaceBetween: this.spaceBetween(),
          autoplay: this.autoplay() ? { delay: this.delay() } : false,
          pagination: this.pagination() ? { el: '.swiper-pagination', clickable: true } : undefined,
          navigation: this.navigation()
            ? { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }
            : undefined,
        });
      });
      this.destroyRef.onDestroy(() => swiper?.destroy());
    });
  }
}

export default Carousel;
