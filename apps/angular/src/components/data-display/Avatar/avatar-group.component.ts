/**
 * AvatarGroup 원본 구현.
 *   데이터 표시 구조와 시각 상태를 공통 CSS 클래스 및 접근성 속성으로 표현합니다.
 */
import { Component, computed, input, output } from '@angular/core';


@Component({
  selector: 'AvatarGroup',
  standalone: true,
  template: `<div class="avatar_group" [attr.aria-label()]="ariaLabel()" data-component="AvatarGroup"><ng-content /></div>`,
})
export class AvatarGroup {
  readonly hostClass = input<string>('');
  readonly ariaLabel = input<unknown>(); // 그룹의 접근성 이름입니다.


  private readonly p = () => ({
    ariaLabel: this.ariaLabel(),
  });



}

export default AvatarGroup;
