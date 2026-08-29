/**
 * CardBody 원본 구현.
 *   데이터 표시 구조와 시각 상태를 공통 CSS 클래스 및 접근성 속성으로 표현합니다.
 */
import { Component, computed, input, output } from '@angular/core';


@Component({
  selector: 'CardBody',
  standalone: true,
  template: `<div v-bind="rootAttrs" class="card_body" [class]="attrs.class()"><ng-content /></div>`,
})
export class CardBody {
  readonly hostClass = input<string>('');


  private readonly p = () => ({

  });
  hostAttrs(): Record<string, unknown> { return {}; }
  hostAttr(_name: string): unknown { return undefined; }

  // class를 제외한 전달 속성은 body 루트에 적용하고 사용자 class는 별도로 병합합니다.
  readonly rootAttrs = computed(() => {
    const { class: _class, ...rest } = this.hostAttrs();
    return rest;
  });
}

export default CardBody;
