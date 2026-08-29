/**
 * MenuItem 원본 구현.
 *   현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
 */
import { Component, computed, input, output } from '@angular/core';


@Component({
  selector: 'MenuItem',
  standalone: true,
  template: `<li [class]="['menu_item', disabled() && 'is-disabled()']()">
    @switch (tag) {
      @case ('a') { <a
      [class]="classes()"
      [href()]="tag === 'a' ? href() : undefined()"
      [type]="tag === 'button' ? 'button' : undefined()"
      [attr.aria-current]="active() ? 'page' : undefined()"
      [attr.aria-disabled()]="disabled() || undefined()"
      (click)="tag === 'a' ? $event.preventDefault() : undefined($event)"
      ><ng-content select="[icon]" />@if (label() || hasSlot("default")()) { <span class="menu_label"
        ><ng-content>{{ label() }}</ng-content></span
      >@if (hasSlot("extra")()) { <span class="menu_extra"><ng-content select="[extra]" /></span
    ></a> }
      @case ('span') { <span
      [class]="classes()"
      [href()]="tag === 'a' ? href() : undefined()"
      [type]="tag === 'button' ? 'button' : undefined()"
      [attr.aria-current]="active() ? 'page' : undefined()"
      [attr.aria-disabled()]="disabled() || undefined()"
      (click)="tag === 'a' ? $event.preventDefault() : undefined($event)"
      ><ng-content select="[icon]" />@if (label() || hasSlot("default")()) { <span class="menu_label"
        ><ng-content>{{ label() }}</ng-content></span
      >@if (hasSlot("extra")()) { <span class="menu_extra"><ng-content select="[extra]" /></span
    ></span> }
      @case ('hr') { <hr
      [class]="classes()"
      [href()]="tag === 'a' ? href() : undefined()"
      [type]="tag === 'button' ? 'button' : undefined()"
      [attr.aria-current]="active() ? 'page' : undefined()"
      [attr.aria-disabled()]="disabled() || undefined()"
      (click)="tag === 'a' ? $event.preventDefault() : undefined($event)"
       /> }
      @case ('button') { <button
      [class]="classes()"
      [href()]="tag === 'a' ? href() : undefined()"
      [type]="tag === 'button' ? 'button' : undefined()"
      [attr.aria-current]="active() ? 'page' : undefined()"
      [attr.aria-disabled()]="disabled() || undefined()"
      (click)="tag === 'a' ? $event.preventDefault() : undefined($event)"
      ><ng-content select="[icon]" />@if (label() || hasSlot("default")()) { <span class="menu_label"
        ><ng-content>{{ label() }}</ng-content></span
      >@if (hasSlot("extra")()) { <span class="menu_extra"><ng-content select="[extra]" /></span
    ></button> }
      @default { <div
      [class]="classes()"
      [href()]="tag === 'a' ? href() : undefined()"
      [type]="tag === 'button' ? 'button' : undefined()"
      [attr.aria-current]="active() ? 'page' : undefined()"
      [attr.aria-disabled()]="disabled() || undefined()"
      (click)="tag === 'a' ? $event.preventDefault() : undefined($event)"
      ><ng-content select="[icon]" />@if (label() || hasSlot("default")()) { <span class="menu_label"
        ><ng-content>{{ label() }}</ng-content></span
      >@if (hasSlot("extra")()) { <span class="menu_extra"><ng-content select="[extra]" /></span
    ></div> }
    }
  </li>`,
})
export class MenuItem {
  readonly hostClass = input<string>('');
  readonly label = input<unknown>(); // 항목에 표시할 기본 텍스트입니다.
  readonly href = input<unknown>(); // 지정 시 앵커로 렌더할 대상 주소입니다.
  readonly active = input<unknown>(false); // 현재 선택된 항목인지 여부입니다.
  readonly disabled = input<unknown>(false); // 상호작용을 막을지 여부입니다.
  readonly color = input<unknown>(); // 링크 텍스트에 적용할 색상 토큰입니다.

  readonly click = output<Event>();

  private readonly p = () => ({
    label: this.label(),
    href: this.href(),
    active: this.active(),
    disabled: this.disabled(),
    color: this.color(),
  });


  // 레이블, 주소, 활성·비활성, 색상 상태를 prop으로 받습니다.

   // 항목 클릭 시 부모로 전달하는 이벤트입니다.

  // href·disabled 조합에 따라 앵커, span, button 중 하나를 선택합니다.
  readonly tag = computed(() =>
    this.p().href && !this.p().disabled ? 'a' : this.p().disabled ? 'span' : 'button',
  );

  // 활성·비활성·색상 상태를 링크 클래스에 반영합니다.
  readonly classes = computed(() =>
    [
      'menu_link', // 메뉴 항목의 클릭 가능 영역 클래스입니다.
      this.p().active && 'is-active', // 현재 선택 상태입니다.
      this.p().disabled && 'is-disabled', // 비활성 상태입니다.
      this.p().color && `color_${this.p().color}`, // 색상 토큰 클래스입니다.
    ].filter(Boolean),
  ); // false 등 적용되지 않는 항목을 제거합니다.
}

export default MenuItem;
