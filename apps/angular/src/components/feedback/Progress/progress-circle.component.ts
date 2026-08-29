/**
 * ProgressCircle 원본 구현.
 *   피드백 상태와 노출 동작을 관리하고 필요한 접근성 역할과 사용자 이벤트를 연결합니다.
 */
import { Component, computed, input, output } from '@angular/core';


@Component({
  selector: 'ProgressCircle',
  standalone: true,
  template: `<div
    [class]="classes()"
    data-component="ProgressCircle"
    role="progressbar"
    [attr.aria-valuenow]="value()"
    aria-valuemin="0"
    aria-valuemax="100"
    [attr.aria-label()]="ariaLabel()"
    [style]="{ '--progress-percent()': value }()"
  >
    
    <svg class="progress_circle-svg" viewBox="0 0 100 100" aria-hidden="true">
      <circle class="progress_circle-track" cx="50" cy="50" r="45" />
      <circle class="progress_circle-bar" cx="50" cy="50" r="45" /></svg
    ><span class="progress_circle-value">{{ value() }}%</span>
  </div>`,
})
export class ProgressCircle {
  readonly hostClass = input<string>('');
  readonly percent = input<number>(0); // 0~100 진행률입니다.
  readonly color = input<string>('primary'); // 원형 막대 의미 색상입니다.
  readonly size = input<string>('md'); // 원형 크기입니다.
  readonly ariaLabel = input<string>('진행률'); // progressbar의 접근성 이름입니다.


  private readonly p = () => ({
    percent: this.percent(),
    color: this.color(),
    size: this.size(),
    ariaLabel: this.ariaLabel(),
  });


  // 원형 진행률 값과 표현 옵션을 prop으로 받습니다.


  // 진행률을 0~100 범위로 제한합니다.
  readonly value = computed(() => Math.min(100, Math.max(0, Number(this.p().percent) || 0)));
  // 원형 Progress 클래스와 색상·크기를 조합합니다.
  readonly classes = computed(() =>
    [
      'progress', // Progress 공통 루트 클래스입니다.
      'progress_circle', // 원형 변형입니다.
      `color_${['primary', 'success', 'warning', 'danger'].includes(this.p().color) ? this.p().color : 'primary'}`, // 의미 색상입니다.
      this.p().size !== 'md' && `progress_${this.p().size}`, // md가 아닐 때만 크기 변형입니다.
    ].filter(Boolean),
  ); // 미적용 항목을 제거합니다.
}

export default ProgressCircle;
