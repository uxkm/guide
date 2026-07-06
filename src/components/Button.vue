<script setup>
/**
 * Button — btn 스킨 + 루트 태그 선택
 *
 * tag prop으로 렌더링 요소를 바꿀 수 있습니다.
 *
 * | tag    | href   | role (자동)     | tabindex (자동)      |
 * |--------|--------|-----------------|----------------------|
 * | button | —      | 없음 (네이티브) | 없음                 |
 * | a      | 있음   | 없음 (링크)     | 없음 (비활성 시 -1)  |
 * | a      | 없음   | button (기본)   | 0 (비활성 시 -1)     |
 * | div    | —      | button          | 0 (비활성 시 -1)     |
 *
 * role만으로는 Tab 초점이 이동하지 않습니다.
 * div·href 없는 a는 role과 함께 tabindex="0"을 반드시 부여해야 합니다.
 *
 * href 없는 a에서 링크 의미가 필요하면 role="link" prop을 지정하세요.
 * role="link"일 때 키보드 활성화는 Enter만 지원합니다 (Space는 button 전용).
 */
import { computed, ref, useAttrs, useSlots } from 'vue';
import { rippleProp, useRipple } from '@/composables/useRipple';
import { useButtonDemoCode } from '@/composables/useDemoCode';
import Icon from '@/components/Icon.vue';

defineOptions({
  inheritAttrs: false,
});

const props = defineProps({
  /** 클릭 파장(ripple). true 활성 · false 비활성 · 미지정 시 컴포넌트 기본 */
  ripple: rippleProp,
  /** 버튼 스킨. filled · outline · ghost · text · select(셀렉트 트리거) */
  variant: {
    type: String,
    default: 'filled',
    validator: (value) => ['filled', 'outline', 'ghost', 'text', 'select'].includes(value),
  },
  /** 색상 변형. text 스킨에서는 톤(muted·danger 등)으로 사용 */
  color: {
    type: String,
    default: 'primary',
    validator: (value) =>
      ['primary', 'default', 'success', 'warning', 'danger', 'muted'].includes(value),
  },
  /** 버튼 크기. sm · md · lg */
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value),
  },
  /** pill(캡슐) 형태 모서리 */
  round: Boolean,
  /** 아이콘 위 · 텍스트 아래 세로 배치 */
  vertical: Boolean,
  /** 아이콘만 표시. aria-label 필수 */
  iconOnly: Boolean,
  /** 부모 너비 100% */
  block: Boolean,
  /** flex 비율 분배. true 또는 '2'(2배 너비) */
  grow: {
    type: [Boolean, String],
    default: false,
  },
  /** 콘텐츠 너비 유지 */
  fit: Boolean,
  /** HTML disabled 속성 (tag="button"일 때) */
  disabled: Boolean,
  /** is-disabled 클래스 + aria-disabled. div·a 비활성 표현에 사용 */
  ariaDisabled: Boolean,
  /** 로딩 스피너 표시 */
  loading: Boolean,
  /** 셀렉트 트리거 열림 상태 (is-open 클래스) */
  open: Boolean,
  /** 셀렉트 트리거 오류 상태 (is-error 클래스) */
  error: Boolean,
  /** 셀렉트 미선택 placeholder 스타일 */
  placeholder: Boolean,
  /** 배경·테두리 없는 셀렉트 텍스트 형태 */
  selectText: Boolean,
  /** 버튼 텍스트. default 슬롯으로 대체 가능 */
  label: String,
  /** 접근성 라벨 (icon-only 시 필수) */
  ariaLabel: String,
  /** button 요소 type 속성 (tag="button"일 때만 적용) */
  type: {
    type: String,
    default: 'button',
  },
  /** aria-haspopup (셀렉트·드롭다운 트리거) */
  haspopup: String,
  /** aria-expanded (셀렉트·팝오버 트리거) */
  expanded: Boolean,
  /** aria-invalid (폼 오류) */
  invalid: Boolean,
  /** 루트 HTML 태그. button(기본) · a · div */
  tag: {
    type: String,
    default: 'button',
    validator: (value) => ['button', 'a', 'div'].includes(value),
  },
  /** tag="a"일 때 링크 주소. 있으면 네이티브 링크로 Tab 초점 자동 포함 */
  href: String,
  /**
   * tag="a"이고 href 없을 때 의미 지정.
   * 'button'(기본) · 'link'. href 있으면 role 불필요(생략).
   */
  role: String,
  /** Tab 순서 수동 지정. 미지정 시 div·href 없는 a는 0, 비활성 -1 */
  tabindex: {
    type: [Number, String],
    default: undefined,
  },
});
const { rippleAttrs } = useRipple(props);


const slots = useSlots();
const attrs = useAttrs();
const buttonRef = ref(null);

useButtonDemoCode(props, slots, buttonRef, attrs);

const btnClass = computed(() => {
  const classes = ['btn'];

  if (props.variant === 'select') {
    classes.push('btn_select');
    if (props.selectText) classes.push('btn_select-text');
    if (props.placeholder) classes.push('btn_select-placeholder');
  } else {
    classes.push(`btn_${props.variant}`);
  }

  if (props.variant === 'text') {
    classes.push('color_primary');
    if (props.color !== 'primary') {
      classes.push(`color_${props.color}`);
    }
  } else if (props.variant !== 'ghost' && props.color) {
    classes.push(`color_${props.color}`);
  }

  if (props.size === 'sm') classes.push('btn_sm');
  if (props.size === 'lg') classes.push('btn_lg');
  if (props.round) classes.push('btn_round');
  if (props.vertical) classes.push('btn_vertical');
  if (props.iconOnly) classes.push('btn_icon-only');
  if (props.block) classes.push('btn_block');
  if (props.grow === true) classes.push('btn_grow');
  if (props.grow === '2') classes.push('btn_grow-2');
  if (props.fit) classes.push('btn_fit');
  if (props.ariaDisabled) classes.push('is-disabled');
  if (props.loading) classes.push('is-loading');
  if (props.open) classes.push('is-open');
  if (props.error) classes.push('is-error');

  return classes;
});

const rootClass = computed(() => [btnClass.value, attrs.class].filter(Boolean));

const resolvedHref = computed(() => {
  const href = props.href ?? attrs.href;
  return href != null && href !== '' ? String(href) : undefined;
});

/**
 * role 결정
 * - div → button (항상)
 * - a + href → undefined (네이티브 링크, role 불필요)
 * - a, href 없음 → role prop 또는 button 기본값
 * - button → undefined (네이티브 버튼)
 */
const resolvedRole = computed(() => {
  if (props.role) return props.role;
  if (typeof attrs.role === 'string' && attrs.role) return attrs.role;

  if (props.tag === 'div') return 'button';

  if (props.tag === 'a') {
    if (resolvedHref.value) return undefined;
    return 'button';
  }

  return undefined;
});

const isNativeButton = computed(() => props.tag === 'button');
const isNativeLink = computed(() => props.tag === 'a' && Boolean(resolvedHref.value));
const isDisabled = computed(() => props.disabled || props.ariaDisabled);

/** div·href 없는 a — role과 별개로 tabindex가 Tab 초점을 만듦 */
const needsTabIndex = computed(
  () => props.tag === 'div' || (props.tag === 'a' && !isNativeLink.value)
);

/**
 * tabindex 결정
 * - tabindex prop/attr 우선
 * - button · a+href: 네이티브 초점(비활성 시 -1)
 * - div · a(href 없음): 0(비활성 -1)
 */
const rootTabIndex = computed(() => {
  const explicit = props.tabindex ?? attrs.tabindex;
  if (explicit != null && explicit !== '') {
    return Number(explicit);
  }

  if (isNativeButton.value || isNativeLink.value) {
    return isDisabled.value ? -1 : undefined;
  }

  if (needsTabIndex.value) {
    return isDisabled.value ? -1 : 0;
  }

  return undefined;
});

/** button[disabled]는 aria-disabled 중복 불필요. div·a는 aria-disabled로 비활성 표현 */
const ariaDisabledAttr = computed(() => {
  if (isNativeButton.value && props.disabled && !props.ariaDisabled) {
    return undefined;
  }

  return isDisabled.value ? 'true' : undefined;
});

/** role · href · tabindex · onClick은 컴포넌트에서 제어하므로 fallthrough에서 제외 */
const fallthroughAttrs = computed(() => {
  const { class: _class, role: _role, href: _href, tabindex: _tabindex, onClick: _onClick, ...rest } =
    attrs;
  return { ...rest, ...rippleAttrs.value };
});

const showLabel = computed(() => !props.iconOnly && (props.label || slots.default));

const ariaExpanded = computed(() => {
  if (props.expanded !== undefined) return String(props.expanded);
  if (props.open) return 'true';
  return undefined;
});

/** div·href 없는 a — 네이티브 키보드 활성화 없음, Enter/Space로 click 위임 */
const needsKeyboardActivation = computed(() => needsTabIndex.value);

/** role="link"는 Enter만, role="button"(기본)은 Enter + Space */
const activatesWithSpace = computed(() => resolvedRole.value !== 'link');

function onKeydown(event) {
  if (!needsKeyboardActivation.value || isDisabled.value) return;

  const isEnter = event.key === 'Enter';
  const isSpace = event.key === ' ';

  if (!isEnter && !(activatesWithSpace.value && isSpace)) return;

  if (isSpace) event.preventDefault();
  event.currentTarget.click();
}

/** attrs.onClick과 병합. @click은 fallthrough 대신 여기서 처리 */
function invokeListener(listener, event) {
  if (typeof listener === 'function') {
    listener(event);
    return;
  }

  if (Array.isArray(listener)) {
    listener.forEach((fn) => fn(event));
  }
}

/** div·a는 disabled 속성 미지원 — aria-disabled + click 차단으로 대체 */
function onClick(event) {
  if (isDisabled.value) {
    event.preventDefault();
    event.stopPropagation();
    return;
  }

  invokeListener(attrs.onClick, event);
}
</script>

<template>
  <component
    :is="tag"
    ref="buttonRef"
    v-bind="fallthroughAttrs"
    :class="rootClass"
    :type="isNativeButton ? type : undefined"
    :href="tag === 'a' ? resolvedHref : undefined"
    :disabled="isNativeButton ? disabled && !ariaDisabled : undefined"
    :role="resolvedRole"
    :tabindex="rootTabIndex"
    :aria-label="ariaLabel"
    :aria-disabled="ariaDisabledAttr"
    :aria-busy="loading ? 'true' : undefined"
    :aria-haspopup="haspopup"
    :aria-expanded="ariaExpanded"
    :aria-invalid="invalid || error ? 'true' : undefined"
    @keydown="onKeydown"
    @click="onClick"
  >
    <span v-if="loading" class="btn_spinner" aria-hidden="true" />
    <slot name="icon-before" />
    <span v-if="showLabel" class="btn_label">
      <slot>{{ label }}</slot>
    </span>
    <slot name="icon-after" />
    <Icon v-if="variant === 'select'" name="chevron-down" class="btn_select-caret" />
  </component>
</template>
