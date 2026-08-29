/**
 * FormField 원본 구현.
 *   폼 값·검증·비활성 상태를 제어하고 레이블, 키보드 동작, 사용자 이벤트를 연결합니다.
 */
import { Component, computed, input, output } from '@angular/core';


@Component({
  selector: 'FormField',
  standalone: true,
  template: `@switch (as()) {
      @case ('a') { <a  [class]="classes()">@if (label()) { <label() class="form_field-label()" [for()]="props.for()">
      {{ label() }}
      @if (required()) { <span class="form_field-required()">
        <span aria-hidden="true">*</span>
        <span class="form_field-required()-text">필수 항목</span>
      </span>
    </label()>
    
    <div class="form_field-control">
      <ng-content />
    </div>
    
    @if (error()) { <p class="form_field-error()" role="alert">{{ error() }}</p>
    <p } @else if (hint()) { class="form_field-hint()">{{ hint() }}</p>
    
    @if (success()) { <p class="form_field-success()">{{ success() }}</p></a> }
      @case ('span') { <span  [class]="classes()">@if (label()) { <label() class="form_field-label()" [for()]="props.for()">
      {{ label() }}
      @if (required()) { <span class="form_field-required()">
        <span aria-hidden="true">*</span>
        <span class="form_field-required()-text">필수 항목</span>
      </span>
    </label()>
    
    <div class="form_field-control">
      <ng-content />
    </div>
    
    @if (error()) { <p class="form_field-error()" role="alert">{{ error() }}</p>
    <p } @else if (hint()) { class="form_field-hint()">{{ hint() }}</p>
    
    @if (success()) { <p class="form_field-success()">{{ success() }}</p></span> }
      @case ('hr') { <hr  [class]="classes()" /> }
      @case ('button') { <button  [class]="classes()">@if (label()) { <label() class="form_field-label()" [for()]="props.for()">
      {{ label() }}
      @if (required()) { <span class="form_field-required()">
        <span aria-hidden="true">*</span>
        <span class="form_field-required()-text">필수 항목</span>
      </span>
    </label()>
    
    <div class="form_field-control">
      <ng-content />
    </div>
    
    @if (error()) { <p class="form_field-error()" role="alert">{{ error() }}</p>
    <p } @else if (hint()) { class="form_field-hint()">{{ hint() }}</p>
    
    @if (success()) { <p class="form_field-success()">{{ success() }}</p></button> }
      @default { <div  [class]="classes()">@if (label()) { <label() class="form_field-label()" [for()]="props.for()">
      {{ label() }}
      @if (required()) { <span class="form_field-required()">
        <span aria-hidden="true">*</span>
        <span class="form_field-required()-text">필수 항목</span>
      </span>
    </label()>
    
    <div class="form_field-control">
      <ng-content />
    </div>
    
    @if (error()) { <p class="form_field-error()" role="alert">{{ error() }}</p>
    <p } @else if (hint()) { class="form_field-hint()">{{ hint() }}</p>
    
    @if (success()) { <p class="form_field-success()">{{ success() }}</p></div> }
    }`,
})
export class FormField {
  readonly hostClass = input<string>('');
  readonly as = input<string>('div'); // FormField의 루트 요소 또는 컴포넌트를 지정합니다.
  readonly label = input<string>(''); // 필드 레이블입니다.
  readonly for = input<string>(''); // 레이블과 연결할 입력 id입니다.
  readonly required = input<unknown>(false); // 필수 항목 표시를 추가합니다.
  readonly hint = input<string>(''); // 오류가 없을 때 보여줄 보조 설명입니다.
  readonly error = input<string>(''); // 검증 오류 메시지입니다.
  readonly success = input<string>(''); // 성공 안내 메시지입니다.
  readonly fit = input<unknown>(false); // 필드 너비를 공통 최대 너비로 제한합니다.


  private readonly p = () => ({
    as: this.as(),
    label: this.label(),
    for: this.for(),
    required: this.required(),
    hint: this.hint(),
    error: this.error(),
    success: this.success(),
    fit: this.fit(),
  });
  hostAttrs(): Record<string, unknown> { return {}; }
  hostAttr(_name: string): unknown { return undefined; }

  // 속성을 계산된 루트에 직접 전달하기 위해 자동 상속을 끕니다.


  // 필드 루트, 레이블 연결, 필수 표시와 상태 메시지를 하나의 API로 제공합니다.



  // 개별 필드 너비 변형과 사용자가 전달한 클래스를 함께 유지합니다.
  readonly classes = computed(() =>
    [
      'form_field', // 필드 단위 레이아웃 클래스입니다.
      this.p().fit && 'form_field_fit', // 필드 너비 제한입니다.
      this.hostClass(), // 호출 위치에서 전달한 사용자 정의 클래스입니다.
    ].filter(Boolean),
  );
}

export default FormField;
