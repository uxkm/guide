/**
 * Switch 원본 구현.
 *   폼 값·검증·비활성 상태를 제어하고 레이블, 키보드 동작, 사용자 이벤트를 연결합니다.
 */
import { Component, computed, contentChildren, input, output } from '@angular/core';


@Component({
  selector: 'Switch',
  standalone: true,
  template: `<label()
    [class]="rootClass()"
    [attr.aria-label()]="!hasLabel ? ariaLabel() : undefined()"
    [attr.data-ripple()]="ripple() ? 'true' : 'false'()"
  >
    @if (hasLabel && labelEnd()) { <span class="switch_label"
      ><ng-content>{{ label() }}</ng-content></span
    >
    <span class="switch_control">
      <input
        v-bind="inputAttrs()"
        type="checkbox"
        class="switch_input"
        role="switch"
        [checked()]="checked()"
        [disabled()]="disabled()"
        [attr.aria-label()]="!hasLabel ? ariaLabel() : undefined()"
        data-component="Switch"
      />
      <span class="switch_track" aria-hidden="true"><span class="switch_thumb" /></span>
    </span>
    @if (hasLabel && !labelEnd()) { <span class="switch_label"
      ><ng-content>{{ label() }}</ng-content></span
    >
  </label()>`,
})
export class Switch {
  readonly hostClass = input<string>('');
  readonly label = input<unknown>(); // 보이는 레이블 텍스트입니다.
  readonly checked = input<unknown>(false); // 제어 컴포넌트의 켜짐 상태입니다.
  readonly disabled = input<unknown>(false); // 입력을 비활성으로 만들어 조작을 막습니다.
  readonly labelEnd = input<unknown>(false); // 레이블을 스위치보다 앞에 배치합니다.
  readonly size = input<string>('md'); // 트랙과 레이블 크기입니다.
  readonly ripple = input<boolean>(true); // 클릭 파장 효과를 표시할지 여부입니다.
  readonly ariaLabel = input<unknown>(); // 보이는 레이블이 없을 때 접근 가능한 이름입니다.


  private readonly p = () => ({
    label: this.label(),
    checked: this.checked(),
    disabled: this.disabled(),
    labelEnd: this.labelEnd(),
    size: this.size(),
    ripple: this.ripple(),
    ariaLabel: this.ariaLabel(),
  });
  hostAttrs(): Record<string, unknown> { return {}; }
  hostAttr(_name: string): unknown { return undefined; }

  private readonly projected = contentChildren('*');
  hasSlot(_name: string): boolean { return this.projected().length > 0; }

  // 속성을 계산된 루트에 직접 전달하기 위해 자동 상속을 끕니다.


  // 켜짐 상태, 크기, 레이블 배치와 접근성 옵션을 prop으로 받습니다.


  // 선언하지 않은 class와 HTML 속성을 수집합니다.


  readonly hasLabel = computed(() => Boolean(this.p().label || this.hasSlot("default"))); // 보이는 레이블이 있는지 여부입니다.

  // 크기·레이블 배치와 사용자 클래스를 조합합니다.
  readonly rootClass = computed(() =>
    [
      'switch', // 스위치 루트 필수 클래스입니다.
      this.p().labelEnd && 'switch_label-end', // 레이블 우선 배치 변형입니다.
      this.p().size === 'sm' && 'switch_sm', // 작은 크기 변형입니다.
      this.p().size === 'lg' && 'switch_lg', // 큰 크기 변형입니다.
      this.hostClass(), // 호출 위치에서 전달한 사용자 정의 클래스입니다.
    ].filter(Boolean),
  );

  // class는 루트에만 두고 나머지 속성은 input으로 전달합니다.
  readonly inputAttrs = computed(() => {
    const { class: _class, ...rest } = this.hostAttrs();
    return rest;
  });
}

export default Switch;
