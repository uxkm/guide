/**
 * NavbarItem 원본 구현.
 *   현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
 */
import { Component, computed, input, output } from '@angular/core';


@Component({
  selector: 'NavbarItem',
  standalone: true,
  template: `<li class="navbar_item">
    <a
      [href()]="href()"
      [class]="['navbar_link', active() && 'is-active()']()"
      [attr.aria-current]="active() ? 'page' : undefined()"
      @click.prevent="$emit('click', $event)"
      ><slot>{{ label() }}</slot
      ><ng-content select="[badge]" /></a>
  </li>`,
})
export class NavbarItem {
  readonly hostClass = input<string>('');
  readonly label = input<unknown>(); // 링크에 표시할 기본 텍스트입니다.
  readonly href = input<string>('#'); // 항목이 가리키는 대상 주소입니다.
  readonly active = input<unknown>(false); // 현재 페이지 항목인지 여부입니다.

  readonly click = output<Event>();

  private readonly p = () => ({
    label: this.label(),
    href: this.href(),
    active: this.active(),
  });


  // 컴포넌트 표시 이름을 등록합니다.

  // 레이블, 주소, 활성 상태를 prop으로 받습니다.

   // 링크 클릭 시 부모로 전달하는 이벤트입니다.
}

export default NavbarItem;
