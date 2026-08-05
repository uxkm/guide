<script setup>
import { computed, ref, useAttrs, useSlots } from 'vue';
import Button from '@/components/Button.vue';
import Icon from '@/components/Icon.vue';
import { rippleProp, useRipple } from '@/composables/useRipple';
import { useComponentDemoCode } from '@/composables/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';

defineOptions({ inheritAttrs: false });

const VALID_SIZES = new Set(['sm', 'md', 'lg']);

const props = defineProps({
  /** 클릭 파장(ripple). true 활성 · false 비활성 · 미지정 시 컴포넌트 기본 */
  ripple: rippleProp,
  current: {
    type: Number,
    default: undefined,
  },
  defaultCurrent: {
    type: Number,
    default: 1,
  },
  total: {
    type: Number,
    default: 1,
  },
  pageSize: {
    type: Number,
    default: 10,
  },
  simple: Boolean,
  minimal: Boolean,
  size: {
    type: String,
    default: 'md',
    validator: (v) => ['sm', 'md', 'lg'].includes(v),
  },
  round: Boolean,
  ariaLabel: {
    type: String,
    default: '페이지 이동',
  },
});
const { rippleAttrs, childRippleAttrs } = useRipple(props, { mode: 'container' });


const emit = defineEmits(['update:current', 'change']);

const slots = useSlots();
const attrs = useAttrs();
const rootRef = ref(null);
const internalCurrent = ref(props.defaultCurrent);
const resolvedSize = computed(() => (VALID_SIZES.has(props.size) ? props.size : 'md'));
const resolvedPageSize = computed(() =>
  Number.isFinite(props.pageSize) && props.pageSize > 0 ? props.pageSize : 10
);
const resolvedTotal = computed(() =>
  Number.isFinite(props.total) && props.total >= 0 ? props.total : 0
);
const totalPages = computed(() =>
  Math.max(1, Math.ceil(resolvedTotal.value / resolvedPageSize.value))
);
const controlled = computed(() => props.current != null);
const resolvedCurrent = computed(() => {
  const candidate = controlled.value ? props.current : internalCurrent.value;
  const page = Number.isFinite(candidate) ? Math.trunc(candidate) : 1;
  return Math.min(totalPages.value, Math.max(1, page));
});

const formatCode = createComponentFormatter('Pagination', {
  defaults: {
    current: 1,
    defaultCurrent: 1,
    total: 1,
    pageSize: 10,
    ariaLabel: '페이지 이동',
    size: 'md',
  },
  booleanProps: new Set(['simple', 'minimal', 'round', 'ripple']),
  selfClosing: false,
});

useComponentDemoCode(
  formatCode,
  () => ({
    ...props,
    total: resolvedTotal.value,
    pageSize: resolvedPageSize.value,
    size: resolvedSize.value,
  }),
  slots,
  rootRef,
  attrs
);

const rootClass = computed(() => {
  const classes = ['pagination'];
  if (props.simple) classes.push('pagination_simple');
  if (props.minimal) classes.push('pagination_minimal');
  if (resolvedSize.value === 'sm') classes.push('pagination_sm');
  if (resolvedSize.value === 'lg') classes.push('pagination_lg');
  if (props.round) classes.push('pagination_round');
  if (attrs.class) classes.push(attrs.class);
  return classes;
});

const pages = computed(() => {
  const count = totalPages.value;
  const cur = resolvedCurrent.value;
  if (count <= 7) {
    return Array.from({ length: count }, (_, i) => i + 1);
  }
  const result = [];
  if (cur <= 4) {
    for (let i = 1; i <= 5; i += 1) result.push(i);
    result.push('ellipsis-end');
    result.push(count);
  } else if (cur >= count - 3) {
    result.push(1);
    result.push('ellipsis-start');
    for (let i = count - 4; i <= count; i += 1) result.push(i);
  } else {
    result.push(1);
    result.push('ellipsis-start');
    for (let i = cur - 1; i <= cur + 1; i += 1) result.push(i);
    result.push('ellipsis-end');
    result.push(count);
  }
  return result;
});

function goTo(page) {
  if (page < 1 || page > totalPages.value || page === resolvedCurrent.value) return;
  if (!controlled.value) {
    internalCurrent.value = page;
  }
  emit('update:current', page);
  emit('change', page);
}

function prev() {
  goTo(resolvedCurrent.value - 1);
}

function next() {
  goTo(resolvedCurrent.value + 1);
}

const fallthroughAttrs = computed(() => {
  const { class: _class, ...rest } = attrs;
  return { ...rest, ...rippleAttrs.value };
});
</script>

<template>
  <nav ref="rootRef" v-bind="fallthroughAttrs" :class="rootClass" :aria-label="ariaLabel">
    <template v-if="simple">
      <Button
        v-bind="childRippleAttrs"
        variant="ghost"
        size="sm"
        icon-only
        class="pagination_btn pagination_prev"
        aria-label="이전 페이지"
        :disabled="resolvedCurrent <= 1"
        @click="prev"
      >
        <template #icon-before>
          <Icon name="chevron-left" size="sm" class="pagination_icon" />
        </template>
      </Button>
      <span class="pagination_simple-text">
        <span class="pagination_simple-current">{{ resolvedCurrent }}</span>
        /
        <span class="pagination_simple-total">{{ totalPages }}</span>
      </span>
      <Button
        v-bind="childRippleAttrs"
        variant="ghost"
        size="sm"
        icon-only
        class="pagination_btn pagination_next"
        aria-label="다음 페이지"
        :disabled="resolvedCurrent >= totalPages"
        @click="next"
      >
        <template #icon-before>
          <Icon name="chevron-right" size="sm" class="pagination_icon" />
        </template>
      </Button>
    </template>

    <ul v-else class="pagination_list">
      <li class="pagination_item">
        <Button
          v-bind="childRippleAttrs"
          variant="ghost"
          size="sm"
          icon-only
          class="pagination_btn pagination_prev"
          aria-label="이전 페이지"
          :disabled="resolvedCurrent <= 1"
          @click="prev"
        >
          <template #icon-before>
            <Icon name="chevron-left" size="sm" class="pagination_icon" />
          </template>
        </Button>
      </li>
      <template v-for="(page, index) in pages" :key="`${page}-${index}`">
        <li v-if="typeof page === 'string'" class="pagination_item">
          <span class="pagination_ellipsis" aria-hidden="true">…</span>
        </li>
        <li v-else class="pagination_item">
          <Button
            v-bind="childRippleAttrs"
            variant="text"
            class="pagination_link"
            :class="{ 'is-active': page === resolvedCurrent }"
            :aria-current="page === resolvedCurrent ? 'page' : undefined"
            :aria-label="`${page}페이지`"
            @click="goTo(page)"
          >
            {{ page }}
          </Button>
        </li>
      </template>
      <li class="pagination_item">
        <Button
          v-bind="childRippleAttrs"
          variant="ghost"
          size="sm"
          icon-only
          class="pagination_btn pagination_next"
          aria-label="다음 페이지"
          :disabled="resolvedCurrent >= totalPages"
          @click="next"
        >
          <template #icon-before>
            <Icon name="chevron-right" size="sm" class="pagination_icon" />
          </template>
        </Button>
      </li>
    </ul>
  </nav>
</template>
