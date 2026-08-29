/**
 * Empty 원본 구현.
 *   피드백 상태와 노출 동작을 관리하고 필요한 접근성 역할과 사용자 이벤트를 연결합니다.
 */
import { Component, computed, contentChildren, input, output } from '@angular/core';
import Icon from '../../basic/Icon/icon.component';

@Component({
  selector: 'Empty',
  standalone: true,
  imports: [Icon],
  template: `<div  [class]="classes()" data-component="Empty" role="status">
    
    @if (!simple()) { <div class="empty_image" data-slot="icon" aria-hidden="true">
      <ng-content select="[icon]" /><ng-content select="[image]" /><Icon name="inbox" /></slot
      ></slot>
    </div>
    
    @if (description() || slots.default || slots.description()) { <div
     
      class="empty_desc"
      data-slot="description()"
    >
      <ng-content select="[description()]" /><slot
          ><p>{{ description() }}</p></slot
        ></slot
      >
    </div>
    
    @if (slots.footer()) { <div class="empty_footer"><ng-content select="[footer]" /></div>
  </div>`,
})
export class Empty {
  readonly hostClass = input<string>('');
  readonly description = input<unknown>(); // 간단한 빈 상태 안내 문구입니다.
  readonly size = input<string>('md'); // 아이콘과 여백 크기입니다.
  readonly simple = input<unknown>(false); // 아이콘 없는 설명 전용 변형입니다.
  readonly block = input<unknown>(false); // 전체 너비 배치입니다.


  private readonly p = () => ({
    description: this.description(),
    size: this.size(),
    simple: this.simple(),
    block: this.block(),
  });
  hostAttrs(): Record<string, unknown> { return {}; }
  hostAttr(_name: string): unknown { return undefined; }

  private readonly projected = contentChildren('*');
  hasSlot(_name: string): boolean { return this.projected().length > 0; }

  // 선언하지 않은 class와 HTML 속성을 루트에 직접 전달하기 위해 자동 상속을 끕니다.


  // 설명·크기·간단형·블록 옵션을 prop으로 받습니다.


   // 선언하지 않은 HTML 속성입니다.
   // icon·description·footer 슬롯 존재 여부입니다.

  // 크기·간단형·블록 클래스를 조합합니다.
  readonly classes = computed(() =>
    [
      'empty', // Empty 루트 클래스입니다.
      this.p().size !== 'md' && `empty_${this.p().size}`, // md가 아닐 때만 크기 변형입니다.
      this.p().simple && 'empty_simple', // 아이콘 없는 간단형입니다.
      this.p().block && 'empty_block', // 전체 너비 배치입니다.
    ].filter(Boolean),
  ); // 미적용 항목을 제거합니다.
}

export default Empty;
