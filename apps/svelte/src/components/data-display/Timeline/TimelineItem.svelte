<!--
  TimelineItem 원본 구현.
  데이터 표시 구조와 시각 상태를 공통 CSS 클래스 및 접근성 속성으로 표현합니다.
-->
<script>
let {
  color = 'primary',
  title,
  description,
  time,
  datetime,
  label,
  labelDatetime,
  active = false,
  pending = false,
  outline = false,
  children,
  iconBefore,
  iconAfter,
  prefix,
  suffix,
  panel,
  extra,
  badge,
  class: className,
  ...rest
} = $props();

// 진행 상태와 도트 외형을 item·dot 클래스에 분리해 적용합니다.
let itemClasses = $derived(['timeline_item', active && 'is-active', pending && 'is-pending', className].filter(
    Boolean,
  ),
);
let dotClasses = $derived([
    'timeline_dot',
    outline && 'timeline_dot-outline',
    color && `color_${color}`,
  ].filter(Boolean),
);
let fallthroughAttrs = $derived({
  const { class: _class, ...rest } = rest;
  return rest;
});
</script>

<li {...fallthroughAttrs} class={itemClasses} data-component="TimelineItem">
    {#if label}<time class="timeline_label" datetime={labelDatetime}>{{ label }}</time
    >{#if dot}<span class="timeline_dot" aria-hidden="true"><slot name="dot" /></span
    >{:else}<span class={dotClasses} aria-hidden="true" />
    <div class="timeline_content">
      <slot
        >{#if time}<time class="timeline_time" datetime={datetime}>{{ time }}</time>
        {#if title}<p class="timeline_title">{{ title }}</p>
        {#if description}<p class="timeline_desc">{{ description }}</p></slot
      >
      {#if meta}<div class="timeline_meta"><slot name="meta" /></div>
    </div>
  </li>
