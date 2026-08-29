/**
 * Spin 원본 구현.
 *   피드백 상태와 노출 동작을 관리하고 필요한 접근성 역할과 사용자 이벤트를 연결합니다.
 */
import { Component, computed, input, output } from '@angular/core';


@Component({
  selector: 'Spin',
  standalone: true,
  template: `<div
    [class]="classes()"
    data-component="Spin"
    role="status"
    aria-live="polite"
    aria-busy="true"
    [attr.aria-label()]="ariaLabel()"
  >
    
    <span class="spin_indicator" aria-hidden="true" />
    @if (tip()) { <p class="spin_tip">{{ tip() }}</p>
    <ng-content />
  </div>`,
})
export class Spin {
  readonly hostClass = input<string>('');
  readonly size = input<string>('md'); // 스피너 크기입니다.
  readonly tip = input<unknown>(); // 표시기 아래 설명 문구입니다.
  readonly color = input<string>('primary'); // 의미 색상입니다.
  readonly inline = input<unknown>(false); // 인라인 배치입니다.
  readonly block = input<unknown>(false); // 전체 너비 배치입니다.
  readonly overlay = input<unknown>(false); // SpinWrap 등에서 쓰는 오버레이 배치입니다.
  readonly ariaLabel = input<string>('로딩 중'); // status 영역의 접근성 이름입니다.


  private readonly p = () => ({
    size: this.size(),
    tip: this.tip(),
    color: this.color(),
    inline: this.inline(),
    block: this.block(),
    overlay: this.overlay(),
    ariaLabel: this.ariaLabel(),
  });


  // 크기·색상·배치와 접근성 이름을 prop으로 받습니다.


  // 색상·크기·배치 클래스를 조합합니다.
  readonly classes = computed(() =>
    [
      'spin', // Spin 루트 클래스입니다.
      `color_${['primary', 'success', 'warning', 'danger'].includes(this.p().color) ? this.p().color : 'primary'}`, // 의미 색상입니다.
      this.p().size !== 'md' && `spin_${this.p().size}`, // md가 아닐 때만 크기 변형입니다.
      this.p().inline && 'spin_inline', // 인라인 배치입니다.
      this.p().block && 'spin_block', // 전체 너비 배치입니다.
      this.p().overlay && 'spin_overlay', // 오버레이 배치입니다.
    ].filter(Boolean),
  ); // 미적용 항목을 제거합니다.
}

export default Spin;
