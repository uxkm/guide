<!--
  Card 원본 구현.
  데이터 표시 구조와 시각 상태를 공통 CSS 클래스 및 접근성 속성으로 표현합니다.
-->
<script setup>
import { computed, getCurrentInstance, useAttrs, useSlots } from 'vue';

// class와 클릭 핸들러를 분리해 최외곽 동적 루트에 직접 전달합니다.
defineOptions({ name: 'UxkmCard', inheritAttrs: false });
// 루트 의미, 내부 영역, 외형과 상호작용 상태를 prop으로 받습니다.
const props = defineProps({
  as: String, // tag보다 우선하는 루트 요소입니다.
  tag: String, // 루트 태그 이름입니다.
  title: [String, Number], // 헤더 제목입니다.
  subtitle: [String, Number], // 헤더 부제입니다.
  href: String, // 있으면 a 루트로 렌더링합니다.
  size: { // sm · md · lg · compact 크기입니다.
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg', 'compact'].includes(value),
  }, // gap의 이전 호환 이름입니다.
  variant: { // 카드 스킨 변형입니다.
    type: String,
    default: 'bordered',
    validator: (value) =>
      ['bordered', 'default', 'shadow', 'flat', 'borderless', 'elevated', 'ghost'].includes(value),
  }, // 텍스트 변형 키입니다. VARIANTS 맵을 사용합니다.
  horizontal: Boolean, // 가로 레이아웃입니다.
  compact: Boolean, // 조밀한 패딩입니다.
  hoverable: Boolean, // 호버 강조 스타일입니다.
  accent: Boolean, // 액센트 강조 스타일입니다.
  color: String, // color_* 공통 색상 클래스입니다.
  disabled: Boolean, // 비활성 상태입니다.
  ripple: { type: Boolean, default: undefined }, // 클릭 리플 효과입니다.
});
const attrs = useAttrs();
const slots = useSlots();
const instance = getCurrentInstance();
const emit = defineEmits(['click']);
// href는 링크, click listener는 버튼, 나머지는 기본 article 루트를 선택합니다.
const interactive = computed(() => Boolean(props.href || instance?.vnode.props?.onClick));
const rootTag = computed(
  () => props.as || props.tag || (props.href ? 'a' : interactive.value ? 'button' : 'article'),
);
const variantClass = computed(() =>
  props.variant === 'flat'
    ? 'card_ghost'
    : ['default', 'bordered'].includes(props.variant)
      ? ''
      : `card_${props.variant}`,
);
// prop을 card_* · color_* · is-* 공통 클래스로 변환합니다.
const classes = computed(() =>
  [
    'card',
    variantClass.value,
    props.size !== 'md' && `card_${props.size}`,
    props.horizontal && 'card_horizontal',
    props.compact && 'card_compact',
    props.hoverable && 'card_hover',
    props.accent && 'card_accent',
    props.color && `color_${props.color}`,
    interactive.value && 'card_clickable',
    props.disabled && 'is-disabled',
    attrs.class,
  ].filter(Boolean),
);
// class와 onClick은 중복 전달하지 않고 계산된 class와 emit 처리에 연결합니다.
const rootAttrs = computed(() => {
  const { class: _class, onClick: _onClick, ...rest } = attrs;
  return rest;
});
const hasBuiltInHeader = computed(
  () => props.title != null || props.subtitle != null || slots.header || slots.extra,
);
// 비활성 Card는 링크 이동과 사용자 클릭 이벤트를 모두 차단합니다.
function handleClick(event) {
  if (props.disabled) {
    event.preventDefault();
    event.stopPropagation();
    return;
  }
  emit('click', event);
}
</script>

<template>
  <!-- 루트 종류에 맞춰 href · disabled · aria-disabled · tabindex를 구분해 전달합니다. -->
  <component
    :is="rootTag"
    v-bind="rootAttrs"
    :class="classes"
    data-component="Card"
    :data-ripple="ripple == null ? undefined : String(ripple)"
    :type="rootTag === 'button' ? 'button' : undefined"
    :disabled="rootTag === 'button' ? disabled : undefined"
    :href="rootTag === 'a' && !disabled ? href : undefined"
    :aria-disabled="interactive && disabled ? 'true' : undefined"
    :tabindex="interactive && disabled ? -1 : undefined"
    @click="interactive ? handleClick($event) : undefined"
  >
    <!-- media와 내장 header는 값이나 slot이 있을 때만 필요한 구조를 렌더링합니다. -->
    <slot name="media" />
    <div v-if="hasBuiltInHeader" class="card_header">
      <div class="card_header-main">
        <slot name="header"
          ><h3 v-if="title != null" class="card_title">{{ title }}</h3>
          <p v-if="subtitle != null" class="card_subtitle">{{ subtitle }}</p></slot
        >
      </div>
      <div v-if="$slots.extra" class="card_extra"><slot name="extra" /></div>
    </div>
    <slot />
  </component>
</template>
