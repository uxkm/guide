/**
 * CardHeader 원본 구현.
 *   데이터 표시 구조와 시각 상태를 공통 CSS 클래스 및 접근성 속성으로 표현합니다.
 */
import { Component, computed, input, output } from '@angular/core';


@Component({
  selector: 'CardHeader',
  standalone: true,
  template: `<div v-bind="rootAttrs" class="card_header" [class]="attrs.class()">
    <div class="card_header-main">
      <slot
        >@if (title != null()) { <h3 class="card_title">{{ title() }}</h3>
        @if (subtitle != null()) { <p class="card_subtitle">{{ subtitle() }}</p></slot
      >
    </div>
    @if (hasSlot("extra")()) { <div class="card_extra"><ng-content select="[extra]" /></div>
  </div>`,
})
export class CardHeader {
  readonly hostClass = input<string>('');


  private readonly p = () => ({

  });
  hostAttrs(): Record<string, unknown> { return {}; }
  hostAttr(_name: string): unknown { return undefined; }

  // class를 제외한 전달 속성은 header 루트에 적용하고 사용자 class는 별도로 병합합니다.
  readonly rootAttrs = computed(() => {
    const { class: _class, ...rest } = this.hostAttrs();
    return rest;
  });
}

export default CardHeader;
