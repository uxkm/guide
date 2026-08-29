/**
 * TagGroup 원본 구현.
 *   데이터 표시 구조와 시각 상태를 공통 CSS 클래스 및 접근성 속성으로 표현합니다.
 */
import { Component, computed, input, output } from '@angular/core';


@Component({
  selector: 'TagGroup',
  standalone: true,
  template: `<div
    
    [class]="classes()"
    [attr.aria-label()]="ariaLabel()"
    data-component="TagGroup"
    role="group"
  >
    <ng-content />
  </div>`,
})
export class TagGroup {
  readonly hostClass = input<string>('');
  readonly tight = input<unknown>(false); // 태그 간격을 좁힙니다.
  readonly ariaLabel = input<unknown>(); // 그룹의 접근성 이름입니다.


  private readonly p = () => ({
    tight: this.tight(),
    ariaLabel: this.ariaLabel(),
  });
  hostAttrs(): Record<string, unknown> { return {}; }
  hostAttr(_name: string): unknown { return undefined; }

  // tight과 사용자 정의 class를 그룹 클래스에 합칩니다.
  readonly classes = computed(() =>
    ['tag_group', this.p().tight && 'tag_group-tight', this.hostClass()].filter(Boolean),
  );
}

export default TagGroup;
