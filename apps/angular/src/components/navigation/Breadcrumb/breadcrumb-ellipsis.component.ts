/**
 * BreadcrumbEllipsis 원본 구현.
 *   현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
 */
import { Component, computed, input, output } from '@angular/core';


@Component({
  selector: 'BreadcrumbEllipsis',
  standalone: true,
  template: `<li class="breadcrumb_item">
    <button
      type="button"
      class="breadcrumb_ellipsis"
      [attr.aria-label()]="label()"
      [attr.aria-expanded()]="expanded()"
      data-breadcrumb-ellipsis
      (click)="$emit('click', $event)($event)"
    >
      <ng-content>…</ng-content>
    </button>
  </li>`,
})
export class BreadcrumbEllipsis {
  readonly hostClass = input<string>('');
  readonly expanded = input<unknown>(false); // 숨겨진 경로가 펼쳐진 상태인지 여부입니다.
  readonly label = input<string>('숨겨진 경로 보기'); // 말줄임 버튼의 접근 가능한 이름입니다.

  readonly click = output<Event>();

  private readonly p = () => ({
    expanded: this.expanded(),
    label: this.label(),
  });


  // 컴포넌트 표시 이름을 등록합니다.

  // 펼침 상태와 접근 가능한 이름을 prop으로 받습니다.

   // 말줄임 버튼 클릭 시 부모로 전달합니다.
}

export default BreadcrumbEllipsis;
