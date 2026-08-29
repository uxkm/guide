/**
 * FormActions 원본 구현.
 *   폼 값·검증·비활성 상태를 제어하고 레이블, 키보드 동작, 사용자 이벤트를 연결합니다.
 */
import { Component, computed, input, output } from '@angular/core';


@Component({
  selector: 'FormActions',
  standalone: true,
  template: `@switch (as()) {
      @case ('a') { <a  [class]="classes()"><ng-content /></a> }
      @case ('span') { <span  [class]="classes()"><ng-content /></span> }
      @case ('hr') { <hr  [class]="classes()" /> }
      @case ('button') { <button  [class]="classes()"><ng-content /></button> }
      @default { <div  [class]="classes()"><ng-content /></div> }
    }`,
})
export class FormActions {
  readonly hostClass = input<string>('');
  readonly as = input<string>('div'); // FormActions의 루트 요소 또는 컴포넌트를 지정합니다.


  private readonly p = () => ({
    as: this.as(),
  });
  hostAttrs(): Record<string, unknown> { return {}; }
  hostAttr(_name: string): unknown { return undefined; }

  // 속성을 계산된 루트에 직접 전달하기 위해 자동 상속을 끕니다.


  // 필요하면 div 대신 다른 시맨틱 루트로 액션 그룹을 렌더링할 수 있습니다.



  // 폼 레이아웃이 인식하는 액션 클래스와 외부 클래스를 함께 적용합니다.
  readonly classes = computed(() =>
    [
      'form_actions', // 제출·취소 등 액션 영역 클래스입니다.
      this.hostClass(), // 호출 위치에서 전달한 사용자 정의 클래스입니다.
    ].filter(Boolean),
  );
}

export default FormActions;
