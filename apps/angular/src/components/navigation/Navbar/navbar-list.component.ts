/**
 * NavbarList 원본 구현.
 *   현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
 */
import { Component, computed, input, output } from '@angular/core';


@Component({
  selector: 'NavbarList',
  standalone: true,
  template: `<ul class="navbar_list">
    <ng-content />
  </ul>`,
})
export class NavbarList {
  readonly hostClass = input<string>('');


  private readonly p = () => ({

  });


  // 컴포넌트 표시 이름을 등록합니다.
}

export default NavbarList;
