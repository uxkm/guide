/**
 * CarouselSlide 원본 구현.
 *   컴포넌트 상태와 사용자 상호작용을 관리하고 공통 CSS 및 접근성 계약을 적용합니다.
 */
import { Component, computed, input, output } from '@angular/core';


@Component({
  selector: 'CarouselSlide',
  standalone: true,
  template: `<div class="swiper-slide"><ng-content /></div>`,
})
export class CarouselSlide {
  readonly hostClass = input<string>('');


  private readonly p = () => ({

  });


  // 컴포넌트 표시 이름을 등록합니다.
}

export default CarouselSlide;
