/**
 * BreadcrumbItem 원본 구현.
 *   현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
 */
import { Component, computed, input, output } from '@angular/core';


@Component({
  selector: 'BreadcrumbItem',
  standalone: true,
  template: `<li
    [class]="['breadcrumb_item', current() && 'is-current()']()"
    [attr.aria-current()]="current() ? 'page' : undefined()"
  >
    @if (href() && !current() && !disabled()) { <a
     
      [class]="linkClasses()"
      [href()]="href()"
      [attr.aria-label()]="ariaLabel()"
      ><ng-content>{{ label() }}</ng-content></a
    ><span } @else if (disabled()) { [class]="linkClasses()" aria-disabled()="true"
      ><ng-content>{{ label() }}</ng-content></span
    ><span } @else if (current()) { class="breadcrumb_current"
      ><ng-content>{{ label() }}</ng-content></span
    ><slot } @else {>{{ label() }}</slot>
  </li>`,
})
export class BreadcrumbItem {
  readonly hostClass = input<string>('');
  readonly label = input<unknown>(); // 경로 항목에 표시할 기본 텍스트입니다.
  readonly href = input<unknown>(); // 지정 시 링크로 렌더할 대상 주소입니다.
  readonly current = input<unknown>(false); // 현재 페이지 항목인지 여부입니다.
  readonly disabled = input<unknown>(false); // 링크 이동을 막을지 여부입니다.
  readonly icon = input<unknown>(false); // 아이콘형 링크 스타일을 적용할지 여부입니다.
  readonly ariaLabel = input<unknown>(); // 링크의 접근 가능한 이름을 지정합니다.


  private readonly p = () => ({
    label: this.label(),
    href: this.href(),
    current: this.current(),
    disabled: this.disabled(),
    icon: this.icon(),
    ariaLabel: this.ariaLabel(),
  });


  // 컴포넌트 표시 이름을 등록합니다.

  // 레이블, 주소, 현재·비활성, 아이콘, 접근성 이름을 prop으로 받습니다.


  // 아이콘·비활성 상태를 링크 클래스에 반영합니다.
  readonly linkClasses = computed(() =>
    ['breadcrumb_link', this.p().icon && 'breadcrumb_link-icon', this.p().disabled && 'is-disabled'].filter(
      Boolean,
    ),
  );
}

export default BreadcrumbItem;
