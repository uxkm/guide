<!--
  Button 원본 구현.
  시맨틱 루트와 공통 CSS 클래스를 조합하고 전달 속성과 접근성 의미를 연결합니다.
-->
<script setup>
import { computed } from 'vue';

defineOptions({ name: 'UxkmButton' });

// 스킨·색상·크기·레이아웃·상태와 루트 태그를 prop으로 받습니다.
const props = defineProps({
  label: { type: String, default: 'Button' }, // 기본 slot이 없을 때 표시할 텍스트입니다.
  ripple: { type: Boolean, default: true }, // 클릭 리플 효과를 켭니다.
  color: { type: String, default: 'primary' }, // ghost가 아닐 때 color_* 클래스로 적용됩니다.
  disabled: { type: Boolean, default: false }, // 네이티브 disabled입니다.
  variant: { type: String, default: 'filled' }, // filled · outline · ghost · text · select 스킨입니다.
  size: { type: String, default: 'md' }, // sm · md · lg 크기입니다.
  iconOnly: { type: Boolean, default: false }, // 텍스트 없이 아이콘만 표시합니다.
  vertical: { type: Boolean, default: false }, // 아이콘 위·텍스트 아래 세로 배치입니다.
  round: { type: Boolean, default: false }, // pill 형태 둥근 모서리입니다.
  block: { type: Boolean, default: false }, // 부모 너비를 채웁니다.
  grow: { type: [Boolean, String], default: false }, // true면 btn_grow, '2'면 btn_grow-2입니다.
  fit: { type: Boolean, default: false }, // 콘텐츠 너비를 유지합니다.
  loading: { type: Boolean, default: false }, // 로딩 스피너를 표시하고 입력을 막습니다.
  open: { type: Boolean, default: false }, // 셀렉트·팝오버 열림 상태입니다.
  error: { type: Boolean, default: false }, // 오류 상태 클래스를 적용합니다.
  placeholder: { type: Boolean, default: false }, // 셀렉트 플레이스홀더 스타일입니다.
  selectText: { type: Boolean, default: false }, // 배경·테두리 없는 셀렉트 텍스트형입니다.
  selectCaret: { type: Boolean, default: false }, // select가 아니어도 캐럿을 강제 표시합니다.
  ariaDisabled: { type: Boolean, default: false }, // is-disabled와 aria-disabled만 적용합니다.
  ariaLabel: { type: String, default: undefined }, // 아이콘 전용 버튼 등의 접근성 이름입니다.
  haspopup: { type: [Boolean, String], default: undefined }, // aria-haspopup 값입니다.
  expanded: { type: Boolean, default: undefined }, // aria-expanded 값입니다.
  invalid: { type: Boolean, default: false }, // aria-invalid를 켭니다.
  tag: { type: String, default: 'button' }, // button · a · div 루트 태그입니다.
  href: { type: String, default: undefined }, // tag가 a일 때 링크 주소입니다.
  role: { type: String, default: undefined }, // 명시적 role이 있으면 우선합니다.
  tabindex: { type: [Number, String], default: undefined }, // 명시적 tabindex가 있으면 우선합니다.
  type: { type: String, default: 'button' }, // button 루트의 type입니다.
});

const emit = defineEmits(['click', 'keydown']);
// disabled · aria-disabled · loading이면 상호작용을 막습니다.
const inactive = computed(() => props.disabled || props.ariaDisabled || props.loading);
// div이거나 href 없는 a는 버튼 역할과 키보드 조작이 필요합니다.
const needsButtonSemantics = computed(
  () => props.tag === 'div' || (props.tag === 'a' && !props.href),
);
// 스킨·색상·크기·레이아웃·상태 클래스를 조합합니다.
const classes = computed(() =>
  [
    'btn',
    props.variant === 'select' ? 'btn_select' : `btn_${props.variant}`,
    props.variant !== 'ghost' ? `color_${props.color}` : '',
    props.size !== 'md' ? `btn_${props.size}` : '',
    props.selectText ? 'btn_select-text' : '',
    props.placeholder ? 'btn_select-placeholder' : '',
    props.iconOnly ? 'btn_icon-only' : '',
    props.vertical ? 'btn_vertical' : '',
    props.round ? 'btn_round' : '',
    props.block ? 'btn_block' : '',
    props.grow === true ? 'btn_grow' : '',
    props.grow === '2' ? 'btn_grow-2' : '',
    props.fit ? 'btn_fit' : '',
    props.ariaDisabled ? 'is-disabled' : '',
    props.loading ? 'is-loading' : '',
    props.open ? 'is-open' : '',
    props.error ? 'is-error' : '',
  ].filter(Boolean),
);

function handleClick(event) {
  if (inactive.value) {
    event.preventDefault();
    event.stopPropagation();
    return;
  }
  emit('click', event);
}

function handleKeydown(event) {
  if (inactive.value) {
    event.preventDefault();
    event.stopPropagation();
    return;
  }
  if (needsButtonSemantics.value && (event.key === 'Enter' || event.key === ' ')) {
    event.preventDefault();
    event.currentTarget.click();
  }
  emit('keydown', event);
}
</script>

<template>
  <component
    :is="tag"
    :aria-busy="loading || undefined"
    :aria-disabled="ariaDisabled || (tag !== 'button' && disabled) || undefined"
    :aria-expanded="expanded ?? (open || undefined)"
    :aria-haspopup="haspopup"
    :aria-invalid="invalid || error || undefined"
    :aria-label="ariaLabel"
    :class="classes"
    data-component="Button"
    :data-ripple="ripple ? 'true' : 'false'"
    :disabled="tag === 'button' ? disabled : undefined"
    :href="tag === 'a' ? href : undefined"
    :role="role ?? (needsButtonSemantics ? 'button' : undefined)"
    :tabindex="
      inactive && tag !== 'button' ? -1 : (tabindex ?? (needsButtonSemantics ? 0 : undefined))
    "
    :type="tag === 'button' ? type : undefined"
    @click="handleClick"
    @keydown="handleKeydown"
  >
    <span v-if="loading" class="btn_spinner" aria-hidden="true" />
    <slot name="icon-before" />
    <template v-if="!iconOnly"
      ><span class="btn_label"
        ><slot>{{ label }}</slot></span
      ></template
    >
    <slot v-else />
    <slot name="icon-after" />
    <svg
      v-if="variant === 'select' || selectCaret"
      class="icon"
      aria-hidden="true"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="1.8"
    >
      <path d="m9 6 6 6-6 6" />
    </svg>
  </component>
</template>
