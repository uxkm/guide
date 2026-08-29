/**
 * Radio 원본 구현.
 *   폼 값·검증·비활성 상태를 제어하고 레이블, 키보드 동작, 사용자 이벤트를 연결합니다.
 */
import { Component, computed, contentChildren, input, output } from '@angular/core';


@Component({
  selector: 'Radio',
  standalone: true,
  template: `@if (!hasLabel()) { <label()
   
    class="radio_control"
    [class]="attrs.class()"
    [attr.aria-label()]="ariaLabel()"
    [attr.data-ripple()]="ripple() ? 'true' : 'false'()"
  >
    <input
      v-bind="inputAttrs()"
      type="radio"
      class="radio_input"
      [name()]="name()"
      [value()]="value()"
      [checked()]="checked()"
      [disabled()]="disabled()"
      data-component="Radio"
    />
    <span class="radio_box" aria-hidden="true" />
  </label()>
  
  <label() } @else { [class]="rootClass()" [attr.data-ripple()]="ripple() ? 'true' : 'false'()">
    @if (button()) { <input
     
      v-bind="inputAttrs()"
      type="radio"
      class="radio_input"
      [name()]="name()"
      [value()]="value()"
      [checked()]="checked()"
      [disabled()]="disabled()"
      data-component="Radio"
    />
    @if (labelEnd() && !button()) { <span class="radio_label"
      ><ng-content>{{ label() }}</ng-content></span
    >
    @if (!button()) { <span class="radio_control">
      <input
        v-bind="inputAttrs()"
        type="radio"
        class="radio_input"
        [name()]="name()"
        [value()]="value()"
        [checked()]="checked()"
        [disabled()]="disabled()"
        data-component="Radio"
      />
      <span class="radio_box" aria-hidden="true" />
    </span>
    @if (button() || !labelEnd()) { <span class="radio_label"
      ><ng-content>{{ label() }}</ng-content></span
    >
  </label()>`,
})
export class Radio {
  readonly hostClass = input<string>('');
  readonly label = input<unknown>(); // 보이는 레이블 텍스트입니다.
  readonly name = input<unknown>(); // 같은 그룹으로 묶을 라디오 name입니다.
  readonly value = input<unknown>(); // 폼 제출 시 전달할 값입니다.
  readonly checked = input<unknown>(false); // 제어 컴포넌트의 선택 상태입니다.
  readonly disabled = input<unknown>(false); // 입력을 비활성으로 만들어 조작을 막습니다.
  readonly labelEnd = input<unknown>(false); // 레이블을 입력보다 앞에 배치합니다.
  readonly button = input<unknown>(false); // 버튼형 라디오 변형을 사용합니다.
  readonly ripple = input<boolean>(true); // 클릭 파장 효과를 표시할지 여부입니다.
  readonly ariaLabel = input<unknown>(); // 보이는 레이블이 없을 때 접근 가능한 이름입니다.


  private readonly p = () => ({
    label: this.label(),
    name: this.name(),
    value: this.value(),
    checked: this.checked(),
    disabled: this.disabled(),
    labelEnd: this.labelEnd(),
    button: this.button(),
    ripple: this.ripple(),
    ariaLabel: this.ariaLabel(),
  });
  hostAttrs(): Record<string, unknown> { return {}; }
  hostAttr(_name: string): unknown { return undefined; }

  private readonly projected = contentChildren('*');
  hasSlot(_name: string): boolean { return this.projected().length > 0; }

  // 속성을 계산된 루트에 직접 전달하기 위해 자동 상속을 끕니다.


  // 그룹 이름, 제출 값, 선택 상태와 레이블 배치를 prop으로 받습니다.


  // 선언하지 않은 class와 HTML 속성을 수집합니다.


  readonly hasLabel = computed(() => Boolean(this.p().label || this.hasSlot("default"))); // 보이는 레이블이 있는지 여부입니다.

  // 레이아웃·버튼 변형과 사용자 클래스를 조합합니다.
  readonly rootClass = computed(() =>
    [
      'radio', // 라디오 루트 필수 클래스입니다.
      this.p().labelEnd && 'radio_label-end', // 레이블 우선 배치 변형입니다.
      this.p().button && 'radio_button', // 버튼형 변형입니다.
      this.hostClass(), // 호출 위치에서 전달한 사용자 정의 클래스입니다.
    ].filter(Boolean),
  );

  // class는 루트에만 두고 나머지 속성은 input으로 전달합니다.
  readonly inputAttrs = computed(() => {
    const { class: _class, ...rest } = this.hostAttrs();
    return rest;
  });
}

export default Radio;
