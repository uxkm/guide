/**
 * CardFooter 원본 구현.
 *   데이터 표시 구조와 시각 상태를 공통 CSS 클래스 및 접근성 속성으로 표현합니다.
 */
import { Component, computed, input, output } from '@angular/core';


@Component({
  selector: 'CardFooter',
  standalone: true,
  template: `<div v-bind="rootAttrs" [class]="classes()"><ng-content /></div>`,
})
export class CardFooter {
  readonly hostClass = input<string>('');
  readonly between = input<unknown>(false); // 양끝 정렬 변형 여부입니다.


  private readonly p = () => ({
    between: this.between(),
  });
  hostAttrs(): Record<string, unknown> { return {}; }
  hostAttr(_name: string): unknown { return undefined; }

  // between과 사용자 class를 푸터 변형 클래스에 합칩니다.
  readonly classes = computed(() =>
    ['card_footer', this.p().between && 'card_footer-between', this.hostClass()].filter(Boolean),
  );
  readonly rootAttrs = computed(() => {
    const { class: _class, ...rest } = this.hostAttrs();
    return rest;
  });
}

export default CardFooter;
