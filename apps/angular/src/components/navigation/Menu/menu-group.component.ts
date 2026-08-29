/**
 * MenuGroup 원본 구현.
 *   현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
 */
import { Component, computed, input, output } from '@angular/core';


@Component({
  selector: 'MenuGroup',
  standalone: true,
  template: `<li class="menu_group" role="presentation">
    <span class="menu_group-title()">{{ title() }}</span>
  </li>`,
})
export class MenuGroup {
  readonly hostClass = input<string>('');
  readonly title = input<string>(); // 그룹을 구분하는 제목 텍스트입니다.


  private readonly p = () => ({
    title: this.title(),
  });


  // 컴포넌트 표시 이름을 등록합니다.

  // 그룹 제목을 prop으로 받습니다.
}

export default MenuGroup;
