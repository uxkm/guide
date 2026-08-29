/**
 * Badge 원본 구현.
 *   데이터 표시 구조와 시각 상태를 공통 CSS 클래스 및 접근성 속성으로 표현합니다.
 */
import { Component, computed, input, output } from '@angular/core';


@Component({
  selector: 'Badge',
  standalone: true,
  template: `<span
    
    [class]="classes()"
    [attr.aria-label()]="ariaLabel()"
    [role]="dotOnly() ? 'status' : undefined()"
    data-component="Badge"
    >@if (!dotOnly()) { <template
      ><ng-content>{{ label() }}</ng-content></template
    ></span
  >`,
})
export class Badge {
  readonly hostClass = input<string>('');
  readonly label = input<unknown>(); // children 대신 표시할 텍스트입니다.
  readonly color = input<string>('primary'); // color_* 공통 색상 클래스입니다.
  readonly size = input<string>('md'); // sm · md · lg 크기입니다.
  readonly dot = input<unknown>(false); // 텍스트 옆 상태 점을 표시합니다.
  readonly count = input<unknown>(false); // 카운트형 배지 스타일입니다.
  readonly dotOnly = input<unknown>(false); // 텍스트 없는 독립 상태 점입니다.
  readonly ariaLabel = input<unknown>(); // 접근성 이름입니다. 상태 점에 권장합니다.


  private readonly p = () => ({
    label: this.label(),
    color: this.color(),
    size: this.size(),
    dot: this.dot(),
    count: this.count(),
    dotOnly: this.dotOnly(),
    ariaLabel: this.ariaLabel(),
  });
  hostAttrs(): Record<string, unknown> { return {}; }
  hostAttr(_name: string): unknown { return undefined; }

  // class를 포함한 전달 속성을 최외곽 span에 직접 적용합니다.


  // 텍스트, 크기, 상태 점, 카운트와 접근성 이름을 prop으로 받습니다.



  // prop을 badge_*와 color_* 공통 클래스로 변환합니다.
  readonly classes = computed(() =>
    [
      this.p().dotOnly ? 'badge_dot-only' : 'badge',
      `color_${this.p().color}`,
      this.p().size !== 'md' && `badge_${this.p().size}`,
      !this.p().dotOnly && this.p().dot && 'badge_dot',
      !this.p().dotOnly && this.p().count && 'badge_count',
      this.hostClass(),
    ].filter(Boolean),
  );
}

export default Badge;
