<!--
  Link 원본 구현.
  시맨틱 루트와 공통 CSS 클래스를 조합하고 전달 속성과 접근성 의미를 연결합니다.
-->
<script setup>
import { computed, useAttrs, useSlots } from 'vue';

defineOptions({ name: 'UxkmLink', inheritAttrs: false });

const props = defineProps({
  as: { type: [String, Object, Function], default: 'a' }, // 루트 요소 또는 컴포넌트입니다. 기본은 a입니다.
  ripple: { type: Boolean, default: true }, // 클릭 리플 효과를 켭니다.
  color: { type: String, default: 'primary' }, // color_* 공통 색상 클래스입니다.
  size: { type: String, default: '' }, // sm · lg · xl 크기입니다.
  underline: Boolean, // 항상 밑줄을 표시합니다.
  noUnderline: Boolean, // 밑줄을 제거합니다.
  standalone: Boolean, // 터치 영역을 확대합니다.
  nav: Boolean, // 내비게이션 링크 스타일입니다.
  block: Boolean, // 블록형 링크입니다.
  back: Boolean, // 뒤로가기 링크 스타일입니다.
  iconOnly: Boolean, // 텍스트 없이 아이콘만 표시합니다.
  active: Boolean, // 현재 페이지 활성 상태입니다.
  disabled: Boolean, // 비활성 상태입니다.
  label: String, // 기본 slot이 없을 때 표시할 텍스트입니다.
  href: String, // 링크 주소입니다.
  target: String, // 링크 target입니다.
  rel: String, // 링크 rel입니다.
  ariaLabel: String, // 접근성 이름입니다.
});

const emit = defineEmits(['click']);
const attrs = useAttrs();
const slots = useSlots();
const colors = new Set(['primary', 'muted', 'success', 'warning', 'danger', 'info']);
const sizes = new Set(['', 'sm', 'lg', 'xl']);
const resolvedColor = computed(() => (colors.has(props.color) ? props.color : 'primary'));
const resolvedSize = computed(() => (sizes.has(props.size) ? props.size : ''));
const rootTag = computed(() => props.as || 'a');
const isAnchor = computed(() => rootTag.value === 'a');
const isButton = computed(() => rootTag.value === 'button');
const acceptsHref = computed(() => isAnchor.value || typeof rootTag.value !== 'string');
const showLabel = computed(
  () => !props.iconOnly && (Boolean(slots.default) || Boolean(props.label)),
);
const classes = computed(() =>
  [
    'link',
    `color_${resolvedColor.value}`,
    resolvedSize.value && `size_${resolvedSize.value}`,
    props.underline && 'link_underline',
    props.noUnderline && 'link_no-underline',
    props.standalone && 'link_standalone',
    props.nav && 'link_nav',
    props.block && 'link_block',
    props.back && 'link_back',
    props.iconOnly && 'link_icon-only',
    props.active && 'is-active',
    props.disabled && 'is-disabled',
    attrs.class,
  ].filter(Boolean),
);

function handleClick(event) {
  if (props.disabled) {
    event.preventDefault();
    event.stopPropagation();
    return;
  }
  if (!props.href || props.href === '#') event.preventDefault();
  emit('click', event);
}
</script>

<template>
  <component
    :is="rootTag"
    v-bind="attrs"
    :aria-current="active ? 'page' : undefined"
    :aria-disabled="disabled || undefined"
    :aria-label="ariaLabel || attrs['aria-label']"
    :class="classes"
    data-component="Link"
    :data-ripple="ripple ? 'true' : 'false'"
    :disabled="isButton ? disabled : undefined"
    :href="acceptsHref ? href || '#' : undefined"
    :rel="acceptsHref ? rel : undefined"
    :tabindex="disabled ? -1 : attrs.tabindex"
    :target="acceptsHref ? target : undefined"
    :type="isButton ? 'button' : undefined"
    @click="handleClick"
  >
    <slot name="icon" />
    <slot v-if="showLabel">{{ label }}</slot>
    <slot name="icon-after" />
  </component>
</template>
