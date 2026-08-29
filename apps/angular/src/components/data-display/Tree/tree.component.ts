/**
 * Tree 원본 구현.
 *   데이터 표시 구조와 시각 상태를 공통 CSS 클래스 및 접근성 속성으로 표현합니다.
 */
import { Component, computed, input, output } from '@angular/core';


@Component({
  selector: 'Tree',
  standalone: true,
  template: `<ul
    v-bind="fallthroughAttrs"
    [class]="classes()"
    data-component="Tree"
    role="tree"
    [attr.aria-label()]="ariaLabel()"
    [attr.aria-multiselectable()]="multiselectable() || undefined()"
  >
    <ng-content />
  </ul>`,
})
export class Tree {
  readonly hostClass = input<string>('');
  readonly bordered = input<unknown>(false); // 테두리 트리입니다.
  readonly lines = input<unknown>(false); // 계층 연결선을 표시합니다.
  readonly compact = input<unknown>(false); // 조밀한 패딩입니다.
  readonly ariaLabel = input<unknown>(); // 트리의 접근성 이름입니다.
  readonly multiselectable = input<unknown>(false); // 다중 선택을 허용합니다.


  private readonly p = () => ({
    bordered: this.bordered(),
    lines: this.lines(),
    compact: this.compact(),
    ariaLabel: this.ariaLabel(),
    multiselectable: this.multiselectable(),
  });
  hostAttrs(): Record<string, unknown> { return {}; }
  hostAttr(_name: string): unknown { return undefined; }

  // 트리 외형과 사용자 class를 tree_* 공통 클래스에 합칩니다.
  readonly classes = computed(() =>
    [
      'tree',
      this.p().bordered && 'tree_bordered',
      this.p().lines && 'tree_lines',
      this.p().compact && 'tree_compact',
      this.hostClass(),
    ].filter(Boolean),
  );
  readonly fallthroughAttrs = computed(() => {
    const { class: _class, ...rest } = this.hostAttrs();
    return rest;
  });
}

export default Tree;
