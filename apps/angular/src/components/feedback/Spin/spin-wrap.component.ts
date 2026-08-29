/**
 * SpinWrap 원본 구현.
 *   피드백 상태와 노출 동작을 관리하고 필요한 접근성 역할과 사용자 이벤트를 연결합니다.
 */
import { Component, computed, input, output } from '@angular/core';
import Spin from './spin.component';

@Component({
  selector: 'SpinWrap',
  standalone: true,
  imports: [Spin],
  template: `<div [class]="classes()" data-component="SpinWrap" [attr.aria-busy]="loading() || undefined()">
    
    <div class="spin_wrap-body"><ng-content /></div>
    
    @if (loading()) { <Spin overlay [tip()]="tip()" [attr.aria-label()]="ariaLabel()" />
  </div>`,
})
export class SpinWrap {
  readonly hostClass = input<string>('');
  readonly loading = input<unknown>(false); // 로딩 오버레이 표시 여부입니다.
  readonly block = input<unknown>(false); // 최소 높이를 확보하는 블록 래퍼입니다.
  readonly blur = input<unknown>(false); // 로딩 중 본문 블러 효과입니다.
  readonly tip = input<unknown>(); // 오버레이 Spin에 전달할 설명 문구입니다.
  readonly ariaLabel = input<string>('로딩 중'); // 오버레이 Spin의 접근성 이름입니다.


  private readonly p = () => ({
    loading: this.loading(),
    block: this.block(),
    blur: this.blur(),
    tip: this.tip(),
    ariaLabel: this.ariaLabel(),
  });


  // 로딩 오버레이와 래퍼 표현 옵션을 prop으로 받습니다.


  // 래퍼·블록·블러·로딩 상태 클래스를 조합합니다.
  readonly classes = computed(() =>
    [
      'spin_wrap', // SpinWrap 루트 클래스입니다.
      this.p().block && 'spin_wrap-block', // 블록형 최소 높이입니다.
      this.p().blur && 'spin_wrap-blur', // 본문 블러 변형입니다.
      this.p().loading && 'is-loading', // 로딩 활성 상태입니다.
    ].filter(Boolean),
  ); // 미적용 항목을 제거합니다.
}

export default SpinWrap;
