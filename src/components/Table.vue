<script setup>
import { computed, ref, useAttrs, useSlots } from 'vue';
import { useTableDemoCode } from '@/composables/useDemoCode';
import { columnColStyle, columnRootVars } from '@/utils/table-column-sizing';

defineOptions({ inheritAttrs: false });

const props = defineProps({
  bordered: Boolean,
  striped: Boolean,
  compact: Boolean,
  hover: Boolean,
  wrap: {
    type: Boolean,
    default: true,
  },
  /** sticky용 스크롤 컨테이너 (table_wrap-scroll) */
  scroll: Boolean,
  /** --table-scroll-max-height (예: '14rem' · 'none') */
  scrollMaxHeight: String,
  /** thead 상단 고정 (table_sticky-top) */
  stickyTop: Boolean,
  /** 좌측 열 고정 (table_sticky-left) */
  stickyLeft: Boolean,
  /** 좌측 고정 열 개수 1–4 (table_sticky-cols-n) */
  stickyCols: {
    type: Number,
    default: 1,
    validator: (v) => [1, 2, 3, 4].includes(v),
  },
  /** n번째 고정 열 left 오프셋 — { 2: '7rem' } → --table-sticky-left-2 */
  stickyLeftOffsets: {
    type: Object,
    default: () => ({}),
  },
  /** 열별 너비·패딩 — { width, minWidth, maxWidth, padding, nowrap } */
  columns: {
    type: Array,
    default: () => [],
  },
});

const slots = useSlots();
const attrs = useAttrs();
const rootRef = ref(null);

useTableDemoCode(props, slots, rootRef, attrs);

const hasColumns = computed(() => props.columns.length > 0);

const stickyColsClass = computed(() => {
  if (!props.stickyLeft) return null;
  const n = props.stickyCols || 1;
  return `table_sticky-cols-${n}`;
});

const tableClass = computed(() => {
  const classes = ['table'];
  if (props.bordered) classes.push('table_bordered');
  if (props.striped) classes.push('table_striped');
  if (props.compact) classes.push('table_compact');
  if (props.hover) classes.push('table_hover');
  if (hasColumns.value) classes.push('table_columns');
  if (props.stickyTop) classes.push('table_sticky-top');
  if (props.stickyLeft) classes.push('table_sticky-left');
  if (stickyColsClass.value) classes.push(stickyColsClass.value);
  return classes;
});

const stickyOffsetStyle = computed(() => {
  const style = {};
  Object.entries(props.stickyLeftOffsets || {}).forEach(([key, value]) => {
    if (value == null || value === '') return;
    style[`--table-sticky-left-${key}`] = value;
  });
  return style;
});

const tableStyle = computed(() => ({
  ...columnRootVars(props.columns),
  ...stickyOffsetStyle.value,
}));

const wrapClass = computed(() => {
  const classes = ['table_wrap'];
  if (props.scroll) classes.push('table_wrap-scroll');
  if (attrs.class) classes.push(attrs.class);
  return classes;
});

const wrapStyle = computed(() => {
  const style = {};
  if (props.scrollMaxHeight != null && props.scrollMaxHeight !== '') {
    style['--table-scroll-max-height'] = props.scrollMaxHeight;
  }
  const fromAttrs = attrs.style;
  if (fromAttrs && typeof fromAttrs === 'object' && !Array.isArray(fromAttrs)) {
    Object.assign(style, fromAttrs);
  }
  return style;
});

const colStyle = (column) => columnColStyle(column);
</script>

<template>
  <div v-if="wrap" ref="rootRef" :class="wrapClass" :style="wrapStyle">
    <table :class="tableClass" :style="tableStyle">
      <colgroup v-if="hasColumns">
        <col
          v-for="(column, index) in columns"
          :key="index"
          :style="colStyle(column)"
        />
      </colgroup>
      <slot />
    </table>
  </div>
  <table
    v-else
    ref="rootRef"
    :class="[...tableClass, attrs.class]"
    :style="tableStyle"
  >
    <colgroup v-if="hasColumns">
      <col
        v-for="(column, index) in columns"
        :key="index"
        :style="colStyle(column)"
      />
    </colgroup>
    <slot />
  </table>
</template>
