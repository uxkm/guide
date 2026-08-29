/**
 * Timeline 원본 구현.
 *   데이터 표시 구조와 시각 상태를 공통 CSS 클래스 및 접근성 속성으로 표현합니다.
 */
import { Component, computed, input, output } from '@angular/core';


@Component({
  selector: 'Timeline',
  standalone: true,
  template: `@switch (tag()) {
      @case ('a') { <a v-bind="fallthroughAttrs" [class]="classes()" data-component="Timeline"
    ><ng-content /></a> }
      @case ('span') { <span v-bind="fallthroughAttrs" [class]="classes()" data-component="Timeline"
    ><ng-content /></span> }
      @case ('hr') { <hr v-bind="fallthroughAttrs" [class]="classes()" data-component="Timeline"
     /> }
      @case ('button') { <button v-bind="fallthroughAttrs" [class]="classes()" data-component="Timeline"
    ><ng-content /></button> }
      @default { <div v-bind="fallthroughAttrs" [class]="classes()" data-component="Timeline"
    ><ng-content /></div> }
    }`,
})
export class Timeline {
  readonly hostClass = input<string>('');
  readonly card = input<unknown>(false); // 카드형 타임라인입니다.
  readonly alternate = input<unknown>(false); // 좌우 교차 배치입니다.
  readonly horizontal = input<unknown>(false); // 가로 타임라인입니다.
  readonly labelCol = input<unknown>(false); // 라벨 열 레이아웃입니다.
  readonly icon = input<unknown>(false); // 아이콘 도트 모드입니다.
  readonly iconSize = input<string>('md'); // 아이콘 도트 크기입니다.
  readonly size = input<string>('md'); // sm · md · lg 크기입니다.
  readonly tag = input<string>('ol'); // ol · ul 루트 태그입니다.


  private readonly p = () => ({
    card: this.card(),
    alternate: this.alternate(),
    horizontal: this.horizontal(),
    labelCol: this.labelCol(),
    icon: this.icon(),
    iconSize: this.iconSize(),
    size: this.size(),
    tag: this.tag(),
  });
  hostAttrs(): Record<string, unknown> { return {}; }
  hostAttr(_name: string): unknown { return undefined; }

  // 방향·크기·도트·카드 변형을 timeline_* 공통 클래스로 변환합니다.
  readonly classes = computed(() =>
    [
      'timeline',
      this.p().card && 'timeline_card',
      this.p().alternate && 'timeline_alternate',
      this.p().horizontal && 'timeline_horizontal',
      this.p().labelCol && 'timeline_label-col',
      this.p().icon && 'timeline_icon',
      this.p().icon && this.p().iconSize === 'sm' && 'timeline_icon-sm',
      this.p().size === 'sm' && 'timeline_sm',
      this.p().size === 'lg' && 'timeline_lg',
      this.hostClass(),
    ].filter(Boolean),
  );
  readonly fallthroughAttrs = computed(() => {
    const { class: _class, ...rest } = this.hostAttrs();
    return rest;
  });
}

export default Timeline;
