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

const tableClass = computed(() => {
  const classes = ['table'];
  if (props.bordered) classes.push('table_bordered');
  if (props.striped) classes.push('table_striped');
  if (props.compact) classes.push('table_compact');
  if (props.hover) classes.push('table_hover');
  if (hasColumns.value) classes.push('table_columns');
  return classes;
});

const tableStyle = computed(() => columnRootVars(props.columns));

const wrapClass = computed(() => {
  const classes = ['table_wrap'];
  if (attrs.class) classes.push(attrs.class);
  return classes;
});

const colStyle = (column) => columnColStyle(column);
</script>

<template>
  <div v-if="wrap" ref="rootRef" :class="wrapClass">
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
