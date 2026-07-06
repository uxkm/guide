<script setup>
import { computed } from 'vue';
import { resolveApiColumns } from '@/doc/data/api-table-columns';
import {
  columnCellClass,
  columnCellStyle,
  columnColStyle,
} from '@/utils/table-column-sizing';

const props = defineProps({
  columns: {
    type: Array,
    required: true,
  },
  rows: {
    type: Array,
    required: true,
  },
  codeColumn: {
    type: String,
    default: 'name',
  },
});

const resolvedColumns = computed(() => resolveApiColumns(props.columns));

const cellStyle = (column) => columnCellStyle(column);
const colStyle = (column) => columnColStyle(column);
const cellClass = (column) => {
  const classes = [`api_col-${column.key}`, ...columnCellClass(column, 'api')];
  return classes;
};
</script>

<template>
  <div class="table_wrap table_wrap-api">
    <table class="table table_bordered table_api table_columns">
      <colgroup>
        <col
          v-for="column in resolvedColumns"
          :key="`col-${column.key}`"
          :style="colStyle(column)"
        />
      </colgroup>
      <thead>
        <tr>
          <th
            v-for="column in resolvedColumns"
            :key="column.key"
            scope="col"
            :class="cellClass(column)"
            :style="cellStyle(column)"
          >
            {{ column.label }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in rows" :key="index">
          <td
            v-for="column in resolvedColumns"
            :key="column.key"
            :class="cellClass(column)"
            :style="cellStyle(column)"
          >
            <code v-if="column.key === codeColumn" class="typo_code">{{ row[column.key] }}</code>
            <template v-else>{{ row[column.key] }}</template>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
