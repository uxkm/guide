/**
 * TimelineItem 원본 구현.
 *   데이터 표시 구조와 시각 상태를 공통 CSS 클래스 및 접근성 속성으로 표현합니다.
 */
import { Component, computed, input, output } from '@angular/core';


@Component({
  selector: 'TimelineItem',
  standalone: true,
  template: `<li v-bind="fallthroughAttrs" [class]="itemClasses()" data-component="TimelineItem">
    @if (label()) { <time() class="timeline_label" [datetime()]="labelDatetime()">{{ label() }}</time()
    >@if (hasSlot("dot")()) { <span class="timeline_dot" aria-hidden="true"><ng-content select="[dot]" /></span
    ><span } @else { [class]="dotClasses()" aria-hidden="true" />
    <div class="timeline_content">
      <slot
        >@if (time()) { <time() class="timeline_time" [datetime()]="datetime()">{{ time() }}</time()>
        @if (title()) { <p class="timeline_title">{{ title() }}</p>
        @if (description()) { <p class="timeline_desc">{{ description() }}</p></slot
      >
      @if (hasSlot("meta")()) { <div class="timeline_meta"><ng-content select="[meta]" /></div>
    </div>
  </li>`,
})
export class TimelineItem {
  readonly hostClass = input<string>('');
  readonly color = input<string>('primary'); // 도트 색상입니다.
  readonly title = input<unknown>(); // SVG title과 접근성 이름 후보입니다.
  readonly description = input<unknown>(); // 항목 설명입니다.
  readonly time = input<unknown>(); // 시간 텍스트입니다.
  readonly datetime = input<unknown>(); // time 요소의 datetime입니다.
  readonly label = input<unknown>(); // 시간·라벨 텍스트입니다.
  readonly labelDatetime = input<unknown>(); // 라벨 time의 datetime입니다.
  readonly active = input<unknown>(false); // 현재 페이지 활성 상태입니다.
  readonly pending = input<unknown>(false); // 대기·진행 중 항목입니다.
  readonly outline = input<unknown>(false); // 도트 외곽선 스타일입니다.


  private readonly p = () => ({
    color: this.color(),
    title: this.title(),
    description: this.description(),
    time: this.time(),
    datetime: this.datetime(),
    label: this.label(),
    labelDatetime: this.labelDatetime(),
    active: this.active(),
    pending: this.pending(),
    outline: this.outline(),
  });
  hostAttrs(): Record<string, unknown> { return {}; }
  hostAttr(_name: string): unknown { return undefined; }

  // 진행 상태와 도트 외형을 item·dot 클래스에 분리해 적용합니다.
  readonly itemClasses = computed(() =>
    ['timeline_item', this.p().active && 'is-active', this.p().pending && 'is-pending', this.hostClass()].filter(
      Boolean,
    ),
  );
  readonly dotClasses = computed(() =>
    [
      'timeline_dot',
      this.p().outline && 'timeline_dot-outline',
      this.p().color && `color_${this.p().color}`,
    ].filter(Boolean),
  );
  readonly fallthroughAttrs = computed(() => {
    const { class: _class, ...rest } = this.hostAttrs();
    return rest;
  });
}

export default TimelineItem;
